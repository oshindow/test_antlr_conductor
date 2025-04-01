// Generated from rustParser.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { ProgramContext } from "./rustParser.js";
import { StmtContext } from "./rustParser.js";
import { Let_stmtContext } from "./rustParser.js";
import { If_stmtContext } from "./rustParser.js";
import { While_stmtContext } from "./rustParser.js";
import { For_stmtContext } from "./rustParser.js";
import { Expr_stmtContext } from "./rustParser.js";
import { BlockContext } from "./rustParser.js";
import { IdentExprContext } from "./rustParser.js";
import { IntExprContext } from "./rustParser.js";
import { LiteralExprContext } from "./rustParser.js";
import { BinaryExprContext } from "./rustParser.js";
import { ParenExprContext } from "./rustParser.js";
import { TyContext } from "./rustParser.js";
import { LiteralContext } from "./rustParser.js";
import { IdentifierContext } from "./rustParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `rustParser`.
 */
export class rustParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `rustParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.let_stmt`.
     * @param ctx the parse tree
     */
    enterLet_stmt?: (ctx: Let_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.let_stmt`.
     * @param ctx the parse tree
     */
    exitLet_stmt?: (ctx: Let_stmtContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.if_stmt`.
     * @param ctx the parse tree
     */
    enterIf_stmt?: (ctx: If_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.if_stmt`.
     * @param ctx the parse tree
     */
    exitIf_stmt?: (ctx: If_stmtContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.while_stmt`.
     * @param ctx the parse tree
     */
    enterWhile_stmt?: (ctx: While_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.while_stmt`.
     * @param ctx the parse tree
     */
    exitWhile_stmt?: (ctx: While_stmtContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.for_stmt`.
     * @param ctx the parse tree
     */
    enterFor_stmt?: (ctx: For_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.for_stmt`.
     * @param ctx the parse tree
     */
    exitFor_stmt?: (ctx: For_stmtContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.expr_stmt`.
     * @param ctx the parse tree
     */
    enterExpr_stmt?: (ctx: Expr_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.expr_stmt`.
     * @param ctx the parse tree
     */
    exitExpr_stmt?: (ctx: Expr_stmtContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by the `identExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    enterIdentExpr?: (ctx: IdentExprContext) => void;
    /**
     * Exit a parse tree produced by the `identExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    exitIdentExpr?: (ctx: IdentExprContext) => void;
    /**
     * Enter a parse tree produced by the `intExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    enterIntExpr?: (ctx: IntExprContext) => void;
    /**
     * Exit a parse tree produced by the `intExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    exitIntExpr?: (ctx: IntExprContext) => void;
    /**
     * Enter a parse tree produced by the `literalExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    enterLiteralExpr?: (ctx: LiteralExprContext) => void;
    /**
     * Exit a parse tree produced by the `literalExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    exitLiteralExpr?: (ctx: LiteralExprContext) => void;
    /**
     * Enter a parse tree produced by the `binaryExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    enterBinaryExpr?: (ctx: BinaryExprContext) => void;
    /**
     * Exit a parse tree produced by the `binaryExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    exitBinaryExpr?: (ctx: BinaryExprContext) => void;
    /**
     * Enter a parse tree produced by the `parenExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    enterParenExpr?: (ctx: ParenExprContext) => void;
    /**
     * Exit a parse tree produced by the `parenExpr`
     * labeled alternative in `rustParser.expr`.
     * @param ctx the parse tree
     */
    exitParenExpr?: (ctx: ParenExprContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.ty`.
     * @param ctx the parse tree
     */
    enterTy?: (ctx: TyContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.ty`.
     * @param ctx the parse tree
     */
    exitTy?: (ctx: TyContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

