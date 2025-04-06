// Generated from rust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `rustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class rustVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `rustParser.start`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStart?: (ctx: StartContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.statement`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStatement?: (ctx: StatementContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.expression_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression_stmt?: (ctx: Expression_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.return_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn_stmt?: (ctx: Return_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.let_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLet_stmt?: (ctx: Let_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.function_decl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_decl?: (ctx: Function_declContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.parameter_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter_list?: (ctx: Parameter_listContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by the `add`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd?: (ctx: AddContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `subtract`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtract?: (ctx: SubtractContext) => Result;
    /**
     * Visit a parse tree produced by the `variableReference`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableReference?: (ctx: VariableReferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `simple`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple?: (ctx: SimpleContext) => Result;
    /**
     * Visit a parse tree produced by the `divide`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDivide?: (ctx: DivideContext) => Result;
    /**
     * Visit a parse tree produced by the `blockExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlockExpr?: (ctx: BlockExprContext) => Result;
    /**
     * Visit a parse tree produced by the `multiply`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiply?: (ctx: MultiplyContext) => Result;
    /**
     * Visit a parse tree produced by the `parenExpr`
     * labeled alternative in `rustParser.expression`.
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
     * Visit a parse tree produced by `rustParser.identifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.argument_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArgument_list?: (ctx: Argument_listContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
}

