// Evaluator with cooperative concurrency support
type ParamInfo = { name: string; mutable: boolean };
export type Instruction =
  | { tag: 'LDC'; val: any }
  | { tag: 'LD'; sym: string }
  | { tag: 'ASSIGN'; sym: string }
  | { tag: 'BINOP'; sym: string }
  | { tag: 'UNARY'; sym: string }
  | { tag: 'LDF'; prms: ParamInfo[]; addr: number }
  | { tag: 'CALL'; arity: number }
  | { tag: 'TAIL_CALL'; arity: number }
  | { tag: 'RESET' }
  | { tag: 'ENTER_SCOPE'; syms: string[] }
  | { tag: 'EXIT_SCOPE' }
  | { tag: 'GOTO'; addr: number }
  | { tag: 'JOF'; addr: number }
  | { tag: 'POP' }
  | { tag: 'DONE' }
  | { tag: 'SPAWN' }
  | { tag: 'YIELD' }
  | { tag: 'JOIN' }
  | { tag: 'PRINT'}
  | { tag: 'GETFIELD' } // New instruction for field access
  | { tag: 'REF'; sym: string } 
  | { tag: 'REFMUT'; sym: string } 
  | { tag: 'DEREF' } 
  | { tag: 'DECL', sym: string, mutable: boolean }
  | { tag: 'DEREF_ASSIGN' } 
  | { tag: 'SETFIELD' }; // New instruction for field assignment

interface ThreadContext {
  pc: number; // program counter
  stack: any[]; // operand stack
  env: Record<string, any>[]; // environment
  rts: { addr: number; env: Record<string, any>[] }[]; // runtime stack
  timeBudget: number;
}

export class ConcurrentEvaluator {
  private readonly TIME_SLICE = 5;
  private threadQueue: ThreadContext[] = [];
  private nextThreadId = 0;
  private activeThread: ThreadContext | null = null;

  constructor(private instrs: Instruction[]) {}

