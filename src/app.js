import { argv } from 'node:process';
import { loadTapeFromFile } from './tape.js';

console.log(argv);

const tape = loadTapeFromFile(argv[2]);
console.log(tape);

const head = function (tape) {
    return {
        tape: tape,
        cursor: 0,
        get: function () { return this.tape[this.cursor] },
        put: function (value) { this.tape[this.cursor] = value }
    };
}(tape);

head.put('*');
console.log(head.get());