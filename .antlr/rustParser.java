// Generated from /home/xintong/test_antlr_conductor/rust.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class rustParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, MUT=45, KW_ELSE=46, 
		NUMBER=47, BOOL=48, STRING=49, IDENTIFIER=50, LINE_COMMENT=51, BLOCK_COMMENT=52, 
		WS=53, LPAREN=54, RPAREN=55;
	public static final int
		RULE_start = 0, RULE_statement = 1, RULE_let_stmt = 2, RULE_const_stmt = 3, 
		RULE_assign_stmt = 4, RULE_lhs = 5, RULE_return_stmt = 6, RULE_expression_stmt = 7, 
		RULE_function_decl = 8, RULE_parameter_list = 9, RULE_parameter = 10, 
		RULE_for_stmt = 11, RULE_loop_stmt = 12, RULE_break_stmt = 13, RULE_block = 14, 
		RULE_struct_decl = 15, RULE_field_list = 16, RULE_field_decl = 17, RULE_field_init_list = 18, 
		RULE_field_init = 19, RULE_enum_decl = 20, RULE_variant_list = 21, RULE_variant = 22, 
		RULE_while_stmt = 23, RULE_if_stmt = 24, RULE_expression = 25, RULE_logical_or_expr = 26, 
		RULE_logical_and_expr = 27, RULE_equality_expr = 28, RULE_relational_expr = 29, 
		RULE_additive_expr = 30, RULE_multiplicative_expr = 31, RULE_unary_expr = 32, 
		RULE_postfix_expr = 33, RULE_postfix_op = 34, RULE_primary_expr = 35, 
		RULE_ty = 36, RULE_argument_list = 37, RULE_number = 38, RULE_match_arm_list = 39, 
		RULE_match_arm = 40, RULE_match_pattern = 41, RULE_pattern_list = 42, 
		RULE_identifier = 43;
	private static String[] makeRuleNames() {
		return new String[] {
			"start", "statement", "let_stmt", "const_stmt", "assign_stmt", "lhs", 
			"return_stmt", "expression_stmt", "function_decl", "parameter_list", 
			"parameter", "for_stmt", "loop_stmt", "break_stmt", "block", "struct_decl", 
			"field_list", "field_decl", "field_init_list", "field_init", "enum_decl", 
			"variant_list", "variant", "while_stmt", "if_stmt", "expression", "logical_or_expr", 
			"logical_and_expr", "equality_expr", "relational_expr", "additive_expr", 
			"multiplicative_expr", "unary_expr", "postfix_expr", "postfix_op", "primary_expr", 
			"ty", "argument_list", "number", "match_arm_list", "match_arm", "match_pattern", 
			"pattern_list", "identifier"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'let'", "':'", "'='", "'const'", "'*'", "'return'", "'fn'", 
			"'->'", "','", "'for'", "'in'", "'..'", "'loop'", "'break'", "'{'", "'}'", 
			"'struct'", "'enum'", "'while'", "'if'", "'||'", "'&&'", "'=='", "'!='", 
			"'<'", "'<='", "'>'", "'>='", "'+'", "'-'", "'/'", "'%'", "'!'", "'&'", 
			"'.'", "'::'", "'match'", "'println!'", "'number'", "'bool'", "'String'", 
			"'=>'", "'_'", "'mut'", "'else'", null, null, null, null, null, null, 
			null, "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, "MUT", "KW_ELSE", 
			"NUMBER", "BOOL", "STRING", "IDENTIFIER", "LINE_COMMENT", "BLOCK_COMMENT", 
			"WS", "LPAREN", "RPAREN"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "rust.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public rustParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StartContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(rustParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_start);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(88);
				statement();
				}
				}
				setState(91); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 20126339159673316L) != 0) );
			setState(93);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class StatementContext extends ParserRuleContext {
		public Let_stmtContext let_stmt() {
			return getRuleContext(Let_stmtContext.class,0);
		}
		public Const_stmtContext const_stmt() {
			return getRuleContext(Const_stmtContext.class,0);
		}
		public Assign_stmtContext assign_stmt() {
			return getRuleContext(Assign_stmtContext.class,0);
		}
		public Return_stmtContext return_stmt() {
			return getRuleContext(Return_stmtContext.class,0);
		}
		public Expression_stmtContext expression_stmt() {
			return getRuleContext(Expression_stmtContext.class,0);
		}
		public Function_declContext function_decl() {
			return getRuleContext(Function_declContext.class,0);
		}
		public For_stmtContext for_stmt() {
			return getRuleContext(For_stmtContext.class,0);
		}
		public Loop_stmtContext loop_stmt() {
			return getRuleContext(Loop_stmtContext.class,0);
		}
		public Break_stmtContext break_stmt() {
			return getRuleContext(Break_stmtContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Struct_declContext struct_decl() {
			return getRuleContext(Struct_declContext.class,0);
		}
		public Enum_declContext enum_decl() {
			return getRuleContext(Enum_declContext.class,0);
		}
		public While_stmtContext while_stmt() {
			return getRuleContext(While_stmtContext.class,0);
		}
		public If_stmtContext if_stmt() {
			return getRuleContext(If_stmtContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		int _la;
		try {
			setState(126);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(95);
				let_stmt();
				setState(97);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(96);
					match(T__0);
					}
				}

				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(99);
				const_stmt();
				setState(101);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(100);
					match(T__0);
					}
				}

				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(103);
				assign_stmt();
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(104);
					match(T__0);
					}
				}

				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(107);
				return_stmt();
				setState(109);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(108);
					match(T__0);
					}
				}

				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(111);
				expression_stmt();
				setState(112);
				match(T__0);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(114);
				function_decl();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(115);
				for_stmt();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(116);
				loop_stmt();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(117);
				break_stmt();
				setState(119);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__0) {
					{
					setState(118);
					match(T__0);
					}
				}

				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(121);
				block();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(122);
				struct_decl();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(123);
				enum_decl();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(124);
				while_stmt();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(125);
				if_stmt();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Let_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode MUT() { return getToken(rustParser.MUT, 0); }
		public TyContext ty() {
			return getRuleContext(TyContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Let_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_let_stmt; }
	}

	public final Let_stmtContext let_stmt() throws RecognitionException {
		Let_stmtContext _localctx = new Let_stmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_let_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(128);
			match(T__1);
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUT) {
				{
				setState(129);
				match(MUT);
				}
			}

			setState(132);
			identifier();
			setState(135);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__2) {
				{
				setState(133);
				match(T__2);
				setState(134);
				ty();
				}
			}

			setState(139);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__3) {
				{
				setState(137);
				match(T__3);
				setState(138);
				expression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Const_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TyContext ty() {
			return getRuleContext(TyContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Const_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_const_stmt; }
	}

	public final Const_stmtContext const_stmt() throws RecognitionException {
		Const_stmtContext _localctx = new Const_stmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_const_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(141);
			match(T__4);
			setState(142);
			identifier();
			setState(143);
			match(T__2);
			setState(144);
			ty();
			setState(145);
			match(T__3);
			setState(146);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Assign_stmtContext extends ParserRuleContext {
		public LhsContext lhs() {
			return getRuleContext(LhsContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Assign_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assign_stmt; }
	}

	public final Assign_stmtContext assign_stmt() throws RecognitionException {
		Assign_stmtContext _localctx = new Assign_stmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_assign_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			lhs();
			setState(149);
			match(T__3);
			setState(150);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LhsContext extends ParserRuleContext {
		public LhsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lhs; }
	 
		public LhsContext() { }
		public void copyFrom(LhsContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class DerefLhsContext extends LhsContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public DerefLhsContext(LhsContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentLhsContext extends LhsContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentLhsContext(LhsContext ctx) { copyFrom(ctx); }
	}

	public final LhsContext lhs() throws RecognitionException {
		LhsContext _localctx = new LhsContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_lhs);
		try {
			setState(155);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
				_localctx = new DerefLhsContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(152);
				match(T__5);
				setState(153);
				expression();
				}
				break;
			case IDENTIFIER:
				_localctx = new IdentLhsContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(154);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Return_stmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Return_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_return_stmt; }
	}

	public final Return_stmtContext return_stmt() throws RecognitionException {
		Return_stmtContext _localctx = new Return_stmtContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_return_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(157);
			match(T__6);
			setState(158);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Expression_stmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Expression_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression_stmt; }
	}

	public final Expression_stmtContext expression_stmt() throws RecognitionException {
		Expression_stmtContext _localctx = new Expression_stmtContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_expression_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(160);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Function_declContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(rustParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(rustParser.RPAREN, 0); }
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Parameter_listContext parameter_list() {
			return getRuleContext(Parameter_listContext.class,0);
		}
		public TyContext ty() {
			return getRuleContext(TyContext.class,0);
		}
		public Function_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_decl; }
	}

	public final Function_declContext function_decl() throws RecognitionException {
		Function_declContext _localctx = new Function_declContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_function_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(162);
			match(T__7);
			setState(163);
			identifier();
			setState(164);
			match(LPAREN);
			setState(166);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUT || _la==IDENTIFIER) {
				{
				setState(165);
				parameter_list();
				}
			}

			setState(168);
			match(RPAREN);
			setState(171);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__8) {
				{
				setState(169);
				match(T__8);
				setState(170);
				ty();
				}
			}

			setState(173);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Parameter_listContext extends ParserRuleContext {
		public List<ParameterContext> parameter() {
			return getRuleContexts(ParameterContext.class);
		}
		public ParameterContext parameter(int i) {
			return getRuleContext(ParameterContext.class,i);
		}
		public Parameter_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter_list; }
	}

	public final Parameter_listContext parameter_list() throws RecognitionException {
		Parameter_listContext _localctx = new Parameter_listContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_parameter_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(175);
			parameter();
			setState(180);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(176);
				match(T__9);
				setState(177);
				parameter();
				}
				}
				setState(182);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParameterContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TyContext ty() {
			return getRuleContext(TyContext.class,0);
		}
		public TerminalNode MUT() { return getToken(rustParser.MUT, 0); }
		public ParameterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameter; }
	}

	public final ParameterContext parameter() throws RecognitionException {
		ParameterContext _localctx = new ParameterContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_parameter);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(184);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MUT) {
				{
				setState(183);
				match(MUT);
				}
			}

			setState(186);
			identifier();
			setState(187);
			match(T__2);
			setState(188);
			ty();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class For_stmtContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public For_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_stmt; }
	}

	public final For_stmtContext for_stmt() throws RecognitionException {
		For_stmtContext _localctx = new For_stmtContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_for_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			match(T__10);
			setState(191);
			identifier();
			setState(192);
			match(T__11);
			setState(193);
			expression();
			setState(194);
			match(T__12);
			setState(195);
			expression();
			setState(196);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Loop_stmtContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public Loop_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_loop_stmt; }
	}

	public final Loop_stmtContext loop_stmt() throws RecognitionException {
		Loop_stmtContext _localctx = new Loop_stmtContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_loop_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			match(T__13);
			setState(199);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Break_stmtContext extends ParserRuleContext {
		public Break_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_break_stmt; }
	}

	public final Break_stmtContext break_stmt() throws RecognitionException {
		Break_stmtContext _localctx = new Break_stmtContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_break_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(201);
			match(T__14);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_block);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(203);
			match(T__15);
			setState(207);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(204);
					statement();
					}
					} 
				}
				setState(209);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,15,_ctx);
			}
			setState(211);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 20126339155689536L) != 0)) {
				{
				setState(210);
				expression();
				}
			}

			setState(213);
			match(T__16);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Struct_declContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Field_listContext field_list() {
			return getRuleContext(Field_listContext.class,0);
		}
		public Struct_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_struct_decl; }
	}

	public final Struct_declContext struct_decl() throws RecognitionException {
		Struct_declContext _localctx = new Struct_declContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_struct_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(215);
			match(T__17);
			setState(216);
			identifier();
			setState(217);
			match(T__15);
			setState(219);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(218);
				field_list();
				}
			}

			setState(221);
			match(T__16);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Field_listContext extends ParserRuleContext {
		public List<Field_declContext> field_decl() {
			return getRuleContexts(Field_declContext.class);
		}
		public Field_declContext field_decl(int i) {
			return getRuleContext(Field_declContext.class,i);
		}
		public Field_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field_list; }
	}

	public final Field_listContext field_list() throws RecognitionException {
		Field_listContext _localctx = new Field_listContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_field_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(223);
			field_decl();
			setState(228);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(224);
					match(T__9);
					setState(225);
					field_decl();
					}
					} 
				}
				setState(230);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,18,_ctx);
			}
			setState(232);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(231);
				match(T__9);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Field_declContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TyContext ty() {
			return getRuleContext(TyContext.class,0);
		}
		public Field_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field_decl; }
	}

	public final Field_declContext field_decl() throws RecognitionException {
		Field_declContext _localctx = new Field_declContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_field_decl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			identifier();
			setState(235);
			match(T__2);
			setState(236);
			ty();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Field_init_listContext extends ParserRuleContext {
		public List<Field_initContext> field_init() {
			return getRuleContexts(Field_initContext.class);
		}
		public Field_initContext field_init(int i) {
			return getRuleContext(Field_initContext.class,i);
		}
		public Field_init_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field_init_list; }
	}

	public final Field_init_listContext field_init_list() throws RecognitionException {
		Field_init_listContext _localctx = new Field_init_listContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_field_init_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(238);
			field_init();
			setState(243);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(239);
					match(T__9);
					setState(240);
					field_init();
					}
					} 
				}
				setState(245);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,20,_ctx);
			}
			setState(247);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(246);
				match(T__9);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Field_initContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Field_initContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_field_init; }
	}

	public final Field_initContext field_init() throws RecognitionException {
		Field_initContext _localctx = new Field_initContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_field_init);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(249);
			identifier();
			setState(250);
			match(T__2);
			setState(251);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Enum_declContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Variant_listContext variant_list() {
			return getRuleContext(Variant_listContext.class,0);
		}
		public Enum_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_enum_decl; }
	}

	public final Enum_declContext enum_decl() throws RecognitionException {
		Enum_declContext _localctx = new Enum_declContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_enum_decl);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			match(T__18);
			setState(254);
			identifier();
			setState(255);
			match(T__15);
			setState(257);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==IDENTIFIER) {
				{
				setState(256);
				variant_list();
				}
			}

			setState(259);
			match(T__16);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Variant_listContext extends ParserRuleContext {
		public List<VariantContext> variant() {
			return getRuleContexts(VariantContext.class);
		}
		public VariantContext variant(int i) {
			return getRuleContext(VariantContext.class,i);
		}
		public Variant_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variant_list; }
	}

	public final Variant_listContext variant_list() throws RecognitionException {
		Variant_listContext _localctx = new Variant_listContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_variant_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(261);
			variant();
			setState(266);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(262);
					match(T__9);
					setState(263);
					variant();
					}
					} 
				}
				setState(268);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,23,_ctx);
			}
			setState(270);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(269);
				match(T__9);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class VariantContext extends ParserRuleContext {
		public VariantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_variant; }
	 
		public VariantContext() { }
		public void copyFrom(VariantContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SimpleVariantContext extends VariantContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public SimpleVariantContext(VariantContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructVariantContext extends VariantContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Field_listContext field_list() {
			return getRuleContext(Field_listContext.class,0);
		}
		public StructVariantContext(VariantContext ctx) { copyFrom(ctx); }
	}

	public final VariantContext variant() throws RecognitionException {
		VariantContext _localctx = new VariantContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_variant);
		int _la;
		try {
			setState(280);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
			case 1:
				_localctx = new SimpleVariantContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(272);
				identifier();
				}
				break;
			case 2:
				_localctx = new StructVariantContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(273);
				identifier();
				setState(274);
				match(T__15);
				setState(276);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(275);
					field_list();
					}
				}

				setState(278);
				match(T__16);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class While_stmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public While_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while_stmt; }
	}

	public final While_stmtContext while_stmt() throws RecognitionException {
		While_stmtContext _localctx = new While_stmtContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_while_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			match(T__19);
			setState(283);
			expression();
			setState(284);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class If_stmtContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public List<BlockContext> block() {
			return getRuleContexts(BlockContext.class);
		}
		public BlockContext block(int i) {
			return getRuleContext(BlockContext.class,i);
		}
		public TerminalNode KW_ELSE() { return getToken(rustParser.KW_ELSE, 0); }
		public If_stmtContext if_stmt() {
			return getRuleContext(If_stmtContext.class,0);
		}
		public If_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_stmt; }
	}

	public final If_stmtContext if_stmt() throws RecognitionException {
		If_stmtContext _localctx = new If_stmtContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_if_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(286);
			match(T__20);
			setState(287);
			expression();
			setState(288);
			block();
			setState(294);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ELSE) {
				{
				setState(289);
				match(KW_ELSE);
				setState(292);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__15:
					{
					setState(290);
					block();
					}
					break;
				case T__20:
					{
					setState(291);
					if_stmt();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExpressionContext extends ParserRuleContext {
		public Logical_or_exprContext logical_or_expr() {
			return getRuleContext(Logical_or_exprContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(296);
			logical_or_expr();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Logical_or_exprContext extends ParserRuleContext {
		public List<Logical_and_exprContext> logical_and_expr() {
			return getRuleContexts(Logical_and_exprContext.class);
		}
		public Logical_and_exprContext logical_and_expr(int i) {
			return getRuleContext(Logical_and_exprContext.class,i);
		}
		public Logical_or_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logical_or_expr; }
	}

	public final Logical_or_exprContext logical_or_expr() throws RecognitionException {
		Logical_or_exprContext _localctx = new Logical_or_exprContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_logical_or_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(298);
			logical_and_expr();
			setState(303);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__21) {
				{
				{
				setState(299);
				match(T__21);
				setState(300);
				logical_and_expr();
				}
				}
				setState(305);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Logical_and_exprContext extends ParserRuleContext {
		public List<Equality_exprContext> equality_expr() {
			return getRuleContexts(Equality_exprContext.class);
		}
		public Equality_exprContext equality_expr(int i) {
			return getRuleContext(Equality_exprContext.class,i);
		}
		public Logical_and_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logical_and_expr; }
	}

	public final Logical_and_exprContext logical_and_expr() throws RecognitionException {
		Logical_and_exprContext _localctx = new Logical_and_exprContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_logical_and_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(306);
			equality_expr();
			setState(311);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__22) {
				{
				{
				setState(307);
				match(T__22);
				setState(308);
				equality_expr();
				}
				}
				setState(313);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Equality_exprContext extends ParserRuleContext {
		public List<Relational_exprContext> relational_expr() {
			return getRuleContexts(Relational_exprContext.class);
		}
		public Relational_exprContext relational_expr(int i) {
			return getRuleContext(Relational_exprContext.class,i);
		}
		public Equality_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equality_expr; }
	}

	public final Equality_exprContext equality_expr() throws RecognitionException {
		Equality_exprContext _localctx = new Equality_exprContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_equality_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(314);
			relational_expr();
			setState(319);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__23 || _la==T__24) {
				{
				{
				setState(315);
				_la = _input.LA(1);
				if ( !(_la==T__23 || _la==T__24) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(316);
				relational_expr();
				}
				}
				setState(321);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Relational_exprContext extends ParserRuleContext {
		public List<Additive_exprContext> additive_expr() {
			return getRuleContexts(Additive_exprContext.class);
		}
		public Additive_exprContext additive_expr(int i) {
			return getRuleContext(Additive_exprContext.class,i);
		}
		public Relational_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relational_expr; }
	}

	public final Relational_exprContext relational_expr() throws RecognitionException {
		Relational_exprContext _localctx = new Relational_exprContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_relational_expr);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(322);
			additive_expr();
			setState(327);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1006632960L) != 0)) {
				{
				{
				setState(323);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 1006632960L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(324);
				additive_expr();
				}
				}
				setState(329);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Additive_exprContext extends ParserRuleContext {
		public List<Multiplicative_exprContext> multiplicative_expr() {
			return getRuleContexts(Multiplicative_exprContext.class);
		}
		public Multiplicative_exprContext multiplicative_expr(int i) {
			return getRuleContext(Multiplicative_exprContext.class,i);
		}
		public Additive_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additive_expr; }
	}

	public final Additive_exprContext additive_expr() throws RecognitionException {
		Additive_exprContext _localctx = new Additive_exprContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_additive_expr);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(330);
			multiplicative_expr();
			setState(335);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(331);
					_la = _input.LA(1);
					if ( !(_la==T__29 || _la==T__30) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(332);
					multiplicative_expr();
					}
					} 
				}
				setState(337);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Multiplicative_exprContext extends ParserRuleContext {
		public List<Unary_exprContext> unary_expr() {
			return getRuleContexts(Unary_exprContext.class);
		}
		public Unary_exprContext unary_expr(int i) {
			return getRuleContext(Unary_exprContext.class,i);
		}
		public Multiplicative_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicative_expr; }
	}

	public final Multiplicative_exprContext multiplicative_expr() throws RecognitionException {
		Multiplicative_exprContext _localctx = new Multiplicative_exprContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_multiplicative_expr);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(338);
			unary_expr();
			setState(343);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(339);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 12884901952L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(340);
					unary_expr();
					}
					} 
				}
				setState(345);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,34,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Unary_exprContext extends ParserRuleContext {
		public Unary_exprContext unary_expr() {
			return getRuleContext(Unary_exprContext.class,0);
		}
		public TerminalNode MUT() { return getToken(rustParser.MUT, 0); }
		public Postfix_exprContext postfix_expr() {
			return getRuleContext(Postfix_exprContext.class,0);
		}
		public Unary_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary_expr; }
	}

	public final Unary_exprContext unary_expr() throws RecognitionException {
		Unary_exprContext _localctx = new Unary_exprContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_unary_expr);
		try {
			setState(356);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__5:
			case T__30:
			case T__33:
			case T__34:
				enterOuterAlt(_localctx, 1);
				{
				setState(352);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,35,_ctx) ) {
				case 1:
					{
					setState(346);
					match(T__33);
					}
					break;
				case 2:
					{
					setState(347);
					match(T__30);
					}
					break;
				case 3:
					{
					setState(348);
					match(T__34);
					}
					break;
				case 4:
					{
					setState(349);
					match(T__34);
					setState(350);
					match(MUT);
					}
					break;
				case 5:
					{
					setState(351);
					match(T__5);
					}
					break;
				}
				setState(354);
				unary_expr();
				}
				break;
			case T__15:
			case T__37:
			case T__38:
			case NUMBER:
			case BOOL:
			case STRING:
			case IDENTIFIER:
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(355);
				postfix_expr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Postfix_exprContext extends ParserRuleContext {
		public Primary_exprContext primary_expr() {
			return getRuleContext(Primary_exprContext.class,0);
		}
		public List<Postfix_opContext> postfix_op() {
			return getRuleContexts(Postfix_opContext.class);
		}
		public Postfix_opContext postfix_op(int i) {
			return getRuleContext(Postfix_opContext.class,i);
		}
		public Postfix_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfix_expr; }
	}

	public final Postfix_exprContext postfix_expr() throws RecognitionException {
		Postfix_exprContext _localctx = new Postfix_exprContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_postfix_expr);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			primary_expr();
			setState(362);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(359);
					postfix_op();
					}
					} 
				}
				setState(364);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,37,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Postfix_opContext extends ParserRuleContext {
		public Postfix_opContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_postfix_op; }
	 
		public Postfix_opContext() { }
		public void copyFrom(Postfix_opContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumStructInitContext extends Postfix_opContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Field_init_listContext field_init_list() {
			return getRuleContext(Field_init_listContext.class,0);
		}
		public EnumStructInitContext(Postfix_opContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FieldAccessContext extends Postfix_opContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public FieldAccessContext(Postfix_opContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FunctionCallContext extends Postfix_opContext {
		public TerminalNode LPAREN() { return getToken(rustParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(rustParser.RPAREN, 0); }
		public Argument_listContext argument_list() {
			return getRuleContext(Argument_listContext.class,0);
		}
		public FunctionCallContext(Postfix_opContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class EnumAccessContext extends Postfix_opContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public EnumAccessContext(Postfix_opContext ctx) { copyFrom(ctx); }
	}

	public final Postfix_opContext postfix_op() throws RecognitionException {
		Postfix_opContext _localctx = new Postfix_opContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_postfix_op);
		int _la;
		try {
			setState(382);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				_localctx = new FieldAccessContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(365);
				match(T__35);
				setState(366);
				identifier();
				}
				break;
			case 2:
				_localctx = new EnumAccessContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(367);
				match(T__36);
				setState(368);
				identifier();
				}
				break;
			case 3:
				_localctx = new FunctionCallContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(369);
				match(LPAREN);
				setState(371);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 20126339155689536L) != 0)) {
					{
					setState(370);
					argument_list();
					}
				}

				setState(373);
				match(RPAREN);
				}
				break;
			case 4:
				_localctx = new EnumStructInitContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(374);
				match(T__36);
				setState(375);
				identifier();
				setState(376);
				match(T__15);
				setState(378);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(377);
					field_init_list();
					}
				}

				setState(380);
				match(T__16);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Primary_exprContext extends ParserRuleContext {
		public Primary_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary_expr; }
	 
		public Primary_exprContext() { }
		public void copyFrom(Primary_exprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StructInitContext extends Primary_exprContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public Field_init_listContext field_init_list() {
			return getRuleContext(Field_init_listContext.class,0);
		}
		public StructInitContext(Primary_exprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class StringLiteralContext extends Primary_exprContext {
		public TerminalNode STRING() { return getToken(rustParser.STRING, 0); }
		public StringLiteralContext(Primary_exprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class MatchExprContext extends Primary_exprContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Match_arm_listContext match_arm_list() {
			return getRuleContext(Match_arm_listContext.class,0);
		}
		public MatchExprContext(Primary_exprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class VariableReferenceContext extends Primary_exprContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public VariableReferenceContext(Primary_exprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class SimpleContext extends Primary_exprContext {
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public SimpleContext(Primary_exprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BlockExprContext extends Primary_exprContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public BlockExprContext(Primary_exprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BoolLiteralContext extends Primary_exprContext {
		public TerminalNode BOOL() { return getToken(rustParser.BOOL, 0); }
		public BoolLiteralContext(Primary_exprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class PrintlnMacroContext extends Primary_exprContext {
		public TerminalNode LPAREN() { return getToken(rustParser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(rustParser.RPAREN, 0); }
		public Argument_listContext argument_list() {
			return getRuleContext(Argument_listContext.class,0);
		}
		public PrintlnMacroContext(Primary_exprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenExprContext extends Primary_exprContext {
		public TerminalNode LPAREN() { return getToken(rustParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(rustParser.RPAREN, 0); }
		public ParenExprContext(Primary_exprContext ctx) { copyFrom(ctx); }
	}

	public final Primary_exprContext primary_expr() throws RecognitionException {
		Primary_exprContext _localctx = new Primary_exprContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_primary_expr);
		int _la;
		try {
			setState(412);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				_localctx = new ParenExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(384);
				match(LPAREN);
				setState(385);
				expression();
				setState(386);
				match(RPAREN);
				}
				break;
			case 2:
				_localctx = new StructInitContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(388);
				identifier();
				setState(389);
				match(T__15);
				setState(391);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==IDENTIFIER) {
					{
					setState(390);
					field_init_list();
					}
				}

				setState(393);
				match(T__16);
				}
				break;
			case 3:
				_localctx = new MatchExprContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(395);
				match(T__37);
				setState(396);
				expression();
				setState(397);
				match(T__15);
				setState(398);
				match_arm_list();
				setState(399);
				match(T__16);
				}
				break;
			case 4:
				_localctx = new VariableReferenceContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(401);
				identifier();
				}
				break;
			case 5:
				_localctx = new SimpleContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(402);
				number();
				}
				break;
			case 6:
				_localctx = new BoolLiteralContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(403);
				match(BOOL);
				}
				break;
			case 7:
				_localctx = new StringLiteralContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(404);
				match(STRING);
				}
				break;
			case 8:
				_localctx = new PrintlnMacroContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(405);
				match(T__38);
				setState(406);
				match(LPAREN);
				setState(408);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 20126339155689536L) != 0)) {
					{
					setState(407);
					argument_list();
					}
				}

				setState(410);
				match(RPAREN);
				}
				break;
			case 9:
				_localctx = new BlockExprContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(411);
				block();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TyContext extends ParserRuleContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ty; }
	}

	public final TyContext ty() throws RecognitionException {
		TyContext _localctx = new TyContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_ty);
		try {
			setState(418);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__39:
				enterOuterAlt(_localctx, 1);
				{
				setState(414);
				match(T__39);
				}
				break;
			case T__40:
				enterOuterAlt(_localctx, 2);
				{
				setState(415);
				match(T__40);
				}
				break;
			case T__41:
				enterOuterAlt(_localctx, 3);
				{
				setState(416);
				match(T__41);
				}
				break;
			case IDENTIFIER:
				enterOuterAlt(_localctx, 4);
				{
				setState(417);
				identifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Argument_listContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public Argument_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument_list; }
	}

	public final Argument_listContext argument_list() throws RecognitionException {
		Argument_listContext _localctx = new Argument_listContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_argument_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(420);
			expression();
			setState(425);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(421);
				match(T__9);
				setState(422);
				expression();
				}
				}
				setState(427);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumberContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(rustParser.NUMBER, 0); }
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_number);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(428);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Match_arm_listContext extends ParserRuleContext {
		public List<Match_armContext> match_arm() {
			return getRuleContexts(Match_armContext.class);
		}
		public Match_armContext match_arm(int i) {
			return getRuleContext(Match_armContext.class,i);
		}
		public Match_arm_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_match_arm_list; }
	}

	public final Match_arm_listContext match_arm_list() throws RecognitionException {
		Match_arm_listContext _localctx = new Match_arm_listContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_match_arm_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(430);
			match_arm();
			setState(435);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(431);
					match(T__9);
					setState(432);
					match_arm();
					}
					} 
				}
				setState(437);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
			}
			setState(439);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(438);
				match(T__9);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Match_armContext extends ParserRuleContext {
		public Match_patternContext match_pattern() {
			return getRuleContext(Match_patternContext.class,0);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Match_armContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_match_arm; }
	}

	public final Match_armContext match_arm() throws RecognitionException {
		Match_armContext _localctx = new Match_armContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_match_arm);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(441);
			match_pattern();
			setState(442);
			match(T__42);
			setState(443);
			expression();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Match_patternContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(rustParser.NUMBER, 0); }
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public Pattern_listContext pattern_list() {
			return getRuleContext(Pattern_listContext.class,0);
		}
		public Match_patternContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_match_pattern; }
	}

	public final Match_patternContext match_pattern() throws RecognitionException {
		Match_patternContext _localctx = new Match_patternContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_match_pattern);
		try {
			setState(458);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(445);
				match(NUMBER);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(446);
				match(T__43);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(447);
				identifier();
				setState(448);
				match(T__36);
				setState(449);
				identifier();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(451);
				identifier();
				setState(452);
				match(T__36);
				setState(453);
				identifier();
				setState(454);
				match(T__15);
				setState(455);
				pattern_list();
				setState(456);
				match(T__16);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Pattern_listContext extends ParserRuleContext {
		public List<IdentifierContext> identifier() {
			return getRuleContexts(IdentifierContext.class);
		}
		public IdentifierContext identifier(int i) {
			return getRuleContext(IdentifierContext.class,i);
		}
		public Pattern_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pattern_list; }
	}

	public final Pattern_listContext pattern_list() throws RecognitionException {
		Pattern_listContext _localctx = new Pattern_listContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_pattern_list);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(460);
			identifier();
			setState(465);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(461);
					match(T__9);
					setState(462);
					identifier();
					}
					} 
				}
				setState(467);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,49,_ctx);
			}
			setState(469);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__9) {
				{
				setState(468);
				match(T__9);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IdentifierContext extends ParserRuleContext {
		public TerminalNode IDENTIFIER() { return getToken(rustParser.IDENTIFIER, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_identifier);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(471);
			match(IDENTIFIER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u00017\u01da\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011\u0002\u0012\u0007\u0012"+
		"\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014\u0002\u0015\u0007\u0015"+
		"\u0002\u0016\u0007\u0016\u0002\u0017\u0007\u0017\u0002\u0018\u0007\u0018"+
		"\u0002\u0019\u0007\u0019\u0002\u001a\u0007\u001a\u0002\u001b\u0007\u001b"+
		"\u0002\u001c\u0007\u001c\u0002\u001d\u0007\u001d\u0002\u001e\u0007\u001e"+
		"\u0002\u001f\u0007\u001f\u0002 \u0007 \u0002!\u0007!\u0002\"\u0007\"\u0002"+
		"#\u0007#\u0002$\u0007$\u0002%\u0007%\u0002&\u0007&\u0002\'\u0007\'\u0002"+
		"(\u0007(\u0002)\u0007)\u0002*\u0007*\u0002+\u0007+\u0001\u0000\u0004\u0000"+
		"Z\b\u0000\u000b\u0000\f\u0000[\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0003\u0001b\b\u0001\u0001\u0001\u0001\u0001\u0003\u0001f\b\u0001"+
		"\u0001\u0001\u0001\u0001\u0003\u0001j\b\u0001\u0001\u0001\u0001\u0001"+
		"\u0003\u0001n\b\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001x\b\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001"+
		"\u007f\b\u0001\u0001\u0002\u0001\u0002\u0003\u0002\u0083\b\u0002\u0001"+
		"\u0002\u0001\u0002\u0001\u0002\u0003\u0002\u0088\b\u0002\u0001\u0002\u0001"+
		"\u0002\u0003\u0002\u008c\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0003\u0005\u009c"+
		"\b\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0003\b\u00a7\b\b\u0001\b\u0001\b\u0001\b\u0003"+
		"\b\u00ac\b\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\t\u0005\t\u00b3\b\t"+
		"\n\t\f\t\u00b6\t\t\u0001\n\u0003\n\u00b9\b\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0005\u000e\u00ce\b\u000e\n\u000e\f\u000e\u00d1\t\u000e"+
		"\u0001\u000e\u0003\u000e\u00d4\b\u000e\u0001\u000e\u0001\u000e\u0001\u000f"+
		"\u0001\u000f\u0001\u000f\u0001\u000f\u0003\u000f\u00dc\b\u000f\u0001\u000f"+
		"\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0005\u0010\u00e3\b\u0010"+
		"\n\u0010\f\u0010\u00e6\t\u0010\u0001\u0010\u0003\u0010\u00e9\b\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0005\u0012\u00f2\b\u0012\n\u0012\f\u0012\u00f5\t\u0012\u0001\u0012"+
		"\u0003\u0012\u00f8\b\u0012\u0001\u0013\u0001\u0013\u0001\u0013\u0001\u0013"+
		"\u0001\u0014\u0001\u0014\u0001\u0014\u0001\u0014\u0003\u0014\u0102\b\u0014"+
		"\u0001\u0014\u0001\u0014\u0001\u0015\u0001\u0015\u0001\u0015\u0005\u0015"+
		"\u0109\b\u0015\n\u0015\f\u0015\u010c\t\u0015\u0001\u0015\u0003\u0015\u010f"+
		"\b\u0015\u0001\u0016\u0001\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u0115"+
		"\b\u0016\u0001\u0016\u0001\u0016\u0003\u0016\u0119\b\u0016\u0001\u0017"+
		"\u0001\u0017\u0001\u0017\u0001\u0017\u0001\u0018\u0001\u0018\u0001\u0018"+
		"\u0001\u0018\u0001\u0018\u0001\u0018\u0003\u0018\u0125\b\u0018\u0003\u0018"+
		"\u0127\b\u0018\u0001\u0019\u0001\u0019\u0001\u001a\u0001\u001a\u0001\u001a"+
		"\u0005\u001a\u012e\b\u001a\n\u001a\f\u001a\u0131\t\u001a\u0001\u001b\u0001"+
		"\u001b\u0001\u001b\u0005\u001b\u0136\b\u001b\n\u001b\f\u001b\u0139\t\u001b"+
		"\u0001\u001c\u0001\u001c\u0001\u001c\u0005\u001c\u013e\b\u001c\n\u001c"+
		"\f\u001c\u0141\t\u001c\u0001\u001d\u0001\u001d\u0001\u001d\u0005\u001d"+
		"\u0146\b\u001d\n\u001d\f\u001d\u0149\t\u001d\u0001\u001e\u0001\u001e\u0001"+
		"\u001e\u0005\u001e\u014e\b\u001e\n\u001e\f\u001e\u0151\t\u001e\u0001\u001f"+
		"\u0001\u001f\u0001\u001f\u0005\u001f\u0156\b\u001f\n\u001f\f\u001f\u0159"+
		"\t\u001f\u0001 \u0001 \u0001 \u0001 \u0001 \u0001 \u0003 \u0161\b \u0001"+
		" \u0001 \u0003 \u0165\b \u0001!\u0001!\u0005!\u0169\b!\n!\f!\u016c\t!"+
		"\u0001\"\u0001\"\u0001\"\u0001\"\u0001\"\u0001\"\u0003\"\u0174\b\"\u0001"+
		"\"\u0001\"\u0001\"\u0001\"\u0001\"\u0003\"\u017b\b\"\u0001\"\u0001\"\u0003"+
		"\"\u017f\b\"\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0003#\u0188"+
		"\b#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001#\u0001"+
		"#\u0001#\u0001#\u0001#\u0001#\u0001#\u0003#\u0199\b#\u0001#\u0001#\u0003"+
		"#\u019d\b#\u0001$\u0001$\u0001$\u0001$\u0003$\u01a3\b$\u0001%\u0001%\u0001"+
		"%\u0005%\u01a8\b%\n%\f%\u01ab\t%\u0001&\u0001&\u0001\'\u0001\'\u0001\'"+
		"\u0005\'\u01b2\b\'\n\'\f\'\u01b5\t\'\u0001\'\u0003\'\u01b8\b\'\u0001("+
		"\u0001(\u0001(\u0001(\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0001"+
		")\u0001)\u0001)\u0001)\u0001)\u0001)\u0001)\u0003)\u01cb\b)\u0001*\u0001"+
		"*\u0001*\u0005*\u01d0\b*\n*\f*\u01d3\t*\u0001*\u0003*\u01d6\b*\u0001+"+
		"\u0001+\u0001+\u0000\u0000,\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPR"+
		"TV\u0000\u0004\u0001\u0000\u0018\u0019\u0001\u0000\u001a\u001d\u0001\u0000"+
		"\u001e\u001f\u0002\u0000\u0006\u0006 !\u01fc\u0000Y\u0001\u0000\u0000"+
		"\u0000\u0002~\u0001\u0000\u0000\u0000\u0004\u0080\u0001\u0000\u0000\u0000"+
		"\u0006\u008d\u0001\u0000\u0000\u0000\b\u0094\u0001\u0000\u0000\u0000\n"+
		"\u009b\u0001\u0000\u0000\u0000\f\u009d\u0001\u0000\u0000\u0000\u000e\u00a0"+
		"\u0001\u0000\u0000\u0000\u0010\u00a2\u0001\u0000\u0000\u0000\u0012\u00af"+
		"\u0001\u0000\u0000\u0000\u0014\u00b8\u0001\u0000\u0000\u0000\u0016\u00be"+
		"\u0001\u0000\u0000\u0000\u0018\u00c6\u0001\u0000\u0000\u0000\u001a\u00c9"+
		"\u0001\u0000\u0000\u0000\u001c\u00cb\u0001\u0000\u0000\u0000\u001e\u00d7"+
		"\u0001\u0000\u0000\u0000 \u00df\u0001\u0000\u0000\u0000\"\u00ea\u0001"+
		"\u0000\u0000\u0000$\u00ee\u0001\u0000\u0000\u0000&\u00f9\u0001\u0000\u0000"+
		"\u0000(\u00fd\u0001\u0000\u0000\u0000*\u0105\u0001\u0000\u0000\u0000,"+
		"\u0118\u0001\u0000\u0000\u0000.\u011a\u0001\u0000\u0000\u00000\u011e\u0001"+
		"\u0000\u0000\u00002\u0128\u0001\u0000\u0000\u00004\u012a\u0001\u0000\u0000"+
		"\u00006\u0132\u0001\u0000\u0000\u00008\u013a\u0001\u0000\u0000\u0000:"+
		"\u0142\u0001\u0000\u0000\u0000<\u014a\u0001\u0000\u0000\u0000>\u0152\u0001"+
		"\u0000\u0000\u0000@\u0164\u0001\u0000\u0000\u0000B\u0166\u0001\u0000\u0000"+
		"\u0000D\u017e\u0001\u0000\u0000\u0000F\u019c\u0001\u0000\u0000\u0000H"+
		"\u01a2\u0001\u0000\u0000\u0000J\u01a4\u0001\u0000\u0000\u0000L\u01ac\u0001"+
		"\u0000\u0000\u0000N\u01ae\u0001\u0000\u0000\u0000P\u01b9\u0001\u0000\u0000"+
		"\u0000R\u01ca\u0001\u0000\u0000\u0000T\u01cc\u0001\u0000\u0000\u0000V"+
		"\u01d7\u0001\u0000\u0000\u0000XZ\u0003\u0002\u0001\u0000YX\u0001\u0000"+
		"\u0000\u0000Z[\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000[\\\u0001"+
		"\u0000\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0005\u0000\u0000\u0001"+
		"^\u0001\u0001\u0000\u0000\u0000_a\u0003\u0004\u0002\u0000`b\u0005\u0001"+
		"\u0000\u0000a`\u0001\u0000\u0000\u0000ab\u0001\u0000\u0000\u0000b\u007f"+
		"\u0001\u0000\u0000\u0000ce\u0003\u0006\u0003\u0000df\u0005\u0001\u0000"+
		"\u0000ed\u0001\u0000\u0000\u0000ef\u0001\u0000\u0000\u0000f\u007f\u0001"+
		"\u0000\u0000\u0000gi\u0003\b\u0004\u0000hj\u0005\u0001\u0000\u0000ih\u0001"+
		"\u0000\u0000\u0000ij\u0001\u0000\u0000\u0000j\u007f\u0001\u0000\u0000"+
		"\u0000km\u0003\f\u0006\u0000ln\u0005\u0001\u0000\u0000ml\u0001\u0000\u0000"+
		"\u0000mn\u0001\u0000\u0000\u0000n\u007f\u0001\u0000\u0000\u0000op\u0003"+
		"\u000e\u0007\u0000pq\u0005\u0001\u0000\u0000q\u007f\u0001\u0000\u0000"+
		"\u0000r\u007f\u0003\u0010\b\u0000s\u007f\u0003\u0016\u000b\u0000t\u007f"+
		"\u0003\u0018\f\u0000uw\u0003\u001a\r\u0000vx\u0005\u0001\u0000\u0000w"+
		"v\u0001\u0000\u0000\u0000wx\u0001\u0000\u0000\u0000x\u007f\u0001\u0000"+
		"\u0000\u0000y\u007f\u0003\u001c\u000e\u0000z\u007f\u0003\u001e\u000f\u0000"+
		"{\u007f\u0003(\u0014\u0000|\u007f\u0003.\u0017\u0000}\u007f\u00030\u0018"+
		"\u0000~_\u0001\u0000\u0000\u0000~c\u0001\u0000\u0000\u0000~g\u0001\u0000"+
		"\u0000\u0000~k\u0001\u0000\u0000\u0000~o\u0001\u0000\u0000\u0000~r\u0001"+
		"\u0000\u0000\u0000~s\u0001\u0000\u0000\u0000~t\u0001\u0000\u0000\u0000"+
		"~u\u0001\u0000\u0000\u0000~y\u0001\u0000\u0000\u0000~z\u0001\u0000\u0000"+
		"\u0000~{\u0001\u0000\u0000\u0000~|\u0001\u0000\u0000\u0000~}\u0001\u0000"+
		"\u0000\u0000\u007f\u0003\u0001\u0000\u0000\u0000\u0080\u0082\u0005\u0002"+
		"\u0000\u0000\u0081\u0083\u0005-\u0000\u0000\u0082\u0081\u0001\u0000\u0000"+
		"\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000"+
		"\u0000\u0084\u0087\u0003V+\u0000\u0085\u0086\u0005\u0003\u0000\u0000\u0086"+
		"\u0088\u0003H$\u0000\u0087\u0085\u0001\u0000\u0000\u0000\u0087\u0088\u0001"+
		"\u0000\u0000\u0000\u0088\u008b\u0001\u0000\u0000\u0000\u0089\u008a\u0005"+
		"\u0004\u0000\u0000\u008a\u008c\u00032\u0019\u0000\u008b\u0089\u0001\u0000"+
		"\u0000\u0000\u008b\u008c\u0001\u0000\u0000\u0000\u008c\u0005\u0001\u0000"+
		"\u0000\u0000\u008d\u008e\u0005\u0005\u0000\u0000\u008e\u008f\u0003V+\u0000"+
		"\u008f\u0090\u0005\u0003\u0000\u0000\u0090\u0091\u0003H$\u0000\u0091\u0092"+
		"\u0005\u0004\u0000\u0000\u0092\u0093\u00032\u0019\u0000\u0093\u0007\u0001"+
		"\u0000\u0000\u0000\u0094\u0095\u0003\n\u0005\u0000\u0095\u0096\u0005\u0004"+
		"\u0000\u0000\u0096\u0097\u00032\u0019\u0000\u0097\t\u0001\u0000\u0000"+
		"\u0000\u0098\u0099\u0005\u0006\u0000\u0000\u0099\u009c\u00032\u0019\u0000"+
		"\u009a\u009c\u0003V+\u0000\u009b\u0098\u0001\u0000\u0000\u0000\u009b\u009a"+
		"\u0001\u0000\u0000\u0000\u009c\u000b\u0001\u0000\u0000\u0000\u009d\u009e"+
		"\u0005\u0007\u0000\u0000\u009e\u009f\u00032\u0019\u0000\u009f\r\u0001"+
		"\u0000\u0000\u0000\u00a0\u00a1\u00032\u0019\u0000\u00a1\u000f\u0001\u0000"+
		"\u0000\u0000\u00a2\u00a3\u0005\b\u0000\u0000\u00a3\u00a4\u0003V+\u0000"+
		"\u00a4\u00a6\u00056\u0000\u0000\u00a5\u00a7\u0003\u0012\t\u0000\u00a6"+
		"\u00a5\u0001\u0000\u0000\u0000\u00a6\u00a7\u0001\u0000\u0000\u0000\u00a7"+
		"\u00a8\u0001\u0000\u0000\u0000\u00a8\u00ab\u00057\u0000\u0000\u00a9\u00aa"+
		"\u0005\t\u0000\u0000\u00aa\u00ac\u0003H$\u0000\u00ab\u00a9\u0001\u0000"+
		"\u0000\u0000\u00ab\u00ac\u0001\u0000\u0000\u0000\u00ac\u00ad\u0001\u0000"+
		"\u0000\u0000\u00ad\u00ae\u0003\u001c\u000e\u0000\u00ae\u0011\u0001\u0000"+
		"\u0000\u0000\u00af\u00b4\u0003\u0014\n\u0000\u00b0\u00b1\u0005\n\u0000"+
		"\u0000\u00b1\u00b3\u0003\u0014\n\u0000\u00b2\u00b0\u0001\u0000\u0000\u0000"+
		"\u00b3\u00b6\u0001\u0000\u0000\u0000\u00b4\u00b2\u0001\u0000\u0000\u0000"+
		"\u00b4\u00b5\u0001\u0000\u0000\u0000\u00b5\u0013\u0001\u0000\u0000\u0000"+
		"\u00b6\u00b4\u0001\u0000\u0000\u0000\u00b7\u00b9\u0005-\u0000\u0000\u00b8"+
		"\u00b7\u0001\u0000\u0000\u0000\u00b8\u00b9\u0001\u0000\u0000\u0000\u00b9"+
		"\u00ba\u0001\u0000\u0000\u0000\u00ba\u00bb\u0003V+\u0000\u00bb\u00bc\u0005"+
		"\u0003\u0000\u0000\u00bc\u00bd\u0003H$\u0000\u00bd\u0015\u0001\u0000\u0000"+
		"\u0000\u00be\u00bf\u0005\u000b\u0000\u0000\u00bf\u00c0\u0003V+\u0000\u00c0"+
		"\u00c1\u0005\f\u0000\u0000\u00c1\u00c2\u00032\u0019\u0000\u00c2\u00c3"+
		"\u0005\r\u0000\u0000\u00c3\u00c4\u00032\u0019\u0000\u00c4\u00c5\u0003"+
		"\u001c\u000e\u0000\u00c5\u0017\u0001\u0000\u0000\u0000\u00c6\u00c7\u0005"+
		"\u000e\u0000\u0000\u00c7\u00c8\u0003\u001c\u000e\u0000\u00c8\u0019\u0001"+
		"\u0000\u0000\u0000\u00c9\u00ca\u0005\u000f\u0000\u0000\u00ca\u001b\u0001"+
		"\u0000\u0000\u0000\u00cb\u00cf\u0005\u0010\u0000\u0000\u00cc\u00ce\u0003"+
		"\u0002\u0001\u0000\u00cd\u00cc\u0001\u0000\u0000\u0000\u00ce\u00d1\u0001"+
		"\u0000\u0000\u0000\u00cf\u00cd\u0001\u0000\u0000\u0000\u00cf\u00d0\u0001"+
		"\u0000\u0000\u0000\u00d0\u00d3\u0001\u0000\u0000\u0000\u00d1\u00cf\u0001"+
		"\u0000\u0000\u0000\u00d2\u00d4\u00032\u0019\u0000\u00d3\u00d2\u0001\u0000"+
		"\u0000\u0000\u00d3\u00d4\u0001\u0000\u0000\u0000\u00d4\u00d5\u0001\u0000"+
		"\u0000\u0000\u00d5\u00d6\u0005\u0011\u0000\u0000\u00d6\u001d\u0001\u0000"+
		"\u0000\u0000\u00d7\u00d8\u0005\u0012\u0000\u0000\u00d8\u00d9\u0003V+\u0000"+
		"\u00d9\u00db\u0005\u0010\u0000\u0000\u00da\u00dc\u0003 \u0010\u0000\u00db"+
		"\u00da\u0001\u0000\u0000\u0000\u00db\u00dc\u0001\u0000\u0000\u0000\u00dc"+
		"\u00dd\u0001\u0000\u0000\u0000\u00dd\u00de\u0005\u0011\u0000\u0000\u00de"+
		"\u001f\u0001\u0000\u0000\u0000\u00df\u00e4\u0003\"\u0011\u0000\u00e0\u00e1"+
		"\u0005\n\u0000\u0000\u00e1\u00e3\u0003\"\u0011\u0000\u00e2\u00e0\u0001"+
		"\u0000\u0000\u0000\u00e3\u00e6\u0001\u0000\u0000\u0000\u00e4\u00e2\u0001"+
		"\u0000\u0000\u0000\u00e4\u00e5\u0001\u0000\u0000\u0000\u00e5\u00e8\u0001"+
		"\u0000\u0000\u0000\u00e6\u00e4\u0001\u0000\u0000\u0000\u00e7\u00e9\u0005"+
		"\n\u0000\u0000\u00e8\u00e7\u0001\u0000\u0000\u0000\u00e8\u00e9\u0001\u0000"+
		"\u0000\u0000\u00e9!\u0001\u0000\u0000\u0000\u00ea\u00eb\u0003V+\u0000"+
		"\u00eb\u00ec\u0005\u0003\u0000\u0000\u00ec\u00ed\u0003H$\u0000\u00ed#"+
		"\u0001\u0000\u0000\u0000\u00ee\u00f3\u0003&\u0013\u0000\u00ef\u00f0\u0005"+
		"\n\u0000\u0000\u00f0\u00f2\u0003&\u0013\u0000\u00f1\u00ef\u0001\u0000"+
		"\u0000\u0000\u00f2\u00f5\u0001\u0000\u0000\u0000\u00f3\u00f1\u0001\u0000"+
		"\u0000\u0000\u00f3\u00f4\u0001\u0000\u0000\u0000\u00f4\u00f7\u0001\u0000"+
		"\u0000\u0000\u00f5\u00f3\u0001\u0000\u0000\u0000\u00f6\u00f8\u0005\n\u0000"+
		"\u0000\u00f7\u00f6\u0001\u0000\u0000\u0000\u00f7\u00f8\u0001\u0000\u0000"+
		"\u0000\u00f8%\u0001\u0000\u0000\u0000\u00f9\u00fa\u0003V+\u0000\u00fa"+
		"\u00fb\u0005\u0003\u0000\u0000\u00fb\u00fc\u00032\u0019\u0000\u00fc\'"+
		"\u0001\u0000\u0000\u0000\u00fd\u00fe\u0005\u0013\u0000\u0000\u00fe\u00ff"+
		"\u0003V+\u0000\u00ff\u0101\u0005\u0010\u0000\u0000\u0100\u0102\u0003*"+
		"\u0015\u0000\u0101\u0100\u0001\u0000\u0000\u0000\u0101\u0102\u0001\u0000"+
		"\u0000\u0000\u0102\u0103\u0001\u0000\u0000\u0000\u0103\u0104\u0005\u0011"+
		"\u0000\u0000\u0104)\u0001\u0000\u0000\u0000\u0105\u010a\u0003,\u0016\u0000"+
		"\u0106\u0107\u0005\n\u0000\u0000\u0107\u0109\u0003,\u0016\u0000\u0108"+
		"\u0106\u0001\u0000\u0000\u0000\u0109\u010c\u0001\u0000\u0000\u0000\u010a"+
		"\u0108\u0001\u0000\u0000\u0000\u010a\u010b\u0001\u0000\u0000\u0000\u010b"+
		"\u010e\u0001\u0000\u0000\u0000\u010c\u010a\u0001\u0000\u0000\u0000\u010d"+
		"\u010f\u0005\n\u0000\u0000\u010e\u010d\u0001\u0000\u0000\u0000\u010e\u010f"+
		"\u0001\u0000\u0000\u0000\u010f+\u0001\u0000\u0000\u0000\u0110\u0119\u0003"+
		"V+\u0000\u0111\u0112\u0003V+\u0000\u0112\u0114\u0005\u0010\u0000\u0000"+
		"\u0113\u0115\u0003 \u0010\u0000\u0114\u0113\u0001\u0000\u0000\u0000\u0114"+
		"\u0115\u0001\u0000\u0000\u0000\u0115\u0116\u0001\u0000\u0000\u0000\u0116"+
		"\u0117\u0005\u0011\u0000\u0000\u0117\u0119\u0001\u0000\u0000\u0000\u0118"+
		"\u0110\u0001\u0000\u0000\u0000\u0118\u0111\u0001\u0000\u0000\u0000\u0119"+
		"-\u0001\u0000\u0000\u0000\u011a\u011b\u0005\u0014\u0000\u0000\u011b\u011c"+
		"\u00032\u0019\u0000\u011c\u011d\u0003\u001c\u000e\u0000\u011d/\u0001\u0000"+
		"\u0000\u0000\u011e\u011f\u0005\u0015\u0000\u0000\u011f\u0120\u00032\u0019"+
		"\u0000\u0120\u0126\u0003\u001c\u000e\u0000\u0121\u0124\u0005.\u0000\u0000"+
		"\u0122\u0125\u0003\u001c\u000e\u0000\u0123\u0125\u00030\u0018\u0000\u0124"+
		"\u0122\u0001\u0000\u0000\u0000\u0124\u0123\u0001\u0000\u0000\u0000\u0125"+
		"\u0127\u0001\u0000\u0000\u0000\u0126\u0121\u0001\u0000\u0000\u0000\u0126"+
		"\u0127\u0001\u0000\u0000\u0000\u01271\u0001\u0000\u0000\u0000\u0128\u0129"+
		"\u00034\u001a\u0000\u01293\u0001\u0000\u0000\u0000\u012a\u012f\u00036"+
		"\u001b\u0000\u012b\u012c\u0005\u0016\u0000\u0000\u012c\u012e\u00036\u001b"+
		"\u0000\u012d\u012b\u0001\u0000\u0000\u0000\u012e\u0131\u0001\u0000\u0000"+
		"\u0000\u012f\u012d\u0001\u0000\u0000\u0000\u012f\u0130\u0001\u0000\u0000"+
		"\u0000\u01305\u0001\u0000\u0000\u0000\u0131\u012f\u0001\u0000\u0000\u0000"+
		"\u0132\u0137\u00038\u001c\u0000\u0133\u0134\u0005\u0017\u0000\u0000\u0134"+
		"\u0136\u00038\u001c\u0000\u0135\u0133\u0001\u0000\u0000\u0000\u0136\u0139"+
		"\u0001\u0000\u0000\u0000\u0137\u0135\u0001\u0000\u0000\u0000\u0137\u0138"+
		"\u0001\u0000\u0000\u0000\u01387\u0001\u0000\u0000\u0000\u0139\u0137\u0001"+
		"\u0000\u0000\u0000\u013a\u013f\u0003:\u001d\u0000\u013b\u013c\u0007\u0000"+
		"\u0000\u0000\u013c\u013e\u0003:\u001d\u0000\u013d\u013b\u0001\u0000\u0000"+
		"\u0000\u013e\u0141\u0001\u0000\u0000\u0000\u013f\u013d\u0001\u0000\u0000"+
		"\u0000\u013f\u0140\u0001\u0000\u0000\u0000\u01409\u0001\u0000\u0000\u0000"+
		"\u0141\u013f\u0001\u0000\u0000\u0000\u0142\u0147\u0003<\u001e\u0000\u0143"+
		"\u0144\u0007\u0001\u0000\u0000\u0144\u0146\u0003<\u001e\u0000\u0145\u0143"+
		"\u0001\u0000\u0000\u0000\u0146\u0149\u0001\u0000\u0000\u0000\u0147\u0145"+
		"\u0001\u0000\u0000\u0000\u0147\u0148\u0001\u0000\u0000\u0000\u0148;\u0001"+
		"\u0000\u0000\u0000\u0149\u0147\u0001\u0000\u0000\u0000\u014a\u014f\u0003"+
		">\u001f\u0000\u014b\u014c\u0007\u0002\u0000\u0000\u014c\u014e\u0003>\u001f"+
		"\u0000\u014d\u014b\u0001\u0000\u0000\u0000\u014e\u0151\u0001\u0000\u0000"+
		"\u0000\u014f\u014d\u0001\u0000\u0000\u0000\u014f\u0150\u0001\u0000\u0000"+
		"\u0000\u0150=\u0001\u0000\u0000\u0000\u0151\u014f\u0001\u0000\u0000\u0000"+
		"\u0152\u0157\u0003@ \u0000\u0153\u0154\u0007\u0003\u0000\u0000\u0154\u0156"+
		"\u0003@ \u0000\u0155\u0153\u0001\u0000\u0000\u0000\u0156\u0159\u0001\u0000"+
		"\u0000\u0000\u0157\u0155\u0001\u0000\u0000\u0000\u0157\u0158\u0001\u0000"+
		"\u0000\u0000\u0158?\u0001\u0000\u0000\u0000\u0159\u0157\u0001\u0000\u0000"+
		"\u0000\u015a\u0161\u0005\"\u0000\u0000\u015b\u0161\u0005\u001f\u0000\u0000"+
		"\u015c\u0161\u0005#\u0000\u0000\u015d\u015e\u0005#\u0000\u0000\u015e\u0161"+
		"\u0005-\u0000\u0000\u015f\u0161\u0005\u0006\u0000\u0000\u0160\u015a\u0001"+
		"\u0000\u0000\u0000\u0160\u015b\u0001\u0000\u0000\u0000\u0160\u015c\u0001"+
		"\u0000\u0000\u0000\u0160\u015d\u0001\u0000\u0000\u0000\u0160\u015f\u0001"+
		"\u0000\u0000\u0000\u0161\u0162\u0001\u0000\u0000\u0000\u0162\u0165\u0003"+
		"@ \u0000\u0163\u0165\u0003B!\u0000\u0164\u0160\u0001\u0000\u0000\u0000"+
		"\u0164\u0163\u0001\u0000\u0000\u0000\u0165A\u0001\u0000\u0000\u0000\u0166"+
		"\u016a\u0003F#\u0000\u0167\u0169\u0003D\"\u0000\u0168\u0167\u0001\u0000"+
		"\u0000\u0000\u0169\u016c\u0001\u0000\u0000\u0000\u016a\u0168\u0001\u0000"+
		"\u0000\u0000\u016a\u016b\u0001\u0000\u0000\u0000\u016bC\u0001\u0000\u0000"+
		"\u0000\u016c\u016a\u0001\u0000\u0000\u0000\u016d\u016e\u0005$\u0000\u0000"+
		"\u016e\u017f\u0003V+\u0000\u016f\u0170\u0005%\u0000\u0000\u0170\u017f"+
		"\u0003V+\u0000\u0171\u0173\u00056\u0000\u0000\u0172\u0174\u0003J%\u0000"+
		"\u0173\u0172\u0001\u0000\u0000\u0000\u0173\u0174\u0001\u0000\u0000\u0000"+
		"\u0174\u0175\u0001\u0000\u0000\u0000\u0175\u017f\u00057\u0000\u0000\u0176"+
		"\u0177\u0005%\u0000\u0000\u0177\u0178\u0003V+\u0000\u0178\u017a\u0005"+
		"\u0010\u0000\u0000\u0179\u017b\u0003$\u0012\u0000\u017a\u0179\u0001\u0000"+
		"\u0000\u0000\u017a\u017b\u0001\u0000\u0000\u0000\u017b\u017c\u0001\u0000"+
		"\u0000\u0000\u017c\u017d\u0005\u0011\u0000\u0000\u017d\u017f\u0001\u0000"+
		"\u0000\u0000\u017e\u016d\u0001\u0000\u0000\u0000\u017e\u016f\u0001\u0000"+
		"\u0000\u0000\u017e\u0171\u0001\u0000\u0000\u0000\u017e\u0176\u0001\u0000"+
		"\u0000\u0000\u017fE\u0001\u0000\u0000\u0000\u0180\u0181\u00056\u0000\u0000"+
		"\u0181\u0182\u00032\u0019\u0000\u0182\u0183\u00057\u0000\u0000\u0183\u019d"+
		"\u0001\u0000\u0000\u0000\u0184\u0185\u0003V+\u0000\u0185\u0187\u0005\u0010"+
		"\u0000\u0000\u0186\u0188\u0003$\u0012\u0000\u0187\u0186\u0001\u0000\u0000"+
		"\u0000\u0187\u0188\u0001\u0000\u0000\u0000\u0188\u0189\u0001\u0000\u0000"+
		"\u0000\u0189\u018a\u0005\u0011\u0000\u0000\u018a\u019d\u0001\u0000\u0000"+
		"\u0000\u018b\u018c\u0005&\u0000\u0000\u018c\u018d\u00032\u0019\u0000\u018d"+
		"\u018e\u0005\u0010\u0000\u0000\u018e\u018f\u0003N\'\u0000\u018f\u0190"+
		"\u0005\u0011\u0000\u0000\u0190\u019d\u0001\u0000\u0000\u0000\u0191\u019d"+
		"\u0003V+\u0000\u0192\u019d\u0003L&\u0000\u0193\u019d\u00050\u0000\u0000"+
		"\u0194\u019d\u00051\u0000\u0000\u0195\u0196\u0005\'\u0000\u0000\u0196"+
		"\u0198\u00056\u0000\u0000\u0197\u0199\u0003J%\u0000\u0198\u0197\u0001"+
		"\u0000\u0000\u0000\u0198\u0199\u0001\u0000\u0000\u0000\u0199\u019a\u0001"+
		"\u0000\u0000\u0000\u019a\u019d\u00057\u0000\u0000\u019b\u019d\u0003\u001c"+
		"\u000e\u0000\u019c\u0180\u0001\u0000\u0000\u0000\u019c\u0184\u0001\u0000"+
		"\u0000\u0000\u019c\u018b\u0001\u0000\u0000\u0000\u019c\u0191\u0001\u0000"+
		"\u0000\u0000\u019c\u0192\u0001\u0000\u0000\u0000\u019c\u0193\u0001\u0000"+
		"\u0000\u0000\u019c\u0194\u0001\u0000\u0000\u0000\u019c\u0195\u0001\u0000"+
		"\u0000\u0000\u019c\u019b\u0001\u0000\u0000\u0000\u019dG\u0001\u0000\u0000"+
		"\u0000\u019e\u01a3\u0005(\u0000\u0000\u019f\u01a3\u0005)\u0000\u0000\u01a0"+
		"\u01a3\u0005*\u0000\u0000\u01a1\u01a3\u0003V+\u0000\u01a2\u019e\u0001"+
		"\u0000\u0000\u0000\u01a2\u019f\u0001\u0000\u0000\u0000\u01a2\u01a0\u0001"+
		"\u0000\u0000\u0000\u01a2\u01a1\u0001\u0000\u0000\u0000\u01a3I\u0001\u0000"+
		"\u0000\u0000\u01a4\u01a9\u00032\u0019\u0000\u01a5\u01a6\u0005\n\u0000"+
		"\u0000\u01a6\u01a8\u00032\u0019\u0000\u01a7\u01a5\u0001\u0000\u0000\u0000"+
		"\u01a8\u01ab\u0001\u0000\u0000\u0000\u01a9\u01a7\u0001\u0000\u0000\u0000"+
		"\u01a9\u01aa\u0001\u0000\u0000\u0000\u01aaK\u0001\u0000\u0000\u0000\u01ab"+
		"\u01a9\u0001\u0000\u0000\u0000\u01ac\u01ad\u0005/\u0000\u0000\u01adM\u0001"+
		"\u0000\u0000\u0000\u01ae\u01b3\u0003P(\u0000\u01af\u01b0\u0005\n\u0000"+
		"\u0000\u01b0\u01b2\u0003P(\u0000\u01b1\u01af\u0001\u0000\u0000\u0000\u01b2"+
		"\u01b5\u0001\u0000\u0000\u0000\u01b3\u01b1\u0001\u0000\u0000\u0000\u01b3"+
		"\u01b4\u0001\u0000\u0000\u0000\u01b4\u01b7\u0001\u0000\u0000\u0000\u01b5"+
		"\u01b3\u0001\u0000\u0000\u0000\u01b6\u01b8\u0005\n\u0000\u0000\u01b7\u01b6"+
		"\u0001\u0000\u0000\u0000\u01b7\u01b8\u0001\u0000\u0000\u0000\u01b8O\u0001"+
		"\u0000\u0000\u0000\u01b9\u01ba\u0003R)\u0000\u01ba\u01bb\u0005+\u0000"+
		"\u0000\u01bb\u01bc\u00032\u0019\u0000\u01bcQ\u0001\u0000\u0000\u0000\u01bd"+
		"\u01cb\u0005/\u0000\u0000\u01be\u01cb\u0005,\u0000\u0000\u01bf\u01c0\u0003"+
		"V+\u0000\u01c0\u01c1\u0005%\u0000\u0000\u01c1\u01c2\u0003V+\u0000\u01c2"+
		"\u01cb\u0001\u0000\u0000\u0000\u01c3\u01c4\u0003V+\u0000\u01c4\u01c5\u0005"+
		"%\u0000\u0000\u01c5\u01c6\u0003V+\u0000\u01c6\u01c7\u0005\u0010\u0000"+
		"\u0000\u01c7\u01c8\u0003T*\u0000\u01c8\u01c9\u0005\u0011\u0000\u0000\u01c9"+
		"\u01cb\u0001\u0000\u0000\u0000\u01ca\u01bd\u0001\u0000\u0000\u0000\u01ca"+
		"\u01be\u0001\u0000\u0000\u0000\u01ca\u01bf\u0001\u0000\u0000\u0000\u01ca"+
		"\u01c3\u0001\u0000\u0000\u0000\u01cbS\u0001\u0000\u0000\u0000\u01cc\u01d1"+
		"\u0003V+\u0000\u01cd\u01ce\u0005\n\u0000\u0000\u01ce\u01d0\u0003V+\u0000"+
		"\u01cf\u01cd\u0001\u0000\u0000\u0000\u01d0\u01d3\u0001\u0000\u0000\u0000"+
		"\u01d1\u01cf\u0001\u0000\u0000\u0000\u01d1\u01d2\u0001\u0000\u0000\u0000"+
		"\u01d2\u01d5\u0001\u0000\u0000\u0000\u01d3\u01d1\u0001\u0000\u0000\u0000"+
		"\u01d4\u01d6\u0005\n\u0000\u0000\u01d5\u01d4\u0001\u0000\u0000\u0000\u01d5"+
		"\u01d6\u0001\u0000\u0000\u0000\u01d6U\u0001\u0000\u0000\u0000\u01d7\u01d8"+
		"\u00052\u0000\u0000\u01d8W\u0001\u0000\u0000\u00003[aeimw~\u0082\u0087"+
		"\u008b\u009b\u00a6\u00ab\u00b4\u00b8\u00cf\u00d3\u00db\u00e4\u00e8\u00f3"+
		"\u00f7\u0101\u010a\u010e\u0114\u0118\u0124\u0126\u012f\u0137\u013f\u0147"+
		"\u014f\u0157\u0160\u0164\u016a\u0173\u017a\u017e\u0187\u0198\u019c\u01a2"+
		"\u01a9\u01b3\u01b7\u01ca\u01d1\u01d5";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}