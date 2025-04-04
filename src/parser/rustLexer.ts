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
    public static readonly MUT = 9;
    public static readonly IDENTIFIER = 10;
    public static readonly NUMBER = 11;
    public static readonly WS = 12;
    public static readonly LPAREN = 13;
    public static readonly RPAREN = 14;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'let'", "':'", "'='", "'*'", "'/'", "'+'", "'-'", "'bool'", 
        "'mut'", null, null, null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, "MUT", "IDENTIFIER", 
        "NUMBER", "WS", "LPAREN", "RPAREN"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", 
        "MUT", "IDENTIFIER", "NUMBER", "WS", "LPAREN", "RPAREN",
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
        4,0,14,77,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,
        7,13,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,6,
        1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,5,9,57,8,9,10,9,
        12,9,60,9,9,1,10,4,10,63,8,10,11,10,12,10,64,1,11,4,11,68,8,11,11,
        11,12,11,69,1,11,1,11,1,12,1,12,1,13,1,13,0,0,14,1,1,3,2,5,3,7,4,
        9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,1,0,4,3,0,
        65,90,95,95,97,122,4,0,48,57,65,90,95,95,97,122,1,0,48,57,3,0,9,
        10,13,13,32,32,79,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
        0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,
        0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,
        0,1,29,1,0,0,0,3,33,1,0,0,0,5,35,1,0,0,0,7,37,1,0,0,0,9,39,1,0,0,
        0,11,41,1,0,0,0,13,43,1,0,0,0,15,45,1,0,0,0,17,50,1,0,0,0,19,54,
        1,0,0,0,21,62,1,0,0,0,23,67,1,0,0,0,25,73,1,0,0,0,27,75,1,0,0,0,
        29,30,5,108,0,0,30,31,5,101,0,0,31,32,5,116,0,0,32,2,1,0,0,0,33,
        34,5,58,0,0,34,4,1,0,0,0,35,36,5,61,0,0,36,6,1,0,0,0,37,38,5,42,
        0,0,38,8,1,0,0,0,39,40,5,47,0,0,40,10,1,0,0,0,41,42,5,43,0,0,42,
        12,1,0,0,0,43,44,5,45,0,0,44,14,1,0,0,0,45,46,5,98,0,0,46,47,5,111,
        0,0,47,48,5,111,0,0,48,49,5,108,0,0,49,16,1,0,0,0,50,51,5,109,0,
        0,51,52,5,117,0,0,52,53,5,116,0,0,53,18,1,0,0,0,54,58,7,0,0,0,55,
        57,7,1,0,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,
        0,59,20,1,0,0,0,60,58,1,0,0,0,61,63,7,2,0,0,62,61,1,0,0,0,63,64,
        1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,22,1,0,0,0,66,68,7,3,0,0,
        67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,71,1,
        0,0,0,71,72,6,11,0,0,72,24,1,0,0,0,73,74,5,40,0,0,74,26,1,0,0,0,
        75,76,5,41,0,0,76,28,1,0,0,0,4,0,58,64,69,1,6,0,0
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