// Generated from rust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { StartContext } from "./rustParser.js";
import { StatementContext } from "./rustParser.js";
import { Let_stmtContext } from "./rustParser.js";
import { Assign_stmtContext } from "./rustParser.js";
import { DerefLhsContext } from "./rustParser.js";
import { IdentLhsContext } from "./rustParser.js";
import { Return_stmtContext } from "./rustParser.js";
import { Expression_stmtContext } from "./rustParser.js";
import { Function_declContext } from "./rustParser.js";
import { Parameter_listContext } from "./rustParser.js";
import { ParameterContext } from "./rustParser.js";
import { For_stmtContext } from "./rustParser.js";
import { Loop_stmtContext } from "./rustParser.js";
import { Break_stmtContext } from "./rustParser.js";
import { BlockContext } from "./rustParser.js";
import { Struct_declContext } from "./rustParser.js";
import { Field_listContext } from "./rustParser.js";
import { Field_declContext } from "./rustParser.js";
import { Field_init_listContext } from "./rustParser.js";
import { Field_initContext } from "./rustParser.js";
import { Enum_declContext } from "./rustParser.js";
import { Variant_listContext } from "./rustParser.js";
import { SimpleVariantContext } from "./rustParser.js";
import { StructVariantContext } from "./rustParser.js";
import { While_stmtContext } from "./rustParser.js";
import { If_stmtContext } from "./rustParser.js";
import { DereferenceContext } from "./rustParser.js";
import { EnumStructInitContext } from "./rustParser.js";
import { ModContext } from "./rustParser.js";
import { FieldAccessContext } from "./rustParser.js";
import { VariableReferenceContext } from "./rustParser.js";
import { MatchExprContext } from "./rustParser.js";
import { SimpleContext } from "./rustParser.js";
import { BoolLiteralContext } from "./rustParser.js";
import { ParenExprContext } from "./rustParser.js";
import { LessThanContext } from "./rustParser.js";
import { RefMutExprContext } from "./rustParser.js";
import { DivideContext } from "./rustParser.js";
import { BlockExprContext } from "./rustParser.js";
import { EnumAccessContext } from "./rustParser.js";
import { MultiplyContext } from "./rustParser.js";
import { GreaterThanContext } from "./rustParser.js";
import { AddContext } from "./rustParser.js";
import { LogicalNotContext } from "./rustParser.js";
import { SubtractContext } from "./rustParser.js";
import { LogicalAndContext } from "./rustParser.js";
import { NotEqualContext } from "./rustParser.js";
import { EqualContext } from "./rustParser.js";
import { StructInitContext } from "./rustParser.js";
import { StringLiteralContext } from "./rustParser.js";
import { RefExprContext } from "./rustParser.js";
import { FunctionCallContext } from "./rustParser.js";
import { UnaryMinusContext } from "./rustParser.js";
import { GreaterEqualContext } from "./rustParser.js";
import { LessEqualContext } from "./rustParser.js";
import { LogicalOrContext } from "./rustParser.js";
import { PrintlnMacroContext } from "./rustParser.js";
import { TyContext } from "./rustParser.js";
import { IdentifierContext } from "./rustParser.js";
import { Argument_listContext } from "./rustParser.js";
import { NumberContext } from "./rustParser.js";
import { Match_arm_listContext } from "./rustParser.js";
import { Match_armContext } from "./rustParser.js";
import { Match_patternContext } from "./rustParser.js";
import { Pattern_listContext } from "./rustParser.js";


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
     * Visit a parse tree produced by `rustParser.let_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLet_stmt?: (ctx: Let_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.assign_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssign_stmt?: (ctx: Assign_stmtContext) => Result;
    /**
     * Visit a parse tree produced by the `derefLhs`
     * labeled alternative in `rustParser.lhs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDerefLhs?: (ctx: DerefLhsContext) => Result;
    /**
     * Visit a parse tree produced by the `identLhs`
     * labeled alternative in `rustParser.lhs`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentLhs?: (ctx: IdentLhsContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.return_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturn_stmt?: (ctx: Return_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.expression_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExpression_stmt?: (ctx: Expression_stmtContext) => Result;
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
     * Visit a parse tree produced by `rustParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.for_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_stmt?: (ctx: For_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.loop_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLoop_stmt?: (ctx: Loop_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.break_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBreak_stmt?: (ctx: Break_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.struct_decl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStruct_decl?: (ctx: Struct_declContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.field_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_list?: (ctx: Field_listContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.field_decl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_decl?: (ctx: Field_declContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.field_init_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_init_list?: (ctx: Field_init_listContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.field_init`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_init?: (ctx: Field_initContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.enum_decl`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnum_decl?: (ctx: Enum_declContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.variant_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariant_list?: (ctx: Variant_listContext) => Result;
    /**
     * Visit a parse tree produced by the `simpleVariant`
     * labeled alternative in `rustParser.variant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimpleVariant?: (ctx: SimpleVariantContext) => Result;
    /**
     * Visit a parse tree produced by the `structVariant`
     * labeled alternative in `rustParser.variant`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructVariant?: (ctx: StructVariantContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.while_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhile_stmt?: (ctx: While_stmtContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.if_stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIf_stmt?: (ctx: If_stmtContext) => Result;
    /**
     * Visit a parse tree produced by the `dereference`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDereference?: (ctx: DereferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `enumStructInit`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumStructInit?: (ctx: EnumStructInitContext) => Result;
    /**
     * Visit a parse tree produced by the `mod`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMod?: (ctx: ModContext) => Result;
    /**
     * Visit a parse tree produced by the `fieldAccess`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFieldAccess?: (ctx: FieldAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `variableReference`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVariableReference?: (ctx: VariableReferenceContext) => Result;
    /**
     * Visit a parse tree produced by the `matchExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatchExpr?: (ctx: MatchExprContext) => Result;
    /**
     * Visit a parse tree produced by the `simple`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple?: (ctx: SimpleContext) => Result;
    /**
     * Visit a parse tree produced by the `boolLiteral`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolLiteral?: (ctx: BoolLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `parenExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenExpr?: (ctx: ParenExprContext) => Result;
    /**
     * Visit a parse tree produced by the `lessThan`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLessThan?: (ctx: LessThanContext) => Result;
    /**
     * Visit a parse tree produced by the `refMutExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefMutExpr?: (ctx: RefMutExprContext) => Result;
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
     * Visit a parse tree produced by the `enumAccess`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEnumAccess?: (ctx: EnumAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `multiply`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultiply?: (ctx: MultiplyContext) => Result;
    /**
     * Visit a parse tree produced by the `greaterThan`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGreaterThan?: (ctx: GreaterThanContext) => Result;
    /**
     * Visit a parse tree produced by the `add`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd?: (ctx: AddContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalNot`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalNot?: (ctx: LogicalNotContext) => Result;
    /**
     * Visit a parse tree produced by the `subtract`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubtract?: (ctx: SubtractContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalAnd`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalAnd?: (ctx: LogicalAndContext) => Result;
    /**
     * Visit a parse tree produced by the `notEqual`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNotEqual?: (ctx: NotEqualContext) => Result;
    /**
     * Visit a parse tree produced by the `equal`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqual?: (ctx: EqualContext) => Result;
    /**
     * Visit a parse tree produced by the `structInit`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStructInit?: (ctx: StructInitContext) => Result;
    /**
     * Visit a parse tree produced by the `stringLiteral`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `refExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefExpr?: (ctx: RefExprContext) => Result;
    /**
     * Visit a parse tree produced by the `functionCall`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunctionCall?: (ctx: FunctionCallContext) => Result;
    /**
     * Visit a parse tree produced by the `unaryMinus`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryMinus?: (ctx: UnaryMinusContext) => Result;
    /**
     * Visit a parse tree produced by the `greaterEqual`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGreaterEqual?: (ctx: GreaterEqualContext) => Result;
    /**
     * Visit a parse tree produced by the `lessEqual`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLessEqual?: (ctx: LessEqualContext) => Result;
    /**
     * Visit a parse tree produced by the `logicalOr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLogicalOr?: (ctx: LogicalOrContext) => Result;
    /**
     * Visit a parse tree produced by the `printlnMacro`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPrintlnMacro?: (ctx: PrintlnMacroContext) => Result;
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
    /**
     * Visit a parse tree produced by `rustParser.match_arm_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatch_arm_list?: (ctx: Match_arm_listContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.match_arm`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatch_arm?: (ctx: Match_armContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.match_pattern`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatch_pattern?: (ctx: Match_patternContext) => Result;
    /**
     * Visit a parse tree produced by `rustParser.pattern_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPattern_list?: (ctx: Pattern_listContext) => Result;
}

