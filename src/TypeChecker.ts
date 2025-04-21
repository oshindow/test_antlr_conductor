// Type definitions with extensions for ownership
export type BaseType = "number" | "bool" | "undefined" | "string" | "void" | "i32" | "i64" | "f32" | "f64" | "char" | "u8" | "u16" | "u32" | "u64";
export type RefType = { kind: "ref", mutable: boolean, base: Type, lifetime: string };
export type FnType = { kind: "fn", params: Type[], return: Type };
type ArrayType = { kind: "array", element: Type };
export type Type = BaseType | RefType | FnType | [Type[], Type] | ArrayType;

export type TypeEnv = Record<string, TypeState>[];

// Ownership state for a variable
export type TypeState = {
  type: Type;
  ownership: OwnershipState;
};

export type OwnershipState = 
  | { kind: "owned" }                                      // Fully owned value
  | { kind: "borrowed", borrowers: Set<string> }          // Value with shared borrows
  | { kind: "mutably_borrowed", borrower: string }        // Value with exclusive mutable borrow
  | { kind: "moved" };                                    // Value that's been moved

// Built-in type signatures for operators
export const builtInTypes: Record<string, FnType> = {
  "+": { kind: "fn", params: ["number", "number"], return: "number" },
  "-": { kind: "fn", params: ["number", "number"], return: "number" },
  "*": { kind: "fn", params: ["number", "number"], return: "number" },
  "/": { kind: "fn", params: ["number", "number"], return: "number" },
  "%": { kind: "fn", params: ["number", "number"], return: "number" },

  "==": { kind: "fn", params: ["number", "number"], return: "bool" },
  "!=": { kind: "fn", params: ["number", "number"], return: "bool" },
  "<": { kind: "fn", params: ["number", "number"], return: "bool" },
  ">": { kind: "fn", params: ["number", "number"], return: "bool" },
  "<=": { kind: "fn", params: ["number", "number"], return: "bool" },
  ">=": { kind: "fn", params: ["number", "number"], return: "bool" },

  "&&": { kind: "fn", params: ["bool", "bool"], return: "bool" },
  "||": { kind: "fn", params: ["bool", "bool"], return: "bool" },
  "!": { kind: "fn", params: ["bool"], return: "bool" },
  "-unary": { kind: "fn", params: ["number"], return: "number" },
};

// Lifetime counter for generating unique lifetime names
let lifetimeCounter = 0;

// Helper functions for type checking
export function equalTypes(ts1: Type[], ts2: Type[]): boolean {
  return JSON.stringify(ts1) === JSON.stringify(ts2);
}

export function isBaseType(type: Type): type is BaseType {
  return typeof type === "string";
}

export function isRefType(type: Type): type is RefType {
  return typeof type === "object" && type !== null && "kind" in type && type.kind === "ref";
}

export function isFnType(type: Type): type is FnType {
  return typeof type === "object" && type !== null && "kind" in type && type.kind === "fn";
}

export function isArrayType(t: Type): t is { kind: "array", element: Type } {
    return typeof t === "object" && t !== null && "kind" in t && t.kind === "array";
} 

export function freshLifetime(): string {
  return `'t${lifetimeCounter++}`;
}

export function extendTypeEnv(vars: string[], types: Type[], env: TypeEnv): TypeEnv {
  if (vars.length !== types.length) {
    throw new Error(
      vars.length > types.length
        ? "too few parameters in function declaration"
        : "too many parameters in function declaration"
    );
  }

  const frame: Record<string, TypeState> = {};
  for (let i = 0; i < vars.length; i++) {
    frame[vars[i]] = { 
      type: types[i],
      ownership: { kind: "owned" } 
    };
  }
  return [frame, ...env];
}

export class TypeChecker {
  // Stack to track scope entry/exit for lifetime management
  private scopeStack: Set<string>[] = [];
  
  // Current set of active lifetimes
  private activeLifetimes: Set<string> = new Set();

  // Enter a new scope
  enterScope(): void {
    this.scopeStack.push(new Set<string>());
  }

  // Exit a scope and invalidate any lifetimes associated with it
  exitScope(): void {
    const scope = this.scopeStack.pop();
    if (!scope) return;
    
    // Remove lifetimes that go out of scope
    for (const lifetime of scope) {
      this.activeLifetimes.delete(lifetime);
    }
  }

