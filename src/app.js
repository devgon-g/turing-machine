import { argv } from 'node:process';
import Instruction from "./instruction.js";
import Tape from "./tape.js";

console.log(argv);


let tape = Tape.fromString('111');
Instruction.of('gotoEnd').excute(tape);
Instruction.of('accumulate').excute(tape);
Instruction.of('gotoEnd').excute(tape);
Instruction.of('deplete').excute(tape);
