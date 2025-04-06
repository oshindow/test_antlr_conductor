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
    public static readonly RULE_start = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_let_stmt = 2;
    public static readonly RULE_assign_stmt = 3;
    public static readonly RULE_return_stmt = 4;
    public static readonly RULE_expression_stmt = 5;
    public static readonly RULE_function_decl = 6;
    public static readonly RULE_parameter_list = 7;
    public static readonly RULE_for_stmt = 8;
    public static readonly RULE_loop_stmt = 9;
    public static readonly RULE_break_stmt = 10;
    public static readonly RULE_block = 11;
    public static readonly RULE_expression = 12;
    public static readonly RULE_ty = 13;
    public static readonly RULE_identifier = 14;
    public static readonly RULE_argument_list = 15;
    public static readonly RULE_number = 16;

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
    public static readonly ruleNames = [
        "start", "statement", "let_stmt", "assign_stmt", "return_stmt", 
        "expression_stmt", "function_decl", "parameter_list", "for_stmt", 
        "loop_stmt", "break_stmt", "block", "expression", "ty", "identifier", 
        "argument_list", "number",
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
            this.state = 35;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 34;
                this.statement();
                }
                }
                this.state = 37;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 11541682) !== 0));
            this.state = 39;
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
            this.state = 50;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 41;
                this.let_stmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 42;
                this.assign_stmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 43;
                this.return_stmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 44;
                this.expression_stmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 45;
                this.function_decl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 46;
                this.for_stmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 47;
                this.loop_stmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 48;
                this.break_stmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 49;
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
    public let_stmt(): Let_stmtContext {
        let localContext = new Let_stmtContext(this.context, this.state);
        this.enterRule(localContext, 4, rustParser.RULE_let_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 52;
            this.match(rustParser.T__0);
            this.state = 54;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 19) {
                {
                this.state = 53;
                this.match(rustParser.MUT);
                }
            }

            this.state = 56;
            this.identifier();
            this.state = 59;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 57;
                this.match(rustParser.T__1);
                this.state = 58;
                this.ty();
                }
            }

            this.state = 63;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 61;
                this.match(rustParser.T__2);
                this.state = 62;
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
    public assign_stmt(): Assign_stmtContext {
        let localContext = new Assign_stmtContext(this.context, this.state);
        this.enterRule(localContext, 6, rustParser.RULE_assign_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 65;
            this.identifier();
            this.state = 66;
            this.match(rustParser.T__2);
            this.state = 67;
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
        this.enterRule(localContext, 8, rustParser.RULE_return_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 69;
            this.match(rustParser.T__3);
            this.state = 70;
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
    public expression_stmt(): Expression_stmtContext {
        let localContext = new Expression_stmtContext(this.context, this.state);
        this.enterRule(localContext, 10, rustParser.RULE_expression_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 72;
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
    public function_decl(): Function_declContext {
        let localContext = new Function_declContext(this.context, this.state);
        this.enterRule(localContext, 12, rustParser.RULE_function_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 74;
            this.match(rustParser.T__4);
            this.state = 75;
            this.identifier();
            this.state = 76;
            this.match(rustParser.LPAREN);
            this.state = 78;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 20) {
                {
                this.state = 77;
                this.parameter_list();
                }
            }

            this.state = 80;
            this.match(rustParser.RPAREN);
            this.state = 81;
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
        this.enterRule(localContext, 14, rustParser.RULE_parameter_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 83;
            this.identifier();
            this.state = 88;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 6) {
                {
                {
                this.state = 84;
                this.match(rustParser.T__5);
                this.state = 85;
                this.identifier();
                }
                }
                this.state = 90;
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
    public for_stmt(): For_stmtContext {
        let localContext = new For_stmtContext(this.context, this.state);
        this.enterRule(localContext, 16, rustParser.RULE_for_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 91;
            this.match(rustParser.T__6);
            this.state = 92;
            this.identifier();
            this.state = 93;
            this.match(rustParser.T__7);
            this.state = 94;
            this.expression(0);
            this.state = 95;
            this.match(rustParser.T__8);
            this.state = 96;
            this.expression(0);
            this.state = 97;
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
    public loop_stmt(): Loop_stmtContext {
        let localContext = new Loop_stmtContext(this.context, this.state);
        this.enterRule(localContext, 18, rustParser.RULE_loop_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 99;
            this.match(rustParser.T__9);
            this.state = 100;
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
    public break_stmt(): Break_stmtContext {
        let localContext = new Break_stmtContext(this.context, this.state);
        this.enterRule(localContext, 20, rustParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 102;
            this.match(rustParser.T__10);
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
        this.enterRule(localContext, 22, rustParser.RULE_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 104;
            this.match(rustParser.T__11);
            this.state = 108;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 105;
                    this.statement();
                    }
                    }
                }
                this.state = 110;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 7, this.context);
            }
            this.state = 112;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 11538432) !== 0)) {
                {
                this.state = 111;
                this.expression(0);
                }
            }

            this.state = 114;
            this.match(rustParser.T__12);
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
        let _startState = 24;
        this.enterRecursionRule(localContext, 24, rustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 131;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 10, this.context) ) {
            case 1:
                {
                localContext = new SimpleContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 117;
                this.number_();
                }
                break;
            case 2:
                {
                localContext = new VariableReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 118;
                this.identifier();
                }
                break;
            case 3:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 119;
                this.identifier();
                this.state = 120;
                this.match(rustParser.LPAREN);
                this.state = 122;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 11538432) !== 0)) {
                    {
                    this.state = 121;
                    this.argument_list();
                    }
                }

                this.state = 124;
                this.match(rustParser.RPAREN);
                }
                break;
            case 4:
                {
                localContext = new BlockExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 126;
                this.block();
                }
                break;
            case 5:
                {
                localContext = new ParenExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 127;
                this.match(rustParser.LPAREN);
                this.state = 128;
                this.expression(0);
                this.state = 129;
                this.match(rustParser.RPAREN);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 147;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 12, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 145;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 11, this.context) ) {
                    case 1:
                        {
                        localContext = new MultiplyContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 133;
                        if (!(this.precpred(this.context, 9))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 9)");
                        }
                        this.state = 134;
                        this.match(rustParser.T__13);
                        this.state = 135;
                        this.expression(10);
                        }
                        break;
                    case 2:
                        {
                        localContext = new DivideContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 136;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 137;
                        this.match(rustParser.T__14);
                        this.state = 138;
                        this.expression(9);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 139;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 140;
                        this.match(rustParser.T__15);
                        this.state = 141;
                        this.expression(8);
                        }
                        break;
                    case 4:
                        {
                        localContext = new SubtractContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 142;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 143;
                        this.match(rustParser.T__16);
                        this.state = 144;
                        this.expression(7);
                        }
                        break;
                    }
                    }
                }
                this.state = 149;
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
        this.enterRule(localContext, 26, rustParser.RULE_ty);
        try {
            this.state = 152;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.NUMBER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 150;
                this.number_();
                }
                break;
            case rustParser.T__17:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 151;
                this.match(rustParser.T__17);
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
        this.enterRule(localContext, 28, rustParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 154;
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
        this.enterRule(localContext, 30, rustParser.RULE_argument_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 156;
            this.expression(0);
            this.state = 161;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 6) {
                {
                {
                this.state = 157;
                this.match(rustParser.T__5);
                this.state = 158;
                this.expression(0);
                }
                }
                this.state = 163;
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
        this.enterRule(localContext, 32, rustParser.RULE_number);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
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
        case 12:
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
        4,1,24,167,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,1,0,4,0,36,8,0,11,0,12,0,37,1,0,1,
        0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,51,8,1,1,2,1,2,3,2,55,
        8,2,1,2,1,2,1,2,3,2,60,8,2,1,2,1,2,3,2,64,8,2,1,3,1,3,1,3,1,3,1,
        4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,3,6,79,8,6,1,6,1,6,1,6,1,7,1,7,
        1,7,5,7,87,8,7,10,7,12,7,90,9,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
        1,9,1,9,1,9,1,10,1,10,1,11,1,11,5,11,107,8,11,10,11,12,11,110,9,
        11,1,11,3,11,113,8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,3,
        12,123,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,132,8,12,1,12,
        1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,146,
        8,12,10,12,12,12,149,9,12,1,13,1,13,3,13,153,8,13,1,14,1,14,1,15,
        1,15,1,15,5,15,160,8,15,10,15,12,15,163,9,15,1,16,1,16,1,16,0,1,
        24,17,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,0,176,0,35,
        1,0,0,0,2,50,1,0,0,0,4,52,1,0,0,0,6,65,1,0,0,0,8,69,1,0,0,0,10,72,
        1,0,0,0,12,74,1,0,0,0,14,83,1,0,0,0,16,91,1,0,0,0,18,99,1,0,0,0,
        20,102,1,0,0,0,22,104,1,0,0,0,24,131,1,0,0,0,26,152,1,0,0,0,28,154,
        1,0,0,0,30,156,1,0,0,0,32,164,1,0,0,0,34,36,3,2,1,0,35,34,1,0,0,
        0,36,37,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,39,1,0,0,0,39,40,
        5,0,0,1,40,1,1,0,0,0,41,51,3,4,2,0,42,51,3,6,3,0,43,51,3,8,4,0,44,
        51,3,10,5,0,45,51,3,12,6,0,46,51,3,16,8,0,47,51,3,18,9,0,48,51,3,
        20,10,0,49,51,3,22,11,0,50,41,1,0,0,0,50,42,1,0,0,0,50,43,1,0,0,
        0,50,44,1,0,0,0,50,45,1,0,0,0,50,46,1,0,0,0,50,47,1,0,0,0,50,48,
        1,0,0,0,50,49,1,0,0,0,51,3,1,0,0,0,52,54,5,1,0,0,53,55,5,19,0,0,
        54,53,1,0,0,0,54,55,1,0,0,0,55,56,1,0,0,0,56,59,3,28,14,0,57,58,
        5,2,0,0,58,60,3,26,13,0,59,57,1,0,0,0,59,60,1,0,0,0,60,63,1,0,0,
        0,61,62,5,3,0,0,62,64,3,24,12,0,63,61,1,0,0,0,63,64,1,0,0,0,64,5,
        1,0,0,0,65,66,3,28,14,0,66,67,5,3,0,0,67,68,3,24,12,0,68,7,1,0,0,
        0,69,70,5,4,0,0,70,71,3,24,12,0,71,9,1,0,0,0,72,73,3,24,12,0,73,
        11,1,0,0,0,74,75,5,5,0,0,75,76,3,28,14,0,76,78,5,23,0,0,77,79,3,
        14,7,0,78,77,1,0,0,0,78,79,1,0,0,0,79,80,1,0,0,0,80,81,5,24,0,0,
        81,82,3,22,11,0,82,13,1,0,0,0,83,88,3,28,14,0,84,85,5,6,0,0,85,87,
        3,28,14,0,86,84,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,
        0,89,15,1,0,0,0,90,88,1,0,0,0,91,92,5,7,0,0,92,93,3,28,14,0,93,94,
        5,8,0,0,94,95,3,24,12,0,95,96,5,9,0,0,96,97,3,24,12,0,97,98,3,22,
        11,0,98,17,1,0,0,0,99,100,5,10,0,0,100,101,3,22,11,0,101,19,1,0,
        0,0,102,103,5,11,0,0,103,21,1,0,0,0,104,108,5,12,0,0,105,107,3,2,
        1,0,106,105,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,0,
        0,0,109,112,1,0,0,0,110,108,1,0,0,0,111,113,3,24,12,0,112,111,1,
        0,0,0,112,113,1,0,0,0,113,114,1,0,0,0,114,115,5,13,0,0,115,23,1,
        0,0,0,116,117,6,12,-1,0,117,132,3,32,16,0,118,132,3,28,14,0,119,
        120,3,28,14,0,120,122,5,23,0,0,121,123,3,30,15,0,122,121,1,0,0,0,
        122,123,1,0,0,0,123,124,1,0,0,0,124,125,5,24,0,0,125,132,1,0,0,0,
        126,132,3,22,11,0,127,128,5,23,0,0,128,129,3,24,12,0,129,130,5,24,
        0,0,130,132,1,0,0,0,131,116,1,0,0,0,131,118,1,0,0,0,131,119,1,0,
        0,0,131,126,1,0,0,0,131,127,1,0,0,0,132,147,1,0,0,0,133,134,10,9,
        0,0,134,135,5,14,0,0,135,146,3,24,12,10,136,137,10,8,0,0,137,138,
        5,15,0,0,138,146,3,24,12,9,139,140,10,7,0,0,140,141,5,16,0,0,141,
        146,3,24,12,8,142,143,10,6,0,0,143,144,5,17,0,0,144,146,3,24,12,
        7,145,133,1,0,0,0,145,136,1,0,0,0,145,139,1,0,0,0,145,142,1,0,0,
        0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,25,1,0,0,0,
        149,147,1,0,0,0,150,153,3,32,16,0,151,153,5,18,0,0,152,150,1,0,0,
        0,152,151,1,0,0,0,153,27,1,0,0,0,154,155,5,20,0,0,155,29,1,0,0,0,
        156,161,3,24,12,0,157,158,5,6,0,0,158,160,3,24,12,0,159,157,1,0,
        0,0,160,163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,31,1,0,0,
        0,163,161,1,0,0,0,164,165,5,21,0,0,165,33,1,0,0,0,15,37,50,54,59,
        63,78,88,108,112,122,131,145,147,152,161
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
    public assign_stmt(): Assign_stmtContext | null {
        return this.getRuleContext(0, Assign_stmtContext);
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
    public for_stmt(): For_stmtContext | null {
        return this.getRuleContext(0, For_stmtContext);
    }
    public loop_stmt(): Loop_stmtContext | null {
        return this.getRuleContext(0, Loop_stmtContext);
    }
    public break_stmt(): Break_stmtContext | null {
        return this.getRuleContext(0, Break_stmtContext);
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


export class Assign_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_assign_stmt;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterAssign_stmt) {
             listener.enterAssign_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitAssign_stmt) {
             listener.exitAssign_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitAssign_stmt) {
            return visitor.visitAssign_stmt(this);
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


export class For_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_for_stmt;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterFor_stmt) {
             listener.enterFor_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitFor_stmt) {
             listener.exitFor_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitFor_stmt) {
            return visitor.visitFor_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Loop_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_loop_stmt;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterLoop_stmt) {
             listener.enterLoop_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitLoop_stmt) {
             listener.exitLoop_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitLoop_stmt) {
            return visitor.visitLoop_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Break_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_break_stmt;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterBreak_stmt) {
             listener.enterBreak_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitBreak_stmt) {
             listener.exitBreak_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitBreak_stmt) {
            return visitor.visitBreak_stmt(this);
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
