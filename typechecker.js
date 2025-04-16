const list_to_array = xs =>
    is_null(xs)
    ? []
    : [head(xs), ...list_to_array(tail(xs))]

const parameters = xs =>
    list_to_array(map(x => head(tail(x)), xs))

// turn tagged list syntax from parse into JSON object
const ast_to_json = t => {
    switch (head(t)) {
        case "literal":
            return { tag: "lit", val: head(tail(t)) }
        case "name":
            return { tag: "nam", sym: head(tail(t)) }
        case "application":
            return {
                tag: "app",
                fun: ast_to_json(head(tail(t))),
                args: list_to_array(map(ast_to_json, 
                                        head(tail(tail(t)))))
            }
        case "logical_composition":
            return {
                tag: "log",
                sym: head(tail(t)),
                frst: ast_to_json(head(tail(tail(t)))),
                scnd: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "binary_operator_combination":
            return {
                tag: "binop",
                sym: head(tail(t)),
                frst: ast_to_json(head(tail(tail(t)))),
                scnd: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "unary_operator_combination":
            return {
                tag: "unop",
                sym: head(tail(t)),
                frst: ast_to_json(head(tail(tail(t))))
            }
        case "lambda_expression":
            return {
                tag: "lam",
                prms: parameters(head(tail(t))),
                body: ast_to_json(head(tail(tail(t))))
            }
        case "sequence":
            return {
                tag: "seq",
                stmts: list_to_array(map(ast_to_json, 
                                         head(tail(t))))
            }
        case "block":
            return {
                tag: "blk",
                body: 
                   head(head(tail(t))) === "sequence"
                   ? ast_to_json(head(tail(t)))
                   : {tag: "seq",
                      stmts: [ast_to_json(head(tail(t)))]}
            }
        case "constant_declaration":
            return {
                tag: "const",
                sym: head(tail(head(tail(t)))),
                expr: ast_to_json(head(tail(tail(t))))
            }
        case "assignment":
            return {
                tag: "assmt",
                sym: head(tail(head(tail(t)))),
                expr: ast_to_json(head(tail(tail(t))))
            }
        case "conditional_statement":
            return {
                tag: "cond_stmt", 
                pred: ast_to_json(head(tail(t))),
                cons: ast_to_json(head(tail(tail(t)))),
                alt: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "conditional_expression":
            return {
                tag: "cond_expr", 
                pred: ast_to_json(head(tail(t))),
                cons: ast_to_json(head(tail(tail(t)))),
                alt: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "function_declaration":
            return {
                tag: "fun",
                sym: head(tail(head(tail(t)))),
                prms: parameters(head(tail(tail(t)))),
                body: ast_to_json(head(tail(tail(tail(t)))))
            }
        case "return_statement":
            return {
                tag: "ret",
                expr: ast_to_json(head(tail(t)))
            }
       default:
            error(t, "unknown syntax:")
    }
}

// Typed Source abuses multiplications
// to denote lists of argument types
// example: number * number > bool
// is the type of a function that takes
// two number arguments and returns a bool
const transform_types = t => 
    t.tag === 'binop' && t.sym === '*'
    ? [...transform_types(t.frst),
       ...transform_types(t.scnd)]
    : [transform_type(t)]

// the token null is used to denote an 
// empty list of argument types
// example: null > number
// is the type of a nullary function
// that returns a number
const transform_types_or_null = t =>
    (t.tag === 'lit' && t.val === null)
    ? []
    : transform_types(t)

// transform_type takes a Source expression
// and returns the corresponding type
// Example: 
// transform_type(ast_to_json(parse(
//.   "number * number > bool;")));
// returns
// {"tag": "fun", 
//  "args": ["number", "number"], 
//  "res": "bool"}
const transform_type = t =>
    t.tag === 'nam' &&
    (t.sym === 'number' ||
     t.sym === 'bool' ||
     t.sym === 'undefined')
    ? t.sym
    : t.tag === 'binop' && t.sym === '>'
    ? {tag:'fun',
       args: transform_types_or_null(t.frst),
       res: transform_type(t.scnd)}
    : error('illegal type expression')

// turn a given type into a string
// Example:
// unparse_type({"tag": "fun", 
//               "args": ["number", "number"], 
//               "res": "bool"})
// returns
// "(number, number > bool)"
const unparse_types = ts =>
   ts.length === 0 
   ? "null"
   : ts.reduce((s, t) => s === "" 
                         ? unparse_type(t) 
                         : s + ", " + unparse_type(t), "")
const unparse_type = t =>
   is_string(t) 
   ? t 
   : // t is function type
     "(" + unparse_types(t.args) + " > " + 
     unparse_type(t.res) + ")"

const equal_types = (ts1, ts2) =>
   unparse_types(ts1) === unparse_types(ts2)
   
const equal_type = (t1, t2) =>
   unparse_type(t1) === unparse_type(t2)

// combine type and subsequent variable declarations
// into type-annotated variable declarations
const annotate_sequence = (seq) => {
    const len = seq.length
    const result = []
    let j = 0 // write pointer into result array
    // loop through array
    // use each type declaration ('assmt')
    // as a type annotation for the subsequent
    // constant declaration
    for (let i = 0; i < len; i++) {
        if (seq[i].tag === 'assmt') {
           const sym = seq[i].sym
           const t = transform_type(seq[i].expr)
           const next = seq[++i]
           if (next.tag === 'const' && 
                 next.sym === sym) {
               next.type = t
               next.expr = annotate(next.expr)
               result[j++] = next
           } else if (next.tag === 'fun' &&
                 next.sym === sym) {
               next.type = t
               next.body = annotate(next.body)
               result[j++] = next                
           } else {
               error(
                   'declaration of name ' + sym +
                   ' expected after its type declaration')
           }
        } else if (seq[i].tag === 'const') {
            error(
               'type declaration of name ' + seq[i].sym +
               ' before declaration missing')
        } else {
           result[j++] = annotate(seq[i])
        }
    }
    return result
}

// display(cmd, "CMD:");

// annotate_comp has the annotation
// functions for each component tag
const annotate_comp = {
lit:
    comp => comp,
nam:
    comp => comp,
unop:
    comp => ({tag: 'unop',
               sym: comp.sym,
               frst: annotate(comp.frst)}),
binop:
    comp => ({tag: 'binop',
              sym: comp.sym,
              frst: annotate(comp.frst),
              scnd: annotate(comp.scnd)}),
log:
    comp => annotate(comp.sym == '&&' 
                ? {tag: 'cond_expr', 
                   pred: comp.frst, 
                   cons: comp.scnd,
                   alt: {tag: 'lit', val: false}}
                : {tag: 'cond_expr',  
                   pred: comp.frst,
                   cons: {tag: 'lit', val: true}, 
                   alt: comp.scnd}),
cond_expr: 
    comp => ({tag: 'cond_expr', 
              pred: annotate(comp.pred), 
              cons: annotate(comp.cons),
              alt: annotate(comp.alt)}),
cond_stmt: 
    comp => ({tag: 'cond_stmt', 
              pred: annotate(comp.pred), 
              cons: annotate(comp.cons),
              alt: annotate(comp.alt)}),
app:
    comp => ({tag: 'app',
              fun: annotate(comp.fun),
              args: comp.args.map(annotate)}),
seq: 
    comp => ({tag: 'seq',
              stmts: annotate_sequence(comp.stmts)}),
blk:
    comp => ({tag: 'blk',
              body: annotate(comp.body)}),
ret:
    comp => ({tag: 'ret',
              expr: annotate(comp.expr)}),
fun:
    comp => annotate({tag:  'fun',
                       sym:  comp.sym,
                       expr: {tag: 'lam', 
                       prms: comp.prms, 
                       body: comp.body}})
}

// annotate declarations with
// the preceding type declaration
const annotate = comp =>
    annotate_comp[comp.tag](comp)

// parse, turn into json (using ast_to_json), 
// wrap in a block, and annotate
const parse_to_json = program_text => {
    const json = ast_to_json(parse(program_text))
    return annotate(json.tag === "blk"
                    ? json
                    : json.tag === "seq"
                    ? {tag: "blk",
                       body: json}
                    : json)
}

/* *****************
 * type environments
 * *****************/

// Type frames are JavaScript objects that map 
// symbols (strings) to types.
const unary_arith_type =
    { tag: "fun", args: ["number"], 
      res: "number" }
    
const binary_arith_type =
    { tag: "fun", args: ["number", "number"], 
      res: "number" }

const number_comparison_type =
    { tag: "fun", args: ["number", "number"], 
      res: "bool" }

const binary_bool_type =
    { tag: "fun", args: ["bool"], 
      res: "bool" }
      
const unary_bool_type =
    { tag: "fun", args: ["bool"], 
      res: "bool" }
      
const global_type_frame = {
    "undefined": "undefined",
    math_E: "number",
    math_PI: "number",
    math_sin: unary_arith_type,
    "+": binary_arith_type,
    "+": binary_arith_type,
    "-": binary_arith_type,
    "*": binary_arith_type,
    "/": binary_arith_type,
    "<": number_comparison_type,
    ">": number_comparison_type,
    "<=": number_comparison_type,
    ">=": number_comparison_type,
    "===": number_comparison_type,
    "&&": binary_bool_type,
    "||": binary_bool_type,
    "-unary": unary_arith_type,
    "!": unary_bool_type
}

// A type environment is null or a pair 
// whose head is a frame and whose tail 
// is a type environment.
const empty_type_environment = null
const global_type_environment = 
    pair(global_type_frame, empty_type_environment)

const lookup_type = (x, e) =>
    is_null(e)
    ? error("unbound name: " + x)
    : head(e).hasOwnProperty(x) 
    ? head(e)[x]
    : lookup_type(x, tail(e))

const extend_type_environment = (xs, ts, e) => {
    if (ts.length > xs.length) 
        error('too few parameters in function declaration')
    if (ts.length < xs.length) 
        error('too many parameters in function declaration')
    const new_frame = {}
    for (let i = 0; i < xs.length; i++) 
        new_frame[xs[i]] = ts[i]
    return pair(new_frame, e)
}

// type_comp has the typing
// functions for each component tag
const type_comp = {
lit:
    (comp, te) => is_number(comp.val) 
                  ? "number"
                  : is_boolean(comp.val)
                  ? "bool"
                  : is_undefined(comp.val)
                  ? "undefined"
                  : error("unknown literal: " + comp.val),
nam:
    (comp, te) => lookup_type(comp.sym, te),
unop:
    (comp, te) => type({tag: 'app',
                        fun: {tag: 'nam', sym: comp.sym},
                        args: [comp.frst]}, te),
binop:
    (comp, te) => type({tag: 'app',
                        fun: {tag: 'nam', sym: comp.sym},
                        args: [comp.frst, comp.scnd]}, te),
log:
    (comp, te) => type({tag: 'app',
                        fun: {tag: 'nam', sym: comp.sym},
                        args: [comp.frst, comp.scnd]}, te),
cond_expr: 
    (comp, te) => {
        const t0 = type(comp.pred, te)
        if (t0 !== "bool") 
            error("expected predicate type: bool, " +
                  "actual predicate type: " + 
                  unparse_type(t0))
        const t1 = type(comp.cons, te)
        const t2 = type(comp.alt, te)
        if (equal_type(t1, t2)) {
            return t1
        } else {
            error("types of branches not matching; " +
                  "consequent type: " + 
                  unparse_type(t1) + ", " +
                  "alternative type: " + 
                  unparse_type(t2))
        }
    },
// outside of function bodies,
// conditional statements are 
// treated as conditional expressions
cond_stmt: 
    (comp, te) => {
        comp.tag = "cond_expr"
        return type(comp, te)
    },
fun:
    (comp, te) => {
        const extended_te = extend_type_environment(
                         comp.prms,
                         comp.type.args,
                         te)
        const body_type = type_fun_body(comp.body, extended_te)
        if (equal_type(body_type, comp.type.res)) {
            return "undefined"
        } else {
            error("type error in function declaration; " +
                      "declared return type: " +
                      unparse_type(comp.type.res) + ", " +
                      "actual return type: " + 
                      unparse_type(body_type))
        }
    },
app:
    (comp, te) => {
        const fun_type = type(comp.fun, te)
        if (fun_type.tag !== "fun") 
            error("type error in application; function " +
                      "expression must have function type; " +
                      "actual type: " + unparse_type(fun_type))
        const expected_arg_types = fun_type.args
        const actual_arg_types = comp.args.map(e => type(e, te))
        if (equal_types(actual_arg_types, expected_arg_types)) {
            return fun_type.res
        } else {
            error("type error in application; " +
                  "expected argument types: " + 
                  unparse_types(expected_arg_types) + ", " +
                  "actual argument types: " + 
                  unparse_types(actual_arg_types))
        }
    },
"const":
    (comp, te) => {
        const declared_type = lookup_type(comp.sym, te)
        const actual_type = type(comp.expr, te)
        if (equal_type(actual_type, declared_type)) {
            return "undefined"
        } else {
            error("type error in constant declaration; " + 
                      "declared type: " +
                      unparse_type(declared_type) + ", " +
                      "actual type: " + 
                      unparse_type(actual_type))
        }
    },
seq: 
    (comp, te) => {
        const component_types = comp.stmts.map(
                                    s => type(s, te))
        return component_types.length === 0
               ? "undefined"
               : component_types[component_types.length - 1]
    },
blk:
    (comp, te) => {
        // scan out declarations
        const decls = comp.body.stmts.filter(
                         comp => comp.tag === "const" ||
                                 comp.tag === "fun")
        const extended_te = extend_type_environment(
                         decls.map(comp => comp.sym),
                         decls.map(comp => comp.type),
                         te)
        return type(comp.body, extended_te)
    },
ret:
    (comp, te) => comp
}

const type = (comp, te) =>
    type_comp[comp.tag](comp, te)

// type_fun_body_stmt has the typing
// functions for function body statements
// for each component tag
const type_fun_body_stmt = {
cond_stmt: 
    (comp, te) => {
        const t0 = type(comp.pred, te)
        if (t0 !== "bool") 
            error("expected predicate type: bool, " +
                  "actual predicate type: " + 
                  unparse_type(t0))
        const t1 = type_fun_body(comp.cons, te)
        const t2 = type_fun_body(comp.alt, te)
        if (equal_type(t1, t2)) {
            return t1
        } else {
            error("types of branches not matching; " +
                  "consequent type: " + 
                  unparse_type(t1) + ", " +
                  "alternative type: " + 
                  unparse_type(t2))
        }
    },
seq: 
    (comp, te) => {
        for (const stmt of comp.stmts) {
             const stmt_type = type_fun_body(stmt, te)
             if (equal_type(stmt_type, "undefined")) {
             } else {
                 return stmt_type
             }
        }
        return "undefined"
    },
blk:
    (comp, te) => {
        // scan out declarations
        const decls = comp.body.stmts.filter(
                         comp => comp.tag === "const")
        const extended_te = extend_type_environment(
                         decls.map(comp => comp.sym),
                         decls.map(comp => comp.type),
                         te)
        return type_fun_body(comp.body, extended_te)
    },
ret:
    (comp, te) => type(comp.expr, te)
}

const type_fun_body = (comp, te) => {
    const handler = type_fun_body_stmt[comp.tag]
    if (handler) {
        return handler(comp, te)
    } else {
        type(comp, te)
        return "undefined"
    }
}

//
// testing
//

const test = (program, expected_type_or_error) => {
    let t
    try {
         t = unparse_type(type(parse_to_json(program),
                               global_type_environment))
    } catch(x) {
        t = x + ""
    }
    if (t === expected_type_or_error) {
        display("pass")
    } else {
        display("Test case fails; test program:")
        display("", program)
        display("expected type: " + expected_type_or_error)
        display("computed type: " + t)
    }
}

// test cases

test("1;", "number")

test("true;", "bool")

test("math_PI;", "number")

test("math_sin;", "(number > number)")

test("2 + 3;", "number");

test("1; 2; true;", "bool");

test("1; 2; 3;", "number");

test("false ? 2 : 3;", "number");

test(`
true && false; true ? 1 + 2 : 17;
`, "number");

test(`
y = number;
const y = 4; 
`, "undefined"
);

test(`
y = number;
const y = 4; 
y;
`, "number"
);

test(`
if (true) {
   1;
   2;
} else {
    3;
}
`, "number"
);

test(`
if (true) {
   { 
      1;
      2;
   }
} else {
   {
      3;
   }
}
`, "number"
);

test(`
f = null > number;
function f() {
    return 1;
}
`, "undefined")

test(`
f = null > number;
function f() {
    return 1;
}
f();
`, "number");

test(`
f = number > number;
function f(x) {
    return x;
}
f(33);
`, "number");

test(`
f = number * number > number;
function f(x, y) {
    return x - y;
}
f(33, 22);
`, "number");

test(`
g = number * number > number;
function g(x, y) {
    return x - y;
}
f = number * number > number;
function f(x, y) {
    return g(x, y);
}
f(33, 22);
`, "number");

test(`
f = number * number > number;
function f(x, y) {
    return x === 1 ? x - y : f(1, x + y);
}
f(33, 22);
`, "number");

test(`
fact = number > number;
function fact(n) {
    return n === 1 ? 1 : n * fact(n - 1);
}
fact(5);
`, "number");

test(`
rec = number > undefined;
function rec(n) {
    n === 1 ? undefined : rec(n - 1);
}
rec(5);
`, "undefined");

test(`
fact = number > number;
function fact(n) {
    if (n === 1) {
        return 1;
    } else {
        return fact(n - 1);
    }
}
fact(5);
`, "number");

test(`
fact = number > number;
function fact(n) {
    if (n === 1) {
        return 1;
    } else {
        return fact(n - 1);
        junk;
    }
    more_junk;
}
fact(5);
`, "number");

test(`
fact = number > number;
function fact(n) {
    return fact_iter(n, 1, 1);
}
fact_iter = number * number * number > number;
function fact_iter(n, i, acc) {
    if (i > n) {
        return acc;
    } else {
        return fact_iter(n, i + 1, acc * i);
    }
}
fact(5);
`, "number");

// the following test case should pass:
// in functions, the type of any non-return
// statement should be "undefined"
test(`
f = number > number;
function f(x) {
    if (false) {2;} else { true; }
    return x;
}
f(1);
`, "number"
);

// syntactic errors specific to Typed Source

test(`
1 + null;
`,
`Error: "unknown literal: null"`
);

test(`
f = number * boool * number > bool;
const f = 1;
`,
`Error: "illegal type expression"`
);

test(`
x = 1 + 2;
const x = 3;
`, 
`Error: "illegal type expression"`
);

test(`
const y = 4; 
{
    const x = y + 7; 
    x * 2;
}
`,
`Error: "type declaration of name y before declaration missing"`
);

test(`
x = number;
1; 2; 3;
`,
`Error: "declaration of name x expected after its type declaration"`)

test(`
y = number; 
{
    const x = y + 7; 
    x * 2;
}
`,
`Error: "declaration of name y expected after its type declaration"`
);

test(`
y = number; 
const x = 4;
`,
`Error: "declaration of name y expected after its type declaration"`
);

test(`
f = number > number;
function f(x, y) {
    return 1;
}
`,
`Error: "too many parameters in function declaration"`
);

test(`
f = number * number > number;
function f(x) {
    return 1;
}
`,
`Error: "too few parameters in function declaration"`
);

// type checking errors

test(`
1 * (2 + y);
`,
`Error: "unbound name: y"`
);

test(`false ? 2 : true;
`,
`Error: "types of branches not matching; consequent type: number, alternative type: bool"`
);


test(`if (false) {2;} else { true; }
`,
`Error: "types of branches not matching; consequent type: number, alternative type: bool"`
);

test(`
f = number > number;
function f(x) {
   false ? 2 : true;
   return x;
}
`,
`Error: "types of branches not matching; consequent type: number, alternative type: bool"`
);

test(`1 + 2 ? 3 : 4;
`,
`Error: "expected predicate type: bool, actual predicate type: number"`
);

test(`
f = number > number;
function f(x) {
    1 + 2 ? 3 : 4;
    return x;
}
`,
`Error: "expected predicate type: bool, actual predicate type: number"`
);

test(`if (1 + 2) { 3; } else {4; }
`,
`Error: "expected predicate type: bool, actual predicate type: number"`
);

test(`
f = number > number;
function f(x) {
    if (1 + 2) {3;} else {4;}
    return x;
}
`,
`Error: "expected predicate type: bool, actual predicate type: number"`
);

test(`
y = number > number;
const y = 4; 
{
    x = number;
    const x = y + 7; 
    x * 2;
}
`,
`Error: "type error in constant declaration; declared type: (number > number), actual type: number"`
)

test(`
f = number * number > number;
function f(x, y) {
    return 1;
}
f();
`,
`Error: "type error in application; expected argument types: number, number, actual argument types: null"`
)

test(`
f = number > number;
function f(y) {
    return 1;
}
f(1, 2, 3);
`,
`Error: "type error in application; expected argument types: number, actual argument types: number, number, number"`
)

test(`
f = number > number;
function f(y) {
    return y === 1 && false;
}
f(1);
`,
`Error: "type error in function declaration; declared return type: number, actual return type: bool"`
)

test(`
(1 + 2)(1);
`,
`Error: "type error in application; function expression must have function type; actual type: number"`
)

test(`
f = number > number;
function f(x) {
   (1 + 2)(1);
   return x;
}
`,
`Error: "type error in application; function expression must have function type; actual type: number"`
)

test(`
true || false;
`,
`bool`
)