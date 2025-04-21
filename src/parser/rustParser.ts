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
    public static readonly T__26 = 27;
    public static readonly T__27 = 28;
    public static readonly T__28 = 29;
    public static readonly T__29 = 30;
    public static readonly T__30 = 31;
    public static readonly T__31 = 32;
    public static readonly T__32 = 33;
    public static readonly T__33 = 34;
    public static readonly T__34 = 35;
    public static readonly T__35 = 36;
    public static readonly T__36 = 37;
    public static readonly T__37 = 38;
    public static readonly T__38 = 39;
    public static readonly T__39 = 40;
    public static readonly T__40 = 41;
    public static readonly T__41 = 42;
    public static readonly T__42 = 43;
    public static readonly T__43 = 44;
    public static readonly MUT = 45;
    public static readonly KW_ELSE = 46;
    public static readonly STRING = 47;
    public static readonly BOOL = 48;
    public static readonly IDENTIFIER = 49;
    public static readonly NUMBER = 50;
    public static readonly LINE_COMMENT = 51;
    public static readonly BLOCK_COMMENT = 52;
    public static readonly WS = 53;
    public static readonly LPAREN = 54;
    public static readonly RPAREN = 55;
    public static readonly RULE_start = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_let_stmt = 2;
    public static readonly RULE_assign_stmt = 3;
    public static readonly RULE_lhs = 4;
    public static readonly RULE_return_stmt = 5;
    public static readonly RULE_expression_stmt = 6;
    public static readonly RULE_function_decl = 7;
    public static readonly RULE_parameter_list = 8;
    public static readonly RULE_parameter = 9;
    public static readonly RULE_for_stmt = 10;
    public static readonly RULE_loop_stmt = 11;
    public static readonly RULE_break_stmt = 12;
    public static readonly RULE_block = 13;
    public static readonly RULE_struct_decl = 14;
    public static readonly RULE_field_list = 15;
    public static readonly RULE_field_decl = 16;
    public static readonly RULE_field_init_list = 17;
    public static readonly RULE_field_init = 18;
    public static readonly RULE_enum_decl = 19;
    public static readonly RULE_variant_list = 20;
    public static readonly RULE_variant = 21;
    public static readonly RULE_while_stmt = 22;
    public static readonly RULE_if_stmt = 23;
    public static readonly RULE_expression = 24;
    public static readonly RULE_ty = 25;
    public static readonly RULE_identifier = 26;
    public static readonly RULE_argument_list = 27;
    public static readonly RULE_number = 28;
    public static readonly RULE_match_arm_list = 29;
    public static readonly RULE_match_arm = 30;
    public static readonly RULE_match_pattern = 31;
    public static readonly RULE_pattern_field_list = 32;
    public static readonly RULE_pattern_field = 33;

    public static readonly literalNames = [
        null, "';'", "'let'", "':'", "'='", "'*'", "'return'", "'fn'", "'->'", 
        "','", "'for'", "'in'", "'..'", "'loop'", "'break'", "'{'", "'}'", 
        "'struct'", "'enum'", "'while'", "'if'", "'!'", "'-'", "'&'", "'&&'", 
        "'||'", "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'+'", "'/'", 
        "'%'", "'match'", "'println!'", "'.'", "'::'", "'number'", "'bool'", 
        "'char'", "'String'", "'=>'", "'_'", "'mut'", "'else'", null, null, 
        null, null, null, null, null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "MUT", "KW_ELSE", "STRING", "BOOL", "IDENTIFIER", "NUMBER", 
        "LINE_COMMENT", "BLOCK_COMMENT", "WS", "LPAREN", "RPAREN"
    ];
    public static readonly ruleNames = [
        "start", "statement", "let_stmt", "assign_stmt", "lhs", "return_stmt", 
        "expression_stmt", "function_decl", "parameter_list", "parameter", 
        "for_stmt", "loop_stmt", "break_stmt", "block", "struct_decl", "field_list", 
        "field_decl", "field_init_list", "field_init", "enum_decl", "variant_list", 
        "variant", "while_stmt", "if_stmt", "expression", "ty", "identifier", 
        "argument_list", "number", "match_arm_list", "match_arm", "match_pattern", 
        "pattern_field_list", "pattern_field",
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
            this.state = 69;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 68;
                this.statement();
                }
                }
                this.state = 71;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 16704740) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 585731) !== 0));
            this.state = 73;
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
        let _la: number;
        try {
            this.state = 103;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 75;
                this.let_stmt();
                this.state = 77;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 76;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 79;
                this.assign_stmt();
                this.state = 81;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 80;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 83;
                this.return_stmt();
                this.state = 85;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 84;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 87;
                this.expression_stmt();
                this.state = 89;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 88;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 91;
                this.function_decl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 92;
                this.for_stmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 93;
                this.loop_stmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 94;
                this.break_stmt();
                this.state = 96;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 95;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 98;
                this.block();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 99;
                this.struct_decl();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 100;
                this.enum_decl();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 101;
                this.while_stmt();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 102;
                this.if_stmt();
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
            this.state = 105;
            this.match(rustParser.T__1);
            this.state = 107;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 106;
                this.match(rustParser.MUT);
                }
            }

            this.state = 109;
            this.identifier();
            this.state = 112;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 110;
                this.match(rustParser.T__2);
                this.state = 111;
                this.ty();
                }
            }

            this.state = 116;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 114;
                this.match(rustParser.T__3);
                this.state = 115;
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
            this.state = 118;
            this.lhs();
            this.state = 119;
            this.match(rustParser.T__3);
            this.state = 120;
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
    public lhs(): LhsContext {
        let localContext = new LhsContext(this.context, this.state);
        this.enterRule(localContext, 8, rustParser.RULE_lhs);
        try {
            this.state = 125;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.T__4:
                localContext = new DerefLhsContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 122;
                this.match(rustParser.T__4);
                this.state = 123;
                this.expression(0);
                }
                break;
            case rustParser.IDENTIFIER:
                localContext = new IdentLhsContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 124;
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
    public return_stmt(): Return_stmtContext {
        let localContext = new Return_stmtContext(this.context, this.state);
        this.enterRule(localContext, 10, rustParser.RULE_return_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 127;
            this.match(rustParser.T__5);
            this.state = 128;
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
        this.enterRule(localContext, 12, rustParser.RULE_expression_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 130;
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
        this.enterRule(localContext, 14, rustParser.RULE_function_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 132;
            this.match(rustParser.T__6);
            this.state = 133;
            this.identifier();
            this.state = 134;
            this.match(rustParser.LPAREN);
            this.state = 136;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 135;
                this.parameter_list();
                }
            }

            this.state = 138;
            this.match(rustParser.RPAREN);
            this.state = 141;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 139;
                this.match(rustParser.T__7);
                this.state = 140;
                this.ty();
                }
            }

            this.state = 143;
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
        this.enterRule(localContext, 16, rustParser.RULE_parameter_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 145;
            this.parameter();
            this.state = 150;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 9) {
                {
                {
                this.state = 146;
                this.match(rustParser.T__8);
                this.state = 147;
                this.parameter();
                }
                }
                this.state = 152;
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
        this.enterRule(localContext, 18, rustParser.RULE_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 153;
            this.identifier();
            this.state = 156;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 154;
                this.match(rustParser.T__2);
                this.state = 155;
                this.ty();
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
        this.enterRule(localContext, 20, rustParser.RULE_for_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.match(rustParser.T__9);
            this.state = 159;
            this.identifier();
            this.state = 160;
            this.match(rustParser.T__10);
            this.state = 161;
            this.expression(0);
            this.state = 162;
            this.match(rustParser.T__11);
            this.state = 163;
            this.expression(0);
            this.state = 164;
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
        this.enterRule(localContext, 22, rustParser.RULE_loop_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 166;
            this.match(rustParser.T__12);
            this.state = 167;
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
        this.enterRule(localContext, 24, rustParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 169;
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
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 26, rustParser.RULE_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 171;
            this.match(rustParser.T__14);
            this.state = 175;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 172;
                    this.statement();
                    }
                    }
                }
                this.state = 177;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            this.state = 179;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14712864) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 585731) !== 0)) {
                {
                this.state = 178;
                this.expression(0);
                }
            }

            this.state = 181;
            this.match(rustParser.T__15);
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
        this.enterRule(localContext, 28, rustParser.RULE_struct_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 183;
            this.match(rustParser.T__16);
            this.state = 184;
            this.identifier();
            this.state = 185;
            this.match(rustParser.T__14);
            this.state = 187;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 186;
                this.field_list();
                }
            }

            this.state = 189;
            this.match(rustParser.T__15);
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
        this.enterRule(localContext, 30, rustParser.RULE_field_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 191;
            this.field_decl();
            this.state = 196;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 192;
                    this.match(rustParser.T__8);
                    this.state = 193;
                    this.field_decl();
                    }
                    }
                }
                this.state = 198;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            }
            this.state = 200;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 199;
                this.match(rustParser.T__8);
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
    public field_decl(): Field_declContext {
        let localContext = new Field_declContext(this.context, this.state);
        this.enterRule(localContext, 32, rustParser.RULE_field_decl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 202;
            this.identifier();
            this.state = 203;
            this.match(rustParser.T__2);
            this.state = 204;
            this.ty();
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
        this.enterRule(localContext, 34, rustParser.RULE_field_init_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 206;
            this.field_init();
            this.state = 211;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 207;
                    this.match(rustParser.T__8);
                    this.state = 208;
                    this.field_init();
                    }
                    }
                }
                this.state = 213;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            }
            this.state = 215;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 214;
                this.match(rustParser.T__8);
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
    public field_init(): Field_initContext {
        let localContext = new Field_initContext(this.context, this.state);
        this.enterRule(localContext, 36, rustParser.RULE_field_init);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 217;
            this.identifier();
            this.state = 218;
            this.match(rustParser.T__2);
            this.state = 219;
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
    public enum_decl(): Enum_declContext {
        let localContext = new Enum_declContext(this.context, this.state);
        this.enterRule(localContext, 38, rustParser.RULE_enum_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 221;
            this.match(rustParser.T__17);
            this.state = 222;
            this.identifier();
            this.state = 223;
            this.match(rustParser.T__14);
            this.state = 225;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 49) {
                {
                this.state = 224;
                this.variant_list();
                }
            }

            this.state = 227;
            this.match(rustParser.T__15);
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
        this.enterRule(localContext, 40, rustParser.RULE_variant_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 229;
            this.variant();
            this.state = 234;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 230;
                    this.match(rustParser.T__8);
                    this.state = 231;
                    this.variant();
                    }
                    }
                }
                this.state = 236;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            }
            this.state = 238;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 237;
                this.match(rustParser.T__8);
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
    public variant(): VariantContext {
        let localContext = new VariantContext(this.context, this.state);
        this.enterRule(localContext, 42, rustParser.RULE_variant);
        let _la: number;
        try {
            this.state = 248;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                localContext = new SimpleVariantContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 240;
                this.identifier();
                }
                break;
            case 2:
                localContext = new StructVariantContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 241;
                this.identifier();
                this.state = 242;
                this.match(rustParser.T__14);
                this.state = 244;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                    this.state = 243;
                    this.field_list();
                    }
                }

                this.state = 246;
                this.match(rustParser.T__15);
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
    public while_stmt(): While_stmtContext {
        let localContext = new While_stmtContext(this.context, this.state);
        this.enterRule(localContext, 44, rustParser.RULE_while_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 250;
            this.match(rustParser.T__18);
            this.state = 251;
            this.expression(0);
            this.state = 252;
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
    public if_stmt(): If_stmtContext {
        let localContext = new If_stmtContext(this.context, this.state);
        this.enterRule(localContext, 46, rustParser.RULE_if_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 254;
            this.match(rustParser.T__19);
            this.state = 255;
            this.expression(0);
            this.state = 256;
            this.block();
            this.state = 262;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 46) {
                {
                this.state = 257;
                this.match(rustParser.KW_ELSE);
                this.state = 260;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case rustParser.T__14:
                    {
                    this.state = 258;
                    this.block();
                    }
                    break;
                case rustParser.T__19:
                    {
                    this.state = 259;
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
        let _startState = 48;
        this.enterRecursionRule(localContext, 48, rustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 324;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 33, this.context) ) {
            case 1:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 265;
                this.match(rustParser.T__20);
                this.state = 266;
                this.expression(31);
                }
                break;
            case 2:
                {
                localContext = new UnaryMinusContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 267;
                this.match(rustParser.T__21);
                this.state = 268;
                this.expression(30);
                }
                break;
            case 3:
                {
                localContext = new RefExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 269;
                this.match(rustParser.T__22);
                this.state = 270;
                this.expression(29);
                }
                break;
            case 4:
                {
                localContext = new RefMutExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 271;
                this.match(rustParser.T__22);
                this.state = 272;
                this.match(rustParser.MUT);
                this.state = 273;
                this.expression(28);
                }
                break;
            case 5:
                {
                localContext = new DereferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 274;
                this.match(rustParser.T__4);
                this.state = 275;
                this.expression(27);
                }
                break;
            case 6:
                {
                localContext = new MatchExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 276;
                this.match(rustParser.T__34);
                this.state = 277;
                this.expression(0);
                this.state = 278;
                this.match(rustParser.T__14);
                this.state = 279;
                this.match_arm_list();
                this.state = 280;
                this.match(rustParser.T__15);
                }
                break;
            case 7:
                {
                localContext = new ParenExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 282;
                this.match(rustParser.LPAREN);
                this.state = 283;
                this.expression(0);
                this.state = 284;
                this.match(rustParser.RPAREN);
                }
                break;
            case 8:
                {
                localContext = new VariableReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 286;
                this.identifier();
                }
                break;
            case 9:
                {
                localContext = new SimpleContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 287;
                this.number_();
                }
                break;
            case 10:
                {
                localContext = new BoolLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 288;
                this.match(rustParser.BOOL);
                }
                break;
            case 11:
                {
                localContext = new StringLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 289;
                this.match(rustParser.STRING);
                }
                break;
            case 12:
                {
                localContext = new PrintlnMacroContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 290;
                this.match(rustParser.T__35);
                this.state = 291;
                this.match(rustParser.LPAREN);
                this.state = 293;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14712864) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 585731) !== 0)) {
                    {
                    this.state = 292;
                    this.argument_list();
                    }
                }

                this.state = 295;
                this.match(rustParser.RPAREN);
                }
                break;
            case 13:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 296;
                this.identifier();
                this.state = 297;
                this.match(rustParser.LPAREN);
                this.state = 299;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14712864) !== 0) || ((((_la - 35)) & ~0x1F) === 0 && ((1 << (_la - 35)) & 585731) !== 0)) {
                    {
                    this.state = 298;
                    this.argument_list();
                    }
                }

                this.state = 301;
                this.match(rustParser.RPAREN);
                }
                break;
            case 14:
                {
                localContext = new BlockExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 303;
                this.block();
                }
                break;
            case 15:
                {
                localContext = new StructInitContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 304;
                this.identifier();
                this.state = 305;
                this.match(rustParser.T__14);
                this.state = 307;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                    this.state = 306;
                    this.field_init_list();
                    }
                }

                this.state = 309;
                this.match(rustParser.T__15);
                }
                break;
            case 16:
                {
                localContext = new EnumAccessContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 311;
                this.identifier();
                this.state = 312;
                this.match(rustParser.T__37);
                this.state = 313;
                this.identifier();
                }
                break;
            case 17:
                {
                localContext = new EnumStructInitContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 315;
                this.identifier();
                this.state = 316;
                this.match(rustParser.T__37);
                this.state = 317;
                this.identifier();
                this.state = 318;
                this.match(rustParser.T__14);
                this.state = 320;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                    this.state = 319;
                    this.field_init_list();
                    }
                }

                this.state = 322;
                this.match(rustParser.T__15);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 370;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 368;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 34, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalAndContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 326;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 327;
                        this.match(rustParser.T__23);
                        this.state = 328;
                        this.expression(27);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalOrContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 329;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 330;
                        this.match(rustParser.T__24);
                        this.state = 331;
                        this.expression(26);
                        }
                        break;
                    case 3:
                        {
                        localContext = new EqualContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 332;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 333;
                        this.match(rustParser.T__25);
                        this.state = 334;
                        this.expression(25);
                        }
                        break;
                    case 4:
                        {
                        localContext = new NotEqualContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 335;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 336;
                        this.match(rustParser.T__26);
                        this.state = 337;
                        this.expression(24);
                        }
                        break;
                    case 5:
                        {
                        localContext = new LessThanContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 338;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 339;
                        this.match(rustParser.T__27);
                        this.state = 340;
                        this.expression(23);
                        }
                        break;
                    case 6:
                        {
                        localContext = new LessEqualContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 341;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 342;
                        this.match(rustParser.T__28);
                        this.state = 343;
                        this.expression(22);
                        }
                        break;
                    case 7:
                        {
                        localContext = new GreaterThanContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 344;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 345;
                        this.match(rustParser.T__29);
                        this.state = 346;
                        this.expression(21);
                        }
                        break;
                    case 8:
                        {
                        localContext = new GreaterEqualContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 347;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 348;
                        this.match(rustParser.T__30);
                        this.state = 349;
                        this.expression(20);
                        }
                        break;
                    case 9:
                        {
                        localContext = new MultiplyContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 350;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 351;
                        this.match(rustParser.T__4);
                        this.state = 352;
                        this.expression(19);
                        }
                        break;
                    case 10:
                        {
                        localContext = new AddContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 353;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 354;
                        this.match(rustParser.T__31);
                        this.state = 355;
                        this.expression(18);
                        }
                        break;
                    case 11:
                        {
                        localContext = new SubtractContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 356;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 357;
                        this.match(rustParser.T__21);
                        this.state = 358;
                        this.expression(17);
                        }
                        break;
                    case 12:
                        {
                        localContext = new DivideContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 359;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 360;
                        this.match(rustParser.T__32);
                        this.state = 361;
                        this.expression(16);
                        }
                        break;
                    case 13:
                        {
                        localContext = new ModContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 362;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 363;
                        this.match(rustParser.T__33);
                        this.state = 364;
                        this.expression(15);
                        }
                        break;
                    case 14:
                        {
                        localContext = new FieldAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 365;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 366;
                        this.match(rustParser.T__36);
                        this.state = 367;
                        this.identifier();
                        }
                        break;
                    }
                    }
                }
                this.state = 372;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 35, this.context);
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
        this.enterRule(localContext, 50, rustParser.RULE_ty);
        try {
            this.state = 378;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.T__38:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 373;
                this.match(rustParser.T__38);
                }
                break;
            case rustParser.T__39:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 374;
                this.match(rustParser.T__39);
                }
                break;
            case rustParser.T__40:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 375;
                this.match(rustParser.T__40);
                }
                break;
            case rustParser.T__41:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 376;
                this.match(rustParser.T__41);
                }
                break;
            case rustParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 377;
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
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 52, rustParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 380;
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
        this.enterRule(localContext, 54, rustParser.RULE_argument_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 382;
            this.expression(0);
            this.state = 387;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 9) {
                {
                {
                this.state = 383;
                this.match(rustParser.T__8);
                this.state = 384;
                this.expression(0);
                }
                }
                this.state = 389;
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
        this.enterRule(localContext, 56, rustParser.RULE_number);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 390;
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
        this.enterRule(localContext, 58, rustParser.RULE_match_arm_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 392;
            this.match_arm();
            this.state = 397;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 393;
                    this.match(rustParser.T__8);
                    this.state = 394;
                    this.match_arm();
                    }
                    }
                }
                this.state = 399;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 38, this.context);
            }
            this.state = 401;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 400;
                this.match(rustParser.T__8);
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
        this.enterRule(localContext, 60, rustParser.RULE_match_arm);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 403;
            this.match_pattern();
            this.state = 404;
            this.match(rustParser.T__42);
            this.state = 407;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                {
                this.state = 405;
                this.block();
                }
                break;
            case 2:
                {
                this.state = 406;
                this.expression(0);
                }
                break;
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
    public match_pattern(): Match_patternContext {
        let localContext = new Match_patternContext(this.context, this.state);
        this.enterRule(localContext, 62, rustParser.RULE_match_pattern);
        let _la: number;
        try {
            this.state = 429;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 42, this.context) ) {
            case 1:
                localContext = new WildcardPatternContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 409;
                this.match(rustParser.T__43);
                }
                break;
            case 2:
                localContext = new NumberPatternContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 410;
                this.match(rustParser.NUMBER);
                }
                break;
            case 3:
                localContext = new VariablePatternContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 411;
                this.identifier();
                }
                break;
            case 4:
                localContext = new EnumVariantPatternContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 412;
                this.identifier();
                this.state = 413;
                this.match(rustParser.T__37);
                this.state = 414;
                this.identifier();
                }
                break;
            case 5:
                localContext = new EnumStructPatternContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 416;
                this.identifier();
                this.state = 417;
                this.match(rustParser.T__37);
                this.state = 418;
                this.identifier();
                this.state = 419;
                this.match(rustParser.T__14);
                this.state = 421;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 49) {
                    {
                    this.state = 420;
                    this.pattern_field_list();
                    }
                }

                this.state = 423;
                this.match(rustParser.T__15);
                }
                break;
            case 6:
                localContext = new ParenPatternContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 425;
                this.match(rustParser.LPAREN);
                this.state = 426;
                this.match_pattern();
                this.state = 427;
                this.match(rustParser.RPAREN);
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
    public pattern_field_list(): Pattern_field_listContext {
        let localContext = new Pattern_field_listContext(this.context, this.state);
        this.enterRule(localContext, 64, rustParser.RULE_pattern_field_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 431;
            this.pattern_field();
            this.state = 436;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 432;
                    this.match(rustParser.T__8);
                    this.state = 433;
                    this.pattern_field();
                    }
                    }
                }
                this.state = 438;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 43, this.context);
            }
            this.state = 440;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 439;
                this.match(rustParser.T__8);
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
    public pattern_field(): Pattern_fieldContext {
        let localContext = new Pattern_fieldContext(this.context, this.state);
        this.enterRule(localContext, 66, rustParser.RULE_pattern_field);
        try {
            this.state = 447;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 45, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 442;
                this.identifier();
                this.state = 443;
                this.match(rustParser.T__2);
                this.state = 444;
                this.match_pattern();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 446;
                this.identifier();
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 24:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 26);
        case 1:
            return this.precpred(this.context, 25);
        case 2:
            return this.precpred(this.context, 24);
        case 3:
            return this.precpred(this.context, 23);
        case 4:
            return this.precpred(this.context, 22);
        case 5:
            return this.precpred(this.context, 21);
        case 6:
            return this.precpred(this.context, 20);
        case 7:
            return this.precpred(this.context, 19);
        case 8:
            return this.precpred(this.context, 18);
        case 9:
            return this.precpred(this.context, 17);
        case 10:
            return this.precpred(this.context, 16);
        case 11:
            return this.precpred(this.context, 15);
        case 12:
            return this.precpred(this.context, 14);
        case 13:
            return this.precpred(this.context, 3);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,55,450,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,1,0,4,0,70,8,0,11,0,12,0,71,1,0,1,0,1,1,1,1,3,1,78,8,1,1,1,
        1,1,3,1,82,8,1,1,1,1,1,3,1,86,8,1,1,1,1,1,3,1,90,8,1,1,1,1,1,1,1,
        1,1,1,1,3,1,97,8,1,1,1,1,1,1,1,1,1,1,1,3,1,104,8,1,1,2,1,2,3,2,108,
        8,2,1,2,1,2,1,2,3,2,113,8,2,1,2,1,2,3,2,117,8,2,1,3,1,3,1,3,1,3,
        1,4,1,4,1,4,3,4,126,8,4,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,3,7,
        137,8,7,1,7,1,7,1,7,3,7,142,8,7,1,7,1,7,1,8,1,8,1,8,5,8,149,8,8,
        10,8,12,8,152,9,8,1,9,1,9,1,9,3,9,157,8,9,1,10,1,10,1,10,1,10,1,
        10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,1,12,1,13,1,13,5,13,174,8,
        13,10,13,12,13,177,9,13,1,13,3,13,180,8,13,1,13,1,13,1,14,1,14,1,
        14,1,14,3,14,188,8,14,1,14,1,14,1,15,1,15,1,15,5,15,195,8,15,10,
        15,12,15,198,9,15,1,15,3,15,201,8,15,1,16,1,16,1,16,1,16,1,17,1,
        17,1,17,5,17,210,8,17,10,17,12,17,213,9,17,1,17,3,17,216,8,17,1,
        18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,3,19,226,8,19,1,19,1,19,1,
        20,1,20,1,20,5,20,233,8,20,10,20,12,20,236,9,20,1,20,3,20,239,8,
        20,1,21,1,21,1,21,1,21,3,21,245,8,21,1,21,1,21,3,21,249,8,21,1,22,
        1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,3,23,261,8,23,3,23,
        263,8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
        1,24,1,24,1,24,1,24,1,24,3,24,294,8,24,1,24,1,24,1,24,1,24,3,24,
        300,8,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,308,8,24,1,24,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,321,8,24,1,24,1,
        24,3,24,325,8,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
        24,1,24,1,24,1,24,1,24,1,24,1,24,5,24,369,8,24,10,24,12,24,372,9,
        24,1,25,1,25,1,25,1,25,1,25,3,25,379,8,25,1,26,1,26,1,27,1,27,1,
        27,5,27,386,8,27,10,27,12,27,389,9,27,1,28,1,28,1,29,1,29,1,29,5,
        29,396,8,29,10,29,12,29,399,9,29,1,29,3,29,402,8,29,1,30,1,30,1,
        30,1,30,3,30,408,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,
        31,1,31,1,31,1,31,3,31,422,8,31,1,31,1,31,1,31,1,31,1,31,1,31,3,
        31,430,8,31,1,32,1,32,1,32,5,32,435,8,32,10,32,12,32,438,9,32,1,
        32,3,32,441,8,32,1,33,1,33,1,33,1,33,1,33,3,33,448,8,33,1,33,0,1,
        48,34,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
        42,44,46,48,50,52,54,56,58,60,62,64,66,0,0,506,0,69,1,0,0,0,2,103,
        1,0,0,0,4,105,1,0,0,0,6,118,1,0,0,0,8,125,1,0,0,0,10,127,1,0,0,0,
        12,130,1,0,0,0,14,132,1,0,0,0,16,145,1,0,0,0,18,153,1,0,0,0,20,158,
        1,0,0,0,22,166,1,0,0,0,24,169,1,0,0,0,26,171,1,0,0,0,28,183,1,0,
        0,0,30,191,1,0,0,0,32,202,1,0,0,0,34,206,1,0,0,0,36,217,1,0,0,0,
        38,221,1,0,0,0,40,229,1,0,0,0,42,248,1,0,0,0,44,250,1,0,0,0,46,254,
        1,0,0,0,48,324,1,0,0,0,50,378,1,0,0,0,52,380,1,0,0,0,54,382,1,0,
        0,0,56,390,1,0,0,0,58,392,1,0,0,0,60,403,1,0,0,0,62,429,1,0,0,0,
        64,431,1,0,0,0,66,447,1,0,0,0,68,70,3,2,1,0,69,68,1,0,0,0,70,71,
        1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,73,1,0,0,0,73,74,5,0,0,1,
        74,1,1,0,0,0,75,77,3,4,2,0,76,78,5,1,0,0,77,76,1,0,0,0,77,78,1,0,
        0,0,78,104,1,0,0,0,79,81,3,6,3,0,80,82,5,1,0,0,81,80,1,0,0,0,81,
        82,1,0,0,0,82,104,1,0,0,0,83,85,3,10,5,0,84,86,5,1,0,0,85,84,1,0,
        0,0,85,86,1,0,0,0,86,104,1,0,0,0,87,89,3,12,6,0,88,90,5,1,0,0,89,
        88,1,0,0,0,89,90,1,0,0,0,90,104,1,0,0,0,91,104,3,14,7,0,92,104,3,
        20,10,0,93,104,3,22,11,0,94,96,3,24,12,0,95,97,5,1,0,0,96,95,1,0,
        0,0,96,97,1,0,0,0,97,104,1,0,0,0,98,104,3,26,13,0,99,104,3,28,14,
        0,100,104,3,38,19,0,101,104,3,44,22,0,102,104,3,46,23,0,103,75,1,
        0,0,0,103,79,1,0,0,0,103,83,1,0,0,0,103,87,1,0,0,0,103,91,1,0,0,
        0,103,92,1,0,0,0,103,93,1,0,0,0,103,94,1,0,0,0,103,98,1,0,0,0,103,
        99,1,0,0,0,103,100,1,0,0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,3,
        1,0,0,0,105,107,5,2,0,0,106,108,5,45,0,0,107,106,1,0,0,0,107,108,
        1,0,0,0,108,109,1,0,0,0,109,112,3,52,26,0,110,111,5,3,0,0,111,113,
        3,50,25,0,112,110,1,0,0,0,112,113,1,0,0,0,113,116,1,0,0,0,114,115,
        5,4,0,0,115,117,3,48,24,0,116,114,1,0,0,0,116,117,1,0,0,0,117,5,
        1,0,0,0,118,119,3,8,4,0,119,120,5,4,0,0,120,121,3,48,24,0,121,7,
        1,0,0,0,122,123,5,5,0,0,123,126,3,48,24,0,124,126,3,52,26,0,125,
        122,1,0,0,0,125,124,1,0,0,0,126,9,1,0,0,0,127,128,5,6,0,0,128,129,
        3,48,24,0,129,11,1,0,0,0,130,131,3,48,24,0,131,13,1,0,0,0,132,133,
        5,7,0,0,133,134,3,52,26,0,134,136,5,54,0,0,135,137,3,16,8,0,136,
        135,1,0,0,0,136,137,1,0,0,0,137,138,1,0,0,0,138,141,5,55,0,0,139,
        140,5,8,0,0,140,142,3,50,25,0,141,139,1,0,0,0,141,142,1,0,0,0,142,
        143,1,0,0,0,143,144,3,26,13,0,144,15,1,0,0,0,145,150,3,18,9,0,146,
        147,5,9,0,0,147,149,3,18,9,0,148,146,1,0,0,0,149,152,1,0,0,0,150,
        148,1,0,0,0,150,151,1,0,0,0,151,17,1,0,0,0,152,150,1,0,0,0,153,156,
        3,52,26,0,154,155,5,3,0,0,155,157,3,50,25,0,156,154,1,0,0,0,156,
        157,1,0,0,0,157,19,1,0,0,0,158,159,5,10,0,0,159,160,3,52,26,0,160,
        161,5,11,0,0,161,162,3,48,24,0,162,163,5,12,0,0,163,164,3,48,24,
        0,164,165,3,26,13,0,165,21,1,0,0,0,166,167,5,13,0,0,167,168,3,26,
        13,0,168,23,1,0,0,0,169,170,5,14,0,0,170,25,1,0,0,0,171,175,5,15,
        0,0,172,174,3,2,1,0,173,172,1,0,0,0,174,177,1,0,0,0,175,173,1,0,
        0,0,175,176,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,178,180,3,48,
        24,0,179,178,1,0,0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,182,5,16,
        0,0,182,27,1,0,0,0,183,184,5,17,0,0,184,185,3,52,26,0,185,187,5,
        15,0,0,186,188,3,30,15,0,187,186,1,0,0,0,187,188,1,0,0,0,188,189,
        1,0,0,0,189,190,5,16,0,0,190,29,1,0,0,0,191,196,3,32,16,0,192,193,
        5,9,0,0,193,195,3,32,16,0,194,192,1,0,0,0,195,198,1,0,0,0,196,194,
        1,0,0,0,196,197,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,199,201,
        5,9,0,0,200,199,1,0,0,0,200,201,1,0,0,0,201,31,1,0,0,0,202,203,3,
        52,26,0,203,204,5,3,0,0,204,205,3,50,25,0,205,33,1,0,0,0,206,211,
        3,36,18,0,207,208,5,9,0,0,208,210,3,36,18,0,209,207,1,0,0,0,210,
        213,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,215,1,0,0,0,213,
        211,1,0,0,0,214,216,5,9,0,0,215,214,1,0,0,0,215,216,1,0,0,0,216,
        35,1,0,0,0,217,218,3,52,26,0,218,219,5,3,0,0,219,220,3,48,24,0,220,
        37,1,0,0,0,221,222,5,18,0,0,222,223,3,52,26,0,223,225,5,15,0,0,224,
        226,3,40,20,0,225,224,1,0,0,0,225,226,1,0,0,0,226,227,1,0,0,0,227,
        228,5,16,0,0,228,39,1,0,0,0,229,234,3,42,21,0,230,231,5,9,0,0,231,
        233,3,42,21,0,232,230,1,0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,
        235,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,237,239,5,9,0,0,238,
        237,1,0,0,0,238,239,1,0,0,0,239,41,1,0,0,0,240,249,3,52,26,0,241,
        242,3,52,26,0,242,244,5,15,0,0,243,245,3,30,15,0,244,243,1,0,0,0,
        244,245,1,0,0,0,245,246,1,0,0,0,246,247,5,16,0,0,247,249,1,0,0,0,
        248,240,1,0,0,0,248,241,1,0,0,0,249,43,1,0,0,0,250,251,5,19,0,0,
        251,252,3,48,24,0,252,253,3,26,13,0,253,45,1,0,0,0,254,255,5,20,
        0,0,255,256,3,48,24,0,256,262,3,26,13,0,257,260,5,46,0,0,258,261,
        3,26,13,0,259,261,3,46,23,0,260,258,1,0,0,0,260,259,1,0,0,0,261,
        263,1,0,0,0,262,257,1,0,0,0,262,263,1,0,0,0,263,47,1,0,0,0,264,265,
        6,24,-1,0,265,266,5,21,0,0,266,325,3,48,24,31,267,268,5,22,0,0,268,
        325,3,48,24,30,269,270,5,23,0,0,270,325,3,48,24,29,271,272,5,23,
        0,0,272,273,5,45,0,0,273,325,3,48,24,28,274,275,5,5,0,0,275,325,
        3,48,24,27,276,277,5,35,0,0,277,278,3,48,24,0,278,279,5,15,0,0,279,
        280,3,58,29,0,280,281,5,16,0,0,281,325,1,0,0,0,282,283,5,54,0,0,
        283,284,3,48,24,0,284,285,5,55,0,0,285,325,1,0,0,0,286,325,3,52,
        26,0,287,325,3,56,28,0,288,325,5,48,0,0,289,325,5,47,0,0,290,291,
        5,36,0,0,291,293,5,54,0,0,292,294,3,54,27,0,293,292,1,0,0,0,293,
        294,1,0,0,0,294,295,1,0,0,0,295,325,5,55,0,0,296,297,3,52,26,0,297,
        299,5,54,0,0,298,300,3,54,27,0,299,298,1,0,0,0,299,300,1,0,0,0,300,
        301,1,0,0,0,301,302,5,55,0,0,302,325,1,0,0,0,303,325,3,26,13,0,304,
        305,3,52,26,0,305,307,5,15,0,0,306,308,3,34,17,0,307,306,1,0,0,0,
        307,308,1,0,0,0,308,309,1,0,0,0,309,310,5,16,0,0,310,325,1,0,0,0,
        311,312,3,52,26,0,312,313,5,38,0,0,313,314,3,52,26,0,314,325,1,0,
        0,0,315,316,3,52,26,0,316,317,5,38,0,0,317,318,3,52,26,0,318,320,
        5,15,0,0,319,321,3,34,17,0,320,319,1,0,0,0,320,321,1,0,0,0,321,322,
        1,0,0,0,322,323,5,16,0,0,323,325,1,0,0,0,324,264,1,0,0,0,324,267,
        1,0,0,0,324,269,1,0,0,0,324,271,1,0,0,0,324,274,1,0,0,0,324,276,
        1,0,0,0,324,282,1,0,0,0,324,286,1,0,0,0,324,287,1,0,0,0,324,288,
        1,0,0,0,324,289,1,0,0,0,324,290,1,0,0,0,324,296,1,0,0,0,324,303,
        1,0,0,0,324,304,1,0,0,0,324,311,1,0,0,0,324,315,1,0,0,0,325,370,
        1,0,0,0,326,327,10,26,0,0,327,328,5,24,0,0,328,369,3,48,24,27,329,
        330,10,25,0,0,330,331,5,25,0,0,331,369,3,48,24,26,332,333,10,24,
        0,0,333,334,5,26,0,0,334,369,3,48,24,25,335,336,10,23,0,0,336,337,
        5,27,0,0,337,369,3,48,24,24,338,339,10,22,0,0,339,340,5,28,0,0,340,
        369,3,48,24,23,341,342,10,21,0,0,342,343,5,29,0,0,343,369,3,48,24,
        22,344,345,10,20,0,0,345,346,5,30,0,0,346,369,3,48,24,21,347,348,
        10,19,0,0,348,349,5,31,0,0,349,369,3,48,24,20,350,351,10,18,0,0,
        351,352,5,5,0,0,352,369,3,48,24,19,353,354,10,17,0,0,354,355,5,32,
        0,0,355,369,3,48,24,18,356,357,10,16,0,0,357,358,5,22,0,0,358,369,
        3,48,24,17,359,360,10,15,0,0,360,361,5,33,0,0,361,369,3,48,24,16,
        362,363,10,14,0,0,363,364,5,34,0,0,364,369,3,48,24,15,365,366,10,
        3,0,0,366,367,5,37,0,0,367,369,3,52,26,0,368,326,1,0,0,0,368,329,
        1,0,0,0,368,332,1,0,0,0,368,335,1,0,0,0,368,338,1,0,0,0,368,341,
        1,0,0,0,368,344,1,0,0,0,368,347,1,0,0,0,368,350,1,0,0,0,368,353,
        1,0,0,0,368,356,1,0,0,0,368,359,1,0,0,0,368,362,1,0,0,0,368,365,
        1,0,0,0,369,372,1,0,0,0,370,368,1,0,0,0,370,371,1,0,0,0,371,49,1,
        0,0,0,372,370,1,0,0,0,373,379,5,39,0,0,374,379,5,40,0,0,375,379,
        5,41,0,0,376,379,5,42,0,0,377,379,3,52,26,0,378,373,1,0,0,0,378,
        374,1,0,0,0,378,375,1,0,0,0,378,376,1,0,0,0,378,377,1,0,0,0,379,
        51,1,0,0,0,380,381,5,49,0,0,381,53,1,0,0,0,382,387,3,48,24,0,383,
        384,5,9,0,0,384,386,3,48,24,0,385,383,1,0,0,0,386,389,1,0,0,0,387,
        385,1,0,0,0,387,388,1,0,0,0,388,55,1,0,0,0,389,387,1,0,0,0,390,391,
        5,50,0,0,391,57,1,0,0,0,392,397,3,60,30,0,393,394,5,9,0,0,394,396,
        3,60,30,0,395,393,1,0,0,0,396,399,1,0,0,0,397,395,1,0,0,0,397,398,
        1,0,0,0,398,401,1,0,0,0,399,397,1,0,0,0,400,402,5,9,0,0,401,400,
        1,0,0,0,401,402,1,0,0,0,402,59,1,0,0,0,403,404,3,62,31,0,404,407,
        5,43,0,0,405,408,3,26,13,0,406,408,3,48,24,0,407,405,1,0,0,0,407,
        406,1,0,0,0,408,61,1,0,0,0,409,430,5,44,0,0,410,430,5,50,0,0,411,
        430,3,52,26,0,412,413,3,52,26,0,413,414,5,38,0,0,414,415,3,52,26,
        0,415,430,1,0,0,0,416,417,3,52,26,0,417,418,5,38,0,0,418,419,3,52,
        26,0,419,421,5,15,0,0,420,422,3,64,32,0,421,420,1,0,0,0,421,422,
        1,0,0,0,422,423,1,0,0,0,423,424,5,16,0,0,424,430,1,0,0,0,425,426,
        5,54,0,0,426,427,3,62,31,0,427,428,5,55,0,0,428,430,1,0,0,0,429,
        409,1,0,0,0,429,410,1,0,0,0,429,411,1,0,0,0,429,412,1,0,0,0,429,
        416,1,0,0,0,429,425,1,0,0,0,430,63,1,0,0,0,431,436,3,66,33,0,432,
        433,5,9,0,0,433,435,3,66,33,0,434,432,1,0,0,0,435,438,1,0,0,0,436,
        434,1,0,0,0,436,437,1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,439,
        441,5,9,0,0,440,439,1,0,0,0,440,441,1,0,0,0,441,65,1,0,0,0,442,443,
        3,52,26,0,443,444,5,3,0,0,444,445,3,62,31,0,445,448,1,0,0,0,446,
        448,3,52,26,0,447,442,1,0,0,0,447,446,1,0,0,0,448,67,1,0,0,0,46,
        71,77,81,85,89,96,103,107,112,116,125,136,141,150,156,175,179,187,
        196,200,211,215,225,234,238,244,248,260,262,293,299,307,320,324,
        368,370,378,387,397,401,407,421,429,436,440,447
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
    public while_stmt(): While_stmtContext | null {
        return this.getRuleContext(0, While_stmtContext);
    }
    public if_stmt(): If_stmtContext | null {
        return this.getRuleContext(0, If_stmtContext);
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
    public lhs(): LhsContext {
        return this.getRuleContext(0, LhsContext)!;
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


export class LhsContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_lhs;
    }
    public override copyFrom(ctx: LhsContext): void {
        super.copyFrom(ctx);
    }
}
export class DerefLhsContext extends LhsContext {
    public constructor(ctx: LhsContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterDerefLhs) {
             listener.enterDerefLhs(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitDerefLhs) {
             listener.exitDerefLhs(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitDerefLhs) {
            return visitor.visitDerefLhs(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentLhsContext extends LhsContext {
    public constructor(ctx: LhsContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterIdentLhs) {
             listener.enterIdentLhs(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitIdentLhs) {
             listener.exitIdentLhs(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitIdentLhs) {
            return visitor.visitIdentLhs(this);
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
    public ty(): TyContext | null {
        return this.getRuleContext(0, TyContext);
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
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public ty(): TyContext | null {
        return this.getRuleContext(0, TyContext);
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
    public field_decl(): Field_declContext[];
    public field_decl(i: number): Field_declContext | null;
    public field_decl(i?: number): Field_declContext[] | Field_declContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Field_declContext);
        }

        return this.getRuleContext(i, Field_declContext);
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


export class Field_declContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public ty(): TyContext {
        return this.getRuleContext(0, TyContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_field_decl;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterField_decl) {
             listener.enterField_decl(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitField_decl) {
             listener.exitField_decl(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitField_decl) {
            return visitor.visitField_decl(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Field_init_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public field_init(): Field_initContext[];
    public field_init(i: number): Field_initContext | null;
    public field_init(i?: number): Field_initContext[] | Field_initContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Field_initContext);
        }

        return this.getRuleContext(i, Field_initContext);
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


export class Field_initContext extends antlr.ParserRuleContext {
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
        return rustParser.RULE_field_init;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterField_init) {
             listener.enterField_init(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitField_init) {
             listener.exitField_init(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitField_init) {
            return visitor.visitField_init(this);
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
    public variant(): VariantContext[];
    public variant(i: number): VariantContext | null;
    public variant(i?: number): VariantContext[] | VariantContext | null {
        if (i === undefined) {
            return this.getRuleContexts(VariantContext);
        }

        return this.getRuleContext(i, VariantContext);
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


export class VariantContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_variant;
    }
    public override copyFrom(ctx: VariantContext): void {
        super.copyFrom(ctx);
    }
}
export class SimpleVariantContext extends VariantContext {
    public constructor(ctx: VariantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterSimpleVariant) {
             listener.enterSimpleVariant(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitSimpleVariant) {
             listener.exitSimpleVariant(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitSimpleVariant) {
            return visitor.visitSimpleVariant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StructVariantContext extends VariantContext {
    public constructor(ctx: VariantContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public field_list(): Field_listContext | null {
        return this.getRuleContext(0, Field_listContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterStructVariant) {
             listener.enterStructVariant(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitStructVariant) {
             listener.exitStructVariant(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitStructVariant) {
            return visitor.visitStructVariant(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class While_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_while_stmt;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterWhile_stmt) {
             listener.enterWhile_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitWhile_stmt) {
             listener.exitWhile_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitWhile_stmt) {
            return visitor.visitWhile_stmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class If_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
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
    public override enterRule(listener: rustListener): void {
        if(listener.enterIf_stmt) {
             listener.enterIf_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitIf_stmt) {
             listener.exitIf_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitIf_stmt) {
            return visitor.visitIf_stmt(this);
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
export class DereferenceContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterDereference) {
             listener.enterDereference(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitDereference) {
             listener.exitDereference(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitDereference) {
            return visitor.visitDereference(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EnumStructInitContext extends ExpressionContext {
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
    public field_init_list(): Field_init_listContext | null {
        return this.getRuleContext(0, Field_init_listContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterEnumStructInit) {
             listener.enterEnumStructInit(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitEnumStructInit) {
             listener.exitEnumStructInit(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitEnumStructInit) {
            return visitor.visitEnumStructInit(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModContext extends ExpressionContext {
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
        if(listener.enterMod) {
             listener.enterMod(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitMod) {
             listener.exitMod(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitMod) {
            return visitor.visitMod(this);
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
export class LessThanContext extends ExpressionContext {
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
        if(listener.enterLessThan) {
             listener.enterLessThan(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitLessThan) {
             listener.exitLessThan(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitLessThan) {
            return visitor.visitLessThan(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RefMutExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public MUT(): antlr.TerminalNode {
        return this.getToken(rustParser.MUT, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterRefMutExpr) {
             listener.enterRefMutExpr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitRefMutExpr) {
             listener.exitRefMutExpr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitRefMutExpr) {
            return visitor.visitRefMutExpr(this);
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
export class GreaterThanContext extends ExpressionContext {
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
        if(listener.enterGreaterThan) {
             listener.enterGreaterThan(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitGreaterThan) {
             listener.exitGreaterThan(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitGreaterThan) {
            return visitor.visitGreaterThan(this);
        } else {
            return visitor.visitChildren(this);
        }
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
export class LogicalNotContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterLogicalNot) {
             listener.enterLogicalNot(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitLogicalNot) {
             listener.exitLogicalNot(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitLogicalNot) {
            return visitor.visitLogicalNot(this);
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
export class LogicalAndContext extends ExpressionContext {
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
        if(listener.enterLogicalAnd) {
             listener.enterLogicalAnd(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitLogicalAnd) {
             listener.exitLogicalAnd(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitLogicalAnd) {
            return visitor.visitLogicalAnd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NotEqualContext extends ExpressionContext {
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
        if(listener.enterNotEqual) {
             listener.enterNotEqual(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitNotEqual) {
             listener.exitNotEqual(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitNotEqual) {
            return visitor.visitNotEqual(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqualContext extends ExpressionContext {
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
        if(listener.enterEqual) {
             listener.enterEqual(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitEqual) {
             listener.exitEqual(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitEqual) {
            return visitor.visitEqual(this);
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
export class RefExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterRefExpr) {
             listener.enterRefExpr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitRefExpr) {
             listener.exitRefExpr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitRefExpr) {
            return visitor.visitRefExpr(this);
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
export class UnaryMinusContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterUnaryMinus) {
             listener.enterUnaryMinus(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitUnaryMinus) {
             listener.exitUnaryMinus(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitUnaryMinus) {
            return visitor.visitUnaryMinus(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GreaterEqualContext extends ExpressionContext {
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
        if(listener.enterGreaterEqual) {
             listener.enterGreaterEqual(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitGreaterEqual) {
             listener.exitGreaterEqual(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitGreaterEqual) {
            return visitor.visitGreaterEqual(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LessEqualContext extends ExpressionContext {
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
        if(listener.enterLessEqual) {
             listener.enterLessEqual(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitLessEqual) {
             listener.exitLessEqual(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitLessEqual) {
            return visitor.visitLessEqual(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LogicalOrContext extends ExpressionContext {
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
        if(listener.enterLogicalOr) {
             listener.enterLogicalOr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitLogicalOr) {
             listener.exitLogicalOr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitLogicalOr) {
            return visitor.visitLogicalOr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class PrintlnMacroContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
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
        if(listener.enterPrintlnMacro) {
             listener.enterPrintlnMacro(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitPrintlnMacro) {
             listener.exitPrintlnMacro(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitPrintlnMacro) {
            return visitor.visitPrintlnMacro(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TyContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext | null {
        return this.getRuleContext(0, IdentifierContext);
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
    public block(): BlockContext | null {
        return this.getRuleContext(0, BlockContext);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
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
    public override get ruleIndex(): number {
        return rustParser.RULE_match_pattern;
    }
    public override copyFrom(ctx: Match_patternContext): void {
        super.copyFrom(ctx);
    }
}
export class WildcardPatternContext extends Match_patternContext {
    public constructor(ctx: Match_patternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterWildcardPattern) {
             listener.enterWildcardPattern(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitWildcardPattern) {
             listener.exitWildcardPattern(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitWildcardPattern) {
            return visitor.visitWildcardPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EnumStructPatternContext extends Match_patternContext {
    public constructor(ctx: Match_patternContext) {
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
    public pattern_field_list(): Pattern_field_listContext | null {
        return this.getRuleContext(0, Pattern_field_listContext);
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterEnumStructPattern) {
             listener.enterEnumStructPattern(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitEnumStructPattern) {
             listener.exitEnumStructPattern(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitEnumStructPattern) {
            return visitor.visitEnumStructPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParenPatternContext extends Match_patternContext {
    public constructor(ctx: Match_patternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public LPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.LPAREN, 0)!;
    }
    public match_pattern(): Match_patternContext {
        return this.getRuleContext(0, Match_patternContext)!;
    }
    public RPAREN(): antlr.TerminalNode {
        return this.getToken(rustParser.RPAREN, 0)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterParenPattern) {
             listener.enterParenPattern(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitParenPattern) {
             listener.exitParenPattern(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitParenPattern) {
            return visitor.visitParenPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NumberPatternContext extends Match_patternContext {
    public constructor(ctx: Match_patternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public NUMBER(): antlr.TerminalNode {
        return this.getToken(rustParser.NUMBER, 0)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterNumberPattern) {
             listener.enterNumberPattern(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitNumberPattern) {
             listener.exitNumberPattern(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitNumberPattern) {
            return visitor.visitNumberPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class VariablePatternContext extends Match_patternContext {
    public constructor(ctx: Match_patternContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterVariablePattern) {
             listener.enterVariablePattern(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitVariablePattern) {
             listener.exitVariablePattern(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitVariablePattern) {
            return visitor.visitVariablePattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EnumVariantPatternContext extends Match_patternContext {
    public constructor(ctx: Match_patternContext) {
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
        if(listener.enterEnumVariantPattern) {
             listener.enterEnumVariantPattern(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitEnumVariantPattern) {
             listener.exitEnumVariantPattern(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitEnumVariantPattern) {
            return visitor.visitEnumVariantPattern(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Pattern_field_listContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public pattern_field(): Pattern_fieldContext[];
    public pattern_field(i: number): Pattern_fieldContext | null;
    public pattern_field(i?: number): Pattern_fieldContext[] | Pattern_fieldContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Pattern_fieldContext);
        }

        return this.getRuleContext(i, Pattern_fieldContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_pattern_field_list;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterPattern_field_list) {
             listener.enterPattern_field_list(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitPattern_field_list) {
             listener.exitPattern_field_list(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitPattern_field_list) {
            return visitor.visitPattern_field_list(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Pattern_fieldContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public match_pattern(): Match_patternContext | null {
        return this.getRuleContext(0, Match_patternContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_pattern_field;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterPattern_field) {
             listener.enterPattern_field(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitPattern_field) {
             listener.exitPattern_field(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitPattern_field) {
            return visitor.visitPattern_field(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
