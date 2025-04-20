// Type definitions
export type Type = "number" | "bool" | "undefined" | [Type[], Type];
export type TypeEnv = Record<string, Type>[];

// Built-in type signatures for operators
export const builtInTypes: Record<string, [Type[], Type]> = {
  "+": [["number", "number"], "number"],
  "-": [["number", "number"], "number"],
  "*": [["number", "number"], "number"],
  "/": [["number", "number"], "number"],
  "%": [["number", "number"], "number"],

  "==": [["number", "number"], "bool"],
  "!=": [["number", "number"], "bool"],
  "<": [["number", "number"], "bool"],
  ">": [["number", "number"], "bool"],
  "<=": [["number", "number"], "bool"],
  ">=": [["number", "number"], "bool"],

  "&&": [["bool", "bool"], "bool"],
  "||": [["bool", "bool"], "bool"],
  "!": [["bool"], "bool"],
  "-unary": [["number"], "number"],
};

// Helper functions for type checking
export function equalTypes(ts1: Type[], ts2: Type[]): boolean {
  return JSON.stringify(ts1) === JSON.stringify(ts2);
}

export function extendTypeEnv(vars: string[], types: Type[], env: TypeEnv): TypeEnv {
  if (vars.length !== types.length) {
    throw new Error(
      vars.length > types.length
        ? "too few parameters in function declaration"
        : "too many parameters in function declaration"
    );
  }

  const frame: Record<string, Type> = {};
  for (let i = 0; i < vars.length; i++) {
    frame[vars[i]] = types[i];
  }
  return [frame, ...env];
}

export class TypeChecker {
  lookupType(env: TypeEnv, sym: string): Type {
    for (const frame of env) {
      if (sym in frame) return frame[sym];
    }
    throw new Error(`Unbound variable: ${sym}`);
  }
  
  assignType(env: TypeEnv, sym: string, ty: Type): void {
    env[0][sym] = ty;
  }

  inferType(expr: any, env: TypeEnv): Type {
    if (expr.constructor.name === "SimpleContext") {
      return "number";
    }
  
    if (expr.constructor.name === "BoolLiteralContext") {
      return "bool";
    }
  
    if (expr.constructor.name === "VariableReferenceContext") {
      const name = expr.identifier().IDENTIFIER().getText();
      return this.lookupType(env, name);
    }
  
    const bin = (op: string, left: any, right: any): Type => {
      const sig = builtInTypes[op];
      if (!sig) throw new Error(`Unknown operator ${op}`);
      const [expectedArgs, returnType] = sig;
      const leftType = this.inferType(left, env);
      const rightType = this.inferType(right, env);
      if (!equalTypes([leftType, rightType], expectedArgs)) {
        throw new Error(`Operator ${op} expects ${expectedArgs.join(", ")}, got ${leftType}, ${rightType}`);
      }
      return returnType;
    };
  
    const un = (op: string, operand: any): Type => {
      const sig = builtInTypes[op];
      if (!sig) throw new Error(`Unknown operator ${op}`);
      const [expectedArgs, returnType] = sig;
      const argType = this.inferType(operand, env);
      if (!equalTypes([argType], expectedArgs)) {
        throw new Error(`Operator ${op} expects ${expectedArgs}, got ${argType}`);
      }
      return returnType;
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

    // Function calls
    if (expr.constructor.name === "FunctionCallContext") {
      const name = expr.identifier().IDENTIFIER().getText();
      const funType = builtInTypes[name] ?? this.lookupType(env, name);
      if (!Array.isArray(funType)) throw new Error(`${name} is not callable`);
      
      const [expectedArgs, returnType] = funType;
      const actualArgTypes = (expr.argument_list()?.expression() ?? []).map(e => this.inferType(e, env));
      
      if (actualArgTypes.length !== expectedArgs.length) {
        throw new Error(`Function application error: ${name} expects ${expectedArgs.length} argument(s), got ${actualArgTypes.length}`);
      }
      
      if (!equalTypes(actualArgTypes, expectedArgs)) {
        throw new Error(`Function ${name} expects (${expectedArgs.join(", ")}), got (${actualArgTypes.join(", ")})`);
      }
      return returnType;
    }
    
    // If statements
    if (expr.constructor.name === "If_stmtContext") {
      const condType = this.inferType(expr.expression(), env);
      if (condType !== "bool") {
        throw new Error(`Expected predicate type: bool, actual predicate type: ${condType}`);
      }
    
      const thenType = this.inferType(expr.block(0), env);
      let elseType: Type = "undefined";
      if (expr.block().length > 1) {
        elseType = this.inferType(expr.block(1), env);
      }
    
      if (!equalTypes([thenType], [elseType])) {
        throw new Error(`Types of branches not matching; consequent type: ${thenType}, alternative type: ${elseType}`);
      }
    
      return thenType;
    }

    // Block
    if (expr.constructor.name === "BlockContext") {
      return this.inferBlockType(expr, env);
    }

    throw new Error(`Unsupported expression type: ${expr.constructor.name}`);
  }

  inferBlockType(block: any, env: TypeEnv): Type {
    const statements = block.statement();
    const localEnv = [...env];  // Create a copy for local variables
    
    for (const stmt of statements) {
      const letStmt = stmt.let_stmt?.();
      if (letStmt) {
        const name = letStmt.identifier().IDENTIFIER().getText();
        let type: Type;
        
        if (letStmt.ty()) {
          type = letStmt.ty().getText() as Type;
        } else if (letStmt.expression()) {
          type = this.inferType(letStmt.expression(), localEnv);
        } else {
          throw new Error(`Cannot infer type for variable '${name}'`);
        }
        
        this.assignType(localEnv, name, type);
      }
    }
    
    // Check return statements
    const returnStmts = statements.filter(stmt => stmt.return_stmt?.());
    if (returnStmts.length > 0) {
      const returnTypes = returnStmts.map(stmt => 
        this.inferType(stmt.return_stmt().expression(), localEnv)
      );
      
      const firstType = returnTypes[0];
      for (const type of returnTypes) {
        if (type !== firstType) {
          throw new Error(`Inconsistent return types: ${firstType} and ${type}`);
        }
      }
      
      return firstType;
    }
    
    // If no returns, check trailing expression
    const expr = block.expression();
    return expr ? this.inferType(expr, localEnv) : "undefined";
  }

  inferFunctionBodyType(body: any, env: TypeEnv): Type {
    const statements = body.statement();
    const returnTypes: Type[] = [];
  
    for (const stmt of statements) {
      const letStmt = stmt.let_stmt?.();
      if (letStmt) {
        const name = letStmt.identifier().IDENTIFIER().getText();
        let inferred: Type;
    
        if (letStmt.ty()) {
          inferred = letStmt.ty().getText() as Type;
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
        if (t !== first) {
          throw new Error(`return type mismatch in function body`);
        }
      }
      return first;
    }
    
    return "undefined";
  }
}