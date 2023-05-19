import Instruction from "../src/instruction.js";
import Tape from "../src/tape.js";
import { jest } from "@jest/globals";

describe('Instruction test', () => {
    test('should instruction created', () => {
        let tape = Tape.fromString('111');
        Instruction.of('gotoEnd').excute(tape);
        Instruction.of('accumulate').excute(tape);
    });
});