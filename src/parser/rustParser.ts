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
    public static readonly NUMBER = 47;
    public static readonly BOOL = 48;
    public static readonly STRING = 49;
    public static readonly IDENTIFIER = 50;
    public static readonly LINE_COMMENT = 51;
    public static readonly BLOCK_COMMENT = 52;
    public static readonly WS = 53;
    public static readonly LPAREN = 54;
    public static readonly RPAREN = 55;
    public static readonly RULE_start = 0;
    public static readonly RULE_statement = 1;
    public static readonly RULE_let_stmt = 2;
    public static readonly RULE_const_stmt = 3;
    public static readonly RULE_assign_stmt = 4;
    public static readonly RULE_lhs = 5;
    public static readonly RULE_return_stmt = 6;
    public static readonly RULE_expression_stmt = 7;
    public static readonly RULE_function_decl = 8;
    public static readonly RULE_parameter_list = 9;
    public static readonly RULE_parameter = 10;
    public static readonly RULE_for_stmt = 11;
    public static readonly RULE_loop_stmt = 12;
    public static readonly RULE_break_stmt = 13;
    public static readonly RULE_block = 14;
    public static readonly RULE_struct_decl = 15;
    public static readonly RULE_field_list = 16;
    public static readonly RULE_field_decl = 17;
    public static readonly RULE_field_init_list = 18;
    public static readonly RULE_field_init = 19;
    public static readonly RULE_enum_decl = 20;
    public static readonly RULE_variant_list = 21;
    public static readonly RULE_variant = 22;
    public static readonly RULE_while_stmt = 23;
    public static readonly RULE_if_stmt = 24;
    public static readonly RULE_expression = 25;
    public static readonly RULE_logical_or_expr = 26;
    public static readonly RULE_logical_and_expr = 27;
    public static readonly RULE_equality_expr = 28;
    public static readonly RULE_relational_expr = 29;
    public static readonly RULE_additive_expr = 30;
    public static readonly RULE_multiplicative_expr = 31;
    public static readonly RULE_unary_expr = 32;
    public static readonly RULE_postfix_expr = 33;
    public static readonly RULE_postfix_op = 34;
    public static readonly RULE_primary_expr = 35;
    public static readonly RULE_ty = 36;
    public static readonly RULE_argument_list = 37;
    public static readonly RULE_number = 38;
    public static readonly RULE_match_arm_list = 39;
    public static readonly RULE_match_arm = 40;
    public static readonly RULE_match_pattern = 41;
    public static readonly RULE_pattern_list = 42;
    public static readonly RULE_identifier = 43;

    public static readonly literalNames = [
        null, "';'", "'let'", "':'", "'='", "'const'", "'*'", "'return'", 
        "'fn'", "'->'", "','", "'for'", "'in'", "'..'", "'loop'", "'break'", 
        "'{'", "'}'", "'struct'", "'enum'", "'while'", "'if'", "'||'", "'&&'", 
        "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'/'", 
        "'%'", "'!'", "'&'", "'.'", "'::'", "'match'", "'println!'", "'number'", 
        "'bool'", "'String'", "'=>'", "'_'", "'mut'", "'else'", null, null, 
        null, null, null, null, null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, "MUT", "KW_ELSE", "NUMBER", "BOOL", "STRING", "IDENTIFIER", 
        "LINE_COMMENT", "BLOCK_COMMENT", "WS", "LPAREN", "RPAREN"
    ];
    public static readonly ruleNames = [
        "start", "statement", "let_stmt", "const_stmt", "assign_stmt", "lhs", 
        "return_stmt", "expression_stmt", "function_decl", "parameter_list", 
        "parameter", "for_stmt", "loop_stmt", "break_stmt", "block", "struct_decl", 
        "field_list", "field_decl", "field_init_list", "field_init", "enum_decl", 
        "variant_list", "variant", "while_stmt", "if_stmt", "expression", 
        "logical_or_expr", "logical_and_expr", "equality_expr", "relational_expr", 
        "additive_expr", "multiplicative_expr", "unary_expr", "postfix_expr", 
        "postfix_op", "primary_expr", "ty", "argument_list", "number", "match_arm_list", 
        "match_arm", "match_pattern", "pattern_list", "identifier",
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
            this.state = 89;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 88;
                this.statement();
                }
                }
                this.state = 91;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2151533028) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 1171507) !== 0));
            this.state = 93;
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
            this.state = 126;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 95;
                this.let_stmt();
                this.state = 97;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 96;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 99;
                this.const_stmt();
                this.state = 101;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 100;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 103;
                this.assign_stmt();
                this.state = 105;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 104;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 107;
                this.return_stmt();
                this.state = 109;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 108;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 111;
                this.expression_stmt();
                this.state = 112;
                this.match(rustParser.T__0);
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 114;
                this.function_decl();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 115;
                this.for_stmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 116;
                this.loop_stmt();
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 117;
                this.break_stmt();
                this.state = 119;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 118;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 121;
                this.block();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 122;
                this.struct_decl();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 123;
                this.enum_decl();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 124;
                this.while_stmt();
                }
                break;
            case 14:
                this.enterOuterAlt(localContext, 14);
                {
                this.state = 125;
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
            this.state = 128;
            this.match(rustParser.T__1);
            this.state = 130;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 129;
                this.match(rustParser.MUT);
                }
            }

            this.state = 132;
            this.identifier();
            this.state = 135;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 133;
                this.match(rustParser.T__2);
                this.state = 134;
                this.ty();
                }
            }

            this.state = 139;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 137;
                this.match(rustParser.T__3);
                this.state = 138;
                this.expression();
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
    public const_stmt(): Const_stmtContext {
        let localContext = new Const_stmtContext(this.context, this.state);
        this.enterRule(localContext, 6, rustParser.RULE_const_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 141;
            this.match(rustParser.T__4);
            this.state = 142;
            this.identifier();
            this.state = 143;
            this.match(rustParser.T__2);
            this.state = 144;
            this.ty();
            this.state = 145;
            this.match(rustParser.T__3);
            this.state = 146;
            this.expression();
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
        this.enterRule(localContext, 8, rustParser.RULE_assign_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 148;
            this.lhs();
            this.state = 149;
            this.match(rustParser.T__3);
            this.state = 150;
            this.expression();
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
        this.enterRule(localContext, 10, rustParser.RULE_lhs);
        try {
            this.state = 155;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.T__5:
                localContext = new DerefLhsContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 152;
                this.match(rustParser.T__5);
                this.state = 153;
                this.expression();
                }
                break;
            case rustParser.IDENTIFIER:
                localContext = new IdentLhsContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 154;
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
        this.enterRule(localContext, 12, rustParser.RULE_return_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 157;
            this.match(rustParser.T__6);
            this.state = 158;
            this.expression();
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
        this.enterRule(localContext, 14, rustParser.RULE_expression_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 160;
            this.expression();
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
        this.enterRule(localContext, 16, rustParser.RULE_function_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 162;
            this.match(rustParser.T__7);
            this.state = 163;
            this.identifier();
            this.state = 164;
            this.match(rustParser.LPAREN);
            this.state = 166;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45 || _la === 50) {
                {
                this.state = 165;
                this.parameter_list();
                }
            }

            this.state = 168;
            this.match(rustParser.RPAREN);
            this.state = 171;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9) {
                {
                this.state = 169;
                this.match(rustParser.T__8);
                this.state = 170;
                this.ty();
                }
            }

            this.state = 173;
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
        this.enterRule(localContext, 18, rustParser.RULE_parameter_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 175;
            this.parameter();
            this.state = 180;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 10) {
                {
                {
                this.state = 176;
                this.match(rustParser.T__9);
                this.state = 177;
                this.parameter();
                }
                }
                this.state = 182;
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
        this.enterRule(localContext, 20, rustParser.RULE_parameter);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 184;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 183;
                this.match(rustParser.MUT);
                }
            }

            this.state = 186;
            this.identifier();
            this.state = 187;
            this.match(rustParser.T__2);
            this.state = 188;
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
    public for_stmt(): For_stmtContext {
        let localContext = new For_stmtContext(this.context, this.state);
        this.enterRule(localContext, 22, rustParser.RULE_for_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 190;
            this.match(rustParser.T__10);
            this.state = 191;
            this.identifier();
            this.state = 192;
            this.match(rustParser.T__11);
            this.state = 193;
            this.expression();
            this.state = 194;
            this.match(rustParser.T__12);
            this.state = 195;
            this.expression();
            this.state = 196;
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
        this.enterRule(localContext, 24, rustParser.RULE_loop_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 198;
            this.match(rustParser.T__13);
            this.state = 199;
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
        this.enterRule(localContext, 26, rustParser.RULE_break_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 201;
            this.match(rustParser.T__14);
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
        this.enterRule(localContext, 28, rustParser.RULE_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 203;
            this.match(rustParser.T__15);
            this.state = 207;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 204;
                    this.statement();
                    }
                    }
                }
                this.state = 209;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 15, this.context);
            }
            this.state = 211;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147549248) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 1171507) !== 0)) {
                {
                this.state = 210;
                this.expression();
                }
            }

            this.state = 213;
            this.match(rustParser.T__16);
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
        this.enterRule(localContext, 30, rustParser.RULE_struct_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 215;
            this.match(rustParser.T__17);
            this.state = 216;
            this.identifier();
            this.state = 217;
            this.match(rustParser.T__15);
            this.state = 219;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 218;
                this.field_list();
                }
            }

            this.state = 221;
            this.match(rustParser.T__16);
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
        this.enterRule(localContext, 32, rustParser.RULE_field_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 223;
            this.field_decl();
            this.state = 228;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 224;
                    this.match(rustParser.T__9);
                    this.state = 225;
                    this.field_decl();
                    }
                    }
                }
                this.state = 230;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            }
            this.state = 232;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 231;
                this.match(rustParser.T__9);
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
        this.enterRule(localContext, 34, rustParser.RULE_field_decl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 234;
            this.identifier();
            this.state = 235;
            this.match(rustParser.T__2);
            this.state = 236;
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
        this.enterRule(localContext, 36, rustParser.RULE_field_init_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 238;
            this.field_init();
            this.state = 243;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 239;
                    this.match(rustParser.T__9);
                    this.state = 240;
                    this.field_init();
                    }
                    }
                }
                this.state = 245;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 20, this.context);
            }
            this.state = 247;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 246;
                this.match(rustParser.T__9);
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
        this.enterRule(localContext, 38, rustParser.RULE_field_init);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 249;
            this.identifier();
            this.state = 250;
            this.match(rustParser.T__2);
            this.state = 251;
            this.expression();
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
        this.enterRule(localContext, 40, rustParser.RULE_enum_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 253;
            this.match(rustParser.T__18);
            this.state = 254;
            this.identifier();
            this.state = 255;
            this.match(rustParser.T__15);
            this.state = 257;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 50) {
                {
                this.state = 256;
                this.variant_list();
                }
            }

            this.state = 259;
            this.match(rustParser.T__16);
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
        this.enterRule(localContext, 42, rustParser.RULE_variant_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 261;
            this.variant();
            this.state = 266;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 262;
                    this.match(rustParser.T__9);
                    this.state = 263;
                    this.variant();
                    }
                    }
                }
                this.state = 268;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 23, this.context);
            }
            this.state = 270;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 269;
                this.match(rustParser.T__9);
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
        this.enterRule(localContext, 44, rustParser.RULE_variant);
        let _la: number;
        try {
            this.state = 280;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 26, this.context) ) {
            case 1:
                localContext = new SimpleVariantContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 272;
                this.identifier();
                }
                break;
            case 2:
                localContext = new StructVariantContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 273;
                this.identifier();
                this.state = 274;
                this.match(rustParser.T__15);
                this.state = 276;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 50) {
                    {
                    this.state = 275;
                    this.field_list();
                    }
                }

                this.state = 278;
                this.match(rustParser.T__16);
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
        this.enterRule(localContext, 46, rustParser.RULE_while_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 282;
            this.match(rustParser.T__19);
            this.state = 283;
            this.expression();
            this.state = 284;
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
        this.enterRule(localContext, 48, rustParser.RULE_if_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 286;
            this.match(rustParser.T__20);
            this.state = 287;
            this.expression();
            this.state = 288;
            this.block();
            this.state = 294;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 46) {
                {
                this.state = 289;
                this.match(rustParser.KW_ELSE);
                this.state = 292;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case rustParser.T__15:
                    {
                    this.state = 290;
                    this.block();
                    }
                    break;
                case rustParser.T__20:
                    {
                    this.state = 291;
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
    public expression(): ExpressionContext {
        let localContext = new ExpressionContext(this.context, this.state);
        this.enterRule(localContext, 50, rustParser.RULE_expression);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 296;
            this.logical_or_expr();
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
    public logical_or_expr(): Logical_or_exprContext {
        let localContext = new Logical_or_exprContext(this.context, this.state);
        this.enterRule(localContext, 52, rustParser.RULE_logical_or_expr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 298;
            this.logical_and_expr();
            this.state = 303;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 22) {
                {
                {
                this.state = 299;
                this.match(rustParser.T__21);
                this.state = 300;
                this.logical_and_expr();
                }
                }
                this.state = 305;
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
    public logical_and_expr(): Logical_and_exprContext {
        let localContext = new Logical_and_exprContext(this.context, this.state);
        this.enterRule(localContext, 54, rustParser.RULE_logical_and_expr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 306;
            this.equality_expr();
            this.state = 311;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 23) {
                {
                {
                this.state = 307;
                this.match(rustParser.T__22);
                this.state = 308;
                this.equality_expr();
                }
                }
                this.state = 313;
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
    public equality_expr(): Equality_exprContext {
        let localContext = new Equality_exprContext(this.context, this.state);
        this.enterRule(localContext, 56, rustParser.RULE_equality_expr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 314;
            this.relational_expr();
            this.state = 319;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 24 || _la === 25) {
                {
                {
                this.state = 315;
                _la = this.tokenStream.LA(1);
                if(!(_la === 24 || _la === 25)) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 316;
                this.relational_expr();
                }
                }
                this.state = 321;
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
    public relational_expr(): Relational_exprContext {
        let localContext = new Relational_exprContext(this.context, this.state);
        this.enterRule(localContext, 58, rustParser.RULE_relational_expr);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 322;
            this.additive_expr();
            this.state = 327;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1006632960) !== 0)) {
                {
                {
                this.state = 323;
                _la = this.tokenStream.LA(1);
                if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1006632960) !== 0))) {
                this.errorHandler.recoverInline(this);
                }
                else {
                    this.errorHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 324;
                this.additive_expr();
                }
                }
                this.state = 329;
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
    public additive_expr(): Additive_exprContext {
        let localContext = new Additive_exprContext(this.context, this.state);
        this.enterRule(localContext, 60, rustParser.RULE_additive_expr);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 330;
            this.multiplicative_expr();
            this.state = 335;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 331;
                    _la = this.tokenStream.LA(1);
                    if(!(_la === 30 || _la === 31)) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 332;
                    this.multiplicative_expr();
                    }
                    }
                }
                this.state = 337;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
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
    public multiplicative_expr(): Multiplicative_exprContext {
        let localContext = new Multiplicative_exprContext(this.context, this.state);
        this.enterRule(localContext, 62, rustParser.RULE_multiplicative_expr);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 338;
            this.unary_expr();
            this.state = 343;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 339;
                    _la = this.tokenStream.LA(1);
                    if(!(((((_la - 6)) & ~0x1F) === 0 && ((1 << (_la - 6)) & 201326593) !== 0))) {
                    this.errorHandler.recoverInline(this);
                    }
                    else {
                        this.errorHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 340;
                    this.unary_expr();
                    }
                    }
                }
                this.state = 345;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 34, this.context);
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
    public unary_expr(): Unary_exprContext {
        let localContext = new Unary_exprContext(this.context, this.state);
        this.enterRule(localContext, 64, rustParser.RULE_unary_expr);
        try {
            this.state = 356;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.T__5:
            case rustParser.T__30:
            case rustParser.T__33:
            case rustParser.T__34:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 352;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 35, this.context) ) {
                case 1:
                    {
                    this.state = 346;
                    this.match(rustParser.T__33);
                    }
                    break;
                case 2:
                    {
                    this.state = 347;
                    this.match(rustParser.T__30);
                    }
                    break;
                case 3:
                    {
                    this.state = 348;
                    this.match(rustParser.T__34);
                    }
                    break;
                case 4:
                    {
                    this.state = 349;
                    this.match(rustParser.T__34);
                    this.state = 350;
                    this.match(rustParser.MUT);
                    }
                    break;
                case 5:
                    {
                    this.state = 351;
                    this.match(rustParser.T__5);
                    }
                    break;
                }
                this.state = 354;
                this.unary_expr();
                }
                break;
            case rustParser.T__15:
            case rustParser.T__37:
            case rustParser.T__38:
            case rustParser.NUMBER:
            case rustParser.BOOL:
            case rustParser.STRING:
            case rustParser.IDENTIFIER:
            case rustParser.LPAREN:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 355;
                this.postfix_expr();
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
    public postfix_expr(): Postfix_exprContext {
        let localContext = new Postfix_exprContext(this.context, this.state);
        this.enterRule(localContext, 66, rustParser.RULE_postfix_expr);
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 358;
            this.primary_expr();
            this.state = 362;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 359;
                    this.postfix_op();
                    }
                    }
                }
                this.state = 364;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 37, this.context);
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
    public postfix_op(): Postfix_opContext {
        let localContext = new Postfix_opContext(this.context, this.state);
        this.enterRule(localContext, 68, rustParser.RULE_postfix_op);
        let _la: number;
        try {
            this.state = 382;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 40, this.context) ) {
            case 1:
                localContext = new FieldAccessContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 365;
                this.match(rustParser.T__35);
                this.state = 366;
                this.identifier();
                }
                break;
            case 2:
                localContext = new EnumAccessContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 367;
                this.match(rustParser.T__36);
                this.state = 368;
                this.identifier();
                }
                break;
            case 3:
                localContext = new FunctionCallContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 369;
                this.match(rustParser.LPAREN);
                this.state = 371;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147549248) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 1171507) !== 0)) {
                    {
                    this.state = 370;
                    this.argument_list();
                    }
                }

                this.state = 373;
                this.match(rustParser.RPAREN);
                }
                break;
            case 4:
                localContext = new EnumStructInitContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 374;
                this.match(rustParser.T__36);
                this.state = 375;
                this.identifier();
                this.state = 376;
                this.match(rustParser.T__15);
                this.state = 378;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 50) {
                    {
                    this.state = 377;
                    this.field_init_list();
                    }
                }

                this.state = 380;
                this.match(rustParser.T__16);
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
    public primary_expr(): Primary_exprContext {
        let localContext = new Primary_exprContext(this.context, this.state);
        this.enterRule(localContext, 70, rustParser.RULE_primary_expr);
        let _la: number;
        try {
            this.state = 412;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 43, this.context) ) {
            case 1:
                localContext = new ParenExprContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 384;
                this.match(rustParser.LPAREN);
                this.state = 385;
                this.expression();
                this.state = 386;
                this.match(rustParser.RPAREN);
                }
                break;
            case 2:
                localContext = new StructInitContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 388;
                this.identifier();
                this.state = 389;
                this.match(rustParser.T__15);
                this.state = 391;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 50) {
                    {
                    this.state = 390;
                    this.field_init_list();
                    }
                }

                this.state = 393;
                this.match(rustParser.T__16);
                }
                break;
            case 3:
                localContext = new MatchExprContext(localContext);
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 395;
                this.match(rustParser.T__37);
                this.state = 396;
                this.expression();
                this.state = 397;
                this.match(rustParser.T__15);
                this.state = 398;
                this.match_arm_list();
                this.state = 399;
                this.match(rustParser.T__16);
                }
                break;
            case 4:
                localContext = new VariableReferenceContext(localContext);
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 401;
                this.identifier();
                }
                break;
            case 5:
                localContext = new SimpleContext(localContext);
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 402;
                this.number_();
                }
                break;
            case 6:
                localContext = new BoolLiteralContext(localContext);
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 403;
                this.match(rustParser.BOOL);
                }
                break;
            case 7:
                localContext = new StringLiteralContext(localContext);
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 404;
                this.match(rustParser.STRING);
                }
                break;
            case 8:
                localContext = new PrintlnMacroContext(localContext);
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 405;
                this.match(rustParser.T__38);
                this.state = 406;
                this.match(rustParser.LPAREN);
                this.state = 408;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147549248) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 1171507) !== 0)) {
                    {
                    this.state = 407;
                    this.argument_list();
                    }
                }

                this.state = 410;
                this.match(rustParser.RPAREN);
                }
                break;
            case 9:
                localContext = new BlockExprContext(localContext);
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 411;
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
    public ty(): TyContext {
        let localContext = new TyContext(this.context, this.state);
        this.enterRule(localContext, 72, rustParser.RULE_ty);
        try {
            this.state = 418;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.T__39:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 414;
                this.match(rustParser.T__39);
                }
                break;
            case rustParser.T__40:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 415;
                this.match(rustParser.T__40);
                }
                break;
            case rustParser.T__41:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 416;
                this.match(rustParser.T__41);
                }
                break;
            case rustParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 417;
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
    public argument_list(): Argument_listContext {
        let localContext = new Argument_listContext(this.context, this.state);
        this.enterRule(localContext, 74, rustParser.RULE_argument_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 420;
            this.expression();
            this.state = 425;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 10) {
                {
                {
                this.state = 421;
                this.match(rustParser.T__9);
                this.state = 422;
                this.expression();
                }
                }
                this.state = 427;
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
        this.enterRule(localContext, 76, rustParser.RULE_number);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 428;
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
        this.enterRule(localContext, 78, rustParser.RULE_match_arm_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 430;
            this.match_arm();
            this.state = 435;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 46, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 431;
                    this.match(rustParser.T__9);
                    this.state = 432;
                    this.match_arm();
                    }
                    }
                }
                this.state = 437;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 46, this.context);
            }
            this.state = 439;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 438;
                this.match(rustParser.T__9);
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
        this.enterRule(localContext, 80, rustParser.RULE_match_arm);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 441;
            this.match_pattern();
            this.state = 442;
            this.match(rustParser.T__42);
            this.state = 443;
            this.expression();
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
        this.enterRule(localContext, 82, rustParser.RULE_match_pattern);
        try {
            this.state = 458;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 48, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 445;
                this.match(rustParser.NUMBER);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 446;
                this.match(rustParser.T__43);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 447;
                this.identifier();
                this.state = 448;
                this.match(rustParser.T__36);
                this.state = 449;
                this.identifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 451;
                this.identifier();
                this.state = 452;
                this.match(rustParser.T__36);
                this.state = 453;
                this.identifier();
                this.state = 454;
                this.match(rustParser.T__15);
                this.state = 455;
                this.pattern_list();
                this.state = 456;
                this.match(rustParser.T__16);
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
    public pattern_list(): Pattern_listContext {
        let localContext = new Pattern_listContext(this.context, this.state);
        this.enterRule(localContext, 84, rustParser.RULE_pattern_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 460;
            this.identifier();
            this.state = 465;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 461;
                    this.match(rustParser.T__9);
                    this.state = 462;
                    this.identifier();
                    }
                    }
                }
                this.state = 467;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 49, this.context);
            }
            this.state = 469;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 10) {
                {
                this.state = 468;
                this.match(rustParser.T__9);
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
    public identifier(): IdentifierContext {
        let localContext = new IdentifierContext(this.context, this.state);
        this.enterRule(localContext, 86, rustParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 471;
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

    public static readonly _serializedATN: number[] = [
        4,1,55,474,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,
        7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,
        2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,1,0,4,0,90,8,0,11,0,12,0,
        91,1,0,1,0,1,1,1,1,3,1,98,8,1,1,1,1,1,3,1,102,8,1,1,1,1,1,3,1,106,
        8,1,1,1,1,1,3,1,110,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,120,
        8,1,1,1,1,1,1,1,1,1,1,1,3,1,127,8,1,1,2,1,2,3,2,131,8,2,1,2,1,2,
        1,2,3,2,136,8,2,1,2,1,2,3,2,140,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
        1,4,1,4,1,4,1,4,1,5,1,5,1,5,3,5,156,8,5,1,6,1,6,1,6,1,7,1,7,1,8,
        1,8,1,8,1,8,3,8,167,8,8,1,8,1,8,1,8,3,8,172,8,8,1,8,1,8,1,9,1,9,
        1,9,5,9,179,8,9,10,9,12,9,182,9,9,1,10,3,10,185,8,10,1,10,1,10,1,
        10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,
        13,1,13,1,14,1,14,5,14,206,8,14,10,14,12,14,209,9,14,1,14,3,14,212,
        8,14,1,14,1,14,1,15,1,15,1,15,1,15,3,15,220,8,15,1,15,1,15,1,16,
        1,16,1,16,5,16,227,8,16,10,16,12,16,230,9,16,1,16,3,16,233,8,16,
        1,17,1,17,1,17,1,17,1,18,1,18,1,18,5,18,242,8,18,10,18,12,18,245,
        9,18,1,18,3,18,248,8,18,1,19,1,19,1,19,1,19,1,20,1,20,1,20,1,20,
        3,20,258,8,20,1,20,1,20,1,21,1,21,1,21,5,21,265,8,21,10,21,12,21,
        268,9,21,1,21,3,21,271,8,21,1,22,1,22,1,22,1,22,3,22,277,8,22,1,
        22,1,22,3,22,281,8,22,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,
        24,1,24,3,24,293,8,24,3,24,295,8,24,1,25,1,25,1,26,1,26,1,26,5,26,
        302,8,26,10,26,12,26,305,9,26,1,27,1,27,1,27,5,27,310,8,27,10,27,
        12,27,313,9,27,1,28,1,28,1,28,5,28,318,8,28,10,28,12,28,321,9,28,
        1,29,1,29,1,29,5,29,326,8,29,10,29,12,29,329,9,29,1,30,1,30,1,30,
        5,30,334,8,30,10,30,12,30,337,9,30,1,31,1,31,1,31,5,31,342,8,31,
        10,31,12,31,345,9,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,353,8,32,
        1,32,1,32,3,32,357,8,32,1,33,1,33,5,33,361,8,33,10,33,12,33,364,
        9,33,1,34,1,34,1,34,1,34,1,34,1,34,3,34,372,8,34,1,34,1,34,1,34,
        1,34,1,34,3,34,379,8,34,1,34,1,34,3,34,383,8,34,1,35,1,35,1,35,1,
        35,1,35,1,35,1,35,3,35,392,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
        35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,409,8,35,1,35,1,
        35,3,35,413,8,35,1,36,1,36,1,36,1,36,3,36,419,8,36,1,37,1,37,1,37,
        5,37,424,8,37,10,37,12,37,427,9,37,1,38,1,38,1,39,1,39,1,39,5,39,
        434,8,39,10,39,12,39,437,9,39,1,39,3,39,440,8,39,1,40,1,40,1,40,
        1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,
        1,41,3,41,459,8,41,1,42,1,42,1,42,5,42,464,8,42,10,42,12,42,467,
        9,42,1,42,3,42,470,8,42,1,43,1,43,1,43,0,0,44,0,2,4,6,8,10,12,14,
        16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,
        60,62,64,66,68,70,72,74,76,78,80,82,84,86,0,4,1,0,24,25,1,0,26,29,
        1,0,30,31,2,0,6,6,32,33,508,0,89,1,0,0,0,2,126,1,0,0,0,4,128,1,0,
        0,0,6,141,1,0,0,0,8,148,1,0,0,0,10,155,1,0,0,0,12,157,1,0,0,0,14,
        160,1,0,0,0,16,162,1,0,0,0,18,175,1,0,0,0,20,184,1,0,0,0,22,190,
        1,0,0,0,24,198,1,0,0,0,26,201,1,0,0,0,28,203,1,0,0,0,30,215,1,0,
        0,0,32,223,1,0,0,0,34,234,1,0,0,0,36,238,1,0,0,0,38,249,1,0,0,0,
        40,253,1,0,0,0,42,261,1,0,0,0,44,280,1,0,0,0,46,282,1,0,0,0,48,286,
        1,0,0,0,50,296,1,0,0,0,52,298,1,0,0,0,54,306,1,0,0,0,56,314,1,0,
        0,0,58,322,1,0,0,0,60,330,1,0,0,0,62,338,1,0,0,0,64,356,1,0,0,0,
        66,358,1,0,0,0,68,382,1,0,0,0,70,412,1,0,0,0,72,418,1,0,0,0,74,420,
        1,0,0,0,76,428,1,0,0,0,78,430,1,0,0,0,80,441,1,0,0,0,82,458,1,0,
        0,0,84,460,1,0,0,0,86,471,1,0,0,0,88,90,3,2,1,0,89,88,1,0,0,0,90,
        91,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,0,92,93,1,0,0,0,93,94,5,0,0,
        1,94,1,1,0,0,0,95,97,3,4,2,0,96,98,5,1,0,0,97,96,1,0,0,0,97,98,1,
        0,0,0,98,127,1,0,0,0,99,101,3,6,3,0,100,102,5,1,0,0,101,100,1,0,
        0,0,101,102,1,0,0,0,102,127,1,0,0,0,103,105,3,8,4,0,104,106,5,1,
        0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,127,1,0,0,0,107,109,3,12,
        6,0,108,110,5,1,0,0,109,108,1,0,0,0,109,110,1,0,0,0,110,127,1,0,
        0,0,111,112,3,14,7,0,112,113,5,1,0,0,113,127,1,0,0,0,114,127,3,16,
        8,0,115,127,3,22,11,0,116,127,3,24,12,0,117,119,3,26,13,0,118,120,
        5,1,0,0,119,118,1,0,0,0,119,120,1,0,0,0,120,127,1,0,0,0,121,127,
        3,28,14,0,122,127,3,30,15,0,123,127,3,40,20,0,124,127,3,46,23,0,
        125,127,3,48,24,0,126,95,1,0,0,0,126,99,1,0,0,0,126,103,1,0,0,0,
        126,107,1,0,0,0,126,111,1,0,0,0,126,114,1,0,0,0,126,115,1,0,0,0,
        126,116,1,0,0,0,126,117,1,0,0,0,126,121,1,0,0,0,126,122,1,0,0,0,
        126,123,1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,3,1,0,0,0,128,
        130,5,2,0,0,129,131,5,45,0,0,130,129,1,0,0,0,130,131,1,0,0,0,131,
        132,1,0,0,0,132,135,3,86,43,0,133,134,5,3,0,0,134,136,3,72,36,0,
        135,133,1,0,0,0,135,136,1,0,0,0,136,139,1,0,0,0,137,138,5,4,0,0,
        138,140,3,50,25,0,139,137,1,0,0,0,139,140,1,0,0,0,140,5,1,0,0,0,
        141,142,5,5,0,0,142,143,3,86,43,0,143,144,5,3,0,0,144,145,3,72,36,
        0,145,146,5,4,0,0,146,147,3,50,25,0,147,7,1,0,0,0,148,149,3,10,5,
        0,149,150,5,4,0,0,150,151,3,50,25,0,151,9,1,0,0,0,152,153,5,6,0,
        0,153,156,3,50,25,0,154,156,3,86,43,0,155,152,1,0,0,0,155,154,1,
        0,0,0,156,11,1,0,0,0,157,158,5,7,0,0,158,159,3,50,25,0,159,13,1,
        0,0,0,160,161,3,50,25,0,161,15,1,0,0,0,162,163,5,8,0,0,163,164,3,
        86,43,0,164,166,5,54,0,0,165,167,3,18,9,0,166,165,1,0,0,0,166,167,
        1,0,0,0,167,168,1,0,0,0,168,171,5,55,0,0,169,170,5,9,0,0,170,172,
        3,72,36,0,171,169,1,0,0,0,171,172,1,0,0,0,172,173,1,0,0,0,173,174,
        3,28,14,0,174,17,1,0,0,0,175,180,3,20,10,0,176,177,5,10,0,0,177,
        179,3,20,10,0,178,176,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,
        181,1,0,0,0,181,19,1,0,0,0,182,180,1,0,0,0,183,185,5,45,0,0,184,
        183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,187,3,86,43,0,187,
        188,5,3,0,0,188,189,3,72,36,0,189,21,1,0,0,0,190,191,5,11,0,0,191,
        192,3,86,43,0,192,193,5,12,0,0,193,194,3,50,25,0,194,195,5,13,0,
        0,195,196,3,50,25,0,196,197,3,28,14,0,197,23,1,0,0,0,198,199,5,14,
        0,0,199,200,3,28,14,0,200,25,1,0,0,0,201,202,5,15,0,0,202,27,1,0,
        0,0,203,207,5,16,0,0,204,206,3,2,1,0,205,204,1,0,0,0,206,209,1,0,
        0,0,207,205,1,0,0,0,207,208,1,0,0,0,208,211,1,0,0,0,209,207,1,0,
        0,0,210,212,3,50,25,0,211,210,1,0,0,0,211,212,1,0,0,0,212,213,1,
        0,0,0,213,214,5,17,0,0,214,29,1,0,0,0,215,216,5,18,0,0,216,217,3,
        86,43,0,217,219,5,16,0,0,218,220,3,32,16,0,219,218,1,0,0,0,219,220,
        1,0,0,0,220,221,1,0,0,0,221,222,5,17,0,0,222,31,1,0,0,0,223,228,
        3,34,17,0,224,225,5,10,0,0,225,227,3,34,17,0,226,224,1,0,0,0,227,
        230,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,232,1,0,0,0,230,
        228,1,0,0,0,231,233,5,10,0,0,232,231,1,0,0,0,232,233,1,0,0,0,233,
        33,1,0,0,0,234,235,3,86,43,0,235,236,5,3,0,0,236,237,3,72,36,0,237,
        35,1,0,0,0,238,243,3,38,19,0,239,240,5,10,0,0,240,242,3,38,19,0,
        241,239,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,
        244,247,1,0,0,0,245,243,1,0,0,0,246,248,5,10,0,0,247,246,1,0,0,0,
        247,248,1,0,0,0,248,37,1,0,0,0,249,250,3,86,43,0,250,251,5,3,0,0,
        251,252,3,50,25,0,252,39,1,0,0,0,253,254,5,19,0,0,254,255,3,86,43,
        0,255,257,5,16,0,0,256,258,3,42,21,0,257,256,1,0,0,0,257,258,1,0,
        0,0,258,259,1,0,0,0,259,260,5,17,0,0,260,41,1,0,0,0,261,266,3,44,
        22,0,262,263,5,10,0,0,263,265,3,44,22,0,264,262,1,0,0,0,265,268,
        1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,270,1,0,0,0,268,266,
        1,0,0,0,269,271,5,10,0,0,270,269,1,0,0,0,270,271,1,0,0,0,271,43,
        1,0,0,0,272,281,3,86,43,0,273,274,3,86,43,0,274,276,5,16,0,0,275,
        277,3,32,16,0,276,275,1,0,0,0,276,277,1,0,0,0,277,278,1,0,0,0,278,
        279,5,17,0,0,279,281,1,0,0,0,280,272,1,0,0,0,280,273,1,0,0,0,281,
        45,1,0,0,0,282,283,5,20,0,0,283,284,3,50,25,0,284,285,3,28,14,0,
        285,47,1,0,0,0,286,287,5,21,0,0,287,288,3,50,25,0,288,294,3,28,14,
        0,289,292,5,46,0,0,290,293,3,28,14,0,291,293,3,48,24,0,292,290,1,
        0,0,0,292,291,1,0,0,0,293,295,1,0,0,0,294,289,1,0,0,0,294,295,1,
        0,0,0,295,49,1,0,0,0,296,297,3,52,26,0,297,51,1,0,0,0,298,303,3,
        54,27,0,299,300,5,22,0,0,300,302,3,54,27,0,301,299,1,0,0,0,302,305,
        1,0,0,0,303,301,1,0,0,0,303,304,1,0,0,0,304,53,1,0,0,0,305,303,1,
        0,0,0,306,311,3,56,28,0,307,308,5,23,0,0,308,310,3,56,28,0,309,307,
        1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,55,1,
        0,0,0,313,311,1,0,0,0,314,319,3,58,29,0,315,316,7,0,0,0,316,318,
        3,58,29,0,317,315,1,0,0,0,318,321,1,0,0,0,319,317,1,0,0,0,319,320,
        1,0,0,0,320,57,1,0,0,0,321,319,1,0,0,0,322,327,3,60,30,0,323,324,
        7,1,0,0,324,326,3,60,30,0,325,323,1,0,0,0,326,329,1,0,0,0,327,325,
        1,0,0,0,327,328,1,0,0,0,328,59,1,0,0,0,329,327,1,0,0,0,330,335,3,
        62,31,0,331,332,7,2,0,0,332,334,3,62,31,0,333,331,1,0,0,0,334,337,
        1,0,0,0,335,333,1,0,0,0,335,336,1,0,0,0,336,61,1,0,0,0,337,335,1,
        0,0,0,338,343,3,64,32,0,339,340,7,3,0,0,340,342,3,64,32,0,341,339,
        1,0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,343,344,1,0,0,0,344,63,1,
        0,0,0,345,343,1,0,0,0,346,353,5,34,0,0,347,353,5,31,0,0,348,353,
        5,35,0,0,349,350,5,35,0,0,350,353,5,45,0,0,351,353,5,6,0,0,352,346,
        1,0,0,0,352,347,1,0,0,0,352,348,1,0,0,0,352,349,1,0,0,0,352,351,
        1,0,0,0,353,354,1,0,0,0,354,357,3,64,32,0,355,357,3,66,33,0,356,
        352,1,0,0,0,356,355,1,0,0,0,357,65,1,0,0,0,358,362,3,70,35,0,359,
        361,3,68,34,0,360,359,1,0,0,0,361,364,1,0,0,0,362,360,1,0,0,0,362,
        363,1,0,0,0,363,67,1,0,0,0,364,362,1,0,0,0,365,366,5,36,0,0,366,
        383,3,86,43,0,367,368,5,37,0,0,368,383,3,86,43,0,369,371,5,54,0,
        0,370,372,3,74,37,0,371,370,1,0,0,0,371,372,1,0,0,0,372,373,1,0,
        0,0,373,383,5,55,0,0,374,375,5,37,0,0,375,376,3,86,43,0,376,378,
        5,16,0,0,377,379,3,36,18,0,378,377,1,0,0,0,378,379,1,0,0,0,379,380,
        1,0,0,0,380,381,5,17,0,0,381,383,1,0,0,0,382,365,1,0,0,0,382,367,
        1,0,0,0,382,369,1,0,0,0,382,374,1,0,0,0,383,69,1,0,0,0,384,385,5,
        54,0,0,385,386,3,50,25,0,386,387,5,55,0,0,387,413,1,0,0,0,388,389,
        3,86,43,0,389,391,5,16,0,0,390,392,3,36,18,0,391,390,1,0,0,0,391,
        392,1,0,0,0,392,393,1,0,0,0,393,394,5,17,0,0,394,413,1,0,0,0,395,
        396,5,38,0,0,396,397,3,50,25,0,397,398,5,16,0,0,398,399,3,78,39,
        0,399,400,5,17,0,0,400,413,1,0,0,0,401,413,3,86,43,0,402,413,3,76,
        38,0,403,413,5,48,0,0,404,413,5,49,0,0,405,406,5,39,0,0,406,408,
        5,54,0,0,407,409,3,74,37,0,408,407,1,0,0,0,408,409,1,0,0,0,409,410,
        1,0,0,0,410,413,5,55,0,0,411,413,3,28,14,0,412,384,1,0,0,0,412,388,
        1,0,0,0,412,395,1,0,0,0,412,401,1,0,0,0,412,402,1,0,0,0,412,403,
        1,0,0,0,412,404,1,0,0,0,412,405,1,0,0,0,412,411,1,0,0,0,413,71,1,
        0,0,0,414,419,5,40,0,0,415,419,5,41,0,0,416,419,5,42,0,0,417,419,
        3,86,43,0,418,414,1,0,0,0,418,415,1,0,0,0,418,416,1,0,0,0,418,417,
        1,0,0,0,419,73,1,0,0,0,420,425,3,50,25,0,421,422,5,10,0,0,422,424,
        3,50,25,0,423,421,1,0,0,0,424,427,1,0,0,0,425,423,1,0,0,0,425,426,
        1,0,0,0,426,75,1,0,0,0,427,425,1,0,0,0,428,429,5,47,0,0,429,77,1,
        0,0,0,430,435,3,80,40,0,431,432,5,10,0,0,432,434,3,80,40,0,433,431,
        1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,435,436,1,0,0,0,436,439,
        1,0,0,0,437,435,1,0,0,0,438,440,5,10,0,0,439,438,1,0,0,0,439,440,
        1,0,0,0,440,79,1,0,0,0,441,442,3,82,41,0,442,443,5,43,0,0,443,444,
        3,50,25,0,444,81,1,0,0,0,445,459,5,47,0,0,446,459,5,44,0,0,447,448,
        3,86,43,0,448,449,5,37,0,0,449,450,3,86,43,0,450,459,1,0,0,0,451,
        452,3,86,43,0,452,453,5,37,0,0,453,454,3,86,43,0,454,455,5,16,0,
        0,455,456,3,84,42,0,456,457,5,17,0,0,457,459,1,0,0,0,458,445,1,0,
        0,0,458,446,1,0,0,0,458,447,1,0,0,0,458,451,1,0,0,0,459,83,1,0,0,
        0,460,465,3,86,43,0,461,462,5,10,0,0,462,464,3,86,43,0,463,461,1,
        0,0,0,464,467,1,0,0,0,465,463,1,0,0,0,465,466,1,0,0,0,466,469,1,
        0,0,0,467,465,1,0,0,0,468,470,5,10,0,0,469,468,1,0,0,0,469,470,1,
        0,0,0,470,85,1,0,0,0,471,472,5,50,0,0,472,87,1,0,0,0,51,91,97,101,
        105,109,119,126,130,135,139,155,166,171,180,184,207,211,219,228,
        232,243,247,257,266,270,276,280,292,294,303,311,319,327,335,343,
        352,356,362,371,378,382,391,408,412,418,425,435,439,458,465,469
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
    public const_stmt(): Const_stmtContext | null {
        return this.getRuleContext(0, Const_stmtContext);
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


export class Const_stmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
    }
    public ty(): TyContext {
        return this.getRuleContext(0, TyContext)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_const_stmt;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterConst_stmt) {
             listener.enterConst_stmt(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitConst_stmt) {
             listener.exitConst_stmt(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitConst_stmt) {
            return visitor.visitConst_stmt(this);
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
    public ty(): TyContext {
        return this.getRuleContext(0, TyContext)!;
    }
    public MUT(): antlr.TerminalNode | null {
        return this.getToken(rustParser.MUT, 0);
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
    public logical_or_expr(): Logical_or_exprContext {
        return this.getRuleContext(0, Logical_or_exprContext)!;
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_expression;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterExpression) {
             listener.enterExpression(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitExpression) {
             listener.exitExpression(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Logical_or_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public logical_and_expr(): Logical_and_exprContext[];
    public logical_and_expr(i: number): Logical_and_exprContext | null;
    public logical_and_expr(i?: number): Logical_and_exprContext[] | Logical_and_exprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Logical_and_exprContext);
        }

        return this.getRuleContext(i, Logical_and_exprContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_logical_or_expr;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterLogical_or_expr) {
             listener.enterLogical_or_expr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitLogical_or_expr) {
             listener.exitLogical_or_expr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitLogical_or_expr) {
            return visitor.visitLogical_or_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Logical_and_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public equality_expr(): Equality_exprContext[];
    public equality_expr(i: number): Equality_exprContext | null;
    public equality_expr(i?: number): Equality_exprContext[] | Equality_exprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Equality_exprContext);
        }

        return this.getRuleContext(i, Equality_exprContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_logical_and_expr;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterLogical_and_expr) {
             listener.enterLogical_and_expr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitLogical_and_expr) {
             listener.exitLogical_and_expr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitLogical_and_expr) {
            return visitor.visitLogical_and_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Equality_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public relational_expr(): Relational_exprContext[];
    public relational_expr(i: number): Relational_exprContext | null;
    public relational_expr(i?: number): Relational_exprContext[] | Relational_exprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Relational_exprContext);
        }

        return this.getRuleContext(i, Relational_exprContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_equality_expr;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterEquality_expr) {
             listener.enterEquality_expr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitEquality_expr) {
             listener.exitEquality_expr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitEquality_expr) {
            return visitor.visitEquality_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Relational_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public additive_expr(): Additive_exprContext[];
    public additive_expr(i: number): Additive_exprContext | null;
    public additive_expr(i?: number): Additive_exprContext[] | Additive_exprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Additive_exprContext);
        }

        return this.getRuleContext(i, Additive_exprContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_relational_expr;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterRelational_expr) {
             listener.enterRelational_expr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitRelational_expr) {
             listener.exitRelational_expr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitRelational_expr) {
            return visitor.visitRelational_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Additive_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public multiplicative_expr(): Multiplicative_exprContext[];
    public multiplicative_expr(i: number): Multiplicative_exprContext | null;
    public multiplicative_expr(i?: number): Multiplicative_exprContext[] | Multiplicative_exprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Multiplicative_exprContext);
        }

        return this.getRuleContext(i, Multiplicative_exprContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_additive_expr;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterAdditive_expr) {
             listener.enterAdditive_expr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitAdditive_expr) {
             listener.exitAdditive_expr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitAdditive_expr) {
            return visitor.visitAdditive_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Multiplicative_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unary_expr(): Unary_exprContext[];
    public unary_expr(i: number): Unary_exprContext | null;
    public unary_expr(i?: number): Unary_exprContext[] | Unary_exprContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Unary_exprContext);
        }

        return this.getRuleContext(i, Unary_exprContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_multiplicative_expr;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterMultiplicative_expr) {
             listener.enterMultiplicative_expr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitMultiplicative_expr) {
             listener.exitMultiplicative_expr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitMultiplicative_expr) {
            return visitor.visitMultiplicative_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Unary_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unary_expr(): Unary_exprContext | null {
        return this.getRuleContext(0, Unary_exprContext);
    }
    public MUT(): antlr.TerminalNode | null {
        return this.getToken(rustParser.MUT, 0);
    }
    public postfix_expr(): Postfix_exprContext | null {
        return this.getRuleContext(0, Postfix_exprContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_unary_expr;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterUnary_expr) {
             listener.enterUnary_expr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitUnary_expr) {
             listener.exitUnary_expr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitUnary_expr) {
            return visitor.visitUnary_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Postfix_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public primary_expr(): Primary_exprContext {
        return this.getRuleContext(0, Primary_exprContext)!;
    }
    public postfix_op(): Postfix_opContext[];
    public postfix_op(i: number): Postfix_opContext | null;
    public postfix_op(i?: number): Postfix_opContext[] | Postfix_opContext | null {
        if (i === undefined) {
            return this.getRuleContexts(Postfix_opContext);
        }

        return this.getRuleContext(i, Postfix_opContext);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_postfix_expr;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterPostfix_expr) {
             listener.enterPostfix_expr(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitPostfix_expr) {
             listener.exitPostfix_expr(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitPostfix_expr) {
            return visitor.visitPostfix_expr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class Postfix_opContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_postfix_op;
    }
    public override copyFrom(ctx: Postfix_opContext): void {
        super.copyFrom(ctx);
    }
}
export class EnumStructInitContext extends Postfix_opContext {
    public constructor(ctx: Postfix_opContext) {
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
export class FieldAccessContext extends Postfix_opContext {
    public constructor(ctx: Postfix_opContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
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
export class FunctionCallContext extends Postfix_opContext {
    public constructor(ctx: Postfix_opContext) {
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
export class EnumAccessContext extends Postfix_opContext {
    public constructor(ctx: Postfix_opContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public identifier(): IdentifierContext {
        return this.getRuleContext(0, IdentifierContext)!;
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


export class Primary_exprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return rustParser.RULE_primary_expr;
    }
    public override copyFrom(ctx: Primary_exprContext): void {
        super.copyFrom(ctx);
    }
}
export class StructInitContext extends Primary_exprContext {
    public constructor(ctx: Primary_exprContext) {
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
export class StringLiteralContext extends Primary_exprContext {
    public constructor(ctx: Primary_exprContext) {
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
export class MatchExprContext extends Primary_exprContext {
    public constructor(ctx: Primary_exprContext) {
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
export class VariableReferenceContext extends Primary_exprContext {
    public constructor(ctx: Primary_exprContext) {
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
export class SimpleContext extends Primary_exprContext {
    public constructor(ctx: Primary_exprContext) {
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
export class BlockExprContext extends Primary_exprContext {
    public constructor(ctx: Primary_exprContext) {
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
export class BoolLiteralContext extends Primary_exprContext {
    public constructor(ctx: Primary_exprContext) {
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
export class PrintlnMacroContext extends Primary_exprContext {
    public constructor(ctx: Primary_exprContext) {
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
export class ParenExprContext extends Primary_exprContext {
    public constructor(ctx: Primary_exprContext) {
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
    public pattern_list(): Pattern_listContext | null {
        return this.getRuleContext(0, Pattern_listContext);
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


export class Pattern_listContext extends antlr.ParserRuleContext {
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
        return rustParser.RULE_pattern_list;
    }
    public override enterRule(listener: rustListener): void {
        if(listener.enterPattern_list) {
             listener.enterPattern_list(this);
        }
    }
    public override exitRule(listener: rustListener): void {
        if(listener.exitPattern_list) {
             listener.exitPattern_list(this);
        }
    }
    public override accept<Result>(visitor: rustVisitor<Result>): Result | null {
        if (visitor.visitPattern_list) {
            return visitor.visitPattern_list(this);
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
