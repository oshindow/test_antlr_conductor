grammar rust;


start:
    statement+ EOF
;

statement:
    let_stmt ';'?
    | const_stmt ';'?
    | assign_stmt ';'?
    | return_stmt ';'?
    | expression_stmt ';'
    | function_decl 
    | for_stmt  
    | loop_stmt
    | break_stmt ';'?
    | block
    | struct_decl 
    | enum_decl
    | while_stmt
    | if_stmt
;

let_stmt: 
    'let' (MUT)? identifier (':' ty)? ('=' expression)?
;

const_stmt:
    'const' identifier ':' ty '=' expression
;

assign_stmt:
    lhs '=' expression
;

lhs:
    '*' expression         # derefLhs
    | identifier           # identLhs
;


return_stmt:
    'return' expression
;

expression_stmt:
    expression
;

function_decl:
    'fn' identifier '(' parameter_list? ')' ('->' ty)? block  
;

parameter_list:
    parameter (',' parameter)*
;

parameter:
    (MUT)? identifier ':' ty  
;

for_stmt:
    'for' identifier 'in' expression '..' expression block
;

loop_stmt:
    'loop' block
;

break_stmt:
    'break'
;

block:
    '{' statement* expression? '}'
;

struct_decl:
    'struct' identifier '{' field_list? '}'
;

field_list:
    field_decl (',' field_decl)* ','?
;

field_decl:
    identifier ':' ty
;

field_init_list:
    field_init (',' field_init)* ','?
;

field_init:
    identifier ':' expression
;

enum_decl:
    'enum' identifier '{' variant_list? '}'
;

variant_list:
    variant (',' variant)* ','?
;

variant:
    identifier                             # simpleVariant
    | identifier '{' field_list? '}'       # structVariant
;

while_stmt:
    'while' expression block
;

if_stmt:
    'if' expression block (KW_ELSE (block | if_stmt))?
;

expression
    : logical_or_expr
    ;

logical_or_expr
    : logical_and_expr ('||' logical_and_expr)*
    ;

logical_and_expr
    : equality_expr ('&&' equality_expr)*
    ;

equality_expr
    : relational_expr (('==' | '!=') relational_expr)*
    ;

relational_expr
    : additive_expr (('<' | '<=' | '>' | '>=') additive_expr)*
    ;

additive_expr
    : multiplicative_expr (('+' | '-') multiplicative_expr)*
    ;

multiplicative_expr
    : unary_expr (('*' | '/' | '%') unary_expr)*
    ;

unary_expr
    : ('!' | '-' | '&' | '&' MUT | '*') unary_expr
    | postfix_expr
    ;

postfix_expr
    : primary_expr postfix_op*
    ;

postfix_op
    : '.' identifier                     # fieldAccess
    | '::' identifier                    # enumAccess
    | LPAREN argument_list? RPAREN      # functionCall
    | '::' identifier '{' field_init_list? '}' # enumStructInit
    ;

primary_expr
    : LPAREN expression RPAREN          # parenExpr
    | identifier '{' field_init_list? '}' # structInit
    | 'match' expression '{' match_arm_list '}' # matchExpr
    | identifier                        # variableReference
    | number                            # simple
    | BOOL                              # boolLiteral
    | STRING                            # stringLiteral
    | 'println!' LPAREN argument_list? RPAREN # printlnMacro
    | block                             # blockExpr
    ;

MUT:
    'mut'
;

KW_ELSE:
    'else'
;

ty: 
    'number'
    | 'bool'
    | 'String' 
    | identifier
    ;


argument_list:
    expression (',' expression)*
;

number:
    NUMBER
;

match_arm_list:
    match_arm (',' match_arm)* ','?
;

match_arm:
    match_pattern '=>' expression
;

match_pattern:
    NUMBER
    | '_'
    | identifier '::' identifier                     
    | identifier '::' identifier '{' pattern_list '}'  
    ;

pattern_list:
    identifier (',' identifier)* ','?
;

NUMBER:
    [0-9]+
;

BOOL: 'true' | 'false'
;

STRING: '"' (~["])*? '"'
;

identifier: 
    IDENTIFIER
;

IDENTIFIER:
    [a-zA-Z_][a-zA-Z0-9_]*
;

LINE_COMMENT
    : '//' ~[\r\n]* -> skip
;

BLOCK_COMMENT
    : '/*' .*? '*/' -> skip
;

WS:
    [ \t\r\n]+ -> skip
;

LPAREN         : '(';
RPAREN         : ')';