  // Create a new lifetime and associate it with current scope
  createLifetime(): string {
    const lifetime = freshLifetime();
    this.activeLifetimes.add(lifetime);
    
    // Associate with current scope if one exists
    if (this.scopeStack.length > 0) {
      this.scopeStack[this.scopeStack.length - 1].add(lifetime);
    }
    
    return lifetime;
  }

  // Check if a lifetime is still valid
  isLifetimeValid(lifetime: string): boolean {
    return this.activeLifetimes.has(lifetime);
  }

  lookupTypeState(env: TypeEnv, sym: string): TypeState {
    for (const frame of env) {
      if (sym in frame) return frame[sym];
    }
    throw new Error(`Unbound variable: ${sym}`);
  }
  
  lookupType(env: TypeEnv, sym: string): Type {
    const state = this.lookupTypeState(env, sym);
    
    // Check if the value has been moved
    if (state.ownership.kind === "moved") {
      throw new Error(`Use of moved value: ${sym}`);
    }
    
    return state.type;
  }
  
  assignType(env: TypeEnv, sym: string, type: Type): void {
    env[0][sym] = { 
      type, 
      ownership: { kind: "owned" } 
    };
  }

  // Check if a value can be read (not mutably borrowed by someone else)
  canRead(env: TypeEnv, sym: string): boolean {
    const state = this.lookupTypeState(env, sym);
    return state.ownership.kind !== "moved" && 
           state.ownership.kind !== "mutably_borrowed";
  }

  // Check if a value can be written to (owned or mutably borrowed by us)
  canWrite(env: TypeEnv, sym: string, borrower: string): boolean {
    const state = this.lookupTypeState(env, sym);
    return state.ownership.kind === "owned" || 
          (state.ownership.kind === "mutably_borrowed" && 
           state.ownership.borrower === borrower);
  }

  // Create an immutable borrow
  borrowImmut(env: TypeEnv, sym: string, borrower: string): void {
    for (const frame of env) {
      if (sym in frame) {
        const state = frame[sym];
        
        if (state.ownership.kind === "moved") {
          throw new Error(`Cannot borrow moved value: ${sym}`);
        }
        
        if (state.ownership.kind === "mutably_borrowed") {
          throw new Error(`Cannot immutably borrow value that is already mutably borrowed: ${sym}`);
        }
        
        // Set up borrowing state
        if (state.ownership.kind === "owned") {
          state.ownership = { kind: "borrowed", borrowers: new Set([borrower]) };
        } else if (state.ownership.kind === "borrowed") {
          state.ownership.borrowers.add(borrower);
        }
        
        return;
      }
    }
    throw new Error(`Unbound variable for borrowing: ${sym}`);
  }

  // Create a mutable borrow
  borrowMut(env: TypeEnv, sym: string, borrower: string): void {
    for (const frame of env) {
      if (sym in frame) {
        const state = frame[sym];
        
        if (state.ownership.kind === "moved") {
          throw new Error(`Cannot mutably borrow moved value: ${sym}`);
        }
        
        if (state.ownership.kind === "borrowed") {
          throw new Error(`Cannot mutably borrow value that has shared borrows: ${sym}`);
        }
        
        if (state.ownership.kind === "mutably_borrowed") {
          throw new Error(`Cannot mutably borrow value that is already mutably borrowed: ${sym}`);
        }
        
        // Set up mutable borrowing state
        state.ownership = { kind: "mutably_borrowed", borrower };
        return;
      }
    }
    throw new Error(`Unbound variable for mutable borrowing: ${sym}`);
  }

  // Release borrows by a specific borrower
  releaseBorrows(env: TypeEnv, borrower: string): void {
    for (const frame of env) {
      for (const sym in frame) {
        const state = frame[sym];
        
        if (state.ownership.kind === "borrowed") {
          state.ownership.borrowers.delete(borrower);
          if (state.ownership.borrowers.size === 0) {
            state.ownership = { kind: "owned" };
          }
        } else if (state.ownership.kind === "mutably_borrowed" && 
                  state.ownership.borrower === borrower) {
          state.ownership = { kind: "owned" };
        }
      }
    }
  }

