// Generated from /home/xintong/test_antlr_conductor/rustParser.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link rustParser}.
 */
public interface rustParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link rustParser#program}.
	 * @param ctx the parse tree
	 */
	void enterProgram(rustParser.ProgramContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#program}.
	 * @param ctx the parse tree
	 */
	void exitProgram(rustParser.ProgramContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#stmt}.
	 * @param ctx the parse tree
	 */
	void enterStmt(rustParser.StmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#stmt}.
	 * @param ctx the parse tree
	 */
	void exitStmt(rustParser.StmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#let_stmt}.
	 * @param ctx the parse tree
	 */
	void enterLet_stmt(rustParser.Let_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#let_stmt}.
	 * @param ctx the parse tree
	 */
	void exitLet_stmt(rustParser.Let_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#if_stmt}.
	 * @param ctx the parse tree
	 */
	void enterIf_stmt(rustParser.If_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#if_stmt}.
	 * @param ctx the parse tree
	 */
	void exitIf_stmt(rustParser.If_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#while_stmt}.
	 * @param ctx the parse tree
	 */
	void enterWhile_stmt(rustParser.While_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#while_stmt}.
	 * @param ctx the parse tree
	 */
	void exitWhile_stmt(rustParser.While_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#for_stmt}.
	 * @param ctx the parse tree
	 */
	void enterFor_stmt(rustParser.For_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#for_stmt}.
	 * @param ctx the parse tree
	 */
	void exitFor_stmt(rustParser.For_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#expr_stmt}.
	 * @param ctx the parse tree
	 */
	void enterExpr_stmt(rustParser.Expr_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#expr_stmt}.
	 * @param ctx the parse tree
	 */
	void exitExpr_stmt(rustParser.Expr_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#block}.
	 * @param ctx the parse tree
	 */
	void enterBlock(rustParser.BlockContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#block}.
	 * @param ctx the parse tree
	 */
	void exitBlock(rustParser.BlockContext ctx);
	/**
	 * Enter a parse tree produced by the {@code identExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIdentExpr(rustParser.IdentExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code identExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIdentExpr(rustParser.IdentExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code intExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterIntExpr(rustParser.IntExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code intExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitIntExpr(rustParser.IntExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code literalExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterLiteralExpr(rustParser.LiteralExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code literalExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitLiteralExpr(rustParser.LiteralExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code binaryExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterBinaryExpr(rustParser.BinaryExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code binaryExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitBinaryExpr(rustParser.BinaryExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parenExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterParenExpr(rustParser.ParenExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parenExpr}
	 * labeled alternative in {@link rustParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitParenExpr(rustParser.ParenExprContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#ty}.
	 * @param ctx the parse tree
	 */
	void enterTy(rustParser.TyContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#ty}.
	 * @param ctx the parse tree
	 */
	void exitTy(rustParser.TyContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#literal}.
	 * @param ctx the parse tree
	 */
	void enterLiteral(rustParser.LiteralContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#literal}.
	 * @param ctx the parse tree
	 */
	void exitLiteral(rustParser.LiteralContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(rustParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(rustParser.IdentifierContext ctx);
}