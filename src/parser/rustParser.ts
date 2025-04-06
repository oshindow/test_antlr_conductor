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
    public static readonly RULE_start = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_let_stmt = 2;
    public static readonly RULE_assign_stmt = 3;
    public static readonly RULE_return_stmt = 4;
    public static readonly RULE_expression_stmt = 5;
    public static readonly RULE_function_decl = 6;
    public static readonly RULE_parameter_list = 7;
    public static readonly RULE_parameter = 8;
    public static readonly RULE_for_stmt = 9;
    public static readonly RULE_loop_stmt = 10;
    public static readonly RULE_break_stmt = 11;
    public static readonly RULE_block = 12;
    public static readonly RULE_struct_decl = 13;
    public static readonly RULE_field_list = 14;
    public static readonly RULE_field_init_list = 15;
    public static readonly RULE_enum_decl = 16;
    public static readonly RULE_variant_list = 17;
    public static readonly RULE_expression = 18;
    public static readonly RULE_ty = 19;
    public static readonly RULE_identifier = 20;
    public static readonly RULE_argument_list = 21;
    public static readonly RULE_number = 22;
    public static readonly RULE_match_arm_list = 23;
    public static readonly RULE_match_arm = 24;
    public static readonly RULE_match_pattern = 25;

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
    public static readonly ruleNames = [
        "start", "statement", "let_stmt", "assign_stmt", "return_stmt", 
        "expression_stmt", "function_decl", "parameter_list", "parameter", 
        "for_stmt", "loop_stmt", "break_stmt", "block", "struct_decl", "field_list", 
        "field_init_list", "enum_decl", "variant_list", "expression", "ty", 
        "identifier", "argument_list", "number", "match_arm_list", "match_arm", 
        "match_pattern",
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
            this.state = 53;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 52;
                this.statement();
                }
                }
                this.state = 55;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4035033394) !== 0) || _la === 35);
            this.state = 57;
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
            this.state = 70;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 1, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 59;
                this.let_stmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 60;
                this.assign_stmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 61;
                this.return_stmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 62;
                this.expression_stmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 63;
                this.function_decl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 64;
                this.for_stmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 65;
                this.loop_stmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 66;
                this.break_stmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 67;
                this.block();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 68;
                this.struct_decl();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 69;
                this.enum_decl();
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
            this.state = 72;
            this.match(rustParser.T__0);
            this.state = 74;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 27) {
                {
                this.state = 73;
                this.match(rustParser.MUT);
                }
            }

            this.state = 76;
            this.identifier();
            this.state = 79;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 77;
                this.match(rustParser.T__1);
                this.state = 78;
                this.ty();
                }
            }

            this.state = 83;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 81;
                this.match(rustParser.T__2);
                this.state = 82;
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
            this.state = 85;
            this.identifier();
            this.state = 86;
            this.match(rustParser.T__2);
            this.state = 87;
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
            this.state = 89;
            this.match(rustParser.T__3);
            this.state = 90;
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
            this.state = 92;
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
            localContext = new FunctionDeclContext(localContext);
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 94;
            this.match(rustParser.T__4);
            this.state = 95;
            this.identifier();
            this.state = 96;
            this.match(rustParser.LPAREN);
            this.state = 98;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 97;
                this.parameter_list();
                }
            }

            this.state = 100;
            this.match(rustParser.RPAREN);
            this.state = 103;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 6) {
                {
                this.state = 101;
                this.match(rustParser.T__5);
                this.state = 102;
                this.identifier();
                }
            }

            this.state = 105;
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
            this.state = 107;
            this.parameter();
            this.state = 112;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 108;
                this.match(rustParser.T__6);
                this.state = 109;
                this.parameter();
                }
                }
                this.state = 114;
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
    public parameter(): ParameterContext {
        let localContext = new ParameterContext(this.context, this.state);
        this.enterRule(localContext, 16, rustParser.RULE_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 115;
            this.identifier();
            this.state = 118;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 2) {
                {
                this.state = 116;
                this.match(rustParser.T__1);
                this.state = 117;
                this.identifier();
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
    public for_stmt(): For_stmtContext {
        let localContext = new For_stmtContext(this.context, this.state);
        this.enterRule(localContext, 18, rustParser.RULE_for_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 120;
            this.match(rustParser.T__7);
            this.state = 121;
            this.identifier();
            this.state = 122;
            this.match(rustParser.T__8);
            this.state = 123;
            this.expression(0);
            this.state = 124;
            this.match(rustParser.T__9);
            this.state = 125;
            this.expression(0);
            this.state = 126;
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
        this.enterRule(localContext, 20, rustParser.RULE_loop_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 128;
            this.match(rustParser.T__10);
            this.state = 129;
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
        this.enterRule(localContext, 22, rustParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 131;
            this.match(rustParser.T__11);
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
        this.enterRule(localContext, 24, rustParser.RULE_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 133;
            this.match(rustParser.T__12);
            this.state = 137;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 134;
                    this.statement();
                    }
                    }
                }
                this.state = 139;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 9, this.context);
            }
            this.state = 141;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & 4686849) !== 0)) {
                {
                this.state = 140;
                this.expression(0);
                }
            }

            this.state = 143;
            this.match(rustParser.T__13);
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
    public struct_decl(): Struct_declContext {
        let localContext = new Struct_declContext(this.context, this.state);
        this.enterRule(localContext, 26, rustParser.RULE_struct_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 145;
            this.match(rustParser.T__14);
            this.state = 146;
            this.identifier();
            this.state = 147;
            this.match(rustParser.T__12);
            this.state = 149;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 148;
                this.field_list();
                }
            }

            this.state = 151;
            this.match(rustParser.T__13);
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
    public field_list(): Field_listContext {
        let localContext = new Field_listContext(this.context, this.state);
        this.enterRule(localContext, 28, rustParser.RULE_field_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 153;
            this.identifier();
            this.state = 158;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 154;
                this.match(rustParser.T__6);
                this.state = 155;
                this.identifier();
                }
                }
                this.state = 160;
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
    public field_init_list(): Field_init_listContext {
        let localContext = new Field_init_listContext(this.context, this.state);
        this.enterRule(localContext, 30, rustParser.RULE_field_init_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
            this.identifier();
            this.state = 162;
            this.match(rustParser.T__1);
            this.state = 163;
            this.expression(0);
            this.state = 171;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 164;
                this.match(rustParser.T__6);
                this.state = 165;
                this.identifier();
                this.state = 166;
                this.match(rustParser.T__1);
                this.state = 167;
                this.expression(0);
                }
                }
                this.state = 173;
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
    public enum_decl(): Enum_declContext {
        let localContext = new Enum_declContext(this.context, this.state);
        this.enterRule(localContext, 32, rustParser.RULE_enum_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 174;
            this.match(rustParser.T__15);
            this.state = 175;
            this.identifier();
            this.state = 176;
            this.match(rustParser.T__12);
            this.state = 178;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 177;
                this.variant_list();
                }
            }

            this.state = 180;
            this.match(rustParser.T__13);
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
    public variant_list(): Variant_listContext {
        let localContext = new Variant_listContext(this.context, this.state);
        this.enterRule(localContext, 34, rustParser.RULE_variant_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 182;
            this.identifier();
            this.state = 187;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 183;
                    this.match(rustParser.T__6);
                    this.state = 184;
                    this.identifier();
                    }
                    }
                }
                this.state = 189;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            this.state = 191;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 190;
                this.match(rustParser.T__6);
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
        let _startState = 36;
        this.enterRecursionRule(localContext, 36, rustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 227;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 19, this.context) ) {
            case 1:
                {
                localContext = new SimpleContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 194;
                this.number_();
                }
                break;
            case 2:
                {
                localContext = new VariableReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 195;
                this.identifier();
                }
                break;
            case 3:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 196;
                this.identifier();
                this.state = 197;
                this.match(rustParser.LPAREN);
                this.state = 199;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & 4686849) !== 0)) {
                    {
                    this.state = 198;
                    this.argument_list();
                    }
                }

                this.state = 201;
                this.match(rustParser.RPAREN);
                }
                break;
            case 4:
                {
                localContext = new BlockExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 203;
                this.block();
                }
                break;
            case 5:
                {
                localContext = new ParenExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 204;
                this.match(rustParser.LPAREN);
                this.state = 205;
                this.expression(0);
                this.state = 206;
                this.match(rustParser.RPAREN);
                }
                break;
            case 6:
                {
                localContext = new StructInitContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 208;
                this.identifier();
                this.state = 209;
                this.match(rustParser.T__12);
                this.state = 211;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                    this.state = 210;
                    this.field_init_list();
                    }
                }

                this.state = 213;
                this.match(rustParser.T__13);
                }
                break;
            case 7:
                {
                localContext = new StringLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 215;
                this.match(rustParser.STRING);
                }
                break;
            case 8:
                {
                localContext = new BoolLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 216;
                this.match(rustParser.BOOL);
                }
                break;
            case 9:
                {
                localContext = new EnumAccessContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 217;
                this.identifier();
                this.state = 218;
                this.match(rustParser.T__21);
                this.state = 219;
                this.identifier();
                }
                break;
            case 10:
                {
                localContext = new MatchExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 221;
                this.match(rustParser.T__22);
                this.state = 222;
                this.expression(0);
                this.state = 223;
                this.match(rustParser.T__12);
                this.state = 224;
                this.match_arm_list();
                this.state = 225;
                this.match(rustParser.T__13);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 246;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 244;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
                    case 1:
                        {
                        localContext = new MultiplyContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 229;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 230;
                        this.match(rustParser.T__16);
                        this.state = 231;
                        this.expression(16);
                        }
                        break;
                    case 2:
                        {
                        localContext = new DivideContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 232;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 233;
                        this.match(rustParser.T__17);
                        this.state = 234;
                        this.expression(15);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 235;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 236;
                        this.match(rustParser.T__18);
                        this.state = 237;
                        this.expression(14);
                        }
                        break;
                    case 4:
                        {
                        localContext = new SubtractContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 238;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 239;
                        this.match(rustParser.T__19);
                        this.state = 240;
                        this.expression(13);
                        }
                        break;
                    case 5:
                        {
                        localContext = new FieldAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 241;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 242;
                        this.match(rustParser.T__20);
                        this.state = 243;
                        this.identifier();
                        }
                        break;
                    }
                    }
                }
                this.state = 248;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
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
        this.enterRule(localContext, 38, rustParser.RULE_ty);
        try {
            this.state = 251;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.NUMBER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 249;
                this.number_();
                }
                break;
            case rustParser.T__23:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 250;
                this.match(rustParser.T__23);
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
        this.enterRule(localContext, 40, rustParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 253;
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
        this.enterRule(localContext, 42, rustParser.RULE_argument_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 255;
            this.expression(0);
            this.state = 260;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 7) {
                {
                {
                this.state = 256;
                this.match(rustParser.T__6);
                this.state = 257;
                this.expression(0);
                }
                }
                this.state = 262;
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
        this.enterRule(localContext, 44, rustParser.RULE_number);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 263;
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
    public match_arm_list(): Match_arm_listContext {
        let localContext = new Match_arm_listContext(this.context, this.state);
        this.enterRule(localContext, 46, rustParser.RULE_match_arm_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 265;
            this.match_arm();
            this.state = 270;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 266;
                    this.match(rustParser.T__6);
                    this.state = 267;
                    this.match_arm();
                    }
                    }
                }
                this.state = 272;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 24, this.context);
            }
            this.state = 274;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 273;
                this.match(rustParser.T__6);
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
    public match_arm(): Match_armContext {
        let localContext = new Match_armContext(this.context, this.state);
        this.enterRule(localContext, 48, rustParser.RULE_match_arm);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 276;
            this.match_pattern();
            this.state = 277;
            this.match(rustParser.T__24);
            this.state = 278;
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
    public match_pattern(): Match_patternContext {
        let localContext = new Match_patternContext(this.context, this.state);
        this.enterRule(localContext, 50, rustParser.RULE_match_pattern);
        try {
            this.state = 286;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.NUMBER:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 280;
                this.match(rustParser.NUMBER);
                }
                break;
            case rustParser.T__25:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 281;
                this.match(rustParser.T__25);
                }
                break;
            case rustParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 282;
                this.identifier();
                this.state = 283;
                this.match(rustParser.T__21);
                this.state = 284;
                this.identifier();
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 18:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 15);
        case 1:
            return this.precpred(this.context, 14);
        case 2:
            return this.precpred(this.context, 13);
        case 3:
            return this.precpred(this.context, 12);
        case 4:
            return this.precpred(this.context, 5);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,36,289,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,4,0,54,
        8,0,11,0,12,0,55,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,1,3,1,71,8,1,1,2,1,2,3,2,75,8,2,1,2,1,2,1,2,3,2,80,8,2,1,2,1,2,
        3,2,84,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,3,
        6,99,8,6,1,6,1,6,1,6,3,6,104,8,6,1,6,1,6,1,7,1,7,1,7,5,7,111,8,7,
        10,7,12,7,114,9,7,1,8,1,8,1,8,3,8,119,8,8,1,9,1,9,1,9,1,9,1,9,1,
        9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,5,12,136,8,12,10,12,
        12,12,139,9,12,1,12,3,12,142,8,12,1,12,1,12,1,13,1,13,1,13,1,13,
        3,13,150,8,13,1,13,1,13,1,14,1,14,1,14,5,14,157,8,14,10,14,12,14,
        160,9,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,170,8,15,10,
        15,12,15,173,9,15,1,16,1,16,1,16,1,16,3,16,179,8,16,1,16,1,16,1,
        17,1,17,1,17,5,17,186,8,17,10,17,12,17,189,9,17,1,17,3,17,192,8,
        17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,200,8,18,1,18,1,18,1,18,1,
        18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,212,8,18,1,18,1,18,1,18,1,
        18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,228,8,
        18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
        18,1,18,1,18,5,18,245,8,18,10,18,12,18,248,9,18,1,19,1,19,3,19,252,
        8,19,1,20,1,20,1,21,1,21,1,21,5,21,259,8,21,10,21,12,21,262,9,21,
        1,22,1,22,1,23,1,23,1,23,5,23,269,8,23,10,23,12,23,272,9,23,1,23,
        3,23,275,8,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,
        3,25,287,8,25,1,25,0,1,36,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
        28,30,32,34,36,38,40,42,44,46,48,50,0,0,310,0,53,1,0,0,0,2,70,1,
        0,0,0,4,72,1,0,0,0,6,85,1,0,0,0,8,89,1,0,0,0,10,92,1,0,0,0,12,94,
        1,0,0,0,14,107,1,0,0,0,16,115,1,0,0,0,18,120,1,0,0,0,20,128,1,0,
        0,0,22,131,1,0,0,0,24,133,1,0,0,0,26,145,1,0,0,0,28,153,1,0,0,0,
        30,161,1,0,0,0,32,174,1,0,0,0,34,182,1,0,0,0,36,227,1,0,0,0,38,251,
        1,0,0,0,40,253,1,0,0,0,42,255,1,0,0,0,44,263,1,0,0,0,46,265,1,0,
        0,0,48,276,1,0,0,0,50,286,1,0,0,0,52,54,3,2,1,0,53,52,1,0,0,0,54,
        55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,0,0,56,57,1,0,0,0,57,58,5,0,0,
        1,58,1,1,0,0,0,59,71,3,4,2,0,60,71,3,6,3,0,61,71,3,8,4,0,62,71,3,
        10,5,0,63,71,3,12,6,0,64,71,3,18,9,0,65,71,3,20,10,0,66,71,3,22,
        11,0,67,71,3,24,12,0,68,71,3,26,13,0,69,71,3,32,16,0,70,59,1,0,0,
        0,70,60,1,0,0,0,70,61,1,0,0,0,70,62,1,0,0,0,70,63,1,0,0,0,70,64,
        1,0,0,0,70,65,1,0,0,0,70,66,1,0,0,0,70,67,1,0,0,0,70,68,1,0,0,0,
        70,69,1,0,0,0,71,3,1,0,0,0,72,74,5,1,0,0,73,75,5,27,0,0,74,73,1,
        0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,79,3,40,20,0,77,78,5,2,0,0,
        78,80,3,38,19,0,79,77,1,0,0,0,79,80,1,0,0,0,80,83,1,0,0,0,81,82,
        5,3,0,0,82,84,3,36,18,0,83,81,1,0,0,0,83,84,1,0,0,0,84,5,1,0,0,0,
        85,86,3,40,20,0,86,87,5,3,0,0,87,88,3,36,18,0,88,7,1,0,0,0,89,90,
        5,4,0,0,90,91,3,36,18,0,91,9,1,0,0,0,92,93,3,36,18,0,93,11,1,0,0,
        0,94,95,5,5,0,0,95,96,3,40,20,0,96,98,5,35,0,0,97,99,3,14,7,0,98,
        97,1,0,0,0,98,99,1,0,0,0,99,100,1,0,0,0,100,103,5,36,0,0,101,102,
        5,6,0,0,102,104,3,40,20,0,103,101,1,0,0,0,103,104,1,0,0,0,104,105,
        1,0,0,0,105,106,3,24,12,0,106,13,1,0,0,0,107,112,3,16,8,0,108,109,
        5,7,0,0,109,111,3,16,8,0,110,108,1,0,0,0,111,114,1,0,0,0,112,110,
        1,0,0,0,112,113,1,0,0,0,113,15,1,0,0,0,114,112,1,0,0,0,115,118,3,
        40,20,0,116,117,5,2,0,0,117,119,3,40,20,0,118,116,1,0,0,0,118,119,
        1,0,0,0,119,17,1,0,0,0,120,121,5,8,0,0,121,122,3,40,20,0,122,123,
        5,9,0,0,123,124,3,36,18,0,124,125,5,10,0,0,125,126,3,36,18,0,126,
        127,3,24,12,0,127,19,1,0,0,0,128,129,5,11,0,0,129,130,3,24,12,0,
        130,21,1,0,0,0,131,132,5,12,0,0,132,23,1,0,0,0,133,137,5,13,0,0,
        134,136,3,2,1,0,135,134,1,0,0,0,136,139,1,0,0,0,137,135,1,0,0,0,
        137,138,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,140,142,3,36,18,
        0,141,140,1,0,0,0,141,142,1,0,0,0,142,143,1,0,0,0,143,144,5,14,0,
        0,144,25,1,0,0,0,145,146,5,15,0,0,146,147,3,40,20,0,147,149,5,13,
        0,0,148,150,3,28,14,0,149,148,1,0,0,0,149,150,1,0,0,0,150,151,1,
        0,0,0,151,152,5,14,0,0,152,27,1,0,0,0,153,158,3,40,20,0,154,155,
        5,7,0,0,155,157,3,40,20,0,156,154,1,0,0,0,157,160,1,0,0,0,158,156,
        1,0,0,0,158,159,1,0,0,0,159,29,1,0,0,0,160,158,1,0,0,0,161,162,3,
        40,20,0,162,163,5,2,0,0,163,171,3,36,18,0,164,165,5,7,0,0,165,166,
        3,40,20,0,166,167,5,2,0,0,167,168,3,36,18,0,168,170,1,0,0,0,169,
        164,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,
        31,1,0,0,0,173,171,1,0,0,0,174,175,5,16,0,0,175,176,3,40,20,0,176,
        178,5,13,0,0,177,179,3,34,17,0,178,177,1,0,0,0,178,179,1,0,0,0,179,
        180,1,0,0,0,180,181,5,14,0,0,181,33,1,0,0,0,182,187,3,40,20,0,183,
        184,5,7,0,0,184,186,3,40,20,0,185,183,1,0,0,0,186,189,1,0,0,0,187,
        185,1,0,0,0,187,188,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,190,
        192,5,7,0,0,191,190,1,0,0,0,191,192,1,0,0,0,192,35,1,0,0,0,193,194,
        6,18,-1,0,194,228,3,44,22,0,195,228,3,40,20,0,196,197,3,40,20,0,
        197,199,5,35,0,0,198,200,3,42,21,0,199,198,1,0,0,0,199,200,1,0,0,
        0,200,201,1,0,0,0,201,202,5,36,0,0,202,228,1,0,0,0,203,228,3,24,
        12,0,204,205,5,35,0,0,205,206,3,36,18,0,206,207,5,36,0,0,207,228,
        1,0,0,0,208,209,3,40,20,0,209,211,5,13,0,0,210,212,3,30,15,0,211,
        210,1,0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,214,5,14,0,0,214,
        228,1,0,0,0,215,228,5,28,0,0,216,228,5,29,0,0,217,218,3,40,20,0,
        218,219,5,22,0,0,219,220,3,40,20,0,220,228,1,0,0,0,221,222,5,23,
        0,0,222,223,3,36,18,0,223,224,5,13,0,0,224,225,3,46,23,0,225,226,
        5,14,0,0,226,228,1,0,0,0,227,193,1,0,0,0,227,195,1,0,0,0,227,196,
        1,0,0,0,227,203,1,0,0,0,227,204,1,0,0,0,227,208,1,0,0,0,227,215,
        1,0,0,0,227,216,1,0,0,0,227,217,1,0,0,0,227,221,1,0,0,0,228,246,
        1,0,0,0,229,230,10,15,0,0,230,231,5,17,0,0,231,245,3,36,18,16,232,
        233,10,14,0,0,233,234,5,18,0,0,234,245,3,36,18,15,235,236,10,13,
        0,0,236,237,5,19,0,0,237,245,3,36,18,14,238,239,10,12,0,0,239,240,
        5,20,0,0,240,245,3,36,18,13,241,242,10,5,0,0,242,243,5,21,0,0,243,
        245,3,40,20,0,244,229,1,0,0,0,244,232,1,0,0,0,244,235,1,0,0,0,244,
        238,1,0,0,0,244,241,1,0,0,0,245,248,1,0,0,0,246,244,1,0,0,0,246,
        247,1,0,0,0,247,37,1,0,0,0,248,246,1,0,0,0,249,252,3,44,22,0,250,
        252,5,24,0,0,251,249,1,0,0,0,251,250,1,0,0,0,252,39,1,0,0,0,253,
        254,5,30,0,0,254,41,1,0,0,0,255,260,3,36,18,0,256,257,5,7,0,0,257,
        259,3,36,18,0,258,256,1,0,0,0,259,262,1,0,0,0,260,258,1,0,0,0,260,
        261,1,0,0,0,261,43,1,0,0,0,262,260,1,0,0,0,263,264,5,31,0,0,264,
        45,1,0,0,0,265,270,3,48,24,0,266,267,5,7,0,0,267,269,3,48,24,0,268,
        266,1,0,0,0,269,272,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,
        274,1,0,0,0,272,270,1,0,0,0,273,275,5,7,0,0,274,273,1,0,0,0,274,
        275,1,0,0,0,275,47,1,0,0,0,276,277,3,50,25,0,277,278,5,25,0,0,278,
        279,3,36,18,0,279,49,1,0,0,0,280,287,5,31,0,0,281,287,5,26,0,0,282,
        283,3,40,20,0,283,284,5,22,0,0,284,285,3,40,20,0,285,287,1,0,0,0,
        286,280,1,0,0,0,286,281,1,0,0,0,286,282,1,0,0,0,287,51,1,0,0,0,27,
        55,70,74,79,83,98,103,112,118,137,141,149,158,171,178,187,191,199,
        211,227,244,246,251,260,270,274,286
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
    public struct_decl(): Struct_declContext | null {
        return this.getRuleContext(0, Struct_declContext);
    }
    public enum_decl(): Enum_declContext | null {
        return this.getRuleContext(0, Enum_declContext);
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
    public override get ruleIndex(): number {
        return rustParser.RULE_function_decl;
    }
    public override copyFrom(ctx: Function_declContext): void {
        super.copyFrom(ctx);
    }
}
export class FunctionDeclContext extends Function_declContext {
    public constructor(ctx: Function_declContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
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
    public override enterRule(listener: rustListener): void {
        if(listener.enterFunctionDecl) {
             listener.enterFunctionDecl(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitFunctionDecl) {
             listener.exitFunctionDecl(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitFunctionDecl) {
            return visitor.visitFunctionDecl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Parameter_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext | null;
    public parameter(i?: number): ParameterContext[] | ParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }

        return this.getRuleContext(i, ParameterContext);
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


export class ParameterContext extends antlr.ParserRuleContext {
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
        return rustParser.RULE_parameter;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterParameter) {
             listener.enterParameter(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitParameter) {
             listener.exitParameter(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
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


export class Struct_declContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public field_list(): Field_listContext | null {
        return this.getRuleContext(0, Field_listContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_struct_decl;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterStruct_decl) {
             listener.enterStruct_decl(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitStruct_decl) {
             listener.exitStruct_decl(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitStruct_decl) {
            return visitor.visitStruct_decl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Field_listContext extends antlr.ParserRuleContext {
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
        return rustParser.RULE_field_list;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterField_list) {
             listener.enterField_list(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitField_list) {
             listener.exitField_list(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitField_list) {
            return visitor.visitField_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Field_init_listContext extends antlr.ParserRuleContext {
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
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_field_init_list;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterField_init_list) {
             listener.enterField_init_list(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitField_init_list) {
             listener.exitField_init_list(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitField_init_list) {
            return visitor.visitField_init_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Enum_declContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public variant_list(): Variant_listContext | null {
        return this.getRuleContext(0, Variant_listContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_enum_decl;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterEnum_decl) {
             listener.enterEnum_decl(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitEnum_decl) {
             listener.exitEnum_decl(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitEnum_decl) {
            return visitor.visitEnum_decl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Variant_listContext extends antlr.ParserRuleContext {
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
        return rustParser.RULE_variant_list;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterVariant_list) {
             listener.enterVariant_list(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitVariant_list) {
             listener.exitVariant_list(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitVariant_list) {
            return visitor.visitVariant_list(this);
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
export class FieldAccessContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterFieldAccess) {
             listener.enterFieldAccess(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitFieldAccess) {
             listener.exitFieldAccess(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitFieldAccess) {
            return visitor.visitFieldAccess(this);
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
export class MatchExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public match_arm_list(): Match_arm_listContext {
        return this.getRuleContext(0, Match_arm_listContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterMatchExpr) {
             listener.enterMatchExpr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitMatchExpr) {
             listener.exitMatchExpr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitMatchExpr) {
            return visitor.visitMatchExpr(this);
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
export class BoolLiteralContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public BOOL(): antlr.TerminalNode {
        return this.getToken(rustParser.BOOL, 0)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterBoolLiteral) {
             listener.enterBoolLiteral(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitBoolLiteral) {
             listener.exitBoolLiteral(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitBoolLiteral) {
            return visitor.visitBoolLiteral(this);
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
export class StructInitContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public field_init_list(): Field_init_listContext | null {
        return this.getRuleContext(0, Field_init_listContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterStructInit) {
             listener.enterStructInit(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitStructInit) {
             listener.exitStructInit(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitStructInit) {
            return visitor.visitStructInit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(rustParser.STRING, 0)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
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
export class EnumAccessContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext[];
    public identifier(i: number): IdentifierContext | null;
    public identifier(i?: number): IdentifierContext[] | IdentifierContext | null {
        if (i === undefined) {
            return this.getRuleContexts(IdentifierContext);
        }

        return this.getRuleContext(i, IdentifierContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterEnumAccess) {
             listener.enterEnumAccess(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitEnumAccess) {
             listener.exitEnumAccess(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitEnumAccess) {
            return visitor.visitEnumAccess(this);
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


export class Match_arm_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public match_arm(): Match_armContext[];
    public match_arm(i: number): Match_armContext | null;
    public match_arm(i?: number): Match_armContext[] | Match_armContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Match_armContext);
        }

        return this.getRuleContext(i, Match_armContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_match_arm_list;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterMatch_arm_list) {
             listener.enterMatch_arm_list(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitMatch_arm_list) {
             listener.exitMatch_arm_list(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitMatch_arm_list) {
            return visitor.visitMatch_arm_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Match_armContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public match_pattern(): Match_patternContext {
        return this.getRuleContext(0, Match_patternContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_match_arm;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterMatch_arm) {
             listener.enterMatch_arm(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitMatch_arm) {
             listener.exitMatch_arm(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitMatch_arm) {
            return visitor.visitMatch_arm(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Match_patternContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMBER(): antlr.TerminalNode | null {
        return this.getToken(rustParser.NUMBER, 0);
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
        return rustParser.RULE_match_pattern;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterMatch_pattern) {
             listener.enterMatch_pattern(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitMatch_pattern) {
             listener.exitMatch_pattern(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitMatch_pattern) {
            return visitor.visitMatch_pattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
