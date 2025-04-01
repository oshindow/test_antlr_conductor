grammar rust;

start:
    expression
;

expression:
    expression '*' expression   # multiply
    | expression '/' expression # divide
    | expression '+' expression # add
    | expression '-' expression # subtract
    | number                    # simple
    | LPAREN expression RPAREN  # parenExpr
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
