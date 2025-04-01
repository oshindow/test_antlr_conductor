import { SimpleLangEvaluator } from './SimpleLangEvaluator';

// Minimal stub for IRunnerPlugin
const conductor = {
    sendOutput: (msg: string) => {
        console.log(msg);
    }
} as any;

const evaluator = new SimpleLangEvaluator(conductor);

(async () => {
    await evaluator.evaluateChunk('5 - 2;');
})();
