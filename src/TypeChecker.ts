import { execPath } from "process";

// Type definitions with extensions for ownership
export interface EnumType {
    kind: 'enum';
    name: string;
    variants: {
        [variant: string]: Type | null; // null for variants without data
    };
}
  
export interface StructType {
    kind: 'struct';
    name: string;
    fields: {
        [field: string]: Type;
    };
}

export type BaseType = "number" | "bool" | "undefined" | "String" | "void" | "i32" | "i64" | "f32" | "f64" | "char" | "u8" | "u16" | "u32" | "u64" | undefined;
export type RefType = { kind: "ref", mutable: boolean, base: Type, lifetime: string };
export type FnType = { kind: "fn", params: Type[], return: Type };
type ArrayType = { kind: "array", element: Type };
export type Type = BaseType | RefType | FnType | ArrayType | EnumType | StructType | string;

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

function isEnumType(type: Type): type is EnumType {
    return typeof type === 'object' && type !== null && (type as any).kind === 'enum';
  }
  
function isStructType(type: Type): type is StructType {
    return typeof type === 'object' && type !== null && (type as any).kind === 'struct';
}

function isCompositeType(type: Type): boolean {
    return isEnumType(type) || isStructType(type);
}

function isVariableReference(expr: any) {
  if (!expr) return false;

  // If it's the target context
  if (expr.constructor?.name === "VariableReferenceContext") {
    return expr;
  }

  // If it's a nested expression wrapper, recurse on its only child
  if (
    expr.constructor?.name?.endsWith("Context") &&
    Array.isArray(expr.children) &&
    expr.children.length === 1
  ) {
    return isVariableReference(expr.children[0]);
  }

  // Otherwise, not a variable reference
  return false;
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
    throw new Error(`Unbound variable state: ${sym}`);
  }
  
  lookupType(env: TypeEnv, sym: string): Type {
    const state = this.lookupTypeState(env, sym);
    // console.log("state", state, "sym", sym)
    // Check if the value has been moved
    if (state.ownership.kind === "moved") {
      throw new Error(`Use of moved value: ${sym}`);
    }
    // console.log(state.type, sym)
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

  // Create a new enum type
  createEnumType(name: string, variants: {[variant: string]: Type | null}): EnumType {
    return {
      kind: 'enum',
      name,
      variants
    };
  }

  // Create a new struct type
  createStructType(name: string, fields: {[field: string]: Type}): StructType {
    return {
      kind: 'struct',
      name,
      fields
    };
  }

  // Register an enum definition in the environment
  registerEnum(env: TypeEnv, name:string, variants: any): void {
 
    
    const enumType = this.createEnumType(name, variants);
    console.log(enumType, variants)
    this.assignType(env, name, enumType);
    // console.log("end assignType", env, env[0][name])
  }

  // Register a struct definition in the environment
  registerStruct(env: TypeEnv, name: string, fields: any): void {
    const structType = this.createStructType(name, fields);
    // console.log("structType", structType)
    this.assignType(env, name, structType);
    // console.log("end assignType", env)
  }

  parseTypeAnnotation(tyCtx: any, env: TypeEnv): Type {
    const typeText = tyCtx.getText();
    
    // Handle reference types
    if (typeText.startsWith("&")) {
      const isMut = typeText.startsWith("&mut ");
      const baseTypeText = typeText.substring(isMut ? 5 : 1);
      const baseType = this.parseTypeAnnotation({ getText: () => baseTypeText }, env);
      return this.createRefType(baseType, isMut);
    }
    
    // Handle array types
    if (typeText.endsWith("]")) {
      const match = typeText.match(/^([^\[]+)\[/);
      if (match) {
        const elementTypeText = match[1];
        const elementType = this.parseTypeAnnotation({ getText: () => elementTypeText }, env);
        return { kind: 'array', element: elementType };
      }
    }
    
    // Handle named types (could be enum, struct, or primitive)
    const type = this.lookupType(env, typeText);
    if (type) {
      return type;
    }
    
    // If not found, assume it's a primitive type
    if (["number", "bool", "string", "undefined"].includes(typeText)) {
      return typeText as BaseType;
    }
    
    throw new Error(`Unknown type: ${typeText}`);
  }

  inferType(expr: any, env: TypeEnv): Type {
    if (!expr || typeof expr !== 'object' || !expr.constructor?.name) {
      throw new Error(`Invalid expression node: ${JSON.stringify(expr)}`);
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

    // Entry point
    if (expr.constructor.name === "ExpressionContext") {
        // console.log("infered ExpressionContext")
        return this.inferType(expr.logical_or_expr(), env);
    }
    if (expr.constructor.name === "Logical_or_exprContext") {
        // console.log("infered Logical_or_exprContext")
        const children = expr.logical_and_expr();
        let acc = this.inferType(children[0], env);
        for (let i = 1; i < children.length; i++) {
          acc = bin("||", children[i - 1], children[i]);  
        }
        return acc;
    }
    if (expr.constructor.name === "Logical_and_exprContext") {
        // handle `&&`
        // console.log("infered Logical_and_exprContext")
        const children = expr.equality_expr();
        let acc = this.inferType(children[0], env);
        for (let i = 1; i < children.length; i++) {
          acc = bin("&&", children[i - 1], children[i]);
        }
        return acc;
    }
    if (expr.constructor.name === "Equality_exprContext") {
        // handle `==` / `!=`
        // console.log("infered Equality_exprContext")
        const children = expr.relational_expr();
        let acc = this.inferType(children[0], env);
        for (let i = 1; i < children.length; i++) {
          const op = expr.getChild(2 * i - 1).getText(); // e.g. '==' or '!='
          acc = bin(op, children[i - 1], children[i]);
        }
        return acc;
    }
    if (expr.constructor.name === "Relational_exprContext") {
        // handle <, <=, etc.
        // console.log("infered Relational_exprContext")
        const children = expr.additive_expr();
        let acc = this.inferType(children[0], env);
        for (let i = 1; i < children.length; i++) {
          const op = expr.getChild(2 * i - 1).getText(); // '<', '<='...
          acc = bin(op, children[i - 1], children[i]);
        }
        return acc;
    }
    if (expr.constructor.name === "Additive_exprContext") {
        // handle +, -
        // console.log("infered Additive_exprContext")
        const children = expr.multiplicative_expr();
        let acc = this.inferType(children[0], env);
        for (let i = 1; i < children.length; i++) {
          const op = expr.getChild(2 * i - 1).getText(); // '+' or '-'
          acc = bin(op, children[i - 1], children[i]);
        }
        return acc;
    }
    if (expr.constructor.name === "Multiplicative_exprContext") {
        // handle *, / 
        // console.log("infered Multiplicative_exprContext")
        const children = expr.unary_expr();
        let acc = this.inferType(children[0], env);
        for (let i = 1; i < children.length; i++) {
          const op = expr.getChild(2 * i - 1).getText(); // '*', '/' 
          acc = bin(op, children[i - 1], children[i]);
        }
        return acc;
    }
    if (expr.constructor.name === "Unary_exprContext") {
        // handle !, -, *, &, &mut
        // console.log("infered Unary_exprContext")
        // )
        if (expr.getChildCount() === 1) {
          return this.inferType(expr.postfix_expr(), env);
        }
        const op = expr.getChild(0).getText(); 
        const operand = expr.unary_expr?.() || expr.postfix_expr();
        
         
        if (op === '!') {
          return un('!', operand);
        }
      
        if (op === '-') {
          return un('-unary', operand);
        }

        // Handle references (&x or &mut x)
        if (op.constructor.name === "RefExprContext" || 
            op.constructor.name === "RefMutExprContext") {
            const target = op.expression();
            const isMut = op.constructor.name === "RefMutExprContext";
            
            if (target.constructor.name === "VariableReferenceContext") {
              // console.log("infered VariableReferenceContext in RefExprContext or RefMutExprContext")
              const name = target.identifier().IDENTIFIER().getText();
              const targetType = this.lookupType(env, name);
              console.log("targetType", targetType, name)
              // Generate a unique borrower ID for this reference
              const borrowerId = `ref_${freshLifetime()}`;
              console.log(borrowerId)
              // Apply borrowing rules
              if (isMut) {
                this.borrowMut(env, name, borrowerId);
              } else {
                this.borrowImmut(env, name, borrowerId);
              }
              console.log(isMut, env, name, borrowerId)
              return this.createRefType(targetType, isMut);
            } else {
              throw new Error("Can only take references to variables");
            }
        }
      
      // Handle dereferencing (*x)
      if (op.constructor.name === "ExprContext") {
        const operand = op.expression();
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
    }
      // return base
    // }
    if (expr.constructor.name === "Postfix_exprContext") {
      // handle primary_expr + postfix_op*
      // console.log("infered Postfix_exprContext")
      // console.log(expr.getChildCount())
      // if (expr.getChildCount() === 1) {
      //   return this.inferType(expr.primary_expr(), env);
      // }
      
      const primaryType = this.inferType(expr.primary_expr(), env);  
      // let resultType = primaryType;
      // console.log(primaryType)
      const name = expr.primary_expr().getText();
      const ops = expr.postfix_op();
      // console.log(ops)   
      for (const op of ops) {
            // Function calls
            // console.log(op.constructor.name)
          if (op.constructor.name === "FunctionCallContext") {
            // console.log("infered FunctionCallContext")
            // const name = op.identifier().IDENTIFIER().getText();
            const fnType = builtInTypes[name] || this.lookupType(env, name);
            // console.log("fnType:", fnType);
            
            if (!isFnType(fnType)) {
              throw new Error(`${name} is not callable`);
            }
            
            const args = op.argument_list()?.expression() || [];
            // console.log("args", args.length)
            const argTypes: Type[] = [];
            
            // Process each argument and handle moving/borrowing
            for (let i = 0; i < args.length; i++) {
              // console.log("here")
              const argType = this.inferType(args[i], env);
              argTypes.push(argType);
              // console.log("args[i]", args[i])
              
              // If passing a variable directly, check for move semantics
              const argName = isVariableReference(args[i])
              if (argName) {
                console.log("infered VariableReferenceContext in FunctionCallContext")
                // const argName = args[i].identifier().IDENTIFIER().getText();
                const paramType = fnType.params[i];
                // console.log("paramType", paramType, "argName", argName)
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

          // Handle field access
          if (op.constructor.name === "FieldAccessContext") {
            // const obj = op.identifier();
            const fieldName = op.identifier().IDENTIFIER().getText();
            const objType = primaryType
        
            if (isStructType(objType)) {
            const fieldType = objType.fields[fieldName];
            if (!fieldType) {
                throw new Error(`Field ${fieldName} does not exist in struct ${objType.name}`);
            }
            return fieldType;
            }
        
            if (isRefType(objType) && isStructType(objType.base)) {
            const fieldType = objType.base.fields[fieldName];
            if (!fieldType) {
                throw new Error(`Field ${fieldName} does not exist in struct ${objType.base.name}`);
            }
            return this.createRefType(fieldType, objType.mutable);
            }
        
            throw new Error(`Cannot access field ${fieldName} on non-struct type ${JSON.stringify(objType)}`);
          }

          // Handle enum variant access without data (e.g., Book::Papery)
          if (op.constructor.name === "EnumAccessContext") {
              // console.log("call enumAccesss")
              // const enumName = op.identifier(0).IDENTIFIER().getText();
              const variantName = op.identifier().IDENTIFIER().getText();
              
              const enumType = this.lookupType(env, name);
              if (!isEnumType(enumType)) {
              throw new Error(`${name} is not an enum`);
              }
          
              const variantType = enumType.variants[variantName];
              if (variantType === undefined) {
              throw new Error(`Variant ${variantName} does not exist in enum ${name}`);
              }
          
              // If the variant has an associated type, accessing it like this is invalid.
              if (variantType !== null) {
              throw new Error(`Enum variant ${name}::${variantName} requires associated data`);
              }
          
              return enumType;
          }

          // Handle enum variant instantiation
          if (op.constructor.name === "EnumStructInitContext") {
            // console.log("infered EnumStructInitContext")
            // const enumName = op.identifier(0).IDENTIFIER().getText();
            const variantName = op.identifier().IDENTIFIER().getText();
            // console.log(name,variantName)
            const enumType = this.lookupType(env, name);
            if (!isEnumType(enumType)) {
            throw new Error(`${name} is not an enum`);
            }
        
            const variantType = enumType.variants[variantName];
            if (variantType === undefined) {
            throw new Error(`Variant ${variantName} does not exist in enum ${name}`);
            }
        
            // const variantExpr = op.field_init_list();
            const variantExpr = op.field_init_list().field_init() ?? [];
            // console.log(variantExpr)
            if (variantType !== null) {
                if (!variantExpr) {
                    throw new Error(`Variant ${name}::${variantName} requires data`);
                }
                for (const fieldInit of variantExpr) {
                    const fieldName = fieldInit.identifier().IDENTIFIER().getText();
                    const expr = fieldInit.expression();
                    const dataType = this.inferType(expr, env);
                    
                    const expectedType = variantType.fields[fieldName];
                    // console.log(expectedType)
                    if (JSON.stringify(expectedType) !== JSON.stringify(dataType)) {
                        throw new Error(`Type mismatch in enum variant: expected ${JSON.stringify(variantType)}, got ${JSON.stringify(dataType)}`);
                    }
                
                    if (op.constructor.name === "VariableReferenceContext" && !isBaseType(dataType) && !isRefType(dataType)) {
                        const varName = expr.identifier().IDENTIFIER().getText();
                        this.moveValue(env, varName);
                    }
              }
            } else if (variantExpr) {
                throw new Error(`Variant ${name}::${variantName} does not take data`);
            }
            // console.log(end)
            return enumType;
        }
        }

    return primaryType
        
    }
    // if (expr.constructor.name === "Primary_exprContext") {
    //   console.log("infered Primary_exprContext")
      
    //   for (let i = 1; i < expr.getChildCount(); i++) {
    //     const op = expr.getChild(i);
        // Handle literals
      if (expr.constructor.name === "SimpleContext") {
        // console.log("infered SimpleContext")
        return "number";
      }
    
      if (expr.constructor.name === "BoolLiteralContext") {
        // console.log("infered BoolLiteralContext")
        return "bool";
      }

      if (expr.constructor.name === "StringLiteralContext") {
        // console.log("infered StringLiteralContext")
        return "String";
      }
      if (expr.constructor.name === "ParenExprContext") {
        // console.log("infered ParenExprContext", expr.expression().constructor.name)
        return this.inferType(expr.expression(), env);
      }
      
      // Handle variable references
      if (expr.constructor.name === "VariableReferenceContext") {
        
        const name = expr.identifier().IDENTIFIER().getText();
        // console.log("infered VariableReferenceContext", name, env)
        return this.lookupType(env, name);
      }

        // Handle struct literals
        if (expr.constructor.name === "StructInitContext") {
          // console.log()
          const typeName = expr.identifier().IDENTIFIER().getText();
          const structType = this.lookupType(env, typeName);
      
          if (!isStructType(structType)) {
          throw new Error(`${typeName} is not a struct`);
          }
      
          const initializedFields = new Set<string>();
          const fields = expr.field_init_list()?.field_init() ?? [];
          for (const field of fields) {
          const fieldName = field.identifier().IDENTIFIER().getText();
          const expectedType = structType.fields[fieldName];
            
          if (!expectedType) {
              throw new Error(`Field ${fieldName} does not exist in struct ${typeName}`);
          }
          if (initializedFields.has(fieldName)) {
              throw new Error(`Duplicate initialization of field ${fieldName}`);
          }
          initializedFields.add(fieldName);
      
          const fieldExpr = field.expression();
          const actualType = this.inferType(fieldExpr, env);
      
          if (JSON.stringify(expectedType) !== JSON.stringify(actualType)) {
              throw new Error(`Type mismatch in field ${fieldName}: expected ${JSON.stringify(expectedType)}, got ${JSON.stringify(actualType)}`);
          }
      
          if (expr.constructor.name === "VariableReferenceContext" && !isBaseType(actualType) && !isRefType(actualType)) {
              const varName = fieldExpr.identifier().IDENTIFIER().getText();
              this.moveValue(env, varName);
          }
          }
      
          for (const fieldName in structType.fields) {
          if (!initializedFields.has(fieldName)) {
              throw new Error(`Field ${fieldName} is not initialized in struct ${typeName}`);
          }
          }
      
          return structType;
      }


    // Handle match expressions
    if (expr.constructor.name === "MatchExprContext") {
      console.log("call matchexpr")
      const scrutinee = expr.expression();
      const scrutineeType = this.inferType(scrutinee, env);
  
      if (!isEnumType(scrutineeType)) {
      throw new Error(`Match expression requires an enum type, got ${JSON.stringify(scrutineeType)}`);
      }
  
      const arms = expr.match_arm_list()?.match_arm() ?? [];

      const coveredVariants = new Set<string>();
      const armTypes: Type[] = [];
  
      for (const arm of arms) {
          const pattern = arm.match_pattern();
          const [enumIdent, variantIdent, bindingIdent] = pattern.identifier();
          const enumName = enumIdent.IDENTIFIER().getText();
          const variantName = variantIdent.IDENTIFIER().getText();
      
          if (enumName !== scrutineeType.name) {
              throw new Error(`Pattern refers to enum ${enumName}, but scrutinee is of type ${scrutineeType.name}`);
          }
      
          const variantType = scrutineeType.variants[variantName];
          if (variantType === undefined) {
              throw new Error(`Variant ${variantName} does not exist in enum ${enumName}`);
          }
      
          if (coveredVariants.has(variantName)) {
              throw new Error(`Duplicate pattern for variant ${variantName}`);
          }
          coveredVariants.add(variantName);
      
          this.enterScope();
          if (bindingIdent && variantType !== null) {
              const bindingName = bindingIdent.IDENTIFIER().getText();
              console.log(bindingName)
              if (isStructType(variantType)) {
                for (const fieldName in variantType.fields) {
                  const fieldType = variantType.fields[fieldName];
                  this.assignType(env, fieldName, fieldType);  
                }
              } else {
                this.assignType(env, bindingName, variantType); 
              }
          }
          console.log("call here start infertype arm.expression")
          const armType = this.inferType(arm.expression(), env);
          console.log("end arm.expression")
          armTypes.push(armType);
      
          this.exitScope();
      }
  
      for (const variant in scrutineeType.variants) {
      if (!coveredVariants.has(variant)) {
          throw new Error(`Match expression does not cover variant ${variant}`);
      }
      }
  
      const firstType = armTypes[0];
      for (const t of armTypes) {
      if (JSON.stringify(t) !== JSON.stringify(firstType)) {
          throw new Error(`Match arms have different types: ${JSON.stringify(firstType)} and ${JSON.stringify(t)}`);
      }
      }
  
      return firstType;
      }
    // }

  // }
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
        // console.log("process here last expression")
        returnTypes.push(this.inferType(trailingExpr, env));
        // console.log("returnTypes:", returnTypes)
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