  // Mark a value as moved
  moveValue(env: TypeEnv, sym: string): void {
    for (const frame of env) {
      if (sym in frame) {
        const state = frame[sym];
        
        if (state.ownership.kind === "moved") {
          throw new Error(`Value already moved: ${sym}`);
        }
        
        if (state.ownership.kind === "borrowed") {
          throw new Error(`Cannot move value that has shared borrows: ${sym}`);
        }
        
        if (state.ownership.kind === "mutably_borrowed") {
          throw new Error(`Cannot move value that is mutably borrowed: ${sym}`);
        }
        
        state.ownership = { kind: "moved" };
        return;
      }
    }
    throw new Error(`Unbound variable for moving: ${sym}`);
  }

  // Get lifetime of reference type
  getRefLifetime(type: RefType): string {
    return type.lifetime;
  }

  // Check if type is a reference type with a specific mutability
  isRefOfMutability(type: Type, mutable: boolean): boolean {
    return isRefType(type) && type.mutable === mutable;
  }

  // Create a reference type with proper lifetime
  createRefType(baseType: Type, mutable: boolean): RefType {
    const lifetime = this.createLifetime();
    return {
      kind: "ref",
      mutable,
      base: baseType,
      lifetime
    };
  }

  inferType(expr: any, env: TypeEnv): Type {
    // Handle literals
    if (expr.constructor.name === "SimpleContext") {
      return "number";
    }
  
    if (expr.constructor.name === "BoolLiteralContext") {
      return "bool";
    }

    if (expr.constructor.name === "StringLiteralContext") {
      return "string";
    }
  
    // Handle variable references
    if (expr.constructor.name === "VariableReferenceContext") {
      const name = expr.identifier().IDENTIFIER().getText();
      return this.lookupType(env, name);
    }
    
    // Handle references (&x or &mut x)
    if (expr.constructor.name === "RefExprContext" || 
        expr.constructor.name === "RefMutExprContext") {
      const target = expr.expression();
      const isMut = expr.constructor.name === "RefMutExprContext";
      
      if (target.constructor.name === "VariableReferenceContext") {
        const name = target.identifier().IDENTIFIER().getText();
        const targetType = this.lookupType(env, name);
        
        // Generate a unique borrower ID for this reference
        const borrowerId = `ref_${freshLifetime()}`;
        
        // Apply borrowing rules
        if (isMut) {
          this.borrowMut(env, name, borrowerId);
        } else {
          this.borrowImmut(env, name, borrowerId);
        }
        
        return this.createRefType(targetType, isMut);
      } else {
        throw new Error("Can only take references to variables");
      }
    }
    
    // Handle dereferencing (*x)
    if (expr.constructor.name === "ExprContext") {
      const operand = expr.expression();
      const operandType = this.inferType(operand, env);
      
      if (!isRefType(operandType)) {
        throw new Error("Cannot dereference a non-reference type");
      }
      
      // Check if the reference is valid
      if (!this.isLifetimeValid(operandType.lifetime)) {
        throw new Error("Attempt to dereference an invalid reference");
      }
      
      return operandType.base;
    }
    
    // Handle binary operators
    const bin = (opText: string, left: any, right: any): Type => {
      const op = builtInTypes[opText];
      if (!op) throw new Error(`Unknown operator ${opText}`);
      
      const leftType = this.inferType(left, env);
      const rightType = this.inferType(right, env);
      
      if (leftType !== op.params[0] || rightType !== op.params[1]) {
        throw new Error(`Operator ${opText} expects ${op.params.join(", ")}, got ${leftType}, ${rightType}`);
      }
      
      return op.return;
    };
  
    // Handle unary operators
    const un = (opText: string, operand: any): Type => {
      const op = builtInTypes[opText];
      if (!op) throw new Error(`Unknown operator ${opText}`);
      
      const argType = this.inferType(operand, env);
      if (argType !== op.params[0]) {
        throw new Error(`Operator ${opText} expects ${op.params}, got ${argType}`);
      }
      
      return op.return;
    };
  
    // Binary operators
    if (expr.constructor.name === "AddContext") return bin("+", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "SubtractContext") return bin("-", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "MultiplyContext") return bin("*", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "DivideContext") return bin("/", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "EqualContext") return bin("==", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "NotEqualContext") return bin("!=", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "LessThanContext") return bin("<", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "GreaterThanContext") return bin(">", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "LessEqualContext") return bin("<=", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "GreaterEqualContext") return bin(">=", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "LogicalAndContext") return bin("&&", expr.expression(0), expr.expression(1));
    if (expr.constructor.name === "LogicalOrContext") return bin("||", expr.expression(0), expr.expression(1));
    
    // Unary operators
    if (expr.constructor.name === "LogicalNotContext") return un("!", expr.expression());
    if (expr.constructor.name === "UnaryMinusContext") return un("-unary", expr.expression());

    // Handle if-else expressions
    if (expr.constructor.name === "IfExprContext") {
        const condType = this.inferType(expr.expression(0), env);
        if (condType !== "bool") {
            throw new Error(`Expected predicate type: bool, actual predicate type: ${condType}`);
        }
        
        // Create new scope for each branch
        this.enterScope();
        const thenType = this.inferType(expr.expression(1), env);
        this.exitScope();
        
        let elseType: Type = "undefined";
        if (expr.expression().length > 2) {
            this.enterScope();
            elseType = this.inferType(expr.expression(2), env);
            this.exitScope();
        }
        console.log("thenType:", thenType);
        console.log("elseType:", elseType);
        if (JSON.stringify(thenType) !== JSON.stringify(elseType)) {
            throw new Error(`Types of branches not matching; consequent type: ${thenType}, alternative type: ${elseType}`);
        }
        
        return thenType;
    }

    if (expr.constructor.name === "WhileLoopContext") {
        const condType = this.inferType(expr.expression(), env);
        if (condType !== "bool") {
          throw new Error(`While loop condition must be boolean, got ${condType}`);
        }
      
        this.enterScope();
        this.inferType(expr.block(), env); // Evaluate block for side effects and type safety
        this.exitScope();
      
        return "undefined"; // `while` loops do not return a value
      }

    if (expr.constructor.name === "For_stmtContext") {
        const iterType = this.inferType(expr.expression(), env);
        if (!isArrayType(iterType)) {
          throw new Error(`For loop requires an array, got ${iterType}`);
        }
        this.enterScope();
        this.inferType(expr.block(), env); // Evaluate block for side effects and type safety
        this.exitScope();
        return "undefined"; // `for` loops do not return a value
    }

    // Function calls
    if (expr.constructor.name === "FunctionCallContext") {
      const name = expr.identifier().IDENTIFIER().getText();
      const fnType = builtInTypes[name] || this.lookupType(env, name);
      console.log("fnType:", fnType);
      
      if (!isFnType(fnType)) {
        throw new Error(`${name} is not callable`);
      }
      
      const args = expr.argument_list()?.expression() || [];
      const argTypes: Type[] = [];
      
      // Process each argument and handle moving/borrowing
      for (let i = 0; i < args.length; i++) {
        const argType = this.inferType(args[i], env);
        argTypes.push(argType);
        
        // If passing a variable directly, check for move semantics
        if (args[i].constructor.name === "VariableReferenceContext") {
          const argName = args[i].identifier().IDENTIFIER().getText();
          const paramType = fnType.params[i];
          
          // If parameter type is not a reference, we're moving the value
          if (!isRefType(paramType) && !isBaseType(argType)) {
            this.moveValue(env, argName);
          }
        }
      }
      
      // Check argument count
      if (argTypes.length !== fnType.params.length) {
        throw new Error(`Function ${name} expects ${fnType.params.length} arguments, got ${argTypes.length}`);
      }
      
      // Check argument types
      for (let i = 0; i < argTypes.length; i++) {
        const paramType = fnType.params[i];
        const argType = argTypes[i];
        
        // Handle reference vs. value types differently
        if (isRefType(paramType) && isRefType(argType)) {
          // Reference compatibility
          if (paramType.mutable && !argType.mutable) {
            throw new Error(`Cannot pass immutable reference as mutable reference`);
          }
          
          // Check base type compatibility
          if (JSON.stringify(paramType.base) !== JSON.stringify(argType.base)) {
            throw new Error(`Reference type mismatch: expected &${paramType.mutable ? 'mut ' : ''}${paramType.base}, got &${argType.mutable ? 'mut ' : ''}${argType.base}`);
          }
          
          // Check lifetime validity
          if (!this.isLifetimeValid(argType.lifetime)) {
            throw new Error(`Reference passed to function has expired`);
          }
        } else if (!isRefType(paramType) && !isRefType(argType)) {
          // Value type compatibility
          if (JSON.stringify(paramType) !== JSON.stringify(argType)) {
            throw new Error(`Type mismatch: expected ${paramType}, got ${argType}`);
          }
        } else {
          throw new Error(`Cannot pass ${argType} as ${paramType}`);
        }
      }
      
      return fnType.return;
    }
    
    // If statements
    if (expr.constructor.name === "If_stmtContext") {
      const condType = this.inferType(expr.expression(), env);
      if (condType !== "bool") {
        throw new Error(`Expected predicate type: bool, actual predicate type: ${condType}`);
      }
    
      // Create new scope for each branch
      this.enterScope();
      const thenType = this.inferType(expr.block(0), env);
      this.exitScope();
      
      let elseType: Type = "undefined";
      if (expr.block().length > 1) {
        this.enterScope();
        elseType = this.inferType(expr.block(1), env);
        this.exitScope();
      }
    
      if (JSON.stringify(thenType) !== JSON.stringify(elseType)) {
        throw new Error(`Types of branches not matching; consequent type: ${thenType}, alternative type: ${elseType}`);
      }
    
      return thenType;
    }

    // Block with ownership tracking
    if (expr.constructor.name === "BlockContext") {
      this.enterScope();
      const result = this.inferBlockType(expr, env);
      this.exitScope();
      return result;
    }

    // Assignment expressions with ownership tracking
    if (expr.constructor.name === "AssignmentContext") {
      const lhs = expr.expression(0);
      const rhs = expr.expression(1);
      
      // Only variables can be on the left-hand side
      if (lhs.constructor.name !== "VariableReferenceContext" && 
          lhs.constructor.name !== "DereferenceExprContext") {
        throw new Error("Left-hand side of assignment must be a variable or dereference");
      }
      
      // Handle direct variable assignment
      if (lhs.constructor.name === "VariableReferenceContext") {
        const name = lhs.identifier().IDENTIFIER().getText();
        
        // Check if we can write to this variable
        if (!this.canWrite(env, name, "assignment")) {
          throw new Error(`Cannot assign to ${name} - it's borrowed or moved`);
        }
        
        const lhsType = this.lookupType(env, name);
        const rhsType = this.inferType(rhs, env);
        
        // Check type compatibility
        if (JSON.stringify(lhsType) !== JSON.stringify(rhsType)) {
          throw new Error(`Type mismatch in assignment: ${lhsType} = ${rhsType}`);
        }
        
        // Handle move semantics for RHS if it's a variable
        if (rhs.constructor.name === "VariableReferenceContext") {
          const rhsName = rhs.identifier().IDENTIFIER().getText();
          // If not a primitive or reference type, move the value
          const actualRhsType = this.lookupType(env, rhsName);
          if (!isBaseType(actualRhsType) && !isRefType(actualRhsType)) {
            this.moveValue(env, rhsName);
          }
        }
        
        return lhsType;
      }
      
      // Handle dereferencing a mutable reference
      if (lhs.constructor.name === "DereferenceExprContext") {
        const refExpr = lhs.expression();
        const refType = this.inferType(refExpr, env);
        
        if (!isRefType(refType)) {
          throw new Error("Cannot dereference a non-reference type");
        }
        
        if (!refType.mutable) {
          throw new Error("Cannot assign through an immutable reference");
        }
        
        const rhsType = this.inferType(rhs, env);
        
        if (JSON.stringify(refType.base) !== JSON.stringify(rhsType)) {
          throw new Error(`Type mismatch in assignment through reference: ${refType.base} = ${rhsType}`);
        }
        
        return refType.base;
      }
    }

    throw new Error(`Unsupported expression type: ${expr.constructor.name}`);
  }

