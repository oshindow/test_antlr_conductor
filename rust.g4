grammar rust;

start:
    statement+ EOF
;

statement:
    let_stmt
    | assign_stmt
    | return_stmt
    | expression_stmt
    | function_decl
    | for_stmt  
    | loop_stmt
    | break_stmt
    | block
;

let_stmt: 
    'let' (MUT)? identifier (':' ty)? ('=' expression)?
;

assign_stmt:
    identifier '=' expression
;

return_stmt:
    'return' expression
;

expression_stmt:
    expression
;

function_decl:
    'fn' identifier '(' parameter_list? ')' block
;

parameter_list:
    identifier (',' identifier)*
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

expression:
    expression '*' expression   # multiply
    | expression '/' expression # divide
    | expression '+' expression # add
    | expression '-' expression # subtract
    | number                    # simple
    | identifier                # variableReference
    | identifier LPAREN argument_list? RPAREN  # functionCall
    | block                     # blockExpr
    | LPAREN expression RPAREN  # parenExpr
    ;

MUT:
    'mut'
;

ty: 
    number
    | 'bool'
    ;

identifier: 
    IDENTIFIER
;

IDENTIFIER:
    [a-zA-Z_][a-zA-Z0-9_]*
;

argument_list:
    expression (',' expression)*
;

number:
    NUMBER
;

NUMBER:
    [0-9]+
;

WS:
    [ \t\r\n]+ -> skip
;

LPAREN         : '(';
RPAREN         : ')';
