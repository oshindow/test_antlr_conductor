// Generated from rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";


export class rustLexer extends antlr.Lexer {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly NUMBER = 5;
    public static readonly WS = 6;
    public static readonly LPAREN = 7;
    public static readonly RPAREN = 8;

    public static readonly channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN"
    ];

    public static readonly literalNames = [
        null, "'*'", "'/'", "'+'", "'-'", null, null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, "NUMBER", "WS", "LPAREN", "RPAREN"
    ];

    public static readonly modeNames = [
        "DEFAULT_MODE",
    ];

    public static readonly ruleNames = [
        "T__0", "T__1", "T__2", "T__3", "NUMBER", "WS", "LPAREN", "RPAREN",
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
        4,0,8,41,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,
        6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,4,4,27,8,4,11,
        4,12,4,28,1,5,4,5,32,8,5,11,5,12,5,33,1,5,1,5,1,6,1,6,1,7,1,7,0,
        0,8,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,2,1,0,48,57,3,0,9,10,
        13,13,32,32,42,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
        9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,1,17,1,0,0,0,3,
        19,1,0,0,0,5,21,1,0,0,0,7,23,1,0,0,0,9,26,1,0,0,0,11,31,1,0,0,0,
        13,37,1,0,0,0,15,39,1,0,0,0,17,18,5,42,0,0,18,2,1,0,0,0,19,20,5,
        47,0,0,20,4,1,0,0,0,21,22,5,43,0,0,22,6,1,0,0,0,23,24,5,45,0,0,24,
        8,1,0,0,0,25,27,7,0,0,0,26,25,1,0,0,0,27,28,1,0,0,0,28,26,1,0,0,
        0,28,29,1,0,0,0,29,10,1,0,0,0,30,32,7,1,0,0,31,30,1,0,0,0,32,33,
        1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,35,1,0,0,0,35,36,6,5,0,0,
        36,12,1,0,0,0,37,38,5,40,0,0,38,14,1,0,0,0,39,40,5,41,0,0,40,16,
        1,0,0,0,3,0,28,33,1,6,0,0
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