  inferBlockType(block: any, env: TypeEnv): Type {
    const statements = block.statement();
    const localEnv = [...env];  // Create a copy for local variables
    
    for (const stmt of statements) {
      // Handle let statements
      const letStmt = stmt.let_stmt?.();
      if (letStmt) {
        const name = letStmt.identifier().IDENTIFIER().getText();
        let type: Type;
        
        // Handle explicit type annotation
        if (letStmt.ty()) {
          const typeText = letStmt.ty().getText();
          // Parse reference types
          if (typeText.startsWith("&")) {
            const isMut = typeText.startsWith("&mut ");
            const baseTypeText = typeText.substring(isMut ? 5 : 1) as BaseType;
            type = this.createRefType(baseTypeText, isMut);
          } else {
            type = typeText as BaseType;
          }
        } else if (letStmt.expression()) {
          // Infer type from initialization expression
          const expr = letStmt.expression();
          type = this.inferType(expr, localEnv);
          
          // Handle move semantics for initialization
          if (expr.constructor.name === "VariableReferenceContext") {
            const sourceName = expr.identifier().IDENTIFIER().getText();
            // If not a primitive or reference type, move the value
            if (!isBaseType(type) && !isRefType(type)) {
              this.moveValue(localEnv, sourceName);
            }
          }
        } else {
          throw new Error(`Cannot infer type for variable '${name}'`);
        }
        
        // Register variable in environment
        this.assignType(localEnv, name, type);
      }
      
      // Handle assignments
      const assignStmt = stmt.assignment_stmt?.();
      if (assignStmt) {
        this.inferType(assignStmt.expression(), localEnv);
      }
      
      // Handle return statements
      const ret = stmt.return_stmt?.();
      if (ret) {
        const retExpr = ret.expression();
        // Return type with ownership checking
        return this.inferType(retExpr, localEnv);
      }
    }
    
    // Handle trailing expression
    const expr = block.expression();
    return expr ? this.inferType(expr, localEnv) : "undefined";
  }

