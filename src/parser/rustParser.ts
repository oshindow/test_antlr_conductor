// Generated from rust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { rustListener } from "./rustListener.js";
import { rustVisitor } from "./rustVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class rustParser extends antlr.Parser {
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
    public static readonly RULE_start = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_expression_stmt = 2;
    public static readonly RULE_return_stmt = 3;
    public static readonly RULE_let_stmt = 4;
    public static readonly RULE_function_decl = 5;
    public static readonly RULE_parameter_list = 6;
    public static readonly RULE_block = 7;
    public static readonly RULE_expression = 8;
    public static readonly RULE_ty = 9;
    public static readonly RULE_identifier = 10;
    public static readonly RULE_argument_list = 11;
    public static readonly RULE_number = 12;

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
    public static readonly ruleNames = [
        "start", "statement", "expression_stmt", "return_stmt", "let_stmt", 
        "function_decl", "parameter_list", "block", "expression", "ty", 
        "identifier", "argument_list", "number",
    ];

    public get grammarFileName(): string { return "rust.g4"; }
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
    public start(): StartContext {
        let localContext = new StartContext(this.context, this.state);
        this.enterRule(localContext, 0, rustParser.RULE_start);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 27;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 26;
                this.statement();
                }
                }
                this.state = 29;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 360614) !== 0));
            this.state = 31;
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
    public statement(): StatementContext {
        let localContext = new StatementContext(this.context, this.state);
        this.enterRule(localContext, 2, rustParser.RULE_statement);
        try {
            this.state = 38;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 33;
                this.let_stmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 34;
                this.return_stmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 35;
                this.expression_stmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 36;
                this.function_decl();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 37;
                this.block();
                }
                break;
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
    public expression_stmt(): Expression_stmtContext {
        let localContext = new Expression_stmtContext(this.context, this.state);
        this.enterRule(localContext, 4, rustParser.RULE_expression_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 40;
            this.expression(0);
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
    public return_stmt(): Return_stmtContext {
        let localContext = new Return_stmtContext(this.context, this.state);
        this.enterRule(localContext, 6, rustParser.RULE_return_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 42;
            this.match(rustParser.T__0);
            this.state = 43;
            this.expression(0);
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
        this.enterRule(localContext, 8, rustParser.RULE_let_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 45;
            this.match(rustParser.T__1);
            this.state = 47;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 46;
                this.match(rustParser.MUT);
                }
            }

            this.state = 49;
            this.identifier();
            this.state = 52;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 50;
                this.match(rustParser.T__2);
                this.state = 51;
                this.ty();
                }
            }

            this.state = 56;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 54;
                this.match(rustParser.T__3);
                this.state = 55;
                this.expression(0);
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
    public function_decl(): Function_declContext {
        let localContext = new Function_declContext(this.context, this.state);
        this.enterRule(localContext, 10, rustParser.RULE_function_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 58;
            this.match(rustParser.T__4);
            this.state = 59;
            this.identifier();
            this.state = 60;
            this.match(rustParser.LPAREN);
            this.state = 62;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 15) {
                {
                this.state = 61;
                this.parameter_list();
                }
            }

            this.state = 64;
            this.match(rustParser.RPAREN);
            this.state = 65;
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
    public parameter_list(): Parameter_listContext {
        let localContext = new Parameter_listContext(this.context, this.state);
        this.enterRule(localContext, 12, rustParser.RULE_parameter_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 67;
            this.identifier();
            this.state = 72;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 6) {
                {
                {
                this.state = 68;
                this.match(rustParser.T__5);
                this.state = 69;
                this.identifier();
                }
                }
                this.state = 74;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 14, rustParser.RULE_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 75;
            this.match(rustParser.T__6);
            this.state = 79;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 76;
                    this.statement();
                    }
                    }
                }
                this.state = 81;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            }
            this.state = 83;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 360576) !== 0)) {
                {
                this.state = 82;
                this.expression(0);
                }
            }

            this.state = 85;
            this.match(rustParser.T__7);
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

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 16;
        this.enterRecursionRule(localContext, 16, rustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 102;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                localContext = new SimpleContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 88;
                this.number_();
                }
                break;
            case 2:
                {
                localContext = new VariableReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 89;
                this.identifier();
                }
                break;
            case 3:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 90;
                this.identifier();
                this.state = 91;
                this.match(rustParser.LPAREN);
                this.state = 93;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 360576) !== 0)) {
                    {
                    this.state = 92;
                    this.argument_list();
                    }
                }

                this.state = 95;
                this.match(rustParser.RPAREN);
                }
                break;
            case 4:
                {
                localContext = new BlockExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 97;
                this.block();
                }
                break;
            case 5:
                {
                localContext = new ParenExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 98;
                this.match(rustParser.LPAREN);
                this.state = 99;
                this.expression(0);
                this.state = 100;
                this.match(rustParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 118;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 116;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
                    case 1:
                        {
                        localContext = new MultiplyContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 104;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 105;
                        this.match(rustParser.T__8);
                        this.state = 106;
                        this.expression(10);
                        }
                        break;
                    case 2:
                        {
                        localContext = new DivideContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 107;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 108;
                        this.match(rustParser.T__9);
                        this.state = 109;
                        this.expression(9);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 110;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 111;
                        this.match(rustParser.T__10);
                        this.state = 112;
                        this.expression(8);
                        }
                        break;
                    case 4:
                        {
                        localContext = new SubtractContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 113;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 114;
                        this.match(rustParser.T__11);
                        this.state = 115;
                        this.expression(7);
                        }
                        break;
                    }
                    }
                }
                this.state = 120;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
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
        try {
            this.state = 123;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.NUMBER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 121;
                this.number_();
                }
                break;
            case rustParser.T__12:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 122;
                this.match(rustParser.T__12);
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
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 20, rustParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 125;
            this.match(rustParser.IDENTIFIER);
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
    public argument_list(): Argument_listContext {
        let localContext = new Argument_listContext(this.context, this.state);
        this.enterRule(localContext, 22, rustParser.RULE_argument_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 127;
            this.expression(0);
            this.state = 132;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 6) {
                {
                {
                this.state = 128;
                this.match(rustParser.T__5);
                this.state = 129;
                this.expression(0);
                }
                }
                this.state = 134;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
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
    public number_(): NumberContext {
        let localContext = new NumberContext(this.context, this.state);
        this.enterRule(localContext, 24, rustParser.RULE_number);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
            this.match(rustParser.NUMBER);
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
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 9);
        case 1:
            return this.precpred(this.context, 8);
        case 2:
            return this.precpred(this.context, 7);
        case 3:
            return this.precpred(this.context, 6);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,19,138,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,1,0,4,0,
        28,8,0,11,0,12,0,29,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,39,8,1,1,2,1,
        2,1,3,1,3,1,3,1,4,1,4,3,4,48,8,4,1,4,1,4,1,4,3,4,53,8,4,1,4,1,4,
        3,4,57,8,4,1,5,1,5,1,5,1,5,3,5,63,8,5,1,5,1,5,1,5,1,6,1,6,1,6,5,
        6,71,8,6,10,6,12,6,74,9,6,1,7,1,7,5,7,78,8,7,10,7,12,7,81,9,7,1,
        7,3,7,84,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,94,8,8,1,8,1,8,
        1,8,1,8,1,8,1,8,1,8,3,8,103,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
        1,8,1,8,1,8,1,8,5,8,117,8,8,10,8,12,8,120,9,8,1,9,1,9,3,9,124,8,
        9,1,10,1,10,1,11,1,11,1,11,5,11,131,8,11,10,11,12,11,134,9,11,1,
        12,1,12,1,12,0,1,16,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,0,147,
        0,27,1,0,0,0,2,38,1,0,0,0,4,40,1,0,0,0,6,42,1,0,0,0,8,45,1,0,0,0,
        10,58,1,0,0,0,12,67,1,0,0,0,14,75,1,0,0,0,16,102,1,0,0,0,18,123,
        1,0,0,0,20,125,1,0,0,0,22,127,1,0,0,0,24,135,1,0,0,0,26,28,3,2,1,
        0,27,26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,31,
        1,0,0,0,31,32,5,0,0,1,32,1,1,0,0,0,33,39,3,8,4,0,34,39,3,6,3,0,35,
        39,3,4,2,0,36,39,3,10,5,0,37,39,3,14,7,0,38,33,1,0,0,0,38,34,1,0,
        0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,3,1,0,0,0,40,41,
        3,16,8,0,41,5,1,0,0,0,42,43,5,1,0,0,43,44,3,16,8,0,44,7,1,0,0,0,
        45,47,5,2,0,0,46,48,5,14,0,0,47,46,1,0,0,0,47,48,1,0,0,0,48,49,1,
        0,0,0,49,52,3,20,10,0,50,51,5,3,0,0,51,53,3,18,9,0,52,50,1,0,0,0,
        52,53,1,0,0,0,53,56,1,0,0,0,54,55,5,4,0,0,55,57,3,16,8,0,56,54,1,
        0,0,0,56,57,1,0,0,0,57,9,1,0,0,0,58,59,5,5,0,0,59,60,3,20,10,0,60,
        62,5,18,0,0,61,63,3,12,6,0,62,61,1,0,0,0,62,63,1,0,0,0,63,64,1,0,
        0,0,64,65,5,19,0,0,65,66,3,14,7,0,66,11,1,0,0,0,67,72,3,20,10,0,
        68,69,5,6,0,0,69,71,3,20,10,0,70,68,1,0,0,0,71,74,1,0,0,0,72,70,
        1,0,0,0,72,73,1,0,0,0,73,13,1,0,0,0,74,72,1,0,0,0,75,79,5,7,0,0,
        76,78,3,2,1,0,77,76,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,
        0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,82,84,3,16,8,0,83,82,1,0,0,0,83,
        84,1,0,0,0,84,85,1,0,0,0,85,86,5,8,0,0,86,15,1,0,0,0,87,88,6,8,-1,
        0,88,103,3,24,12,0,89,103,3,20,10,0,90,91,3,20,10,0,91,93,5,18,0,
        0,92,94,3,22,11,0,93,92,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,96,
        5,19,0,0,96,103,1,0,0,0,97,103,3,14,7,0,98,99,5,18,0,0,99,100,3,
        16,8,0,100,101,5,19,0,0,101,103,1,0,0,0,102,87,1,0,0,0,102,89,1,
        0,0,0,102,90,1,0,0,0,102,97,1,0,0,0,102,98,1,0,0,0,103,118,1,0,0,
        0,104,105,10,9,0,0,105,106,5,9,0,0,106,117,3,16,8,10,107,108,10,
        8,0,0,108,109,5,10,0,0,109,117,3,16,8,9,110,111,10,7,0,0,111,112,
        5,11,0,0,112,117,3,16,8,8,113,114,10,6,0,0,114,115,5,12,0,0,115,
        117,3,16,8,7,116,104,1,0,0,0,116,107,1,0,0,0,116,110,1,0,0,0,116,
        113,1,0,0,0,117,120,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,
        17,1,0,0,0,120,118,1,0,0,0,121,124,3,24,12,0,122,124,5,13,0,0,123,
        121,1,0,0,0,123,122,1,0,0,0,124,19,1,0,0,0,125,126,5,15,0,0,126,
        21,1,0,0,0,127,132,3,16,8,0,128,129,5,6,0,0,129,131,3,16,8,0,130,
        128,1,0,0,0,131,134,1,0,0,0,132,130,1,0,0,0,132,133,1,0,0,0,133,
        23,1,0,0,0,134,132,1,0,0,0,135,136,5,16,0,0,136,25,1,0,0,0,15,29,
        38,47,52,56,62,72,79,83,93,102,116,118,123,132
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

export class StartContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(rustParser.EOF, 0)!;
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_start;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterStart) {
             listener.enterStart(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitStart) {
             listener.exitStart(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitStart) {
            return visitor.visitStart(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StatementContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public let_stmt(): Let_stmtContext | null {
        return this.getRuleContext(0, Let_stmtContext);
    }
    public return_stmt(): Return_stmtContext | null {
        return this.getRuleContext(0, Return_stmtContext);
    }
    public expression_stmt(): Expression_stmtContext | null {
        return this.getRuleContext(0, Expression_stmtContext);
    }
    public function_decl(): Function_declContext | null {
        return this.getRuleContext(0, Function_declContext);
    }
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_statement;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterStatement) {
             listener.enterStatement(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitStatement) {
             listener.exitStatement(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Expression_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_expression_stmt;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterExpression_stmt) {
             listener.enterExpression_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitExpression_stmt) {
             listener.exitExpression_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitExpression_stmt) {
            return visitor.visitExpression_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Return_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_return_stmt;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterReturn_stmt) {
             listener.enterReturn_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitReturn_stmt) {
             listener.exitReturn_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitReturn_stmt) {
            return visitor.visitReturn_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Let_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public MUT(): antlr.TerminalNode | null {
        return this.getToken(rustParser.MUT, 0);
    }
    public ty(): TyContext | null {
        return this.getRuleContext(0, TyContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_let_stmt;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterLet_stmt) {
             listener.enterLet_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitLet_stmt) {
             listener.exitLet_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitLet_stmt) {
            return visitor.visitLet_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Function_declContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.RPAREN, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public parameter_list(): Parameter_listContext | null {
        return this.getRuleContext(0, Parameter_listContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_function_decl;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterFunction_decl) {
             listener.enterFunction_decl(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitFunction_decl) {
             listener.exitFunction_decl(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitFunction_decl) {
            return visitor.visitFunction_decl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Parameter_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_parameter_list;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterParameter_list) {
             listener.enterParameter_list(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitParameter_list) {
             listener.exitParameter_list(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitParameter_list) {
            return visitor.visitParameter_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public statement(): StatementContext[];
    public statement(i: number): StatementContext | null;
    public statement(i?: number): StatementContext[] | StatementContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }

        return this.getRuleContext(i, StatementContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_block;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class AddContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterAdd) {
             listener.enterAdd(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitAdd) {
             listener.exitAdd(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitAdd) {
            return visitor.visitAdd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FunctionCallContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.LPAREN, 0)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.RPAREN, 0)!;
    }
    public argument_list(): Argument_listContext | null {
        return this.getRuleContext(0, Argument_listContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterFunctionCall) {
             listener.enterFunctionCall(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitFunctionCall) {
             listener.exitFunctionCall(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitFunctionCall) {
            return visitor.visitFunctionCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubtractContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterSubtract) {
             listener.enterSubtract(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitSubtract) {
             listener.exitSubtract(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitSubtract) {
            return visitor.visitSubtract(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class VariableReferenceContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterVariableReference) {
             listener.enterVariableReference(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitVariableReference) {
             listener.exitVariableReference(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitVariableReference) {
            return visitor.visitVariableReference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SimpleContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public number(): NumberContext {
        return this.getRuleContext(0, NumberContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterSimple) {
             listener.enterSimple(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitSimple) {
             listener.exitSimple(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitSimple) {
            return visitor.visitSimple(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DivideContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterDivide) {
             listener.enterDivide(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitDivide) {
             listener.exitDivide(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitDivide) {
            return visitor.visitDivide(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class BlockExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterBlockExpr) {
             listener.enterBlockExpr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitBlockExpr) {
             listener.exitBlockExpr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitBlockExpr) {
            return visitor.visitBlockExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MultiplyContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterMultiply) {
             listener.enterMultiply(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitMultiply) {
             listener.exitMultiply(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitMultiply) {
            return visitor.visitMultiply(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.LPAREN, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.RPAREN, 0)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterParenExpr) {
             listener.enterParenExpr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitParenExpr) {
             listener.exitParenExpr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
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
    public number(): NumberContext | null {
        return this.getRuleContext(0, NumberContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_ty;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterTy) {
             listener.enterTy(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitTy) {
             listener.exitTy(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitTy) {
            return visitor.visitTy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IdentifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENTIFIER(): antlr.TerminalNode {
        return this.getToken(rustParser.IDENTIFIER, 0)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_identifier;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Argument_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_argument_list;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterArgument_list) {
             listener.enterArgument_list(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitArgument_list) {
             listener.exitArgument_list(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitArgument_list) {
            return visitor.visitArgument_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class NumberContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode {
        return this.getToken(rustParser.NUMBER, 0)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_number;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterNumber) {
             listener.enterNumber(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitNumber) {
             listener.exitNumber(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitNumber) {
            return visitor.visitNumber(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
