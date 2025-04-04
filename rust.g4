grammar rust;

start:
    expression
    |let_stmt
;

let_stmt: 
    'let' (MUT)? identifier (':' ty)? ('=' expression)?
;

expression:
    expression '*' expression   # multiply
    | expression '/' expression # divide
    | expression '+' expression # add
    | expression '-' expression # subtract
    | number                    # simple
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
