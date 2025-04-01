// Generated from /home/xintong/test_antlr_conductor/rustParser.g4 by ANTLR 4.13.1
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
		KW_BREAK=1, KW_CONST=2, KW_CONTINUE=3, KW_ELSE=4, KW_ENUM=5, KW_FALSE=6, 
		KW_FN=7, KW_FOR=8, KW_IF=9, KW_IN=10, KW_LET=11, KW_MUT=12, KW_RETURN=13, 
		KW_SELFVALUE=14, KW_SELFTYPE=15, KW_STATIC=16, KW_TRUE=17, KW_TYPE=18, 
		KW_UNSAFE=19, KW_WHILE=20, KW_TRY=21, KW_I32=22, KW_BOOL=23, PLUS=24, 
		MINUS=25, STAR=26, SLASH=27, PERCENT=28, CARET=29, NOT=30, AND=31, OR=32, 
		ANDAND=33, OROR=34, PLUSEQ=35, MINUSEQ=36, STAREQ=37, SLASHEQ=38, PERCENTEQ=39, 
		CARETEQ=40, ANDEQ=41, OREQ=42, SHLEQ=43, SHREQ=44, EQ=45, EQEQ=46, NE=47, 
		GT=48, LT=49, GE=50, LE=51, AT=52, UNDERSCORE=53, DOT=54, DOTDOT=55, DOTDOTDOT=56, 
		DOTDOTEQ=57, COMMA=58, SEMI=59, COLON=60, PATHSEP=61, RARROW=62, FATARROW=63, 
		POUND=64, DOLLAR=65, QUESTION=66, LCURLYBRACE=67, RCURLYBRACE=68, LSQUAREBRACKET=69, 
		RSQUAREBRACKET=70, LPAREN=71, RPAREN=72, LIFETIME_OR_LABEL=73, INTEGER_LITERAL=74, 
		DEC_LITERAL=75, HEX_LITERAL=76, OCT_LITERAL=77, BIN_LITERAL=78, NON_KEYWORD_IDENTIFIER=79, 
		RAW_IDENTIFIER=80, INT=81;
	public static final int
		RULE_program = 0, RULE_stmt = 1, RULE_let_stmt = 2, RULE_if_stmt = 3, 
		RULE_while_stmt = 4, RULE_for_stmt = 5, RULE_expr_stmt = 6, RULE_block = 7, 
		RULE_expr = 8, RULE_ty = 9, RULE_literal = 10, RULE_identifier = 11;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "stmt", "let_stmt", "if_stmt", "while_stmt", "for_stmt", "expr_stmt", 
			"block", "expr", "ty", "literal", "identifier"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'break'", "'const'", "'continue'", "'else'", "'enum'", "'false'", 
			"'fn'", "'for'", "'if'", "'in'", "'let'", "'mut'", "'return'", "'self'", 
			"'Self'", "'static'", "'true'", "'type'", "'unsafe'", "'while'", "'try'", 
			"'i32'", "'bool'", "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'!'", "'&'", 
			"'|'", "'&&'", "'||'", "'+='", "'-='", "'*='", "'/='", "'%='", "'^='", 
			"'&='", "'|='", "'<<='", "'>>='", "'='", "'=='", "'!='", "'>'", "'<'", 
			"'>='", "'<='", "'@'", "'_'", "'.'", "'..'", "'...'", "'..='", "','", 
			"';'", "':'", "'::'", "'->'", "'=>'", "'#'", "'$'", "'?'", "'{'", "'}'", 
			"'['", "']'", "'('", "')'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "KW_BREAK", "KW_CONST", "KW_CONTINUE", "KW_ELSE", "KW_ENUM", "KW_FALSE", 
			"KW_FN", "KW_FOR", "KW_IF", "KW_IN", "KW_LET", "KW_MUT", "KW_RETURN", 
			"KW_SELFVALUE", "KW_SELFTYPE", "KW_STATIC", "KW_TRUE", "KW_TYPE", "KW_UNSAFE", 
			"KW_WHILE", "KW_TRY", "KW_I32", "KW_BOOL", "PLUS", "MINUS", "STAR", "SLASH", 
			"PERCENT", "CARET", "NOT", "AND", "OR", "ANDAND", "OROR", "PLUSEQ", "MINUSEQ", 
			"STAREQ", "SLASHEQ", "PERCENTEQ", "CARETEQ", "ANDEQ", "OREQ", "SHLEQ", 
			"SHREQ", "EQ", "EQEQ", "NE", "GT", "LT", "GE", "LE", "AT", "UNDERSCORE", 
			"DOT", "DOTDOT", "DOTDOTDOT", "DOTDOTEQ", "COMMA", "SEMI", "COLON", "PATHSEP", 
			"RARROW", "FATARROW", "POUND", "DOLLAR", "QUESTION", "LCURLYBRACE", "RCURLYBRACE", 
			"LSQUAREBRACKET", "RSQUAREBRACKET", "LPAREN", "RPAREN", "LIFETIME_OR_LABEL", 
			"INTEGER_LITERAL", "DEC_LITERAL", "HEX_LITERAL", "OCT_LITERAL", "BIN_LITERAL", 
			"NON_KEYWORD_IDENTIFIER", "RAW_IDENTIFIER", "INT"
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
	public String getGrammarFileName() { return "rustParser.g4"; }

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
	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(rustParser.EOF, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterProgram(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitProgram(this);
		}
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(27);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1182528L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 1801L) != 0)) {
				{
				{
				setState(24);
				stmt();
				}
				}
				setState(29);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(30);
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
	public static class StmtContext extends ParserRuleContext {
		public Let_stmtContext let_stmt() {
			return getRuleContext(Let_stmtContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(rustParser.SEMI, 0); }
		public Expr_stmtContext expr_stmt() {
			return getRuleContext(Expr_stmtContext.class,0);
		}
		public If_stmtContext if_stmt() {
			return getRuleContext(If_stmtContext.class,0);
		}
		public While_stmtContext while_stmt() {
			return getRuleContext(While_stmtContext.class,0);
		}
		public For_stmtContext for_stmt() {
			return getRuleContext(For_stmtContext.class,0);
		}
		public StmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterStmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitStmt(this);
		}
	}

	public final StmtContext stmt() throws RecognitionException {
		StmtContext _localctx = new StmtContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_stmt);
		try {
			setState(41);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case KW_LET:
				enterOuterAlt(_localctx, 1);
				{
				setState(32);
				let_stmt();
				setState(33);
				match(SEMI);
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
			case LPAREN:
			case INTEGER_LITERAL:
			case NON_KEYWORD_IDENTIFIER:
			case RAW_IDENTIFIER:
			case INT:
				enterOuterAlt(_localctx, 2);
				{
				setState(35);
				expr_stmt();
				setState(36);
				match(SEMI);
				}
				break;
			case KW_IF:
				enterOuterAlt(_localctx, 3);
				{
				setState(38);
				if_stmt();
				}
				break;
			case KW_WHILE:
				enterOuterAlt(_localctx, 4);
				{
				setState(39);
				while_stmt();
				}
				break;
			case KW_FOR:
				enterOuterAlt(_localctx, 5);
				{
				setState(40);
				for_stmt();
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
	public static class Let_stmtContext extends ParserRuleContext {
		public TerminalNode KW_LET() { return getToken(rustParser.KW_LET, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode KW_MUT() { return getToken(rustParser.KW_MUT, 0); }
		public TerminalNode COLON() { return getToken(rustParser.COLON, 0); }
		public TyContext ty() {
			return getRuleContext(TyContext.class,0);
		}
		public TerminalNode EQ() { return getToken(rustParser.EQ, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Let_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_let_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterLet_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitLet_stmt(this);
		}
	}

	public final Let_stmtContext let_stmt() throws RecognitionException {
		Let_stmtContext _localctx = new Let_stmtContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_let_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			match(KW_LET);
			setState(45);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_MUT) {
				{
				setState(44);
				match(KW_MUT);
				}
			}

			setState(47);
			identifier();
			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==COLON) {
				{
				setState(48);
				match(COLON);
				setState(49);
				ty();
				}
			}

			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==EQ) {
				{
				setState(52);
				match(EQ);
				setState(53);
				expr(0);
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
	public static class If_stmtContext extends ParserRuleContext {
		public TerminalNode KW_IF() { return getToken(rustParser.KW_IF, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
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
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterIf_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitIf_stmt(this);
		}
	}

	public final If_stmtContext if_stmt() throws RecognitionException {
		If_stmtContext _localctx = new If_stmtContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_if_stmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(56);
			match(KW_IF);
			setState(57);
			expr(0);
			setState(58);
			block();
			setState(64);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==KW_ELSE) {
				{
				setState(59);
				match(KW_ELSE);
				setState(62);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case LCURLYBRACE:
					{
					setState(60);
					block();
					}
					break;
				case KW_IF:
					{
					setState(61);
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
	public static class While_stmtContext extends ParserRuleContext {
		public TerminalNode KW_WHILE() { return getToken(rustParser.KW_WHILE, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public While_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterWhile_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitWhile_stmt(this);
		}
	}

	public final While_stmtContext while_stmt() throws RecognitionException {
		While_stmtContext _localctx = new While_stmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_while_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			match(KW_WHILE);
			setState(67);
			expr(0);
			setState(68);
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
	public static class For_stmtContext extends ParserRuleContext {
		public TerminalNode KW_FOR() { return getToken(rustParser.KW_FOR, 0); }
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public TerminalNode KW_IN() { return getToken(rustParser.KW_IN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public For_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_for_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterFor_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitFor_stmt(this);
		}
	}

	public final For_stmtContext for_stmt() throws RecognitionException {
		For_stmtContext _localctx = new For_stmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_for_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			match(KW_FOR);
			setState(71);
			identifier();
			setState(72);
			match(KW_IN);
			setState(73);
			expr(0);
			setState(74);
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
	public static class Expr_stmtContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public Expr_stmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr_stmt; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterExpr_stmt(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitExpr_stmt(this);
		}
	}

	public final Expr_stmtContext expr_stmt() throws RecognitionException {
		Expr_stmtContext _localctx = new Expr_stmtContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_expr_stmt);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(76);
			expr(0);
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
		public TerminalNode LCURLYBRACE() { return getToken(rustParser.LCURLYBRACE, 0); }
		public TerminalNode RCURLYBRACE() { return getToken(rustParser.RCURLYBRACE, 0); }
		public List<StmtContext> stmt() {
			return getRuleContexts(StmtContext.class);
		}
		public StmtContext stmt(int i) {
			return getRuleContext(StmtContext.class,i);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterBlock(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitBlock(this);
		}
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_block);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			match(LCURLYBRACE);
			setState(82);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 1182528L) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & 1801L) != 0)) {
				{
				{
				setState(79);
				stmt();
				}
				}
				setState(84);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(85);
			match(RCURLYBRACE);
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
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentExprContext extends ExprContext {
		public IdentifierContext identifier() {
			return getRuleContext(IdentifierContext.class,0);
		}
		public IdentExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterIdentExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitIdentExpr(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IntExprContext extends ExprContext {
		public TerminalNode INT() { return getToken(rustParser.INT, 0); }
		public IntExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterIntExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitIntExpr(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LiteralExprContext extends ExprContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterLiteralExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitLiteralExpr(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BinaryExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public TerminalNode PLUS() { return getToken(rustParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(rustParser.MINUS, 0); }
		public TerminalNode STAR() { return getToken(rustParser.STAR, 0); }
		public TerminalNode SLASH() { return getToken(rustParser.SLASH, 0); }
		public BinaryExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterBinaryExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitBinaryExpr(this);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class ParenExprContext extends ExprContext {
		public TerminalNode LPAREN() { return getToken(rustParser.LPAREN, 0); }
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(rustParser.RPAREN, 0); }
		public ParenExprContext(ExprContext ctx) { copyFrom(ctx); }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterParenExpr(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitParenExpr(this);
		}
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 16;
		enterRecursionRule(_localctx, 16, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LPAREN:
				{
				_localctx = new ParenExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(88);
				match(LPAREN);
				setState(89);
				expr(0);
				setState(90);
				match(RPAREN);
				}
				break;
			case NON_KEYWORD_IDENTIFIER:
			case RAW_IDENTIFIER:
				{
				_localctx = new IdentExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(92);
				identifier();
				}
				break;
			case KW_FALSE:
			case KW_TRUE:
			case INTEGER_LITERAL:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(93);
				literal();
				}
				break;
			case INT:
				{
				_localctx = new IntExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(94);
				match(INT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(102);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new BinaryExprContext(new ExprContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_expr);
					setState(97);
					if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
					setState(98);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 251658240L) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(99);
					expr(6);
					}
					} 
				}
				setState(104);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TyContext extends ParserRuleContext {
		public TerminalNode KW_I32() { return getToken(rustParser.KW_I32, 0); }
		public TerminalNode KW_BOOL() { return getToken(rustParser.KW_BOOL, 0); }
		public TyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ty; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterTy(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitTy(this);
		}
	}

	public final TyContext ty() throws RecognitionException {
		TyContext _localctx = new TyContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_ty);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(105);
			_la = _input.LA(1);
			if ( !(_la==KW_I32 || _la==KW_BOOL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode INTEGER_LITERAL() { return getToken(rustParser.INTEGER_LITERAL, 0); }
		public TerminalNode KW_TRUE() { return getToken(rustParser.KW_TRUE, 0); }
		public TerminalNode KW_FALSE() { return getToken(rustParser.KW_FALSE, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterLiteral(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitLiteral(this);
		}
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(107);
			_la = _input.LA(1);
			if ( !(_la==KW_FALSE || _la==KW_TRUE || _la==INTEGER_LITERAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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
		public TerminalNode NON_KEYWORD_IDENTIFIER() { return getToken(rustParser.NON_KEYWORD_IDENTIFIER, 0); }
		public TerminalNode RAW_IDENTIFIER() { return getToken(rustParser.RAW_IDENTIFIER, 0); }
		public IdentifierContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_identifier; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).enterIdentifier(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof rustParserListener ) ((rustParserListener)listener).exitIdentifier(this);
		}
	}

	public final IdentifierContext identifier() throws RecognitionException {
		IdentifierContext _localctx = new IdentifierContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_identifier);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			_la = _input.LA(1);
			if ( !(_la==NON_KEYWORD_IDENTIFIER || _la==RAW_IDENTIFIER) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 8:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001Qp\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002\u0002"+
		"\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002\u0005"+
		"\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007"+
		"\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0001\u0000"+
		"\u0005\u0000\u001a\b\u0000\n\u0000\f\u0000\u001d\t\u0000\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001*\b\u0001\u0001"+
		"\u0002\u0001\u0002\u0003\u0002.\b\u0002\u0001\u0002\u0001\u0002\u0001"+
		"\u0002\u0003\u00023\b\u0002\u0001\u0002\u0001\u0002\u0003\u00027\b\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0003"+
		"\u0003\u0003?\b\u0003\u0003\u0003A\b\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0005"+
		"\u0007Q\b\u0007\n\u0007\f\u0007T\t\u0007\u0001\u0007\u0001\u0007\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\b`\b"+
		"\b\u0001\b\u0001\b\u0001\b\u0005\be\b\b\n\b\f\bh\t\b\u0001\t\u0001\t\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0000\u0001\u0010\f\u0000"+
		"\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0000\u0004\u0001"+
		"\u0000\u0018\u001b\u0001\u0000\u0016\u0017\u0003\u0000\u0006\u0006\u0011"+
		"\u0011JJ\u0001\u0000OPr\u0000\u001b\u0001\u0000\u0000\u0000\u0002)\u0001"+
		"\u0000\u0000\u0000\u0004+\u0001\u0000\u0000\u0000\u00068\u0001\u0000\u0000"+
		"\u0000\bB\u0001\u0000\u0000\u0000\nF\u0001\u0000\u0000\u0000\fL\u0001"+
		"\u0000\u0000\u0000\u000eN\u0001\u0000\u0000\u0000\u0010_\u0001\u0000\u0000"+
		"\u0000\u0012i\u0001\u0000\u0000\u0000\u0014k\u0001\u0000\u0000\u0000\u0016"+
		"m\u0001\u0000\u0000\u0000\u0018\u001a\u0003\u0002\u0001\u0000\u0019\u0018"+
		"\u0001\u0000\u0000\u0000\u001a\u001d\u0001\u0000\u0000\u0000\u001b\u0019"+
		"\u0001\u0000\u0000\u0000\u001b\u001c\u0001\u0000\u0000\u0000\u001c\u001e"+
		"\u0001\u0000\u0000\u0000\u001d\u001b\u0001\u0000\u0000\u0000\u001e\u001f"+
		"\u0005\u0000\u0000\u0001\u001f\u0001\u0001\u0000\u0000\u0000 !\u0003\u0004"+
		"\u0002\u0000!\"\u0005;\u0000\u0000\"*\u0001\u0000\u0000\u0000#$\u0003"+
		"\f\u0006\u0000$%\u0005;\u0000\u0000%*\u0001\u0000\u0000\u0000&*\u0003"+
		"\u0006\u0003\u0000\'*\u0003\b\u0004\u0000(*\u0003\n\u0005\u0000) \u0001"+
		"\u0000\u0000\u0000)#\u0001\u0000\u0000\u0000)&\u0001\u0000\u0000\u0000"+
		")\'\u0001\u0000\u0000\u0000)(\u0001\u0000\u0000\u0000*\u0003\u0001\u0000"+
		"\u0000\u0000+-\u0005\u000b\u0000\u0000,.\u0005\f\u0000\u0000-,\u0001\u0000"+
		"\u0000\u0000-.\u0001\u0000\u0000\u0000./\u0001\u0000\u0000\u0000/2\u0003"+
		"\u0016\u000b\u000001\u0005<\u0000\u000013\u0003\u0012\t\u000020\u0001"+
		"\u0000\u0000\u000023\u0001\u0000\u0000\u000036\u0001\u0000\u0000\u0000"+
		"45\u0005-\u0000\u000057\u0003\u0010\b\u000064\u0001\u0000\u0000\u0000"+
		"67\u0001\u0000\u0000\u00007\u0005\u0001\u0000\u0000\u000089\u0005\t\u0000"+
		"\u00009:\u0003\u0010\b\u0000:@\u0003\u000e\u0007\u0000;>\u0005\u0004\u0000"+
		"\u0000<?\u0003\u000e\u0007\u0000=?\u0003\u0006\u0003\u0000><\u0001\u0000"+
		"\u0000\u0000>=\u0001\u0000\u0000\u0000?A\u0001\u0000\u0000\u0000@;\u0001"+
		"\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000A\u0007\u0001\u0000\u0000"+
		"\u0000BC\u0005\u0014\u0000\u0000CD\u0003\u0010\b\u0000DE\u0003\u000e\u0007"+
		"\u0000E\t\u0001\u0000\u0000\u0000FG\u0005\b\u0000\u0000GH\u0003\u0016"+
		"\u000b\u0000HI\u0005\n\u0000\u0000IJ\u0003\u0010\b\u0000JK\u0003\u000e"+
		"\u0007\u0000K\u000b\u0001\u0000\u0000\u0000LM\u0003\u0010\b\u0000M\r\u0001"+
		"\u0000\u0000\u0000NR\u0005C\u0000\u0000OQ\u0003\u0002\u0001\u0000PO\u0001"+
		"\u0000\u0000\u0000QT\u0001\u0000\u0000\u0000RP\u0001\u0000\u0000\u0000"+
		"RS\u0001\u0000\u0000\u0000SU\u0001\u0000\u0000\u0000TR\u0001\u0000\u0000"+
		"\u0000UV\u0005D\u0000\u0000V\u000f\u0001\u0000\u0000\u0000WX\u0006\b\uffff"+
		"\uffff\u0000XY\u0005G\u0000\u0000YZ\u0003\u0010\b\u0000Z[\u0005H\u0000"+
		"\u0000[`\u0001\u0000\u0000\u0000\\`\u0003\u0016\u000b\u0000]`\u0003\u0014"+
		"\n\u0000^`\u0005Q\u0000\u0000_W\u0001\u0000\u0000\u0000_\\\u0001\u0000"+
		"\u0000\u0000_]\u0001\u0000\u0000\u0000_^\u0001\u0000\u0000\u0000`f\u0001"+
		"\u0000\u0000\u0000ab\n\u0005\u0000\u0000bc\u0007\u0000\u0000\u0000ce\u0003"+
		"\u0010\b\u0006da\u0001\u0000\u0000\u0000eh\u0001\u0000\u0000\u0000fd\u0001"+
		"\u0000\u0000\u0000fg\u0001\u0000\u0000\u0000g\u0011\u0001\u0000\u0000"+
		"\u0000hf\u0001\u0000\u0000\u0000ij\u0007\u0001\u0000\u0000j\u0013\u0001"+
		"\u0000\u0000\u0000kl\u0007\u0002\u0000\u0000l\u0015\u0001\u0000\u0000"+
		"\u0000mn\u0007\u0003\u0000\u0000n\u0017\u0001\u0000\u0000\u0000\n\u001b"+
		")-26>@R_f";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}