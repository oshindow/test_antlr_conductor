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
    public static readonly MUT = 21;
    public static readonly STRING = 22;
    public static readonly BOOL = 23;
    public static readonly IDENTIFIER = 24;
    public static readonly NUMBER = 25;
    public static readonly WS = 26;
    public static readonly LPAREN = 27;
    public static readonly RPAREN = 28;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "':'", "'='", "'return'", "'fn'", "','", "'for'", 
        "'in'", "'..'", "'loop'", "'break'", "'{'", "'}'", "'struct'", "'*'", 
        "'/'", "'+'", "'-'", "'.'", "'bool'", "'mut'", null, null, null, 
        null, null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, "MUT", 
        "STRING", "BOOL", "IDENTIFIER", "NUMBER", "WS", "LPAREN", "RPAREN"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "T__18", "T__19", "MUT", "STRING", "BOOL", "IDENTIFIER", 
        "NUMBER", "WS", "LPAREN", "RPAREN",
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
        4,0,28,173,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,
        26,7,26,2,27,7,27,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,
        3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,
        8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,
        1,11,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,15,
        1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,20,
        1,20,1,20,1,20,1,21,1,21,1,21,1,21,5,21,133,8,21,10,21,12,21,136,
        9,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,
        149,8,22,1,23,1,23,5,23,153,8,23,10,23,12,23,156,9,23,1,24,4,24,
        159,8,24,11,24,12,24,160,1,25,4,25,164,8,25,11,25,12,25,165,1,25,
        1,25,1,26,1,26,1,27,1,27,1,134,0,28,1,1,3,2,5,3,7,4,9,5,11,6,13,
        7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,
        37,19,39,20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,1,0,
        5,2,0,34,34,92,92,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,
        122,1,0,48,57,3,0,9,10,13,13,32,32,178,0,1,1,0,0,0,0,3,1,0,0,0,0,
        5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
        1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,
        1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,
        1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,
        1,0,0,0,0,47,1,0,0,0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,
        1,0,0,0,1,57,1,0,0,0,3,61,1,0,0,0,5,63,1,0,0,0,7,65,1,0,0,0,9,72,
        1,0,0,0,11,75,1,0,0,0,13,77,1,0,0,0,15,81,1,0,0,0,17,84,1,0,0,0,
        19,87,1,0,0,0,21,92,1,0,0,0,23,98,1,0,0,0,25,100,1,0,0,0,27,102,
        1,0,0,0,29,109,1,0,0,0,31,111,1,0,0,0,33,113,1,0,0,0,35,115,1,0,
        0,0,37,117,1,0,0,0,39,119,1,0,0,0,41,124,1,0,0,0,43,128,1,0,0,0,
        45,148,1,0,0,0,47,150,1,0,0,0,49,158,1,0,0,0,51,163,1,0,0,0,53,169,
        1,0,0,0,55,171,1,0,0,0,57,58,5,108,0,0,58,59,5,101,0,0,59,60,5,116,
        0,0,60,2,1,0,0,0,61,62,5,58,0,0,62,4,1,0,0,0,63,64,5,61,0,0,64,6,
        1,0,0,0,65,66,5,114,0,0,66,67,5,101,0,0,67,68,5,116,0,0,68,69,5,
        117,0,0,69,70,5,114,0,0,70,71,5,110,0,0,71,8,1,0,0,0,72,73,5,102,
        0,0,73,74,5,110,0,0,74,10,1,0,0,0,75,76,5,44,0,0,76,12,1,0,0,0,77,
        78,5,102,0,0,78,79,5,111,0,0,79,80,5,114,0,0,80,14,1,0,0,0,81,82,
        5,105,0,0,82,83,5,110,0,0,83,16,1,0,0,0,84,85,5,46,0,0,85,86,5,46,
        0,0,86,18,1,0,0,0,87,88,5,108,0,0,88,89,5,111,0,0,89,90,5,111,0,
        0,90,91,5,112,0,0,91,20,1,0,0,0,92,93,5,98,0,0,93,94,5,114,0,0,94,
        95,5,101,0,0,95,96,5,97,0,0,96,97,5,107,0,0,97,22,1,0,0,0,98,99,
        5,123,0,0,99,24,1,0,0,0,100,101,5,125,0,0,101,26,1,0,0,0,102,103,
        5,115,0,0,103,104,5,116,0,0,104,105,5,114,0,0,105,106,5,117,0,0,
        106,107,5,99,0,0,107,108,5,116,0,0,108,28,1,0,0,0,109,110,5,42,0,
        0,110,30,1,0,0,0,111,112,5,47,0,0,112,32,1,0,0,0,113,114,5,43,0,
        0,114,34,1,0,0,0,115,116,5,45,0,0,116,36,1,0,0,0,117,118,5,46,0,
        0,118,38,1,0,0,0,119,120,5,98,0,0,120,121,5,111,0,0,121,122,5,111,
        0,0,122,123,5,108,0,0,123,40,1,0,0,0,124,125,5,109,0,0,125,126,5,
        117,0,0,126,127,5,116,0,0,127,42,1,0,0,0,128,134,5,34,0,0,129,133,
        8,0,0,0,130,131,5,92,0,0,131,133,9,0,0,0,132,129,1,0,0,0,132,130,
        1,0,0,0,133,136,1,0,0,0,134,135,1,0,0,0,134,132,1,0,0,0,135,137,
        1,0,0,0,136,134,1,0,0,0,137,138,5,34,0,0,138,44,1,0,0,0,139,140,
        5,116,0,0,140,141,5,114,0,0,141,142,5,117,0,0,142,149,5,101,0,0,
        143,144,5,102,0,0,144,145,5,97,0,0,145,146,5,108,0,0,146,147,5,115,
        0,0,147,149,5,101,0,0,148,139,1,0,0,0,148,143,1,0,0,0,149,46,1,0,
        0,0,150,154,7,1,0,0,151,153,7,2,0,0,152,151,1,0,0,0,153,156,1,0,
        0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,48,1,0,0,0,156,154,1,0,0,
        0,157,159,7,3,0,0,158,157,1,0,0,0,159,160,1,0,0,0,160,158,1,0,0,
        0,160,161,1,0,0,0,161,50,1,0,0,0,162,164,7,4,0,0,163,162,1,0,0,0,
        164,165,1,0,0,0,165,163,1,0,0,0,165,166,1,0,0,0,166,167,1,0,0,0,
        167,168,6,25,0,0,168,52,1,0,0,0,169,170,5,40,0,0,170,54,1,0,0,0,
        171,172,5,41,0,0,172,56,1,0,0,0,7,0,132,134,148,154,160,165,1,6,
        0,0
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