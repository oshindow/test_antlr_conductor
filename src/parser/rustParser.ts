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
    public static readonly MUT = 44;
    public static readonly KW_ELSE = 45;
    public static readonly STRING = 46;
    public static readonly BOOL = 47;
    public static readonly IDENTIFIER = 48;
    public static readonly NUMBER = 49;
    public static readonly LINE_COMMENT = 50;
    public static readonly BLOCK_COMMENT = 51;
    public static readonly WS = 52;
    public static readonly LPAREN = 53;
    public static readonly RPAREN = 54;
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
    public static readonly RULE_field_decl = 15;
    public static readonly RULE_field_init_list = 16;
    public static readonly RULE_field_init = 17;
    public static readonly RULE_enum_decl = 18;
    public static readonly RULE_variant_list = 19;
    public static readonly RULE_variant = 20;
    public static readonly RULE_while_stmt = 21;
    public static readonly RULE_if_stmt = 22;
    public static readonly RULE_expression = 23;
    public static readonly RULE_ty = 24;
    public static readonly RULE_identifier = 25;
    public static readonly RULE_argument_list = 26;
    public static readonly RULE_number = 27;
    public static readonly RULE_match_arm_list = 28;
    public static readonly RULE_match_arm = 29;
    public static readonly RULE_match_pattern = 30;
    public static readonly RULE_pattern_list = 31;

    public static readonly literalNames = [
        null, "';'", "'let'", "':'", "'='", "'return'", "'fn'", "'->'", 
        "','", "'for'", "'in'", "'..'", "'loop'", "'break'", "'{'", "'}'", 
        "'struct'", "'enum'", "'while'", "'if'", "'!'", "'-'", "'&&'", "'||'", 
        "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", "'*'", "'+'", "'/'", 
        "'%'", "'println!'", "'.'", "'::'", "'match'", "'number'", "'bool'", 
        "'char'", "'String'", "'=>'", "'_'", "'mut'", "'else'", null, null, 
        null, null, null, null, null, "'('", "')'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        "MUT", "KW_ELSE", "STRING", "BOOL", "IDENTIFIER", "NUMBER", "LINE_COMMENT", 
        "BLOCK_COMMENT", "WS", "LPAREN", "RPAREN"
    ];
    public static readonly ruleNames = [
        "start", "statement", "let_stmt", "assign_stmt", "return_stmt", 
        "expression_stmt", "function_decl", "parameter_list", "parameter", 
        "for_stmt", "loop_stmt", "break_stmt", "block", "struct_decl", "field_list", 
        "field_decl", "field_init_list", "field_init", "enum_decl", "variant_list", 
        "variant", "while_stmt", "if_stmt", "expression", "ty", "identifier", 
        "argument_list", "number", "match_arm_list", "match_arm", "match_pattern", 
        "pattern_list",
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
            this.state = 65;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            do {
                {
                {
                this.state = 64;
                this.statement();
                }
                }
                this.state = 67;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4158052) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 585737) !== 0));
            this.state = 69;
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
            this.state = 98;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 71;
                this.let_stmt();
                this.state = 73;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 72;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 75;
                this.assign_stmt();
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
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 79;
                this.return_stmt();
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
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 83;
                this.expression_stmt();
                this.state = 84;
                this.match(rustParser.T__0);
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 86;
                this.function_decl();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 87;
                this.for_stmt();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 88;
                this.loop_stmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 89;
                this.break_stmt();
                this.state = 91;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 1) {
                    {
                    this.state = 90;
                    this.match(rustParser.T__0);
                    }
                }

                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 93;
                this.block();
                }
                break;
            case 10:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 94;
                this.struct_decl();
                }
                break;
            case 11:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 95;
                this.enum_decl();
                }
                break;
            case 12:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 96;
                this.while_stmt();
                }
                break;
            case 13:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 97;
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
            this.state = 100;
            this.match(rustParser.T__1);
            this.state = 102;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 44) {
                {
                this.state = 101;
                this.match(rustParser.MUT);
                }
            }

            this.state = 104;
            this.identifier();
            this.state = 107;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 105;
                this.match(rustParser.T__2);
                this.state = 106;
                this.ty();
                }
            }

            this.state = 111;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 4) {
                {
                this.state = 109;
                this.match(rustParser.T__3);
                this.state = 110;
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
            this.state = 113;
            this.identifier();
            this.state = 114;
            this.match(rustParser.T__3);
            this.state = 115;
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
            this.state = 117;
            this.match(rustParser.T__4);
            this.state = 118;
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
    public function_decl(): Function_declContext {
        let localContext = new Function_declContext(this.context, this.state);
        this.enterRule(localContext, 12, rustParser.RULE_function_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
            this.match(rustParser.T__5);
            this.state = 123;
            this.identifier();
            this.state = 124;
            this.match(rustParser.LPAREN);
            this.state = 126;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 125;
                this.parameter_list();
                }
            }

            this.state = 128;
            this.match(rustParser.RPAREN);
            this.state = 131;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 7) {
                {
                this.state = 129;
                this.match(rustParser.T__6);
                this.state = 130;
                this.ty();
                }
            }

            this.state = 133;
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
            this.state = 135;
            this.parameter();
            this.state = 140;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 136;
                this.match(rustParser.T__7);
                this.state = 137;
                this.parameter();
                }
                }
                this.state = 142;
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
            this.state = 143;
            this.identifier();
            this.state = 146;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 3) {
                {
                this.state = 144;
                this.match(rustParser.T__2);
                this.state = 145;
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
        this.enterRule(localContext, 18, rustParser.RULE_for_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 148;
            this.match(rustParser.T__8);
            this.state = 149;
            this.identifier();
            this.state = 150;
            this.match(rustParser.T__9);
            this.state = 151;
            this.expression(0);
            this.state = 152;
            this.match(rustParser.T__10);
            this.state = 153;
            this.expression(0);
            this.state = 154;
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
            this.state = 156;
            this.match(rustParser.T__11);
            this.state = 157;
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
            this.state = 159;
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
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 24, rustParser.RULE_block);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 161;
            this.match(rustParser.T__13);
            this.state = 165;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 162;
                    this.statement();
                    }
                    }
                }
                this.state = 167;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 13, this.context);
            }
            this.state = 169;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3162112) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 585737) !== 0)) {
                {
                this.state = 168;
                this.expression(0);
                }
            }

            this.state = 171;
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
    public struct_decl(): Struct_declContext {
        let localContext = new Struct_declContext(this.context, this.state);
        this.enterRule(localContext, 26, rustParser.RULE_struct_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 173;
            this.match(rustParser.T__15);
            this.state = 174;
            this.identifier();
            this.state = 175;
            this.match(rustParser.T__13);
            this.state = 177;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 176;
                this.field_list();
                }
            }

            this.state = 179;
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
    public field_list(): Field_listContext {
        let localContext = new Field_listContext(this.context, this.state);
        this.enterRule(localContext, 28, rustParser.RULE_field_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 181;
            this.field_decl();
            this.state = 186;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 182;
                    this.match(rustParser.T__7);
                    this.state = 183;
                    this.field_decl();
                    }
                    }
                }
                this.state = 188;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 16, this.context);
            }
            this.state = 190;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 189;
                this.match(rustParser.T__7);
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
        this.enterRule(localContext, 30, rustParser.RULE_field_decl);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 192;
            this.identifier();
            this.state = 193;
            this.match(rustParser.T__2);
            this.state = 194;
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
        this.enterRule(localContext, 32, rustParser.RULE_field_init_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 196;
            this.field_init();
            this.state = 201;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 197;
                    this.match(rustParser.T__7);
                    this.state = 198;
                    this.field_init();
                    }
                    }
                }
                this.state = 203;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 18, this.context);
            }
            this.state = 205;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 204;
                this.match(rustParser.T__7);
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
        this.enterRule(localContext, 34, rustParser.RULE_field_init);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 207;
            this.identifier();
            this.state = 208;
            this.match(rustParser.T__2);
            this.state = 209;
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
        this.enterRule(localContext, 36, rustParser.RULE_enum_decl);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 211;
            this.match(rustParser.T__16);
            this.state = 212;
            this.identifier();
            this.state = 213;
            this.match(rustParser.T__13);
            this.state = 215;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 48) {
                {
                this.state = 214;
                this.variant_list();
                }
            }

            this.state = 217;
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
    public variant_list(): Variant_listContext {
        let localContext = new Variant_listContext(this.context, this.state);
        this.enterRule(localContext, 38, rustParser.RULE_variant_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 219;
            this.variant();
            this.state = 224;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 220;
                    this.match(rustParser.T__7);
                    this.state = 221;
                    this.variant();
                    }
                    }
                }
                this.state = 226;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 21, this.context);
            }
            this.state = 228;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 227;
                this.match(rustParser.T__7);
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
        this.enterRule(localContext, 40, rustParser.RULE_variant);
        let _la: number;
        try {
            this.state = 238;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
            case 1:
                localContext = new SimpleVariantContext(localContext);
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 230;
                this.identifier();
                }
                break;
            case 2:
                localContext = new StructVariantContext(localContext);
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 231;
                this.identifier();
                this.state = 232;
                this.match(rustParser.T__13);
                this.state = 234;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 48) {
                    {
                    this.state = 233;
                    this.field_list();
                    }
                }

                this.state = 236;
                this.match(rustParser.T__14);
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
        this.enterRule(localContext, 42, rustParser.RULE_while_stmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 240;
            this.match(rustParser.T__17);
            this.state = 241;
            this.expression(0);
            this.state = 242;
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
        this.enterRule(localContext, 44, rustParser.RULE_if_stmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 244;
            this.match(rustParser.T__18);
            this.state = 245;
            this.expression(0);
            this.state = 246;
            this.block();
            this.state = 252;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 45) {
                {
                this.state = 247;
                this.match(rustParser.KW_ELSE);
                this.state = 250;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case rustParser.T__13:
                    {
                    this.state = 248;
                    this.block();
                    }
                    break;
                case rustParser.T__18:
                    {
                    this.state = 249;
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
        let _startState = 46;
        this.enterRecursionRule(localContext, 46, rustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 307;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 31, this.context) ) {
            case 1:
                {
                localContext = new LogicalNotContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 255;
                this.match(rustParser.T__19);
                this.state = 256;
                this.expression(28);
                }
                break;
            case 2:
                {
                localContext = new UnaryMinusContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 257;
                this.match(rustParser.T__20);
                this.state = 258;
                this.expression(27);
                }
                break;
            case 3:
                {
                localContext = new ParenExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 259;
                this.match(rustParser.LPAREN);
                this.state = 260;
                this.expression(0);
                this.state = 261;
                this.match(rustParser.RPAREN);
                }
                break;
            case 4:
                {
                localContext = new VariableReferenceContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 263;
                this.identifier();
                }
                break;
            case 5:
                {
                localContext = new SimpleContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 264;
                this.number_();
                }
                break;
            case 6:
                {
                localContext = new BoolLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 265;
                this.match(rustParser.BOOL);
                }
                break;
            case 7:
                {
                localContext = new StringLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 266;
                this.match(rustParser.STRING);
                }
                break;
            case 8:
                {
                localContext = new PrintlnMacroContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 267;
                this.match(rustParser.T__33);
                this.state = 268;
                this.match(rustParser.LPAREN);
                this.state = 270;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3162112) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 585737) !== 0)) {
                    {
                    this.state = 269;
                    this.argument_list();
                    }
                }

                this.state = 272;
                this.match(rustParser.RPAREN);
                }
                break;
            case 9:
                {
                localContext = new FunctionCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 273;
                this.identifier();
                this.state = 274;
                this.match(rustParser.LPAREN);
                this.state = 276;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3162112) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 585737) !== 0)) {
                    {
                    this.state = 275;
                    this.argument_list();
                    }
                }

                this.state = 278;
                this.match(rustParser.RPAREN);
                }
                break;
            case 10:
                {
                localContext = new BlockExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 280;
                this.block();
                }
                break;
            case 11:
                {
                localContext = new StructInitContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 281;
                this.identifier();
                this.state = 282;
                this.match(rustParser.T__13);
                this.state = 284;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 48) {
                    {
                    this.state = 283;
                    this.field_init_list();
                    }
                }

                this.state = 286;
                this.match(rustParser.T__14);
                }
                break;
            case 12:
                {
                localContext = new EnumAccessContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 288;
                this.identifier();
                this.state = 289;
                this.match(rustParser.T__35);
                this.state = 290;
                this.identifier();
                }
                break;
            case 13:
                {
                localContext = new MatchExprContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 292;
                this.match(rustParser.T__36);
                this.state = 293;
                this.expression(0);
                this.state = 294;
                this.match(rustParser.T__13);
                this.state = 295;
                this.match_arm_list();
                this.state = 296;
                this.match(rustParser.T__14);
                }
                break;
            case 14:
                {
                localContext = new EnumStructInitContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 298;
                this.identifier();
                this.state = 299;
                this.match(rustParser.T__35);
                this.state = 300;
                this.identifier();
                this.state = 301;
                this.match(rustParser.T__13);
                this.state = 303;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 48) {
                    {
                    this.state = 302;
                    this.field_init_list();
                    }
                }

                this.state = 305;
                this.match(rustParser.T__14);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 353;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 33, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 351;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 32, this.context) ) {
                    case 1:
                        {
                        localContext = new LogicalAndContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 309;
                        if (!(this.precpred(this.context, 26))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 26)");
                        }
                        this.state = 310;
                        this.match(rustParser.T__21);
                        this.state = 311;
                        this.expression(27);
                        }
                        break;
                    case 2:
                        {
                        localContext = new LogicalOrContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 312;
                        if (!(this.precpred(this.context, 25))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 25)");
                        }
                        this.state = 313;
                        this.match(rustParser.T__22);
                        this.state = 314;
                        this.expression(26);
                        }
                        break;
                    case 3:
                        {
                        localContext = new EqualContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 315;
                        if (!(this.precpred(this.context, 24))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 24)");
                        }
                        this.state = 316;
                        this.match(rustParser.T__23);
                        this.state = 317;
                        this.expression(25);
                        }
                        break;
                    case 4:
                        {
                        localContext = new NotEqualContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 318;
                        if (!(this.precpred(this.context, 23))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 23)");
                        }
                        this.state = 319;
                        this.match(rustParser.T__24);
                        this.state = 320;
                        this.expression(24);
                        }
                        break;
                    case 5:
                        {
                        localContext = new LessThanContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 321;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 322;
                        this.match(rustParser.T__25);
                        this.state = 323;
                        this.expression(23);
                        }
                        break;
                    case 6:
                        {
                        localContext = new LessEqualContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 324;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 325;
                        this.match(rustParser.T__26);
                        this.state = 326;
                        this.expression(22);
                        }
                        break;
                    case 7:
                        {
                        localContext = new GreaterThanContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 327;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 328;
                        this.match(rustParser.T__27);
                        this.state = 329;
                        this.expression(21);
                        }
                        break;
                    case 8:
                        {
                        localContext = new GreaterEqualContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 330;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 331;
                        this.match(rustParser.T__28);
                        this.state = 332;
                        this.expression(20);
                        }
                        break;
                    case 9:
                        {
                        localContext = new MultiplyContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 333;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 334;
                        this.match(rustParser.T__29);
                        this.state = 335;
                        this.expression(19);
                        }
                        break;
                    case 10:
                        {
                        localContext = new AddContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 336;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 337;
                        this.match(rustParser.T__30);
                        this.state = 338;
                        this.expression(18);
                        }
                        break;
                    case 11:
                        {
                        localContext = new SubtractContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 339;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 340;
                        this.match(rustParser.T__20);
                        this.state = 341;
                        this.expression(17);
                        }
                        break;
                    case 12:
                        {
                        localContext = new DivideContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 342;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 343;
                        this.match(rustParser.T__31);
                        this.state = 344;
                        this.expression(16);
                        }
                        break;
                    case 13:
                        {
                        localContext = new ModContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 345;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 346;
                        this.match(rustParser.T__32);
                        this.state = 347;
                        this.expression(15);
                        }
                        break;
                    case 14:
                        {
                        localContext = new FieldAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, rustParser.RULE_expression);
                        this.state = 348;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 349;
                        this.match(rustParser.T__34);
                        this.state = 350;
                        this.identifier();
                        }
                        break;
                    }
                    }
                }
                this.state = 355;
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
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public ty(): TyContext {
        let localContext = new TyContext(this.context, this.state);
        this.enterRule(localContext, 48, rustParser.RULE_ty);
        try {
            this.state = 361;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case rustParser.T__37:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 356;
                this.match(rustParser.T__37);
                }
                break;
            case rustParser.T__38:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 357;
                this.match(rustParser.T__38);
                }
                break;
            case rustParser.T__39:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 358;
                this.match(rustParser.T__39);
                }
                break;
            case rustParser.T__40:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 359;
                this.match(rustParser.T__40);
                }
                break;
            case rustParser.IDENTIFIER:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 360;
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
        this.enterRule(localContext, 50, rustParser.RULE_identifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 363;
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
        this.enterRule(localContext, 52, rustParser.RULE_argument_list);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 365;
            this.expression(0);
            this.state = 370;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 366;
                this.match(rustParser.T__7);
                this.state = 367;
                this.expression(0);
                }
                }
                this.state = 372;
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
        this.enterRule(localContext, 54, rustParser.RULE_number);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 373;
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
        this.enterRule(localContext, 56, rustParser.RULE_match_arm_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 375;
            this.match_arm();
            this.state = 380;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 376;
                    this.match(rustParser.T__7);
                    this.state = 377;
                    this.match_arm();
                    }
                    }
                }
                this.state = 382;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 36, this.context);
            }
            this.state = 384;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 383;
                this.match(rustParser.T__7);
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
        this.enterRule(localContext, 58, rustParser.RULE_match_arm);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 386;
            this.match_pattern();
            this.state = 387;
            this.match(rustParser.T__41);
            this.state = 388;
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
        this.enterRule(localContext, 60, rustParser.RULE_match_pattern);
        try {
            this.state = 403;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 38, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 390;
                this.match(rustParser.NUMBER);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 391;
                this.match(rustParser.T__42);
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 392;
                this.identifier();
                this.state = 393;
                this.match(rustParser.T__35);
                this.state = 394;
                this.identifier();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 396;
                this.identifier();
                this.state = 397;
                this.match(rustParser.T__35);
                this.state = 398;
                this.identifier();
                this.state = 399;
                this.match(rustParser.T__13);
                this.state = 400;
                this.pattern_list();
                this.state = 401;
                this.match(rustParser.T__14);
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
        this.enterRule(localContext, 62, rustParser.RULE_pattern_list);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 405;
            this.identifier();
            this.state = 410;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 406;
                    this.match(rustParser.T__7);
                    this.state = 407;
                    this.identifier();
                    }
                    }
                }
                this.state = 412;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 39, this.context);
            }
            this.state = 414;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 8) {
                {
                this.state = 413;
                this.match(rustParser.T__7);
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

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 23:
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
            return this.precpred(this.context, 4);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,54,417,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,
        7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,
        2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,4,0,66,8,0,
        11,0,12,0,67,1,0,1,0,1,1,1,1,3,1,74,8,1,1,1,1,1,3,1,78,8,1,1,1,1,
        1,3,1,82,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,92,8,1,1,1,1,1,
        1,1,1,1,1,1,3,1,99,8,1,1,2,1,2,3,2,103,8,2,1,2,1,2,1,2,3,2,108,8,
        2,1,2,1,2,3,2,112,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,1,
        6,1,6,1,6,3,6,127,8,6,1,6,1,6,1,6,3,6,132,8,6,1,6,1,6,1,7,1,7,1,
        7,5,7,139,8,7,10,7,12,7,142,9,7,1,8,1,8,1,8,3,8,147,8,8,1,9,1,9,
        1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,1,12,5,12,
        164,8,12,10,12,12,12,167,9,12,1,12,3,12,170,8,12,1,12,1,12,1,13,
        1,13,1,13,1,13,3,13,178,8,13,1,13,1,13,1,14,1,14,1,14,5,14,185,8,
        14,10,14,12,14,188,9,14,1,14,3,14,191,8,14,1,15,1,15,1,15,1,15,1,
        16,1,16,1,16,5,16,200,8,16,10,16,12,16,203,9,16,1,16,3,16,206,8,
        16,1,17,1,17,1,17,1,17,1,18,1,18,1,18,1,18,3,18,216,8,18,1,18,1,
        18,1,19,1,19,1,19,5,19,223,8,19,10,19,12,19,226,9,19,1,19,3,19,229,
        8,19,1,20,1,20,1,20,1,20,3,20,235,8,20,1,20,1,20,3,20,239,8,20,1,
        21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,3,22,251,8,22,3,
        22,253,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
        23,1,23,1,23,1,23,1,23,1,23,3,23,271,8,23,1,23,1,23,1,23,1,23,3,
        23,277,8,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,285,8,23,1,23,1,23,
        1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,
        1,23,1,23,3,23,304,8,23,1,23,1,23,3,23,308,8,23,1,23,1,23,1,23,1,
        23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
        23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
        23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,5,
        23,352,8,23,10,23,12,23,355,9,23,1,24,1,24,1,24,1,24,1,24,3,24,362,
        8,24,1,25,1,25,1,26,1,26,1,26,5,26,369,8,26,10,26,12,26,372,9,26,
        1,27,1,27,1,28,1,28,1,28,5,28,379,8,28,10,28,12,28,382,9,28,1,28,
        3,28,385,8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,
        1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,404,8,30,1,31,1,31,1,31,
        5,31,409,8,31,10,31,12,31,412,9,31,1,31,3,31,415,8,31,1,31,0,1,46,
        32,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
        44,46,48,50,52,54,56,58,60,62,0,0,465,0,65,1,0,0,0,2,98,1,0,0,0,
        4,100,1,0,0,0,6,113,1,0,0,0,8,117,1,0,0,0,10,120,1,0,0,0,12,122,
        1,0,0,0,14,135,1,0,0,0,16,143,1,0,0,0,18,148,1,0,0,0,20,156,1,0,
        0,0,22,159,1,0,0,0,24,161,1,0,0,0,26,173,1,0,0,0,28,181,1,0,0,0,
        30,192,1,0,0,0,32,196,1,0,0,0,34,207,1,0,0,0,36,211,1,0,0,0,38,219,
        1,0,0,0,40,238,1,0,0,0,42,240,1,0,0,0,44,244,1,0,0,0,46,307,1,0,
        0,0,48,361,1,0,0,0,50,363,1,0,0,0,52,365,1,0,0,0,54,373,1,0,0,0,
        56,375,1,0,0,0,58,386,1,0,0,0,60,403,1,0,0,0,62,405,1,0,0,0,64,66,
        3,2,1,0,65,64,1,0,0,0,66,67,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,
        68,69,1,0,0,0,69,70,5,0,0,1,70,1,1,0,0,0,71,73,3,4,2,0,72,74,5,1,
        0,0,73,72,1,0,0,0,73,74,1,0,0,0,74,99,1,0,0,0,75,77,3,6,3,0,76,78,
        5,1,0,0,77,76,1,0,0,0,77,78,1,0,0,0,78,99,1,0,0,0,79,81,3,8,4,0,
        80,82,5,1,0,0,81,80,1,0,0,0,81,82,1,0,0,0,82,99,1,0,0,0,83,84,3,
        10,5,0,84,85,5,1,0,0,85,99,1,0,0,0,86,99,3,12,6,0,87,99,3,18,9,0,
        88,99,3,20,10,0,89,91,3,22,11,0,90,92,5,1,0,0,91,90,1,0,0,0,91,92,
        1,0,0,0,92,99,1,0,0,0,93,99,3,24,12,0,94,99,3,26,13,0,95,99,3,36,
        18,0,96,99,3,42,21,0,97,99,3,44,22,0,98,71,1,0,0,0,98,75,1,0,0,0,
        98,79,1,0,0,0,98,83,1,0,0,0,98,86,1,0,0,0,98,87,1,0,0,0,98,88,1,
        0,0,0,98,89,1,0,0,0,98,93,1,0,0,0,98,94,1,0,0,0,98,95,1,0,0,0,98,
        96,1,0,0,0,98,97,1,0,0,0,99,3,1,0,0,0,100,102,5,2,0,0,101,103,5,
        44,0,0,102,101,1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,107,3,
        50,25,0,105,106,5,3,0,0,106,108,3,48,24,0,107,105,1,0,0,0,107,108,
        1,0,0,0,108,111,1,0,0,0,109,110,5,4,0,0,110,112,3,46,23,0,111,109,
        1,0,0,0,111,112,1,0,0,0,112,5,1,0,0,0,113,114,3,50,25,0,114,115,
        5,4,0,0,115,116,3,46,23,0,116,7,1,0,0,0,117,118,5,5,0,0,118,119,
        3,46,23,0,119,9,1,0,0,0,120,121,3,46,23,0,121,11,1,0,0,0,122,123,
        5,6,0,0,123,124,3,50,25,0,124,126,5,53,0,0,125,127,3,14,7,0,126,
        125,1,0,0,0,126,127,1,0,0,0,127,128,1,0,0,0,128,131,5,54,0,0,129,
        130,5,7,0,0,130,132,3,48,24,0,131,129,1,0,0,0,131,132,1,0,0,0,132,
        133,1,0,0,0,133,134,3,24,12,0,134,13,1,0,0,0,135,140,3,16,8,0,136,
        137,5,8,0,0,137,139,3,16,8,0,138,136,1,0,0,0,139,142,1,0,0,0,140,
        138,1,0,0,0,140,141,1,0,0,0,141,15,1,0,0,0,142,140,1,0,0,0,143,146,
        3,50,25,0,144,145,5,3,0,0,145,147,3,48,24,0,146,144,1,0,0,0,146,
        147,1,0,0,0,147,17,1,0,0,0,148,149,5,9,0,0,149,150,3,50,25,0,150,
        151,5,10,0,0,151,152,3,46,23,0,152,153,5,11,0,0,153,154,3,46,23,
        0,154,155,3,24,12,0,155,19,1,0,0,0,156,157,5,12,0,0,157,158,3,24,
        12,0,158,21,1,0,0,0,159,160,5,13,0,0,160,23,1,0,0,0,161,165,5,14,
        0,0,162,164,3,2,1,0,163,162,1,0,0,0,164,167,1,0,0,0,165,163,1,0,
        0,0,165,166,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,168,170,3,46,
        23,0,169,168,1,0,0,0,169,170,1,0,0,0,170,171,1,0,0,0,171,172,5,15,
        0,0,172,25,1,0,0,0,173,174,5,16,0,0,174,175,3,50,25,0,175,177,5,
        14,0,0,176,178,3,28,14,0,177,176,1,0,0,0,177,178,1,0,0,0,178,179,
        1,0,0,0,179,180,5,15,0,0,180,27,1,0,0,0,181,186,3,30,15,0,182,183,
        5,8,0,0,183,185,3,30,15,0,184,182,1,0,0,0,185,188,1,0,0,0,186,184,
        1,0,0,0,186,187,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,189,191,
        5,8,0,0,190,189,1,0,0,0,190,191,1,0,0,0,191,29,1,0,0,0,192,193,3,
        50,25,0,193,194,5,3,0,0,194,195,3,48,24,0,195,31,1,0,0,0,196,201,
        3,34,17,0,197,198,5,8,0,0,198,200,3,34,17,0,199,197,1,0,0,0,200,
        203,1,0,0,0,201,199,1,0,0,0,201,202,1,0,0,0,202,205,1,0,0,0,203,
        201,1,0,0,0,204,206,5,8,0,0,205,204,1,0,0,0,205,206,1,0,0,0,206,
        33,1,0,0,0,207,208,3,50,25,0,208,209,5,3,0,0,209,210,3,46,23,0,210,
        35,1,0,0,0,211,212,5,17,0,0,212,213,3,50,25,0,213,215,5,14,0,0,214,
        216,3,38,19,0,215,214,1,0,0,0,215,216,1,0,0,0,216,217,1,0,0,0,217,
        218,5,15,0,0,218,37,1,0,0,0,219,224,3,40,20,0,220,221,5,8,0,0,221,
        223,3,40,20,0,222,220,1,0,0,0,223,226,1,0,0,0,224,222,1,0,0,0,224,
        225,1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,0,227,229,5,8,0,0,228,
        227,1,0,0,0,228,229,1,0,0,0,229,39,1,0,0,0,230,239,3,50,25,0,231,
        232,3,50,25,0,232,234,5,14,0,0,233,235,3,28,14,0,234,233,1,0,0,0,
        234,235,1,0,0,0,235,236,1,0,0,0,236,237,5,15,0,0,237,239,1,0,0,0,
        238,230,1,0,0,0,238,231,1,0,0,0,239,41,1,0,0,0,240,241,5,18,0,0,
        241,242,3,46,23,0,242,243,3,24,12,0,243,43,1,0,0,0,244,245,5,19,
        0,0,245,246,3,46,23,0,246,252,3,24,12,0,247,250,5,45,0,0,248,251,
        3,24,12,0,249,251,3,44,22,0,250,248,1,0,0,0,250,249,1,0,0,0,251,
        253,1,0,0,0,252,247,1,0,0,0,252,253,1,0,0,0,253,45,1,0,0,0,254,255,
        6,23,-1,0,255,256,5,20,0,0,256,308,3,46,23,28,257,258,5,21,0,0,258,
        308,3,46,23,27,259,260,5,53,0,0,260,261,3,46,23,0,261,262,5,54,0,
        0,262,308,1,0,0,0,263,308,3,50,25,0,264,308,3,54,27,0,265,308,5,
        47,0,0,266,308,5,46,0,0,267,268,5,34,0,0,268,270,5,53,0,0,269,271,
        3,52,26,0,270,269,1,0,0,0,270,271,1,0,0,0,271,272,1,0,0,0,272,308,
        5,54,0,0,273,274,3,50,25,0,274,276,5,53,0,0,275,277,3,52,26,0,276,
        275,1,0,0,0,276,277,1,0,0,0,277,278,1,0,0,0,278,279,5,54,0,0,279,
        308,1,0,0,0,280,308,3,24,12,0,281,282,3,50,25,0,282,284,5,14,0,0,
        283,285,3,32,16,0,284,283,1,0,0,0,284,285,1,0,0,0,285,286,1,0,0,
        0,286,287,5,15,0,0,287,308,1,0,0,0,288,289,3,50,25,0,289,290,5,36,
        0,0,290,291,3,50,25,0,291,308,1,0,0,0,292,293,5,37,0,0,293,294,3,
        46,23,0,294,295,5,14,0,0,295,296,3,56,28,0,296,297,5,15,0,0,297,
        308,1,0,0,0,298,299,3,50,25,0,299,300,5,36,0,0,300,301,3,50,25,0,
        301,303,5,14,0,0,302,304,3,32,16,0,303,302,1,0,0,0,303,304,1,0,0,
        0,304,305,1,0,0,0,305,306,5,15,0,0,306,308,1,0,0,0,307,254,1,0,0,
        0,307,257,1,0,0,0,307,259,1,0,0,0,307,263,1,0,0,0,307,264,1,0,0,
        0,307,265,1,0,0,0,307,266,1,0,0,0,307,267,1,0,0,0,307,273,1,0,0,
        0,307,280,1,0,0,0,307,281,1,0,0,0,307,288,1,0,0,0,307,292,1,0,0,
        0,307,298,1,0,0,0,308,353,1,0,0,0,309,310,10,26,0,0,310,311,5,22,
        0,0,311,352,3,46,23,27,312,313,10,25,0,0,313,314,5,23,0,0,314,352,
        3,46,23,26,315,316,10,24,0,0,316,317,5,24,0,0,317,352,3,46,23,25,
        318,319,10,23,0,0,319,320,5,25,0,0,320,352,3,46,23,24,321,322,10,
        22,0,0,322,323,5,26,0,0,323,352,3,46,23,23,324,325,10,21,0,0,325,
        326,5,27,0,0,326,352,3,46,23,22,327,328,10,20,0,0,328,329,5,28,0,
        0,329,352,3,46,23,21,330,331,10,19,0,0,331,332,5,29,0,0,332,352,
        3,46,23,20,333,334,10,18,0,0,334,335,5,30,0,0,335,352,3,46,23,19,
        336,337,10,17,0,0,337,338,5,31,0,0,338,352,3,46,23,18,339,340,10,
        16,0,0,340,341,5,21,0,0,341,352,3,46,23,17,342,343,10,15,0,0,343,
        344,5,32,0,0,344,352,3,46,23,16,345,346,10,14,0,0,346,347,5,33,0,
        0,347,352,3,46,23,15,348,349,10,4,0,0,349,350,5,35,0,0,350,352,3,
        50,25,0,351,309,1,0,0,0,351,312,1,0,0,0,351,315,1,0,0,0,351,318,
        1,0,0,0,351,321,1,0,0,0,351,324,1,0,0,0,351,327,1,0,0,0,351,330,
        1,0,0,0,351,333,1,0,0,0,351,336,1,0,0,0,351,339,1,0,0,0,351,342,
        1,0,0,0,351,345,1,0,0,0,351,348,1,0,0,0,352,355,1,0,0,0,353,351,
        1,0,0,0,353,354,1,0,0,0,354,47,1,0,0,0,355,353,1,0,0,0,356,362,5,
        38,0,0,357,362,5,39,0,0,358,362,5,40,0,0,359,362,5,41,0,0,360,362,
        3,50,25,0,361,356,1,0,0,0,361,357,1,0,0,0,361,358,1,0,0,0,361,359,
        1,0,0,0,361,360,1,0,0,0,362,49,1,0,0,0,363,364,5,48,0,0,364,51,1,
        0,0,0,365,370,3,46,23,0,366,367,5,8,0,0,367,369,3,46,23,0,368,366,
        1,0,0,0,369,372,1,0,0,0,370,368,1,0,0,0,370,371,1,0,0,0,371,53,1,
        0,0,0,372,370,1,0,0,0,373,374,5,49,0,0,374,55,1,0,0,0,375,380,3,
        58,29,0,376,377,5,8,0,0,377,379,3,58,29,0,378,376,1,0,0,0,379,382,
        1,0,0,0,380,378,1,0,0,0,380,381,1,0,0,0,381,384,1,0,0,0,382,380,
        1,0,0,0,383,385,5,8,0,0,384,383,1,0,0,0,384,385,1,0,0,0,385,57,1,
        0,0,0,386,387,3,60,30,0,387,388,5,42,0,0,388,389,3,46,23,0,389,59,
        1,0,0,0,390,404,5,49,0,0,391,404,5,43,0,0,392,393,3,50,25,0,393,
        394,5,36,0,0,394,395,3,50,25,0,395,404,1,0,0,0,396,397,3,50,25,0,
        397,398,5,36,0,0,398,399,3,50,25,0,399,400,5,14,0,0,400,401,3,62,
        31,0,401,402,5,15,0,0,402,404,1,0,0,0,403,390,1,0,0,0,403,391,1,
        0,0,0,403,392,1,0,0,0,403,396,1,0,0,0,404,61,1,0,0,0,405,410,3,50,
        25,0,406,407,5,8,0,0,407,409,3,50,25,0,408,406,1,0,0,0,409,412,1,
        0,0,0,410,408,1,0,0,0,410,411,1,0,0,0,411,414,1,0,0,0,412,410,1,
        0,0,0,413,415,5,8,0,0,414,413,1,0,0,0,414,415,1,0,0,0,415,63,1,0,
        0,0,41,67,73,77,81,91,98,102,107,111,126,131,140,146,165,169,177,
        186,190,201,205,215,224,228,234,238,250,252,270,276,284,303,307,
        351,353,361,370,380,384,403,410,414
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
