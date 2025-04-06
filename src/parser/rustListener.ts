// Generated from rust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { StartContext } from "./rustParser.js";
import { StatementContext } from "./rustParser.js";
import { Expression_stmtContext } from "./rustParser.js";
import { Return_stmtContext } from "./rustParser.js";
import { Let_stmtContext } from "./rustParser.js";
import { Function_declContext } from "./rustParser.js";
import { Parameter_listContext } from "./rustParser.js";
import { BlockContext } from "./rustParser.js";
import { AddContext } from "./rustParser.js";
import { FunctionCallContext } from "./rustParser.js";
import { SubtractContext } from "./rustParser.js";
import { VariableReferenceContext } from "./rustParser.js";
import { SimpleContext } from "./rustParser.js";
import { DivideContext } from "./rustParser.js";
import { BlockExprContext } from "./rustParser.js";
import { MultiplyContext } from "./rustParser.js";
import { ParenExprContext } from "./rustParser.js";
import { TyContext } from "./rustParser.js";
import { IdentifierContext } from "./rustParser.js";
import { Argument_listContext } from "./rustParser.js";
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
     * Enter a parse tree produced by `rustParser.statement`.
     * @param ctx the parse tree
     */
    enterStatement?: (ctx: StatementContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.statement`.
     * @param ctx the parse tree
     */
    exitStatement?: (ctx: StatementContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.expression_stmt`.
     * @param ctx the parse tree
     */
    enterExpression_stmt?: (ctx: Expression_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.expression_stmt`.
     * @param ctx the parse tree
     */
    exitExpression_stmt?: (ctx: Expression_stmtContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.return_stmt`.
     * @param ctx the parse tree
     */
    enterReturn_stmt?: (ctx: Return_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.return_stmt`.
     * @param ctx the parse tree
     */
    exitReturn_stmt?: (ctx: Return_stmtContext) => void;
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
     * Enter a parse tree produced by `rustParser.function_decl`.
     * @param ctx the parse tree
     */
    enterFunction_decl?: (ctx: Function_declContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.function_decl`.
     * @param ctx the parse tree
     */
    exitFunction_decl?: (ctx: Function_declContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.parameter_list`.
     * @param ctx the parse tree
     */
    enterParameter_list?: (ctx: Parameter_listContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.parameter_list`.
     * @param ctx the parse tree
     */
    exitParameter_list?: (ctx: Parameter_listContext) => void;
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
     * Enter a parse tree produced by the `functionCall`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterFunctionCall?: (ctx: FunctionCallContext) => void;
    /**
     * Exit a parse tree produced by the `functionCall`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitFunctionCall?: (ctx: FunctionCallContext) => void;
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
     * Enter a parse tree produced by the `variableReference`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterVariableReference?: (ctx: VariableReferenceContext) => void;
    /**
     * Exit a parse tree produced by the `variableReference`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitVariableReference?: (ctx: VariableReferenceContext) => void;
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
     * Enter a parse tree produced by the `blockExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterBlockExpr?: (ctx: BlockExprContext) => void;
    /**
     * Exit a parse tree produced by the `blockExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitBlockExpr?: (ctx: BlockExprContext) => void;
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
     * Enter a parse tree produced by `rustParser.argument_list`.
     * @param ctx the parse tree
     */
    enterArgument_list?: (ctx: Argument_listContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.argument_list`.
     * @param ctx the parse tree
     */
    exitArgument_list?: (ctx: Argument_listContext) => void;
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