  run(): any {
    this.threadQueue.push(this.createThread());

    while (this.threadQueue.length > 0) {
      this.activeThread = this.threadQueue.shift()!;
      this.activeThread.timeBudget = this.TIME_SLICE;

      while (this.activeThread.timeBudget > 0 && this.activeThread.pc < this.instrs.length) {
        const instr = this.instrs[this.activeThread.pc];

        switch (instr.tag) {
          case 'LDC':
            this.activeThread.stack.push(instr.val);
            console.log("LDC: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
            this.advance();
            break;

          case 'LD': {
            const val = this.lookup(instr.sym);
            if (typeof val === 'object' && val.tag === 'CLOSURE') {
              this.activeThread.stack.push(val);
            } else {
            this.activeThread.stack.push(val.value);
            }
            this.advance();
            console.log("LD: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
            break;
          }

          case 'REF': {
            const ref = { tag: 'ref', sym: instr.sym, mut: false };
            this.activeThread.stack.push(ref);
            this.advance();
            console.log("REF: operand stack:", this.activeThread.stack);
            break;
          }
        
          case 'REFMUT': {
              const ref = { tag: 'ref', sym: instr.sym, mut: true };
              this.activeThread.stack.push(ref);
              this.advance();
              console.log("REFMUT: operand stack:", this.activeThread.stack);
              break;
          }

          case 'DEREF': {
            // Assuming the operand stack contains a reference (e.g., pointer or reference type)
            const reference = this.activeThread.stack.pop();
            if (typeof reference !== 'object' || reference.tag !== 'ref') {
              throw new Error(`Cannot dereference non-reference: ${JSON.stringify(reference)}`);
            }
    
            // Dereference the reference to get the value it points to
            const dereferencedValue = this.lookup(reference.sym); // lookup should get the value from the reference
            this.activeThread.stack.push(dereferencedValue);
    
            console.log("DEREF: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
            this.advance();
            break;
          }

          case 'DEREF_ASSIGN': {
            const reference = this.activeThread.stack.pop(); // the reference (*r)
            const value = this.activeThread.stack.pop();     // the value (e.g. 9)
        
            if (typeof reference !== 'object' || reference.tag !== 'ref') {
                throw new Error(`Cannot assign to non-reference: ${JSON.stringify(reference)}`);
            }
        
            if (!reference.mut) {
                throw new Error(`Cannot assign to immutable reference: ${reference.sym}`);
            }
        
            this.assign(reference.sym, value);
            this.advance();
            break;
        }
        
          case 'DECL': {
            const frame = this.activeThread!.env[this.activeThread!.env.length - 1];
            frame[instr.sym] = { value: undefined, mutable: instr.mutable };
            console.log("DECL: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
            this.advance();
            break;
          }
          case 'ASSIGN': {
            const val = this.activeThread.stack[this.activeThread.stack.length - 1];
            this.assign(instr.sym, val);
            this.advance();
            console.log("ASSIGN: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
            break;
          }

          case 'PRINT': {
            const val = this.activeThread.stack.pop();
            if (val === undefined) {
                console.log('undefined');
            } else if (val === null) {
                console.log('null');
            } else if (typeof val === 'object') {
                console.log(JSON.stringify(val, null, 2));
            } else {
                console.log(val);
            }
            this.advance();
            break;
        }
        
          case 'BINOP': {
            const right = this.activeThread.stack.pop();
            const left = this.activeThread.stack.pop();
            this.activeThread.stack.push(this.applyBinOp(instr.sym, left, right));
            this.advance();
            break;
          }

          case 'UNARY': {
            const value = this.activeThread.stack.pop();
            this.activeThread.stack.push(this.applyUnaryOp(instr.sym, value));
            this.advance();
            break;
          }
          

          case 'LDF': {
            const closure = {
              tag: 'CLOSURE',
              prms: instr.prms,
              addr: instr.addr,
              env: [...this.activeThread.env]
            };
            this.activeThread.stack.push(closure);
            this.advance();
            console.log("LDF: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
          
            break;
          }

          case 'CALL': {
            const args = instr.arity > 0
                ? this.activeThread.stack.splice(-instr.arity)
                : [];
            const func = this.activeThread.stack.pop();

            if (func.tag !== 'CLOSURE') throw new Error('Cannot call non-function');
            this.activeThread.rts.push({ addr: this.activeThread.pc + 1, env: this.activeThread.env });
            this.activeThread.env = this.extend(func.prms, args, func.env);
            this.activeThread.pc = func.addr;
            console.log("CALL: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
            break;
          }

          case 'TAIL_CALL': {
            const args = this.activeThread.stack.splice(-instr.arity);
            const func = this.activeThread.stack.pop();
            if (func.tag !== 'CLOSURE') throw new Error('Cannot tail-call non-function');
            this.activeThread.env = this.extend(func.prms, args, func.env);
            this.activeThread.pc = func.addr;
            break;
          }

          case 'RESET': {
            const frame = this.activeThread.rts.pop();
            if (!frame) throw new Error('Call stack underflow');
            this.activeThread.pc = frame.addr;
            this.activeThread.env = frame.env;
            break;
          }

          case 'ENTER_SCOPE': {
            const frame: Record<string, any> = {};
             
            // for (const sym of instr.syms) frame[sym] = { value: undefined, mutable: false };
            
            this.activeThread.env.unshift(frame);
            this.advance();
            console.log("ENTER_SCOPE: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
            
            break;
          }

          case 'EXIT_SCOPE':
            this.activeThread.env.shift();
            this.advance();
            console.log("EXIT_SCOPE: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
            
            break;

          case 'GOTO':
            this.activeThread.pc = instr.addr;
            break;

          case 'JOF': {
            const cond = this.activeThread.stack.pop();
            this.activeThread.pc = cond ? this.activeThread.pc + 1 : instr.addr;
            break;
          }

          case 'POP':
            this.activeThread.stack.pop();
            this.advance();
            console.log("POP: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, this.activeThread!.rts, "env:", this.activeThread!.env);
            break;

          case 'DONE':
            return this.activeThread.stack.pop();

          case 'SPAWN': {
            const func = this.activeThread.stack.pop();
            if (func.tag !== 'CLOSURE') throw new Error('spawn expects a function');
            const childThread = this.createThread();
            childThread.pc = func.addr;
            childThread.env = [...func.env];
            this.threadQueue.push(childThread);
            this.advance();
            break;
          }

          case 'YIELD': {
            this.threadQueue.push(this.activeThread);
            this.activeThread = null;
            break;
          }

          case 'JOIN':
            this.advance();
            break;

          case 'GETFIELD': {
            const field = this.activeThread.stack.pop();
            const obj = this.activeThread.stack.pop();
            if (typeof obj !== 'object') throw new Error('Cannot access field of non-object');
            this.activeThread.stack.push(obj[field]);
            this.advance();
            break;
          }

          case 'SETFIELD': {
            const value = this.activeThread.stack.pop();
            const key = this.activeThread.stack.pop();
            const obj = this.activeThread.stack.pop();
          
            if (typeof obj !== 'object' || obj === null) {
              throw new Error('SETFIELD expects a struct object');
            }
          
            obj[key] = value;
            this.activeThread.stack.push(obj);
            console.log("SETFIELD: operand stack:", this.activeThread!.stack, "runtime stack:", this.activeThread!.rts, "env:", this.activeThread!.env);
            
            this.advance();
            break;
          }
          
            
        }
      }

      if (this.activeThread && this.activeThread.pc < this.instrs.length) {
        this.threadQueue.push(this.activeThread);
      }
    }
  }

  private advance() {
    this.activeThread!.pc++;
    this.activeThread!.timeBudget--;
    
  }

  private lookup(sym: string): any {
    for (const frame of this.activeThread!.env) {
      if (sym in frame) return frame[sym];
    }
    throw new Error(`Unbound variable: ${sym}`);
  }

  private assign(sym: string, val: any): void {
    for (const frame of this.activeThread!.env) {
      if (sym in frame) {
        // If it's a closure, assign directly
        if (val && typeof val === 'object' && 'tag' in val && val.tag === 'CLOSURE') {
          frame[sym] = val;
          return;
        }
  
        // Check mutability
        if ("mutable" in frame[sym]) {
          if (!frame[sym].mutable && frame[sym].value !== undefined) {
            throw new Error(`Cannot assign to immutable variable '${sym}'`);
          }
          frame[sym].value = val;
          return;
        }
  
        // fallback: treat as a normal assignable
        frame[sym] = { value: val, mutable: true };
        return;
      }
    }
  
    // If symbol not found in any frame, define in current frame
    const topFrame = this.activeThread!.env[0];
    if (val && typeof val === 'object' && 'tag' in val && val.tag === 'CLOSURE') {
      topFrame[sym] = val;
    } else {
      topFrame[sym] = { value: val, mutable: true };
    }
  }
  
  
  

  private extend(prms: ParamInfo[], args: any[], env: Record<string, any>[]): Record<string, any>[] {
    console.log("Extending with params:", prms, "and args:", args);
    if (prms.length !== args.length) throw new Error("Arity mismatch");
    const frame: Record<string, any> = {};
    for (let i = 0; i < prms.length; i++) frame[prms[i].name] = {value: args[i], mutable: prms[i].mutable};
    return [frame, ...env];
  }

  private applyBinOp(op: string, left: any, right: any): any {
    switch (op) {
      case '+': return left + right;
      case '-': return left - right;
      case '*': return left * right;
      case '/': return left / right;
      case '==': return left === right;
      case '!=': return left !== right;
      case '<': return left < right;
      case '<=': return left <= right;
      case '>': return left > right;
      case '>=': return left >= right;
      case '&&': return left && right;
      case '||': return left || right;
      
      default:
        throw new Error(`Unknown binary operator: ${op}`);
    }
  }

  private applyUnaryOp(op: string, value: any): any {
    switch (op) {
      case '-unary':
        if (typeof value !== 'number') throw new Error(`Unary '-' requires a number`);
        return -value;
  
      case '!':
        return !value;
  
      default:
        throw new Error(`Unknown unary operator: ${op}`);
    }
  }
  

  private createThread(): ThreadContext {
    return {
      pc: 0,
      stack: [],
      env: [{}],
      rts: [],
      timeBudget: this.TIME_SLICE
    };
  }
}