  inferFunctionBodyType(body: any, env: TypeEnv): Type {
    this.enterScope();
    const statements = body.statement();
    const returnTypes: Type[] = [];
  
    for (const stmt of statements) {
      const letStmt = stmt.let_stmt?.();
      if (letStmt) {
        const name = letStmt.identifier().IDENTIFIER().getText();
        let inferred: Type;
    
        if (letStmt.ty()) {
          const typeText = letStmt.ty().getText();
          // Parse reference types
          if (typeText.startsWith("&")) {
            const isMut = typeText.startsWith("&mut ");
            const baseTypeText = typeText.substring(isMut ? 5 : 1) as BaseType;
            inferred = this.createRefType(baseTypeText, isMut);
          } else {
            inferred = typeText as BaseType;
          }
        } else if (letStmt.expression()) {
          inferred = this.inferType(letStmt.expression(), env);
        } else {
          throw new Error(`Cannot infer type for variable '${name}'`);
        }
    
        this.assignType(env, name, inferred);
      }

      const ret = stmt.return_stmt?.();
      if (ret) {
        const retExpr = ret.expression();
        returnTypes.push(this.inferType(retExpr, env));
        break; // exit loop on first return
      }
    }
  
    if (returnTypes.length === 0) {
      const trailingExpr = body.expression();
      if (trailingExpr) {
        returnTypes.push(this.inferType(trailingExpr, env));
      }
    }
  
    // Check all return types are consistent
    if (returnTypes.length > 0) {
      const first = returnTypes[0];
      for (const t of returnTypes) {
        if (JSON.stringify(t) !== JSON.stringify(first)) {
          throw new Error(`return type mismatch in function body`);
        }
      }
      this.exitScope();
      return first;
    }
    
    this.exitScope();
    return "undefined";
  }

  // Function to check a whole program or module for ownership errors
  checkProgram(program: any): void {
    // Reset lifetimes for a fresh check
    this.activeLifetimes = new Set();
    this.scopeStack = [];
    
    // Start in global scope
    this.enterScope();
    
    // Check each function and global variable
    // (This would depend on the specific AST structure)
    
    // Exit global scope
    this.exitScope();
    
    // Check that all resources were properly released
    for (const lifetime of this.activeLifetimes) {
      throw new Error(`Unclaimed resource with lifetime ${lifetime}`);
    }
  }
}