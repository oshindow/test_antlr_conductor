// Generated from rustParser.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { rustParserListener } from "./rustParserListener.js";
import { rustParserVisitor } from "./rustParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class rustParser extends antlr.Parser {
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
    public static readonly PLUS = 24;
    public static readonly MINUS = 25;
    public static readonly STAR = 26;
    public static readonly SLASH = 27;
    public static readonly PERCENT = 28;
    public static readonly CARET = 29;
    public static readonly NOT = 30;
    public static readonly AND = 31;
    public static readonly OR = 32;
    public static readonly ANDAND = 33;
    public static readonly OROR = 34;
    public static readonly PLUSEQ = 35;
    public static readonly MINUSEQ = 36;
    public static readonly STAREQ = 37;
    public static readonly SLASHEQ = 38;
    public static readonly PERCENTEQ = 39;
    public static readonly CARETEQ = 40;
    public static readonly ANDEQ = 41;
    public static readonly OREQ = 42;
    public static readonly SHLEQ = 43;
    public static readonly SHREQ = 44;
    public static readonly EQ = 45;
    public static readonly EQEQ = 46;
    public static readonly NE = 47;
    public static readonly GT = 48;
    public static readonly LT = 49;
    public static readonly GE = 50;
    public static readonly LE = 51;
    public static readonly AT = 52;
    public static readonly UNDERSCORE = 53;
    public static readonly DOT = 54;
    public static readonly DOTDOT = 55;
    public static readonly DOTDOTDOT = 56;
    public static readonly DOTDOTEQ = 57;
    public static readonly COMMA = 58;
    public static readonly SEMI = 59;
    public static readonly COLON = 60;
    public static readonly PATHSEP = 61;
    public static readonly RARROW = 62;
    public static readonly FATARROW = 63;
    public static readonly POUND = 64;
    public static readonly DOLLAR = 65;
    public static readonly QUESTION = 66;
    public static readonly LCURLYBRACE = 67;
    public static readonly RCURLYBRACE = 68;
    public static readonly LSQUAREBRACKET = 69;
    public static readonly RSQUAREBRACKET = 70;
    public static readonly LPAREN = 71;
    public static readonly RPAREN = 72;
    public static readonly LIFETIME_OR_LABEL = 73;
    public static readonly INTEGER_LITERAL = 74;
    public static readonly DEC_LITERAL = 75;
    public static readonly HEX_LITERAL = 76;
    public static readonly OCT_LITERAL = 77;
    public static readonly BIN_LITERAL = 78;
    public static readonly NON_KEYWORD_IDENTIFIER = 79;
    public static readonly RAW_IDENTIFIER = 80;
    public static readonly RULE_program = 0;
    public static readonly RULE_stmt = 1;
    public static readonly RULE_let_stmt = 2;
    public static readonly RULE_if_stmt = 3;
    public static readonly RULE_while_stmt = 4;
    public static readonly RULE_for_stmt = 5;
    public static readonly RULE_expr_stmt = 6;
    public static readonly RULE_block = 7;
    public static readonly RULE_expr = 8;
    public static readonly RULE_ty = 9;
    public static readonly RULE_literal = 10;
    public static readonly RULE_identifier = 11;

    public static readonly literalNames = [
        null, "'break'", "'const'", "'continue'", "'else'", "'enum'", "'false'", 
        "'fn'", "'for'", "'if'", "'in'", "'let'", "'mut'", "'return'", "'self'", 
        "'Self'", "'static'", "'true'", "'type'", "'unsafe'", "'while'", 
        "'try'", "'i32'", "'bool'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", 
        "'!'", "'&'", "'|'", "'&&'", "'||'", "'+='", "'-='", "'*='", "'/='", 
        "'%='", "'^='", "'&='", "'|='", "'<<='", "'>>='", "'='", "'=='", 
        "'!='", "'>'", "'<'", "'>='", "'<='", "'@'", "'_'", "'.'", "'..'", 
        "'...'", "'..='", "','", "';'", "':'", "'::'", "'->'", "'=>'", "'#'", 
        "'$'", "'?'", "'{'", "'}'", "'['", "']'", "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, "KW_BREAK", "KW_CONST", "KW_CONTINUE", "KW_ELSE", "KW_ENUM", 
        "KW_FALSE", "KW_FN", "KW_FOR", "KW_IF", "KW_IN", "KW_LET", "KW_MUT", 
        "KW_RETURN", "KW_SELFVALUE", "KW_SELFTYPE", "KW_STATIC", "KW_TRUE", 
        "KW_TYPE", "KW_UNSAFE", "KW_WHILE", "KW_TRY", "KW_I32", "KW_BOOL", 
        "PLUS", "MINUS", "STAR", "SLASH", "PERCENT", "CARET", "NOT", "AND", 
        "OR", "ANDAND", "OROR", "PLUSEQ", "MINUSEQ", "STAREQ", "SLASHEQ", 
        "PERCENTEQ", "CARETEQ", "ANDEQ", "OREQ", "SHLEQ", "SHREQ", "EQ", 
        "EQEQ", "NE", "GT", "LT", "GE", "LE", "AT", "UNDERSCORE", "DOT", 
        "DOTDOT", "DOTDOTDOT", "DOTDOTEQ", "COMMA", "SEMI", "COLON", "PATHSEP", 
        "RARROW", "FATARROW", "POUND", "DOLLAR", "QUESTION", "LCURLYBRACE", 
        "RCURLYBRACE", "LSQUAREBRACKET", "RSQUAREBRACKET", "LPAREN", "RPAREN", 
        "LIFETIME_OR_LABEL", "INTEGER_LITERAL", "DEC_LITERAL", "HEX_LITERAL", 
        "OCT_LITERAL", "BIN_LITERAL", "NON_KEYWORD_IDENTIFIER", "RAW_IDENTIFIER"
    ];
    public static readonly ruleNames = [
        "program", "stmt", "let_stmt", "if_stmt", "while_stmt", "for_stmt", 
        "expr_stmt", "block", "expr", "ty", "literal", "identifier",
    ];

    public get grammarFileName(): string { return "rustParser.g4"; }
    public get literalNames(): (string | null)[] { return rustParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return rustParser.symbolicNames; }
    public get ruleNames(): string[] { return rustParser.ruleNames; }
    public get serializedATN(): number[] { return rustParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, rustParser._ATN, rustParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, rustParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 27;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1182528) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 777) !== 0)) {
                {
                {
                this.state = 24;
                this.stmt();
                }
                }
                this.state = 29;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 30;
            this.match(rustParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 2, rustParser.RULE_stmt);
        try {
            this.state = 41;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.KW_LET:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 32;
                this.let_stmt();
                this.state = 33;
                this.match(rustParser.SEMI);
                }
                break;
            case rustParser.KW_FALSE:
            case rustParser.KW_TRUE:
            case rustParser.LPAREN:
            case rustParser.INTEGER_LITERAL:
            case rustParser.NON_KEYWORD_IDENTIFIER:
            case rustParser.RAW_IDENTIFIER:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 35;
                this.expr_stmt();
                this.state = 36;
                this.match(rustParser.SEMI);
                }
                break;
            case rustParser.KW_IF:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 38;
                this.if_stmt();
                }
                break;
            case rustParser.KW_WHILE:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 39;
                this.while_stmt();
                }
                break;
            case rustParser.KW_FOR:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 40;
                this.for_stmt();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public let_stmt(): Let_stmtContext {
        let localContext = new Let_stmtContext(this.context, this.state);
        this.enterRule(localContext, 4, rustParser.RULE_let_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 43;
            this.match(rustParser.KW_LET);
            this.state = 45;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 12) {
                {
                this.state = 44;
                this.match(rustParser.KW_MUT);
                }
            }

            this.state = 47;
            this.identifier();
            this.state = 50;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 60) {
                {
                this.state = 48;
                this.match(rustParser.COLON);
                this.state = 49;
                this.ty();
                }
            }

            this.state = 54;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 52;
                this.match(rustParser.EQ);
                this.state = 53;
                this.expr(0);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public if_stmt(): If_stmtContext {
        let localContext = new If_stmtContext(this.context, this.state);
        this.enterRule(localContext, 6, rustParser.RULE_if_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 56;
            this.match(rustParser.KW_IF);
            this.state = 57;
            this.expr(0);
            this.state = 58;
            this.block();
            this.state = 64;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 59;
                this.match(rustParser.KW_ELSE);
                this.state = 62;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case rustParser.LCURLYBRACE:
                    {
                    this.state = 60;
                    this.block();
                    }
                    break;
                case rustParser.KW_IF:
                    {
                    this.state = 61;
                    this.if_stmt();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public while_stmt(): While_stmtContext {
        let localContext = new While_stmtContext(this.context, this.state);
        this.enterRule(localContext, 8, rustParser.RULE_while_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 66;
            this.match(rustParser.KW_WHILE);
            this.state = 67;
            this.expr(0);
            this.state = 68;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public for_stmt(): For_stmtContext {
        let localContext = new For_stmtContext(this.context, this.state);
        this.enterRule(localContext, 10, rustParser.RULE_for_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 70;
            this.match(rustParser.KW_FOR);
            this.state = 71;
            this.identifier();
            this.state = 72;
            this.match(rustParser.KW_IN);
            this.state = 73;
            this.expr(0);
            this.state = 74;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public expr_stmt(): Expr_stmtContext {
        let localContext = new Expr_stmtContext(this.context, this.state);
        this.enterRule(localContext, 12, rustParser.RULE_expr_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 76;
            this.expr(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 14, rustParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 78;
            this.match(rustParser.LCURLYBRACE);
            this.state = 82;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1182528) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 777) !== 0)) {
                {
                {
                this.state = 79;
                this.stmt();
                }
                }
                this.state = 84;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 85;
            this.match(rustParser.RCURLYBRACE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expr(): ExprContext;
    public expr(_p: number): ExprContext;
    public expr(_p?: number): ExprContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExprContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 16;
        this.enterRecursionRule(localContext, 16, rustParser.RULE_expr, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 94;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.LPAREN:
                {
                localContext = new ParenExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 88;
                this.match(rustParser.LPAREN);
                this.state = 89;
                this.expr(0);
                this.state = 90;
                this.match(rustParser.RPAREN);
                }
                break;
            case rustParser.NON_KEYWORD_IDENTIFIER:
            case rustParser.RAW_IDENTIFIER:
                {
                localContext = new IdentExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 92;
                this.identifier();
                }
                break;
            case rustParser.KW_FALSE:
            case rustParser.KW_TRUE:
            case rustParser.INTEGER_LITERAL:
                {
                localContext = new LiteralExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 93;
                this.literal();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 101;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new BinaryExprContext(new ExprContext(parentContext, parentState));
                    this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expr);
                    this.state = 96;
                    if (!(this.precpred(this.context, 4))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                    }
                    this.state = 97;
                    _la = this.tokenStream.LA(1);
                    if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 251658240) !== 0))) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 98;
                    this.expr(5);
                    }
                    }
                }
                this.state = 103;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public ty(): TyContext {
        let localContext = new TyContext(this.context, this.state);
        this.enterRule(localContext, 18, rustParser.RULE_ty);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 104;
            _la = this.tokenStream.LA(1);
            if(!(_la === 22 || _la === 23)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 20, rustParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 106;
            _la = this.tokenStream.LA(1);
            if(!(_la === 6 || _la === 17 || _la === 74)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 22, rustParser.RULE_identifier);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 108;
            _la = this.tokenStream.LA(1);
            if(!(_la === 79 || _la === 80)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 8:
            return this.expr_sempred(localContext as ExprContext, predIndex);
        }
        return true;
    }
    private expr_sempred(localContext: ExprContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,80,111,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,5,0,26,8,0,10,
        0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,42,
        8,1,1,2,1,2,3,2,46,8,2,1,2,1,2,1,2,3,2,51,8,2,1,2,1,2,3,2,55,8,2,
        1,3,1,3,1,3,1,3,1,3,1,3,3,3,63,8,3,3,3,65,8,3,1,4,1,4,1,4,1,4,1,
        5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,5,7,81,8,7,10,7,12,7,84,9,
        7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,95,8,8,1,8,1,8,1,8,5,8,
        100,8,8,10,8,12,8,103,9,8,1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,1,16,
        12,0,2,4,6,8,10,12,14,16,18,20,22,0,4,1,0,24,27,1,0,22,23,3,0,6,
        6,17,17,74,74,1,0,79,80,112,0,27,1,0,0,0,2,41,1,0,0,0,4,43,1,0,0,
        0,6,56,1,0,0,0,8,66,1,0,0,0,10,70,1,0,0,0,12,76,1,0,0,0,14,78,1,
        0,0,0,16,94,1,0,0,0,18,104,1,0,0,0,20,106,1,0,0,0,22,108,1,0,0,0,
        24,26,3,2,1,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,
        0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,
        33,3,4,2,0,33,34,5,59,0,0,34,42,1,0,0,0,35,36,3,12,6,0,36,37,5,59,
        0,0,37,42,1,0,0,0,38,42,3,6,3,0,39,42,3,8,4,0,40,42,3,10,5,0,41,
        32,1,0,0,0,41,35,1,0,0,0,41,38,1,0,0,0,41,39,1,0,0,0,41,40,1,0,0,
        0,42,3,1,0,0,0,43,45,5,11,0,0,44,46,5,12,0,0,45,44,1,0,0,0,45,46,
        1,0,0,0,46,47,1,0,0,0,47,50,3,22,11,0,48,49,5,60,0,0,49,51,3,18,
        9,0,50,48,1,0,0,0,50,51,1,0,0,0,51,54,1,0,0,0,52,53,5,45,0,0,53,
        55,3,16,8,0,54,52,1,0,0,0,54,55,1,0,0,0,55,5,1,0,0,0,56,57,5,9,0,
        0,57,58,3,16,8,0,58,64,3,14,7,0,59,62,5,4,0,0,60,63,3,14,7,0,61,
        63,3,6,3,0,62,60,1,0,0,0,62,61,1,0,0,0,63,65,1,0,0,0,64,59,1,0,0,
        0,64,65,1,0,0,0,65,7,1,0,0,0,66,67,5,20,0,0,67,68,3,16,8,0,68,69,
        3,14,7,0,69,9,1,0,0,0,70,71,5,8,0,0,71,72,3,22,11,0,72,73,5,10,0,
        0,73,74,3,16,8,0,74,75,3,14,7,0,75,11,1,0,0,0,76,77,3,16,8,0,77,
        13,1,0,0,0,78,82,5,67,0,0,79,81,3,2,1,0,80,79,1,0,0,0,81,84,1,0,
        0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,85,86,
        5,68,0,0,86,15,1,0,0,0,87,88,6,8,-1,0,88,89,5,71,0,0,89,90,3,16,
        8,0,90,91,5,72,0,0,91,95,1,0,0,0,92,95,3,22,11,0,93,95,3,20,10,0,
        94,87,1,0,0,0,94,92,1,0,0,0,94,93,1,0,0,0,95,101,1,0,0,0,96,97,10,
        4,0,0,97,98,7,0,0,0,98,100,3,16,8,5,99,96,1,0,0,0,100,103,1,0,0,
        0,101,99,1,0,0,0,101,102,1,0,0,0,102,17,1,0,0,0,103,101,1,0,0,0,
        104,105,7,1,0,0,105,19,1,0,0,0,106,107,7,2,0,0,107,21,1,0,0,0,108,
        109,7,3,0,0,109,23,1,0,0,0,10,27,41,45,50,54,62,64,82,94,101
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!rustParser.__ATN) {
            rustParser.__ATN = new antlr.ATNDeserializer().deserialize(rustParser._serializedATN);
        }

        return rustParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(rustParser.literalNames, rustParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return rustParser.vocabulary;
    }

    private static readonly decisionsToDFA = rustParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(rustParser.EOF, 0)!;
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_program;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public let_stmt(): Let_stmtContext | null {
        return this.getRuleContext(0, Let_stmtContext);
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(rustParser.SEMI, 0);
    }
    public expr_stmt(): Expr_stmtContext | null {
        return this.getRuleContext(0, Expr_stmtContext);
    }
    public if_stmt(): If_stmtContext | null {
        return this.getRuleContext(0, If_stmtContext);
    }
    public while_stmt(): While_stmtContext | null {
        return this.getRuleContext(0, While_stmtContext);
    }
    public for_stmt(): For_stmtContext | null {
        return this.getRuleContext(0, For_stmtContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_stmt;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterStmt) {
             listener.enterStmt(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitStmt) {
             listener.exitStmt(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Let_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_LET(): antlr.TerminalNode {
        return this.getToken(rustParser.KW_LET, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_MUT(): antlr.TerminalNode | null {
        return this.getToken(rustParser.KW_MUT, 0);
    }
    public COLON(): antlr.TerminalNode | null {
        return this.getToken(rustParser.COLON, 0);
    }
    public ty(): TyContext | null {
        return this.getRuleContext(0, TyContext);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(rustParser.EQ, 0);
    }
    public expr(): ExprContext | null {
        return this.getRuleContext(0, ExprContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_let_stmt;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterLet_stmt) {
             listener.enterLet_stmt(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitLet_stmt) {
             listener.exitLet_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitLet_stmt) {
            return visitor.visitLet_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class If_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IF(): antlr.TerminalNode {
        return this.getToken(rustParser.KW_IF, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext[];
    public block(i: number): BlockContext | null;
    public block(i?: number): BlockContext[] | BlockContext | null {
        if (i === undefined) {
            return this.getRuleContexts(BlockContext);
        }

        return this.getRuleContext(i, BlockContext);
    }
    public KW_ELSE(): antlr.TerminalNode | null {
        return this.getToken(rustParser.KW_ELSE, 0);
    }
    public if_stmt(): If_stmtContext | null {
        return this.getRuleContext(0, If_stmtContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_if_stmt;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterIf_stmt) {
             listener.enterIf_stmt(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitIf_stmt) {
             listener.exitIf_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitIf_stmt) {
            return visitor.visitIf_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class While_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WHILE(): antlr.TerminalNode {
        return this.getToken(rustParser.KW_WHILE, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_while_stmt;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterWhile_stmt) {
             listener.enterWhile_stmt(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitWhile_stmt) {
             listener.exitWhile_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitWhile_stmt) {
            return visitor.visitWhile_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class For_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_FOR(): antlr.TerminalNode {
        return this.getToken(rustParser.KW_FOR, 0)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public KW_IN(): antlr.TerminalNode {
        return this.getToken(rustParser.KW_IN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_for_stmt;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterFor_stmt) {
             listener.enterFor_stmt(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitFor_stmt) {
             listener.exitFor_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitFor_stmt) {
            return visitor.visitFor_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expr_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_expr_stmt;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterExpr_stmt) {
             listener.enterExpr_stmt(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitExpr_stmt) {
             listener.exitExpr_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitExpr_stmt) {
            return visitor.visitExpr_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(rustParser.LCURLYBRACE, 0)!;
    }
    public RCURLYBRACE(): antlr.TerminalNode {
        return this.getToken(rustParser.RCURLYBRACE, 0)!;
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_block;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_expr;
    }
    public override copyFrom(ctx: ExprContext): void {
        super.copyFrom(ctx);
    }
}
export class IdentExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterIdentExpr) {
             listener.enterIdentExpr(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitIdentExpr) {
             listener.exitIdentExpr(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitIdentExpr) {
            return visitor.visitIdentExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LiteralExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public literal(): LiteralContext {
        return this.getRuleContext(0, LiteralContext)!;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterLiteralExpr) {
             listener.enterLiteralExpr(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitLiteralExpr) {
             listener.exitLiteralExpr(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitLiteralExpr) {
            return visitor.visitLiteralExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BinaryExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expr(): ExprContext[];
    public expr(i: number): ExprContext | null;
    public expr(i?: number): ExprContext[] | ExprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExprContext);
        }

        return this.getRuleContext(i, ExprContext);
    }
    public PLUS(): antlr.TerminalNode | null {
        return this.getToken(rustParser.PLUS, 0);
    }
    public MINUS(): antlr.TerminalNode | null {
        return this.getToken(rustParser.MINUS, 0);
    }
    public STAR(): antlr.TerminalNode | null {
        return this.getToken(rustParser.STAR, 0);
    }
    public SLASH(): antlr.TerminalNode | null {
        return this.getToken(rustParser.SLASH, 0);
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterBinaryExpr) {
             listener.enterBinaryExpr(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitBinaryExpr) {
             listener.exitBinaryExpr(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitBinaryExpr) {
            return visitor.visitBinaryExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenExprContext extends ExprContext {
    public constructor(ctx: ExprContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.LPAREN, 0)!;
    }
    public expr(): ExprContext {
        return this.getRuleContext(0, ExprContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.RPAREN, 0)!;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterParenExpr) {
             listener.enterParenExpr(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitParenExpr) {
             listener.exitParenExpr(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitParenExpr) {
            return visitor.visitParenExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_I32(): antlr.TerminalNode | null {
        return this.getToken(rustParser.KW_I32, 0);
    }
    public KW_BOOL(): antlr.TerminalNode | null {
        return this.getToken(rustParser.KW_BOOL, 0);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_ty;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterTy) {
             listener.enterTy(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitTy) {
             listener.exitTy(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitTy) {
            return visitor.visitTy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INTEGER_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(rustParser.INTEGER_LITERAL, 0);
    }
    public KW_TRUE(): antlr.TerminalNode | null {
        return this.getToken(rustParser.KW_TRUE, 0);
    }
    public KW_FALSE(): antlr.TerminalNode | null {
        return this.getToken(rustParser.KW_FALSE, 0);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_literal;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NON_KEYWORD_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(rustParser.NON_KEYWORD_IDENTIFIER, 0);
    }
    public RAW_IDENTIFIER(): antlr.TerminalNode | null {
        return this.getToken(rustParser.RAW_IDENTIFIER, 0);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_identifier;
    }
    public override enterRule(listener: rustParserListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: rustParserListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: rustParserVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
