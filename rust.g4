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
    | struct_decl 
    | enum_decl
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
    'fn' identifier '(' parameter_list? ')' ('->' identifier)? block  # functionDecl
;

parameter_list:
    parameter (',' parameter)*
;

parameter:
    identifier (':' identifier)?  
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
    identifier (',' identifier)*
;

field_init_list:
    identifier ':' expression (',' identifier ':' expression)*
;

enum_decl:
    'enum' identifier '{' variant_list? '}'
;

variant_list:
    identifier (',' identifier)* ','?
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
    | identifier '{' field_init_list? '}'  # structInit
    | expression '.' identifier              # fieldAccess
    | STRING             # stringLiteral
    | BOOL               # boolLiteral
    | identifier '::' identifier    # enumAccess
    | 'match' expression '{' match_arm_list '}'   # matchExpr
    ;

MUT:
    'mut'
;

ty: 
    number
    | 'bool'
    ;

STRING: '"' (~["\\] | '\\' .)*? '"'
;

BOOL: 'true' | 'false'
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
;

NUMBER:
    [0-9]+
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
