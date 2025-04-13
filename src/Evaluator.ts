// Evaluator with cooperative concurrency support

export type Instruction =
  | { tag: 'LDC'; val: any }
  | { tag: 'LD'; sym: string }
  | { tag: 'ASSIGN'; sym: string }
  | { tag: 'BINOP'; sym: string }
  | { tag: 'LDF'; prms: string[]; addr: number }
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
  | { tag: 'JOIN' };

interface ThreadContext {
  pc: number;
  stack: any[];
  env: Record<string, any>[];
  rts: { addr: number; env: Record<string, any>[] }[];
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
            this.advance();
            break;

          case 'LD': {
            const val = this.lookup(instr.sym);
            this.activeThread.stack.push(val);
            this.advance();
            break;
          }

          case 'ASSIGN': {
            const val = this.activeThread.stack[this.activeThread.stack.length - 1];
            this.assign(instr.sym, val);
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

          case 'LDF': {
            const closure = {
              tag: 'CLOSURE',
              prms: instr.prms,
              addr: instr.addr,
              env: [...this.activeThread.env]
            };
            this.activeThread.stack.push(closure);
            this.advance();
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
            for (const sym of instr.syms) frame[sym] = undefined;
            this.activeThread.env.unshift(frame);
            this.advance();
            break;
          }

          case 'EXIT_SCOPE':
            this.activeThread.env.shift();
            this.advance();
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
        frame[sym] = val;
        return;
      }
    }
    this.activeThread!.env[0][sym] = val;
  }

  private extend(prms: string[], args: any[], env: Record<string, any>[]): Record<string, any>[] {
    console.log("Extending with params:", prms, "and args:", args);
    if (prms.length !== args.length) throw new Error("Arity mismatch");
    const frame: Record<string, any> = {};
    for (let i = 0; i < prms.length; i++) frame[prms[i]] = args[i];
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
      default:
        throw new Error(`Unknown binary operator: ${op}`);
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