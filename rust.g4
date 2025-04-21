grammar rust;


start:
    statement+ EOF
;

statement:
    let_stmt ';'?
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
    'fn' identifier '(' parameter_list? ')' ('->' ty)? block  
;

parameter_list:
    parameter (',' parameter)*
;

parameter:
    identifier (':' ty)?  
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
    :'!' expression                 # logicalNot
    | '-' expression                # unaryMinus
    | '&' expression                # refExpr
    | '&' MUT expression            # refMutExpr
    | '*' expression                # dereference
    | expression '&&' expression    # logicalAnd
    | expression '||' expression    # logicalOr
    | expression '==' expression   # equal
    | expression '!=' expression   # notEqual
    | expression '<' expression    # lessThan
    | expression '<=' expression   # lessEqual
    | expression '>' expression    # greaterThan
    | expression '>=' expression   # greaterEqual
    | expression '*' expression   # multiply
    | expression '+' expression # add
    | expression '-' expression # subtract
    | expression '/' expression # divide
    | expression '%' expression # mod
    | LPAREN expression RPAREN  # parenExpr
    | identifier                # variableReference
    | number                    # simple
    | BOOL               # boolLiteral
    | STRING             # stringLiteral
    | 'println!' LPAREN argument_list? RPAREN   # printlnMacro
    | identifier LPAREN argument_list? RPAREN  # functionCall
    | block                     # blockExpr
    | identifier '{' field_init_list? '}'  # structInit
    | expression '.' identifier              # fieldAccess
    | identifier '::' identifier    # enumAccess
    | 'match' expression '{' match_arm_list '}'   # matchExpr
    | identifier '::' identifier '{' field_init_list? '}'    # enumStructInit
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
    | 'char'
    | 'String' 
    | identifier
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
    | identifier '::' identifier '{' pattern_list '}'  
    ;

pattern_list:
    identifier (',' identifier)* ','?
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
