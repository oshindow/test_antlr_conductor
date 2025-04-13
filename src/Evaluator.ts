// A minimal stack-based evaluator for Rust-like bytecode

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
    | { tag: 'DONE' };

type Closure = {
    tag: 'CLOSURE';
    prms: string[];
    addr: number;
    env: Frame[];
};

type Frame = Record<string, any>;

type CallFrame = {
    addr: number;
    env: Frame[];
};

export class Evaluator {
    private pc = 0;
    private stack: any[] = [];
    private env: Frame[] = [{}];
    private rts: CallFrame[] = [];

    run(instrs: Instruction[]): any {
        this.pc = 0;
        this.stack = [];
        this.env = [{}];
        this.rts = [];

        while (this.pc < instrs.length) {
            const instr = instrs[this.pc];

            switch (instr.tag) {
                case 'LDC':
                    this.stack.push(instr.val);
                    this.pc++;
                    break;

                case 'LD': {
                    const val = this.lookup(instr.sym);
                    this.stack.push(val);
                    this.pc++;
                    break;
                }

                case 'ASSIGN': {
                    const val = this.stack[this.stack.length - 1];
                    this.assign(instr.sym, val);
                    this.pc++;
                    break;
                }

                case 'BINOP': {
                    const right = this.stack.pop();
                    const left = this.stack.pop();
                    this.stack.push(this.applyBinOp(instr.sym, left, right));
                    this.pc++;
                    break;
                }

                case 'LDF': {
                    const closure: Closure = {
                        tag: 'CLOSURE',
                        prms: instr.prms,
                        addr: instr.addr,
                        env: [...this.env]
                    };
                    this.stack.push(closure);
                    this.pc++;
                    break;
                }

                case 'CALL': {
                    const args = this.stack.splice(-instr.arity);
                    const func = this.stack.pop();

                    if (func.tag === 'CLOSURE') {
                        this.rts.push({ addr: this.pc + 1, env: this.env });
                        this.env = this.extend(func.prms, args, func.env);
                        this.pc = func.addr;
                    } else {
                        throw new Error("Cannot call non-function value");
                    }
                    break;
                }

                case 'TAIL_CALL': {
                    const args = this.stack.splice(-instr.arity);
                    const func = this.stack.pop();

                    if (func.tag === 'CLOSURE') {
                        this.env = this.extend(func.prms, args, func.env);
                        this.pc = func.addr;
                    } else {
                        throw new Error("Cannot tail-call non-function value");
                    }
                    break;
                }

                case 'RESET': {
                    const frame = this.rts.pop();
                    if (!frame) throw new Error("Call stack underflow");
                    this.pc = frame.addr;
                    this.env = frame.env;
                    break;
                }

                case 'ENTER_SCOPE': {
                    const frame: Frame = {};
                    for (const sym of instr.syms) frame[sym] = undefined;
                    this.env.unshift(frame);
                    this.pc++;
                    break;
                }

                case 'EXIT_SCOPE': {
                    this.env.shift();
                    this.pc++;
                    break;
                }

                case 'GOTO':
                    this.pc = instr.addr;
                    break;

                case 'JOF': {
                    const cond = this.stack.pop();
                    this.pc = cond ? this.pc + 1 : instr.addr;
                    break;
                }

                case 'POP':
                    this.stack.pop();
                    this.pc++;
                    break;

                case 'DONE':
                    return this.stack.pop();

                default:
                    throw new Error(`Unknown instruction: ${JSON.stringify(instr)}`);
            }
        }

        throw new Error("Program did not terminate with DONE");
    }

    private lookup(sym: string): any {
        for (const frame of this.env) {
            if (sym in frame) return frame[sym];
        }
        throw new Error(`Unbound variable: ${sym}`);
    }

    private assign(sym: string, val: any): void {
        for (const frame of this.env) {
            if (sym in frame) {
                frame[sym] = val;
                return;
            }
        }
        this.env[0][sym] = val; // assign to top frame if not declared
    }

    private extend(prms: string[], args: any[], env: Frame[]): Frame[] {
        if (prms.length !== args.length) {
            throw new Error(`Arity mismatch: expected ${prms.length}, got ${args.length}`);
        }
        const frame: Frame = {};
        for (let i = 0; i < prms.length; i++) {
            frame[prms[i]] = args[i];
        }
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
}