export type Instruction =
  | { tag: "LDC"; val: number }       // load constant
  | { tag: "BINOP"; sym: string }     // binary operation
  | { tag: "DONE" };                  // program end

/**
 * A minimal evaluator (virtual machine) that executes a list of instructions.
 */
export class Evaluator {
  private pc: number = 0;             // program counter
  private stack: number[] = [];       // operand stack

  /**
   * Run the compiled instructions and return the final result.
   * @param instructions The list of instructions to execute
   */
  run(instructions: Instruction[]): number {
    this.pc = 0;
    this.stack = [];

    while (this.pc < instructions.length) {
      const instr = instructions[this.pc];

      switch (instr.tag) {
        case "LDC":
          // Push a constant value onto the operand stack
          this.stack.push(instr.val);
          this.pc++;
          break;

        case "BINOP": {
          // Pop two operands from the stack
          const right = this.stack.pop();
          const left = this.stack.pop();
          if (right === undefined || left === undefined) {
            throw new Error("Operand stack underflow");
          }

          // Apply the operator and push the result
          const result = this.applyBinOp(instr.sym, left, right);
          this.stack.push(result);
          this.pc++;
          break;
        }

        case "DONE":
          // Return the final result from the top of the stack
          const final = this.stack.pop();
          if (final === undefined) {
            throw new Error("No result on the stack");
          }
          return final;

        default:
          throw new Error(`Unknown instruction: ${JSON.stringify(instr)}`);
      }
    }

    throw new Error("Program did not terminate with DONE");
  }

  /**
   * Apply a binary operation to two operands.
   * @param op The operator symbol (e.g., '+', '-', '*', '/')
   * @param left The left operand
   * @param right The right operand
   */
  private applyBinOp(op: string, left: number, right: number): number {
    switch (op) {
      case "+": return left + right;
      case "-": return left - right;
      case "*": return left * right;
      case "/": return left / right;
      case "==": return left === right ? 1 : 0;
      case "!=": return left !== right ? 1 : 0;
      case "<": return left < right ? 1 : 0;
      case "<=": return left <= right ? 1 : 0;
      case ">": return left > right ? 1 : 0;
      case ">=": return left >= right ? 1 : 0;
      default:
        throw new Error(`Unsupported binary operator: ${op}`);
    }
  }
}
