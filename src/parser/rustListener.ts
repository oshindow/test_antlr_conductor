// Generated from rust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


import { StartContext } from "./rustParser.js";
import { StatementContext } from "./rustParser.js";
import { Let_stmtContext } from "./rustParser.js";
import { Assign_stmtContext } from "./rustParser.js";
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
import { EnumStructInitContext } from "./rustParser.js";
import { ModContext } from "./rustParser.js";
import { FieldAccessContext } from "./rustParser.js";
import { VariableReferenceContext } from "./rustParser.js";
import { MatchExprContext } from "./rustParser.js";
import { SimpleContext } from "./rustParser.js";
import { BoolLiteralContext } from "./rustParser.js";
import { ParenExprContext } from "./rustParser.js";
import { LessThanContext } from "./rustParser.js";
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
     * Enter a parse tree produced by `rustParser.assign_stmt`.
     * @param ctx the parse tree
     */
    enterAssign_stmt?: (ctx: Assign_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.assign_stmt`.
     * @param ctx the parse tree
     */
    exitAssign_stmt?: (ctx: Assign_stmtContext) => void;
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
     * Enter a parse tree produced by `rustParser.parameter`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.parameter`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
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
     * Enter a parse tree produced by `rustParser.loop_stmt`.
     * @param ctx the parse tree
     */
    enterLoop_stmt?: (ctx: Loop_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.loop_stmt`.
     * @param ctx the parse tree
     */
    exitLoop_stmt?: (ctx: Loop_stmtContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.break_stmt`.
     * @param ctx the parse tree
     */
    enterBreak_stmt?: (ctx: Break_stmtContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.break_stmt`.
     * @param ctx the parse tree
     */
    exitBreak_stmt?: (ctx: Break_stmtContext) => void;
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
     * Enter a parse tree produced by `rustParser.struct_decl`.
     * @param ctx the parse tree
     */
    enterStruct_decl?: (ctx: Struct_declContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.struct_decl`.
     * @param ctx the parse tree
     */
    exitStruct_decl?: (ctx: Struct_declContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.field_list`.
     * @param ctx the parse tree
     */
    enterField_list?: (ctx: Field_listContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.field_list`.
     * @param ctx the parse tree
     */
    exitField_list?: (ctx: Field_listContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.field_decl`.
     * @param ctx the parse tree
     */
    enterField_decl?: (ctx: Field_declContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.field_decl`.
     * @param ctx the parse tree
     */
    exitField_decl?: (ctx: Field_declContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.field_init_list`.
     * @param ctx the parse tree
     */
    enterField_init_list?: (ctx: Field_init_listContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.field_init_list`.
     * @param ctx the parse tree
     */
    exitField_init_list?: (ctx: Field_init_listContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.field_init`.
     * @param ctx the parse tree
     */
    enterField_init?: (ctx: Field_initContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.field_init`.
     * @param ctx the parse tree
     */
    exitField_init?: (ctx: Field_initContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.enum_decl`.
     * @param ctx the parse tree
     */
    enterEnum_decl?: (ctx: Enum_declContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.enum_decl`.
     * @param ctx the parse tree
     */
    exitEnum_decl?: (ctx: Enum_declContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.variant_list`.
     * @param ctx the parse tree
     */
    enterVariant_list?: (ctx: Variant_listContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.variant_list`.
     * @param ctx the parse tree
     */
    exitVariant_list?: (ctx: Variant_listContext) => void;
    /**
     * Enter a parse tree produced by the `simpleVariant`
     * labeled alternative in `rustParser.variant`.
     * @param ctx the parse tree
     */
    enterSimpleVariant?: (ctx: SimpleVariantContext) => void;
    /**
     * Exit a parse tree produced by the `simpleVariant`
     * labeled alternative in `rustParser.variant`.
     * @param ctx the parse tree
     */
    exitSimpleVariant?: (ctx: SimpleVariantContext) => void;
    /**
     * Enter a parse tree produced by the `structVariant`
     * labeled alternative in `rustParser.variant`.
     * @param ctx the parse tree
     */
    enterStructVariant?: (ctx: StructVariantContext) => void;
    /**
     * Exit a parse tree produced by the `structVariant`
     * labeled alternative in `rustParser.variant`.
     * @param ctx the parse tree
     */
    exitStructVariant?: (ctx: StructVariantContext) => void;
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
     * Enter a parse tree produced by the `enumStructInit`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterEnumStructInit?: (ctx: EnumStructInitContext) => void;
    /**
     * Exit a parse tree produced by the `enumStructInit`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitEnumStructInit?: (ctx: EnumStructInitContext) => void;
    /**
     * Enter a parse tree produced by the `mod`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterMod?: (ctx: ModContext) => void;
    /**
     * Exit a parse tree produced by the `mod`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitMod?: (ctx: ModContext) => void;
    /**
     * Enter a parse tree produced by the `fieldAccess`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterFieldAccess?: (ctx: FieldAccessContext) => void;
    /**
     * Exit a parse tree produced by the `fieldAccess`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitFieldAccess?: (ctx: FieldAccessContext) => void;
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
     * Enter a parse tree produced by the `matchExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterMatchExpr?: (ctx: MatchExprContext) => void;
    /**
     * Exit a parse tree produced by the `matchExpr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitMatchExpr?: (ctx: MatchExprContext) => void;
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
     * Enter a parse tree produced by the `boolLiteral`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterBoolLiteral?: (ctx: BoolLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `boolLiteral`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitBoolLiteral?: (ctx: BoolLiteralContext) => void;
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
     * Enter a parse tree produced by the `lessThan`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterLessThan?: (ctx: LessThanContext) => void;
    /**
     * Exit a parse tree produced by the `lessThan`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitLessThan?: (ctx: LessThanContext) => void;
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
     * Enter a parse tree produced by the `enumAccess`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterEnumAccess?: (ctx: EnumAccessContext) => void;
    /**
     * Exit a parse tree produced by the `enumAccess`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitEnumAccess?: (ctx: EnumAccessContext) => void;
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
     * Enter a parse tree produced by the `greaterThan`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterGreaterThan?: (ctx: GreaterThanContext) => void;
    /**
     * Exit a parse tree produced by the `greaterThan`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitGreaterThan?: (ctx: GreaterThanContext) => void;
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
     * Enter a parse tree produced by the `logicalNot`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalNot?: (ctx: LogicalNotContext) => void;
    /**
     * Exit a parse tree produced by the `logicalNot`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalNot?: (ctx: LogicalNotContext) => void;
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
     * Enter a parse tree produced by the `logicalAnd`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Exit a parse tree produced by the `logicalAnd`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalAnd?: (ctx: LogicalAndContext) => void;
    /**
     * Enter a parse tree produced by the `notEqual`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterNotEqual?: (ctx: NotEqualContext) => void;
    /**
     * Exit a parse tree produced by the `notEqual`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitNotEqual?: (ctx: NotEqualContext) => void;
    /**
     * Enter a parse tree produced by the `equal`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterEqual?: (ctx: EqualContext) => void;
    /**
     * Exit a parse tree produced by the `equal`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitEqual?: (ctx: EqualContext) => void;
    /**
     * Enter a parse tree produced by the `structInit`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterStructInit?: (ctx: StructInitContext) => void;
    /**
     * Exit a parse tree produced by the `structInit`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitStructInit?: (ctx: StructInitContext) => void;
    /**
     * Enter a parse tree produced by the `stringLiteral`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `stringLiteral`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
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
     * Enter a parse tree produced by the `unaryMinus`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterUnaryMinus?: (ctx: UnaryMinusContext) => void;
    /**
     * Exit a parse tree produced by the `unaryMinus`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitUnaryMinus?: (ctx: UnaryMinusContext) => void;
    /**
     * Enter a parse tree produced by the `greaterEqual`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterGreaterEqual?: (ctx: GreaterEqualContext) => void;
    /**
     * Exit a parse tree produced by the `greaterEqual`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitGreaterEqual?: (ctx: GreaterEqualContext) => void;
    /**
     * Enter a parse tree produced by the `lessEqual`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterLessEqual?: (ctx: LessEqualContext) => void;
    /**
     * Exit a parse tree produced by the `lessEqual`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitLessEqual?: (ctx: LessEqualContext) => void;
    /**
     * Enter a parse tree produced by the `logicalOr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Exit a parse tree produced by the `logicalOr`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitLogicalOr?: (ctx: LogicalOrContext) => void;
    /**
     * Enter a parse tree produced by the `printlnMacro`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    enterPrintlnMacro?: (ctx: PrintlnMacroContext) => void;
    /**
     * Exit a parse tree produced by the `printlnMacro`
     * labeled alternative in `rustParser.expression`.
     * @param ctx the parse tree
     */
    exitPrintlnMacro?: (ctx: PrintlnMacroContext) => void;
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
    /**
     * Enter a parse tree produced by `rustParser.match_arm_list`.
     * @param ctx the parse tree
     */
    enterMatch_arm_list?: (ctx: Match_arm_listContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.match_arm_list`.
     * @param ctx the parse tree
     */
    exitMatch_arm_list?: (ctx: Match_arm_listContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.match_arm`.
     * @param ctx the parse tree
     */
    enterMatch_arm?: (ctx: Match_armContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.match_arm`.
     * @param ctx the parse tree
     */
    exitMatch_arm?: (ctx: Match_armContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.match_pattern`.
     * @param ctx the parse tree
     */
    enterMatch_pattern?: (ctx: Match_patternContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.match_pattern`.
     * @param ctx the parse tree
     */
    exitMatch_pattern?: (ctx: Match_patternContext) => void;
    /**
     * Enter a parse tree produced by `rustParser.pattern_list`.
     * @param ctx the parse tree
     */
    enterPattern_list?: (ctx: Pattern_listContext) => void;
    /**
     * Exit a parse tree produced by `rustParser.pattern_list`.
     * @param ctx the parse tree
     */
    exitPattern_list?: (ctx: Pattern_listContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

