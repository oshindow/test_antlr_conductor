// Generated from rustLexer.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class rustLexer extends antlr.Lexer {
    public static readonly KW_BREAK = 1;
    public static readonly KW_CONST = 2;
    public static readonly KW_CONTINUE = 3;
    public static readonly KW_ELSE = 4;
    public static readonly KW_ENUM = 5;
    public static readonly KW_FALSE = 6;
    public static readonly KW_FN = 7;
    public static readonly KW_FOR = 8;
    public static readonly KW_IF = 9;
    public static readonly KW_IN = 10;
    public static readonly KW_LET = 11;
    public static readonly KW_MUT = 12;
    public static readonly KW_RETURN = 13;
    public static readonly KW_SELFVALUE = 14;
    public static readonly KW_SELFTYPE = 15;
    public static readonly KW_STATIC = 16;
    public static readonly KW_TRUE = 17;
    public static readonly KW_TYPE = 18;
    public static readonly KW_UNSAFE = 19;
    public static readonly KW_WHILE = 20;
    public static readonly KW_TRY = 21;
    public static readonly KW_I32 = 22;
    public static readonly KW_BOOL = 23;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'break'", "'const'", "'continue'", "'else'", "'enum'", "'false'", 
        "'fn'", "'for'", "'if'", "'in'", "'let'", "'mut'", "'return'", "'self'", 
        "'Self'", "'static'", "'true'", "'type'", "'unsafe'", "'while'", 
        "'try'", "'i32'", "'bool'"
    ];

    public static readonly symbolicNames = [
        null, "KW_BREAK", "KW_CONST", "KW_CONTINUE", "KW_ELSE", "KW_ENUM", 
        "KW_FALSE", "KW_FN", "KW_FOR", "KW_IF", "KW_IN", "KW_LET", "KW_MUT", 
        "KW_RETURN", "KW_SELFVALUE", "KW_SELFTYPE", "KW_STATIC", "KW_TRUE", 
        "KW_TYPE", "KW_UNSAFE", "KW_WHILE", "KW_TRY", "KW_I32", "KW_BOOL"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "KW_BREAK", "KW_CONST", "KW_CONTINUE", "KW_ELSE", "KW_ENUM", "KW_FALSE", 
        "KW_FN", "KW_FOR", "KW_IF", "KW_IN", "KW_LET", "KW_MUT", "KW_RETURN", 
        "KW_SELFVALUE", "KW_SELFTYPE", "KW_STATIC", "KW_TRUE", "KW_TYPE", 
        "KW_UNSAFE", "KW_WHILE", "KW_TRY", "KW_I32", "KW_BOOL",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, rustLexer._ATN, rustLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "rustLexer.g4"; }

    public get literalNames(): (string | null)[] { return rustLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return rustLexer.symbolicNames; }
    public get ruleNames(): string[] { return rustLexer.ruleNames; }

    public get serializedATN(): number[] { return rustLexer._serializedATN; }

    public get channelNames(): string[] { return rustLexer.channelNames; }

    public get modeNames(): string[] { return rustLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,23,165,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,
        1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,
        1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,
        1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,11,
        1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,
        1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,
        1,15,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,
        1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,
        1,20,1,20,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,0,0,23,1,
        1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
        14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,1,0,0,164,
        0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
        1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,
        1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,
        1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,
        1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,1,47,1,0,0,0,3,53,1,0,0,0,5,59,
        1,0,0,0,7,68,1,0,0,0,9,73,1,0,0,0,11,78,1,0,0,0,13,84,1,0,0,0,15,
        87,1,0,0,0,17,91,1,0,0,0,19,94,1,0,0,0,21,97,1,0,0,0,23,101,1,0,
        0,0,25,105,1,0,0,0,27,112,1,0,0,0,29,117,1,0,0,0,31,122,1,0,0,0,
        33,129,1,0,0,0,35,134,1,0,0,0,37,139,1,0,0,0,39,146,1,0,0,0,41,152,
        1,0,0,0,43,156,1,0,0,0,45,160,1,0,0,0,47,48,5,98,0,0,48,49,5,114,
        0,0,49,50,5,101,0,0,50,51,5,97,0,0,51,52,5,107,0,0,52,2,1,0,0,0,
        53,54,5,99,0,0,54,55,5,111,0,0,55,56,5,110,0,0,56,57,5,115,0,0,57,
        58,5,116,0,0,58,4,1,0,0,0,59,60,5,99,0,0,60,61,5,111,0,0,61,62,5,
        110,0,0,62,63,5,116,0,0,63,64,5,105,0,0,64,65,5,110,0,0,65,66,5,
        117,0,0,66,67,5,101,0,0,67,6,1,0,0,0,68,69,5,101,0,0,69,70,5,108,
        0,0,70,71,5,115,0,0,71,72,5,101,0,0,72,8,1,0,0,0,73,74,5,101,0,0,
        74,75,5,110,0,0,75,76,5,117,0,0,76,77,5,109,0,0,77,10,1,0,0,0,78,
        79,5,102,0,0,79,80,5,97,0,0,80,81,5,108,0,0,81,82,5,115,0,0,82,83,
        5,101,0,0,83,12,1,0,0,0,84,85,5,102,0,0,85,86,5,110,0,0,86,14,1,
        0,0,0,87,88,5,102,0,0,88,89,5,111,0,0,89,90,5,114,0,0,90,16,1,0,
        0,0,91,92,5,105,0,0,92,93,5,102,0,0,93,18,1,0,0,0,94,95,5,105,0,
        0,95,96,5,110,0,0,96,20,1,0,0,0,97,98,5,108,0,0,98,99,5,101,0,0,
        99,100,5,116,0,0,100,22,1,0,0,0,101,102,5,109,0,0,102,103,5,117,
        0,0,103,104,5,116,0,0,104,24,1,0,0,0,105,106,5,114,0,0,106,107,5,
        101,0,0,107,108,5,116,0,0,108,109,5,117,0,0,109,110,5,114,0,0,110,
        111,5,110,0,0,111,26,1,0,0,0,112,113,5,115,0,0,113,114,5,101,0,0,
        114,115,5,108,0,0,115,116,5,102,0,0,116,28,1,0,0,0,117,118,5,83,
        0,0,118,119,5,101,0,0,119,120,5,108,0,0,120,121,5,102,0,0,121,30,
        1,0,0,0,122,123,5,115,0,0,123,124,5,116,0,0,124,125,5,97,0,0,125,
        126,5,116,0,0,126,127,5,105,0,0,127,128,5,99,0,0,128,32,1,0,0,0,
        129,130,5,116,0,0,130,131,5,114,0,0,131,132,5,117,0,0,132,133,5,
        101,0,0,133,34,1,0,0,0,134,135,5,116,0,0,135,136,5,121,0,0,136,137,
        5,112,0,0,137,138,5,101,0,0,138,36,1,0,0,0,139,140,5,117,0,0,140,
        141,5,110,0,0,141,142,5,115,0,0,142,143,5,97,0,0,143,144,5,102,0,
        0,144,145,5,101,0,0,145,38,1,0,0,0,146,147,5,119,0,0,147,148,5,104,
        0,0,148,149,5,105,0,0,149,150,5,108,0,0,150,151,5,101,0,0,151,40,
        1,0,0,0,152,153,5,116,0,0,153,154,5,114,0,0,154,155,5,121,0,0,155,
        42,1,0,0,0,156,157,5,105,0,0,157,158,5,51,0,0,158,159,5,50,0,0,159,
        44,1,0,0,0,160,161,5,98,0,0,161,162,5,111,0,0,162,163,5,111,0,0,
        163,164,5,108,0,0,164,46,1,0,0,0,1,0,0
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!rustLexer.__ATN) {
            rustLexer.__ATN = new antlr.ATNDeserializer().deserialize(rustLexer._serializedATN);
        }

        return rustLexer.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(rustLexer.literalNames, rustLexer.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return rustLexer.vocabulary;
    }

    private static readonly decisionsToDFA = rustLexer._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}