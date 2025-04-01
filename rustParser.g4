parser grammar rustParser;

options {
    tokenVocab = rustLexer;
}

program: stmt* EOF ;

stmt
    : let_stmt SEMI
    | expr_stmt SEMI
    | if_stmt
    | while_stmt
    | for_stmt
    ;

let_stmt
    : KW_LET (KW_MUT)? identifier (COLON ty)? (EQ expr)?
    ;

if_stmt
    : KW_IF expr block (KW_ELSE (block | if_stmt))?
    ;

while_stmt
    : KW_WHILE expr block
    ;

for_stmt
    : KW_FOR identifier KW_IN expr block
    ;

expr_stmt
    : expr
    ;

block
    : LCURLYBRACE stmt* RCURLYBRACE
    ;

expr
    : expr (PLUS | MINUS | STAR | SLASH) expr    # binaryExpr
    | LPAREN expr RPAREN                         # parenExpr
    | identifier                                  # identExpr
    | literal                                     # literalExpr
    | INT                                         # intExpr
    ;

ty
    : KW_I32
    | KW_BOOL
    ;

literal
    : INTEGER_LITERAL
    | KW_TRUE
    | KW_FALSE
    ;

identifier
    : NON_KEYWORD_IDENTIFIER
    | RAW_IDENTIFIER
    ;