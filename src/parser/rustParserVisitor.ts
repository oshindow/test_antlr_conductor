// Generated from rustParser.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgramContext } from "./rustParser.js";
import { StmtContext } from "./rustParser.js";
import { Let_stmtContext } from "./rustParser.js";
import { If_stmtContext } from "./rustParser.js";
import { While_stmtContext } from "./rustParser.js";
import { For_stmtContext } from "./rustParser.js";
import { Expr_stmtContext } from "./rustParser.js";
import { BlockContext } from "./rustParser.js";
import { IdentExprContext } from "./rustParser.js";
import { LiteralExprContext } from "./rustParser.js";
import { BinaryExprContext } from "./rustParser.js";
import { ParenExprContext } from "./rustParser.js";
import { TyContext } from "./rustParser.js";
import { LiteralContext } from "./rustParser.js";
import { IdentifierContext } from "./rustParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `rustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class rustParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `rustParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.let_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLet_stmt?: (ctx: Let_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.if_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf_stmt?: (ctx: If_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.while_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhile_stmt?: (ctx: While_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.for_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_stmt?: (ctx: For_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.expr_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpr_stmt?: (ctx: Expr_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by the `identExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentExpr?: (ctx: IdentExprContext) => Result;
    /**
     * Visit a parse tree produced by the `literalExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteralExpr?: (ctx: LiteralExprContext) => Result;
    /**
     * Visit a parse tree produced by the `binaryExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBinaryExpr?: (ctx: BinaryExprContext) => Result;
    /**
     * Visit a parse tree produced by the `parenExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenExpr?: (ctx: ParenExprContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.ty`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTy?: (ctx: TyContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
}

