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
    public static readonly MUT = 14;
    public static readonly IDENTIFIER = 15;
    public static readonly NUMBER = 16;
    public static readonly WS = 17;
    public static readonly LPAREN = 18;
    public static readonly RPAREN = 19;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'return'", "'let'", "':'", "'='", "'fn'", "','", "'{'", "'}'", 
        "'*'", "'/'", "'+'", "'-'", "'bool'", "'mut'", null, null, null, 
        "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, "MUT", "IDENTIFIER", "NUMBER", "WS", "LPAREN", 
        "RPAREN"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "T__8", "T__9", "T__10", "T__11", "T__12", "MUT", "IDENTIFIER", 
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
        4,0,19,103,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,
        2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,
        13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,
        0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,
        4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,10,1,11,1,11,1,
        12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,14,1,14,5,14,83,8,14,
        10,14,12,14,86,9,14,1,15,4,15,89,8,15,11,15,12,15,90,1,16,4,16,94,
        8,16,11,16,12,16,95,1,16,1,16,1,17,1,17,1,18,1,18,0,0,19,1,1,3,2,
        5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,
        15,31,16,33,17,35,18,37,19,1,0,4,3,0,65,90,95,95,97,122,4,0,48,57,
        65,90,95,95,97,122,1,0,48,57,3,0,9,10,13,13,32,32,105,0,1,1,0,0,
        0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,
        13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,
        23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,
        33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,1,39,1,0,0,0,3,46,1,0,0,0,5,
        50,1,0,0,0,7,52,1,0,0,0,9,54,1,0,0,0,11,57,1,0,0,0,13,59,1,0,0,0,
        15,61,1,0,0,0,17,63,1,0,0,0,19,65,1,0,0,0,21,67,1,0,0,0,23,69,1,
        0,0,0,25,71,1,0,0,0,27,76,1,0,0,0,29,80,1,0,0,0,31,88,1,0,0,0,33,
        93,1,0,0,0,35,99,1,0,0,0,37,101,1,0,0,0,39,40,5,114,0,0,40,41,5,
        101,0,0,41,42,5,116,0,0,42,43,5,117,0,0,43,44,5,114,0,0,44,45,5,
        110,0,0,45,2,1,0,0,0,46,47,5,108,0,0,47,48,5,101,0,0,48,49,5,116,
        0,0,49,4,1,0,0,0,50,51,5,58,0,0,51,6,1,0,0,0,52,53,5,61,0,0,53,8,
        1,0,0,0,54,55,5,102,0,0,55,56,5,110,0,0,56,10,1,0,0,0,57,58,5,44,
        0,0,58,12,1,0,0,0,59,60,5,123,0,0,60,14,1,0,0,0,61,62,5,125,0,0,
        62,16,1,0,0,0,63,64,5,42,0,0,64,18,1,0,0,0,65,66,5,47,0,0,66,20,
        1,0,0,0,67,68,5,43,0,0,68,22,1,0,0,0,69,70,5,45,0,0,70,24,1,0,0,
        0,71,72,5,98,0,0,72,73,5,111,0,0,73,74,5,111,0,0,74,75,5,108,0,0,
        75,26,1,0,0,0,76,77,5,109,0,0,77,78,5,117,0,0,78,79,5,116,0,0,79,
        28,1,0,0,0,80,84,7,0,0,0,81,83,7,1,0,0,82,81,1,0,0,0,83,86,1,0,0,
        0,84,82,1,0,0,0,84,85,1,0,0,0,85,30,1,0,0,0,86,84,1,0,0,0,87,89,
        7,2,0,0,88,87,1,0,0,0,89,90,1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,
        91,32,1,0,0,0,92,94,7,3,0,0,93,92,1,0,0,0,94,95,1,0,0,0,95,93,1,
        0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,6,16,0,0,98,34,1,0,0,0,99,
        100,5,40,0,0,100,36,1,0,0,0,101,102,5,41,0,0,102,38,1,0,0,0,4,0,
        84,90,95,1,6,0,0
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