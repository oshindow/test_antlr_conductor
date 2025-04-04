lexer grammar rustLexer;

KW_BREAK     : 'break';
KW_CONST     : 'const';
KW_CONTINUE  : 'continue';
KW_ELSE      : 'else';
KW_ENUM      : 'enum';
KW_FALSE     : 'false';
KW_FN        : 'fn';
KW_FOR       : 'for';
KW_IF        : 'if';
KW_IN        : 'in';
KW_LET       : 'let';
KW_MUT       : 'mut';
KW_RETURN    : 'return';
KW_SELFVALUE : 'self';
KW_SELFTYPE  : 'Self';
KW_STATIC    : 'static';
KW_TRUE      : 'true';
KW_TYPE      : 'type';
KW_UNSAFE    : 'unsafe';
KW_WHILE     : 'while';

// reserved 2018+
KW_TRY: 'try';

KW_I32 : 'i32';
KW_BOOL : 'bool';

PLUS    : '+';
MINUS   : '-';
STAR    : '*';
SLASH   : '/';
PERCENT : '%';
CARET   : '^';
NOT     : '!';
AND     : '&';
OR      : '|';
ANDAND  : '&&';
OROR    : '||';
//SHL: '<<'; SHR: '>>'; removed to avoid confusion in type parameter
PLUSEQ     : '+=';
MINUSEQ    : '-=';
STAREQ     : '*=';
SLASHEQ    : '/=';
PERCENTEQ  : '%=';
CARETEQ    : '^=';
ANDEQ      : '&=';
OREQ       : '|=';
SHLEQ      : '<<=';
SHREQ      : '>>=';
EQ         : '=';
EQEQ       : '==';
NE         : '!=';
GT         : '>';
LT         : '<';
GE         : '>=';
LE         : '<=';
AT         : '@';
UNDERSCORE : '_';
DOT        : '.';
DOTDOT     : '..';
DOTDOTDOT  : '...';
DOTDOTEQ   : '..=';
COMMA      : ',';
SEMI       : ';';
COLON      : ':';
PATHSEP    : '::';
RARROW     : '->';
FATARROW   : '=>';
POUND      : '#';
DOLLAR     : '$';
QUESTION   : '?';

LCURLYBRACE    : '{';
RCURLYBRACE    : '}';
LSQUAREBRACKET : '[';
RSQUAREBRACKET : ']';
LPAREN         : '(';
RPAREN         : ')';

fragment INTEGER_SUFFIX:
    'u8'
    | 'u16'
    | 'u32'
    | 'u64'
    | 'u128'
    | 'usize'
    | 'i8'
    | 'i16'
    | 'i32'
    | 'i64'
    | 'i128'
    | 'isize'
;

fragment FLOAT_SUFFIX: 'f32' | 'f64';

fragment FLOAT_EXPONENT: [eE] [+-]? '_'* DEC_LITERAL;

fragment OCT_DIGIT: [0-7];

fragment DEC_DIGIT: [0-9];

fragment HEX_DIGIT: [0-9a-fA-F];

// LIFETIME_TOKEN: '\'' IDENTIFIER_OR_KEYWORD | '\'_';

LIFETIME_OR_LABEL: '\'' NON_KEYWORD_IDENTIFIER;

//number
INTEGER_LITERAL: ( DEC_LITERAL | BIN_LITERAL | OCT_LITERAL | HEX_LITERAL) INTEGER_SUFFIX?;

DEC_LITERAL: DEC_DIGIT (DEC_DIGIT | '_')*;

HEX_LITERAL: '0x' '_'* HEX_DIGIT (HEX_DIGIT | '_')*;

OCT_LITERAL: '0o' '_'* OCT_DIGIT (OCT_DIGIT | '_')*;

BIN_LITERAL: '0b' '_'* [01] [01_]*;

// rule itself allow any identifier, but keyword has been matched before
NON_KEYWORD_IDENTIFIER: XID_Start XID_Continue* | '_' XID_Continue+;

// [\p{L}\p{Nl}\p{Other_ID_Start}-\p{Pattern_Syntax}-\p{Pattern_White_Space}]
fragment XID_Start: [\p{L}\p{Nl}] | UNICODE_OIDS;

// [\p{ID_Start}\p{Mn}\p{Mc}\p{Nd}\p{Pc}\p{Other_ID_Continue}-\p{Pattern_Syntax}-\p{Pattern_White_Space}]
fragment XID_Continue: XID_Start | [\p{Mn}\p{Mc}\p{Nd}\p{Pc}] | UNICODE_OIDC;

fragment UNICODE_OIDS: '\u1885' ..'\u1886' | '\u2118' | '\u212e' | '\u309b' ..'\u309c';

fragment UNICODE_OIDC: '\u00b7' | '\u0387' | '\u1369' ..'\u1371' | '\u19da';

RAW_IDENTIFIER: 'r#' NON_KEYWORD_IDENTIFIER;

NUMBER: [0-9]+;