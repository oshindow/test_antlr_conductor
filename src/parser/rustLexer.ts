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
    public static readonly MUT = 19;
    public static readonly IDENTIFIER = 20;
    public static readonly NUMBER = 21;
    public static readonly WS = 22;
    public static readonly LPAREN = 23;
    public static readonly RPAREN = 24;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "':'", "'='", "'return'", "'fn'", "','", "'for'", 
        "'in'", "'..'", "'loop'", "'break'", "'{'", "'}'", "'*'", "'/'", 
        "'+'", "'-'", "'bool'", "'mut'", null, null, null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, "MUT", "IDENTIFIER", 
        "NUMBER", "WS", "LPAREN", "RPAREN"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", 
        "T__16", "T__17", "MUT", "IDENTIFIER", "NUMBER", "WS", "LPAREN", 
        "RPAREN",
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
        4,0,24,134,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,
        19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,1,0,1,0,1,1,1,
        1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,
        6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,10,1,10,
        1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,
        1,15,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,19,
        1,19,5,19,114,8,19,10,19,12,19,117,9,19,1,20,4,20,120,8,20,11,20,
        12,20,121,1,21,4,21,125,8,21,11,21,12,21,126,1,21,1,21,1,22,1,22,
        1,23,1,23,0,0,24,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,
        11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,20,41,21,43,
        22,45,23,47,24,1,0,4,3,0,65,90,95,95,97,122,4,0,48,57,65,90,95,95,
        97,122,1,0,48,57,3,0,9,10,13,13,32,32,136,0,1,1,0,0,0,0,3,1,0,0,
        0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,
        0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,
        0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,
        0,35,1,0,0,0,0,37,1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,
        0,45,1,0,0,0,0,47,1,0,0,0,1,49,1,0,0,0,3,53,1,0,0,0,5,55,1,0,0,0,
        7,57,1,0,0,0,9,64,1,0,0,0,11,67,1,0,0,0,13,69,1,0,0,0,15,73,1,0,
        0,0,17,76,1,0,0,0,19,79,1,0,0,0,21,84,1,0,0,0,23,90,1,0,0,0,25,92,
        1,0,0,0,27,94,1,0,0,0,29,96,1,0,0,0,31,98,1,0,0,0,33,100,1,0,0,0,
        35,102,1,0,0,0,37,107,1,0,0,0,39,111,1,0,0,0,41,119,1,0,0,0,43,124,
        1,0,0,0,45,130,1,0,0,0,47,132,1,0,0,0,49,50,5,108,0,0,50,51,5,101,
        0,0,51,52,5,116,0,0,52,2,1,0,0,0,53,54,5,58,0,0,54,4,1,0,0,0,55,
        56,5,61,0,0,56,6,1,0,0,0,57,58,5,114,0,0,58,59,5,101,0,0,59,60,5,
        116,0,0,60,61,5,117,0,0,61,62,5,114,0,0,62,63,5,110,0,0,63,8,1,0,
        0,0,64,65,5,102,0,0,65,66,5,110,0,0,66,10,1,0,0,0,67,68,5,44,0,0,
        68,12,1,0,0,0,69,70,5,102,0,0,70,71,5,111,0,0,71,72,5,114,0,0,72,
        14,1,0,0,0,73,74,5,105,0,0,74,75,5,110,0,0,75,16,1,0,0,0,76,77,5,
        46,0,0,77,78,5,46,0,0,78,18,1,0,0,0,79,80,5,108,0,0,80,81,5,111,
        0,0,81,82,5,111,0,0,82,83,5,112,0,0,83,20,1,0,0,0,84,85,5,98,0,0,
        85,86,5,114,0,0,86,87,5,101,0,0,87,88,5,97,0,0,88,89,5,107,0,0,89,
        22,1,0,0,0,90,91,5,123,0,0,91,24,1,0,0,0,92,93,5,125,0,0,93,26,1,
        0,0,0,94,95,5,42,0,0,95,28,1,0,0,0,96,97,5,47,0,0,97,30,1,0,0,0,
        98,99,5,43,0,0,99,32,1,0,0,0,100,101,5,45,0,0,101,34,1,0,0,0,102,
        103,5,98,0,0,103,104,5,111,0,0,104,105,5,111,0,0,105,106,5,108,0,
        0,106,36,1,0,0,0,107,108,5,109,0,0,108,109,5,117,0,0,109,110,5,116,
        0,0,110,38,1,0,0,0,111,115,7,0,0,0,112,114,7,1,0,0,113,112,1,0,0,
        0,114,117,1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,40,1,0,0,0,
        117,115,1,0,0,0,118,120,7,2,0,0,119,118,1,0,0,0,120,121,1,0,0,0,
        121,119,1,0,0,0,121,122,1,0,0,0,122,42,1,0,0,0,123,125,7,3,0,0,124,
        123,1,0,0,0,125,126,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,
        128,1,0,0,0,128,129,6,21,0,0,129,44,1,0,0,0,130,131,5,40,0,0,131,
        46,1,0,0,0,132,133,5,41,0,0,133,48,1,0,0,0,4,0,115,121,126,1,6,0,
        0
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