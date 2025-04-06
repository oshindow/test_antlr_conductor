// Generated from rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class rustLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly T__23 = 24;
    public static readonly T__24 = 25;
    public static readonly T__25 = 26;
    public static readonly MUT = 27;
    public static readonly STRING = 28;
    public static readonly BOOL = 29;
    public static readonly IDENTIFIER = 30;
    public static readonly NUMBER = 31;
    public static readonly LINE_COMMENT = 32;
    public static readonly BLOCK_COMMENT = 33;
    public static readonly WS = 34;
    public static readonly LPAREN = 35;
    public static readonly RPAREN = 36;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "':'", "'='", "'return'", "'fn'", "'->'", "','", 
        "'for'", "'in'", "'..'", "'loop'", "'break'", "'{'", "'}'", "'struct'", 
        "'enum'", "'*'", "'/'", "'+'", "'-'", "'.'", "'::'", "'match'", 
        "'bool'", "'=>'", "'_'", "'mut'", null, null, null, null, null, 
        null, null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, "MUT", "STRING", "BOOL", "IDENTIFIER", 
        "NUMBER", "LINE_COMMENT", "BLOCK_COMMENT", "WS", "LPAREN", "RPAREN"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", 
        "T__24", "T__25", "MUT", "STRING", "BOOL", "IDENTIFIER", "NUMBER", 
        "LINE_COMMENT", "BLOCK_COMMENT", "WS", "LPAREN", "RPAREN",
    ];


    public constructor(input: antlr.CharStream) {
        super(input);
        this.interpreter = new antlr.LexerATNSimulator(this, rustLexer._ATN, rustLexer.decisionsToDFA, new antlr.PredictionContextCache());
    }

    public get grammarFileName(): string { return "rust.g4"; }

    public get literalNames(): (string | null)[] { return rustLexer.literalNames; }
    public get symbolicNames(): (string | null)[] { return rustLexer.symbolicNames; }
    public get ruleNames(): string[] { return rustLexer.ruleNames; }

    public get serializedATN(): number[] { return rustLexer._serializedATN; }

    public get channelNames(): string[] { return rustLexer.channelNames; }

    public get modeNames(): string[] { return rustLexer.modeNames; }

    public static readonly _serializedATN: number[] = [
        4,0,36,236,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,
        32,2,33,7,33,2,34,7,34,2,35,7,35,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,
        1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,7,
        1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,
        1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,
        1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,17,1,17,1,18,
        1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,
        1,22,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,26,1,26,
        1,26,1,26,1,27,1,27,1,27,1,27,5,27,171,8,27,10,27,12,27,174,9,27,
        1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,187,
        8,28,1,29,1,29,5,29,191,8,29,10,29,12,29,194,9,29,1,30,4,30,197,
        8,30,11,30,12,30,198,1,31,1,31,1,31,1,31,5,31,205,8,31,10,31,12,
        31,208,9,31,1,31,1,31,1,32,1,32,1,32,1,32,5,32,216,8,32,10,32,12,
        32,219,9,32,1,32,1,32,1,32,1,32,1,32,1,33,4,33,227,8,33,11,33,12,
        33,228,1,33,1,33,1,34,1,34,1,35,1,35,2,172,217,0,36,1,1,3,2,5,3,
        7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,
        31,16,33,17,35,18,37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,
        53,27,55,28,57,29,59,30,61,31,63,32,65,33,67,34,69,35,71,36,1,0,
        6,2,0,34,34,92,92,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,
        122,1,0,48,57,2,0,10,10,13,13,3,0,9,10,13,13,32,32,243,0,1,1,0,0,
        0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
        13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,
        23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,
        33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,
        43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,
        53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,1,0,0,0,0,61,1,0,0,0,0,
        63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,0,0,71,1,0,0,0,1,
        73,1,0,0,0,3,77,1,0,0,0,5,79,1,0,0,0,7,81,1,0,0,0,9,88,1,0,0,0,11,
        91,1,0,0,0,13,94,1,0,0,0,15,96,1,0,0,0,17,100,1,0,0,0,19,103,1,0,
        0,0,21,106,1,0,0,0,23,111,1,0,0,0,25,117,1,0,0,0,27,119,1,0,0,0,
        29,121,1,0,0,0,31,128,1,0,0,0,33,133,1,0,0,0,35,135,1,0,0,0,37,137,
        1,0,0,0,39,139,1,0,0,0,41,141,1,0,0,0,43,143,1,0,0,0,45,146,1,0,
        0,0,47,152,1,0,0,0,49,157,1,0,0,0,51,160,1,0,0,0,53,162,1,0,0,0,
        55,166,1,0,0,0,57,186,1,0,0,0,59,188,1,0,0,0,61,196,1,0,0,0,63,200,
        1,0,0,0,65,211,1,0,0,0,67,226,1,0,0,0,69,232,1,0,0,0,71,234,1,0,
        0,0,73,74,5,108,0,0,74,75,5,101,0,0,75,76,5,116,0,0,76,2,1,0,0,0,
        77,78,5,58,0,0,78,4,1,0,0,0,79,80,5,61,0,0,80,6,1,0,0,0,81,82,5,
        114,0,0,82,83,5,101,0,0,83,84,5,116,0,0,84,85,5,117,0,0,85,86,5,
        114,0,0,86,87,5,110,0,0,87,8,1,0,0,0,88,89,5,102,0,0,89,90,5,110,
        0,0,90,10,1,0,0,0,91,92,5,45,0,0,92,93,5,62,0,0,93,12,1,0,0,0,94,
        95,5,44,0,0,95,14,1,0,0,0,96,97,5,102,0,0,97,98,5,111,0,0,98,99,
        5,114,0,0,99,16,1,0,0,0,100,101,5,105,0,0,101,102,5,110,0,0,102,
        18,1,0,0,0,103,104,5,46,0,0,104,105,5,46,0,0,105,20,1,0,0,0,106,
        107,5,108,0,0,107,108,5,111,0,0,108,109,5,111,0,0,109,110,5,112,
        0,0,110,22,1,0,0,0,111,112,5,98,0,0,112,113,5,114,0,0,113,114,5,
        101,0,0,114,115,5,97,0,0,115,116,5,107,0,0,116,24,1,0,0,0,117,118,
        5,123,0,0,118,26,1,0,0,0,119,120,5,125,0,0,120,28,1,0,0,0,121,122,
        5,115,0,0,122,123,5,116,0,0,123,124,5,114,0,0,124,125,5,117,0,0,
        125,126,5,99,0,0,126,127,5,116,0,0,127,30,1,0,0,0,128,129,5,101,
        0,0,129,130,5,110,0,0,130,131,5,117,0,0,131,132,5,109,0,0,132,32,
        1,0,0,0,133,134,5,42,0,0,134,34,1,0,0,0,135,136,5,47,0,0,136,36,
        1,0,0,0,137,138,5,43,0,0,138,38,1,0,0,0,139,140,5,45,0,0,140,40,
        1,0,0,0,141,142,5,46,0,0,142,42,1,0,0,0,143,144,5,58,0,0,144,145,
        5,58,0,0,145,44,1,0,0,0,146,147,5,109,0,0,147,148,5,97,0,0,148,149,
        5,116,0,0,149,150,5,99,0,0,150,151,5,104,0,0,151,46,1,0,0,0,152,
        153,5,98,0,0,153,154,5,111,0,0,154,155,5,111,0,0,155,156,5,108,0,
        0,156,48,1,0,0,0,157,158,5,61,0,0,158,159,5,62,0,0,159,50,1,0,0,
        0,160,161,5,95,0,0,161,52,1,0,0,0,162,163,5,109,0,0,163,164,5,117,
        0,0,164,165,5,116,0,0,165,54,1,0,0,0,166,172,5,34,0,0,167,171,8,
        0,0,0,168,169,5,92,0,0,169,171,9,0,0,0,170,167,1,0,0,0,170,168,1,
        0,0,0,171,174,1,0,0,0,172,173,1,0,0,0,172,170,1,0,0,0,173,175,1,
        0,0,0,174,172,1,0,0,0,175,176,5,34,0,0,176,56,1,0,0,0,177,178,5,
        116,0,0,178,179,5,114,0,0,179,180,5,117,0,0,180,187,5,101,0,0,181,
        182,5,102,0,0,182,183,5,97,0,0,183,184,5,108,0,0,184,185,5,115,0,
        0,185,187,5,101,0,0,186,177,1,0,0,0,186,181,1,0,0,0,187,58,1,0,0,
        0,188,192,7,1,0,0,189,191,7,2,0,0,190,189,1,0,0,0,191,194,1,0,0,
        0,192,190,1,0,0,0,192,193,1,0,0,0,193,60,1,0,0,0,194,192,1,0,0,0,
        195,197,7,3,0,0,196,195,1,0,0,0,197,198,1,0,0,0,198,196,1,0,0,0,
        198,199,1,0,0,0,199,62,1,0,0,0,200,201,5,47,0,0,201,202,5,47,0,0,
        202,206,1,0,0,0,203,205,8,4,0,0,204,203,1,0,0,0,205,208,1,0,0,0,
        206,204,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,206,1,0,0,0,
        209,210,6,31,0,0,210,64,1,0,0,0,211,212,5,47,0,0,212,213,5,42,0,
        0,213,217,1,0,0,0,214,216,9,0,0,0,215,214,1,0,0,0,216,219,1,0,0,
        0,217,218,1,0,0,0,217,215,1,0,0,0,218,220,1,0,0,0,219,217,1,0,0,
        0,220,221,5,42,0,0,221,222,5,47,0,0,222,223,1,0,0,0,223,224,6,32,
        0,0,224,66,1,0,0,0,225,227,7,5,0,0,226,225,1,0,0,0,227,228,1,0,0,
        0,228,226,1,0,0,0,228,229,1,0,0,0,229,230,1,0,0,0,230,231,6,33,0,
        0,231,68,1,0,0,0,232,233,5,40,0,0,233,70,1,0,0,0,234,235,5,41,0,
        0,235,72,1,0,0,0,9,0,170,172,186,192,198,206,217,228,1,6,0,0
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