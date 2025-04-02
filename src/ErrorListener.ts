import {
    ANTLRErrorListener,
    Recognizer,
    RecognitionException
} from "antlr4ng";

export class ThrowingErrorListener implements ANTLRErrorListener<any> {
    syntaxError(
        recognizer: Recognizer<Token, ATNInterpreter>,
        offendingSymbol: any,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        throw new Error(`Syntax error at line ${line}:${charPositionInLine} - ${msg}`);
    }
}
