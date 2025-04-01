// Generated from rust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { StartContext } from "./rustParser.js";
import { AddContext } from "./rustParser.js";
import { SubtractContext } from "./rustParser.js";
import { SimpleContext } from "./rustParser.js";
import { DivideContext } from "./rustParser.js";
import { MultiplyContext } from "./rustParser.js";
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
     * Visit a parse tree produced by the `add`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd?: (ctx: AddContext) => Result;
    /**
     * Visit a parse tree produced by the `subtract`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtract?: (ctx: SubtractContext) => Result;
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
     * Visit a parse tree produced by the `multiply`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiply?: (ctx: MultiplyContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.number`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNumber?: (ctx: NumberContext) => Result;
}

