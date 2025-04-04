// Generated from rust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { StartContext } from "./rustParser.js";
import { Let_stmtContext } from "./rustParser.js";
import { AddContext } from "./rustParser.js";
import { SubtractContext } from "./rustParser.js";
import { SimpleContext } from "./rustParser.js";
import { DivideContext } from "./rustParser.js";
import { MultiplyContext } from "./rustParser.js";
import { ParenExprContext } from "./rustParser.js";
import { TyContext } from "./rustParser.js";
import { IdentifierContext } from "./rustParser.js";
import { NumberContext } from "./rustParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `rustParser`.
 */
export class rustListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `rustParser.start`.
     * @param ctx the parse tree
     */
    enterStart?: (ctx: StartContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.start`.
     * @param ctx the parse tree
     */
    exitStart?: (ctx: StartContext) => void;
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
     * Enter a parse tree produced by the `add`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterAdd?: (ctx: AddContext) => void;
    /**
     * Exit a parse tree produced by the `add`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitAdd?: (ctx: AddContext) => void;
    /**
     * Enter a parse tree produced by the `subtract`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterSubtract?: (ctx: SubtractContext) => void;
    /**
     * Exit a parse tree produced by the `subtract`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitSubtract?: (ctx: SubtractContext) => void;
    /**
     * Enter a parse tree produced by the `simple`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterSimple?: (ctx: SimpleContext) => void;
    /**
     * Exit a parse tree produced by the `simple`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitSimple?: (ctx: SimpleContext) => void;
    /**
     * Enter a parse tree produced by the `divide`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterDivide?: (ctx: DivideContext) => void;
    /**
     * Exit a parse tree produced by the `divide`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitDivide?: (ctx: DivideContext) => void;
    /**
     * Enter a parse tree produced by the `multiply`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterMultiply?: (ctx: MultiplyContext) => void;
    /**
     * Exit a parse tree produced by the `multiply`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitMultiply?: (ctx: MultiplyContext) => void;
    /**
     * Enter a parse tree produced by the `parenExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterParenExpr?: (ctx: ParenExprContext) => void;
    /**
     * Exit a parse tree produced by the `parenExpr`
     * labeled alternative in `rustParser.expression`.
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
     * Enter a parse tree produced by `rustParser.identifier`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.identifier`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.number`.
     * @param ctx the parse tree
     */
    enterNumber?: (ctx: NumberContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.number`.
     * @param ctx the parse tree
     */
    exitNumber?: (ctx: NumberContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

