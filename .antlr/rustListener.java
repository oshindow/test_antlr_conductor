// Generated from /home/xintong/test_antlr_conductor/rust.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link rustParser}.
 */
public interface rustListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link rustParser#start}.
	 * @param ctx the parse tree
	 */
	void enterStart(rustParser.StartContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#start}.
	 * @param ctx the parse tree
	 */
	void exitStart(rustParser.StartContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#statement}.
	 * @param ctx the parse tree
	 */
	void enterStatement(rustParser.StatementContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#statement}.
	 * @param ctx the parse tree
	 */
	void exitStatement(rustParser.StatementContext ctx);
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
	 * Enter a parse tree produced by {@link rustParser#assign_stmt}.
	 * @param ctx the parse tree
	 */
	void enterAssign_stmt(rustParser.Assign_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#assign_stmt}.
	 * @param ctx the parse tree
	 */
	void exitAssign_stmt(rustParser.Assign_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#return_stmt}.
	 * @param ctx the parse tree
	 */
	void enterReturn_stmt(rustParser.Return_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#return_stmt}.
	 * @param ctx the parse tree
	 */
	void exitReturn_stmt(rustParser.Return_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#expression_stmt}.
	 * @param ctx the parse tree
	 */
	void enterExpression_stmt(rustParser.Expression_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#expression_stmt}.
	 * @param ctx the parse tree
	 */
	void exitExpression_stmt(rustParser.Expression_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#function_decl}.
	 * @param ctx the parse tree
	 */
	void enterFunction_decl(rustParser.Function_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#function_decl}.
	 * @param ctx the parse tree
	 */
	void exitFunction_decl(rustParser.Function_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#parameter_list}.
	 * @param ctx the parse tree
	 */
	void enterParameter_list(rustParser.Parameter_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#parameter_list}.
	 * @param ctx the parse tree
	 */
	void exitParameter_list(rustParser.Parameter_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(rustParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(rustParser.ParameterContext ctx);
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
	 * Enter a parse tree produced by {@link rustParser#loop_stmt}.
	 * @param ctx the parse tree
	 */
	void enterLoop_stmt(rustParser.Loop_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#loop_stmt}.
	 * @param ctx the parse tree
	 */
	void exitLoop_stmt(rustParser.Loop_stmtContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#break_stmt}.
	 * @param ctx the parse tree
	 */
	void enterBreak_stmt(rustParser.Break_stmtContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#break_stmt}.
	 * @param ctx the parse tree
	 */
	void exitBreak_stmt(rustParser.Break_stmtContext ctx);
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
	 * Enter a parse tree produced by {@link rustParser#struct_decl}.
	 * @param ctx the parse tree
	 */
	void enterStruct_decl(rustParser.Struct_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#struct_decl}.
	 * @param ctx the parse tree
	 */
	void exitStruct_decl(rustParser.Struct_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#field_list}.
	 * @param ctx the parse tree
	 */
	void enterField_list(rustParser.Field_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#field_list}.
	 * @param ctx the parse tree
	 */
	void exitField_list(rustParser.Field_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#field_decl}.
	 * @param ctx the parse tree
	 */
	void enterField_decl(rustParser.Field_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#field_decl}.
	 * @param ctx the parse tree
	 */
	void exitField_decl(rustParser.Field_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#field_init_list}.
	 * @param ctx the parse tree
	 */
	void enterField_init_list(rustParser.Field_init_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#field_init_list}.
	 * @param ctx the parse tree
	 */
	void exitField_init_list(rustParser.Field_init_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#field_init}.
	 * @param ctx the parse tree
	 */
	void enterField_init(rustParser.Field_initContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#field_init}.
	 * @param ctx the parse tree
	 */
	void exitField_init(rustParser.Field_initContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#enum_decl}.
	 * @param ctx the parse tree
	 */
	void enterEnum_decl(rustParser.Enum_declContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#enum_decl}.
	 * @param ctx the parse tree
	 */
	void exitEnum_decl(rustParser.Enum_declContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#variant_list}.
	 * @param ctx the parse tree
	 */
	void enterVariant_list(rustParser.Variant_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#variant_list}.
	 * @param ctx the parse tree
	 */
	void exitVariant_list(rustParser.Variant_listContext ctx);
	/**
	 * Enter a parse tree produced by the {@code simpleVariant}
	 * labeled alternative in {@link rustParser#variant}.
	 * @param ctx the parse tree
	 */
	void enterSimpleVariant(rustParser.SimpleVariantContext ctx);
	/**
	 * Exit a parse tree produced by the {@code simpleVariant}
	 * labeled alternative in {@link rustParser#variant}.
	 * @param ctx the parse tree
	 */
	void exitSimpleVariant(rustParser.SimpleVariantContext ctx);
	/**
	 * Enter a parse tree produced by the {@code structVariant}
	 * labeled alternative in {@link rustParser#variant}.
	 * @param ctx the parse tree
	 */
	void enterStructVariant(rustParser.StructVariantContext ctx);
	/**
	 * Exit a parse tree produced by the {@code structVariant}
	 * labeled alternative in {@link rustParser#variant}.
	 * @param ctx the parse tree
	 */
	void exitStructVariant(rustParser.StructVariantContext ctx);
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
	 * Enter a parse tree produced by the {@code enumStructInit}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterEnumStructInit(rustParser.EnumStructInitContext ctx);
	/**
	 * Exit a parse tree produced by the {@code enumStructInit}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitEnumStructInit(rustParser.EnumStructInitContext ctx);
	/**
	 * Enter a parse tree produced by the {@code fieldAccess}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterFieldAccess(rustParser.FieldAccessContext ctx);
	/**
	 * Exit a parse tree produced by the {@code fieldAccess}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitFieldAccess(rustParser.FieldAccessContext ctx);
	/**
	 * Enter a parse tree produced by the {@code variableReference}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterVariableReference(rustParser.VariableReferenceContext ctx);
	/**
	 * Exit a parse tree produced by the {@code variableReference}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitVariableReference(rustParser.VariableReferenceContext ctx);
	/**
	 * Enter a parse tree produced by the {@code matchExpr}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMatchExpr(rustParser.MatchExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code matchExpr}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMatchExpr(rustParser.MatchExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code simple}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterSimple(rustParser.SimpleContext ctx);
	/**
	 * Exit a parse tree produced by the {@code simple}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitSimple(rustParser.SimpleContext ctx);
	/**
	 * Enter a parse tree produced by the {@code boolLiteral}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterBoolLiteral(rustParser.BoolLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code boolLiteral}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitBoolLiteral(rustParser.BoolLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code parenExpr}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterParenExpr(rustParser.ParenExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code parenExpr}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitParenExpr(rustParser.ParenExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lessThan}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLessThan(rustParser.LessThanContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lessThan}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLessThan(rustParser.LessThanContext ctx);
	/**
	 * Enter a parse tree produced by the {@code divide}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterDivide(rustParser.DivideContext ctx);
	/**
	 * Exit a parse tree produced by the {@code divide}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitDivide(rustParser.DivideContext ctx);
	/**
	 * Enter a parse tree produced by the {@code blockExpr}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterBlockExpr(rustParser.BlockExprContext ctx);
	/**
	 * Exit a parse tree produced by the {@code blockExpr}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitBlockExpr(rustParser.BlockExprContext ctx);
	/**
	 * Enter a parse tree produced by the {@code enumAccess}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterEnumAccess(rustParser.EnumAccessContext ctx);
	/**
	 * Exit a parse tree produced by the {@code enumAccess}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitEnumAccess(rustParser.EnumAccessContext ctx);
	/**
	 * Enter a parse tree produced by the {@code multiply}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterMultiply(rustParser.MultiplyContext ctx);
	/**
	 * Exit a parse tree produced by the {@code multiply}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitMultiply(rustParser.MultiplyContext ctx);
	/**
	 * Enter a parse tree produced by the {@code greaterThan}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterGreaterThan(rustParser.GreaterThanContext ctx);
	/**
	 * Exit a parse tree produced by the {@code greaterThan}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitGreaterThan(rustParser.GreaterThanContext ctx);
	/**
	 * Enter a parse tree produced by the {@code add}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterAdd(rustParser.AddContext ctx);
	/**
	 * Exit a parse tree produced by the {@code add}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitAdd(rustParser.AddContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalNot(rustParser.LogicalNotContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalNot}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalNot(rustParser.LogicalNotContext ctx);
	/**
	 * Enter a parse tree produced by the {@code subtract}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterSubtract(rustParser.SubtractContext ctx);
	/**
	 * Exit a parse tree produced by the {@code subtract}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitSubtract(rustParser.SubtractContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalAnd}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalAnd(rustParser.LogicalAndContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalAnd}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalAnd(rustParser.LogicalAndContext ctx);
	/**
	 * Enter a parse tree produced by the {@code notEqual}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterNotEqual(rustParser.NotEqualContext ctx);
	/**
	 * Exit a parse tree produced by the {@code notEqual}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitNotEqual(rustParser.NotEqualContext ctx);
	/**
	 * Enter a parse tree produced by the {@code equal}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterEqual(rustParser.EqualContext ctx);
	/**
	 * Exit a parse tree produced by the {@code equal}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitEqual(rustParser.EqualContext ctx);
	/**
	 * Enter a parse tree produced by the {@code structInit}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterStructInit(rustParser.StructInitContext ctx);
	/**
	 * Exit a parse tree produced by the {@code structInit}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitStructInit(rustParser.StructInitContext ctx);
	/**
	 * Enter a parse tree produced by the {@code stringLiteral}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterStringLiteral(rustParser.StringLiteralContext ctx);
	/**
	 * Exit a parse tree produced by the {@code stringLiteral}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitStringLiteral(rustParser.StringLiteralContext ctx);
	/**
	 * Enter a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterFunctionCall(rustParser.FunctionCallContext ctx);
	/**
	 * Exit a parse tree produced by the {@code functionCall}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitFunctionCall(rustParser.FunctionCallContext ctx);
	/**
	 * Enter a parse tree produced by the {@code unaryMinus}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterUnaryMinus(rustParser.UnaryMinusContext ctx);
	/**
	 * Exit a parse tree produced by the {@code unaryMinus}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitUnaryMinus(rustParser.UnaryMinusContext ctx);
	/**
	 * Enter a parse tree produced by the {@code greaterEqual}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterGreaterEqual(rustParser.GreaterEqualContext ctx);
	/**
	 * Exit a parse tree produced by the {@code greaterEqual}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitGreaterEqual(rustParser.GreaterEqualContext ctx);
	/**
	 * Enter a parse tree produced by the {@code lessEqual}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLessEqual(rustParser.LessEqualContext ctx);
	/**
	 * Exit a parse tree produced by the {@code lessEqual}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLessEqual(rustParser.LessEqualContext ctx);
	/**
	 * Enter a parse tree produced by the {@code logicalOr}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterLogicalOr(rustParser.LogicalOrContext ctx);
	/**
	 * Exit a parse tree produced by the {@code logicalOr}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitLogicalOr(rustParser.LogicalOrContext ctx);
	/**
	 * Enter a parse tree produced by the {@code printlnMacro}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void enterPrintlnMacro(rustParser.PrintlnMacroContext ctx);
	/**
	 * Exit a parse tree produced by the {@code printlnMacro}
	 * labeled alternative in {@link rustParser#expression}.
	 * @param ctx the parse tree
	 */
	void exitPrintlnMacro(rustParser.PrintlnMacroContext ctx);
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
	 * Enter a parse tree produced by {@link rustParser#identifier}.
	 * @param ctx the parse tree
	 */
	void enterIdentifier(rustParser.IdentifierContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#identifier}.
	 * @param ctx the parse tree
	 */
	void exitIdentifier(rustParser.IdentifierContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#argument_list}.
	 * @param ctx the parse tree
	 */
	void enterArgument_list(rustParser.Argument_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#argument_list}.
	 * @param ctx the parse tree
	 */
	void exitArgument_list(rustParser.Argument_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#number}.
	 * @param ctx the parse tree
	 */
	void enterNumber(rustParser.NumberContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#number}.
	 * @param ctx the parse tree
	 */
	void exitNumber(rustParser.NumberContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#match_arm_list}.
	 * @param ctx the parse tree
	 */
	void enterMatch_arm_list(rustParser.Match_arm_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#match_arm_list}.
	 * @param ctx the parse tree
	 */
	void exitMatch_arm_list(rustParser.Match_arm_listContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#match_arm}.
	 * @param ctx the parse tree
	 */
	void enterMatch_arm(rustParser.Match_armContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#match_arm}.
	 * @param ctx the parse tree
	 */
	void exitMatch_arm(rustParser.Match_armContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#match_pattern}.
	 * @param ctx the parse tree
	 */
	void enterMatch_pattern(rustParser.Match_patternContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#match_pattern}.
	 * @param ctx the parse tree
	 */
	void exitMatch_pattern(rustParser.Match_patternContext ctx);
	/**
	 * Enter a parse tree produced by {@link rustParser#pattern_list}.
	 * @param ctx the parse tree
	 */
	void enterPattern_list(rustParser.Pattern_listContext ctx);
	/**
	 * Exit a parse tree produced by {@link rustParser#pattern_list}.
	 * @param ctx the parse tree
	 */
	void exitPattern_list(rustParser.Pattern_listContext ctx);
}