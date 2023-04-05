import { readFileSync } from 'fs';

const Tape = {
    new: function () {
        return head([' ']);
    },
    fromFile: function (filePath) {
        return head(loadTapeFromFile(filePath));
    },
    fromString: function (str) {
        return head(loadTapeFromString(str));
    }

};

function head(tape) {
    return {
        tape: tape,
        cursor: 0,
        all: function () { return this.tape },
        get: function () { return this.tape[this.cursor] },
        put: function (value) { this.tape[this.cursor] = value },
        right: function () {
            this.cursor++;
            if (this.cursor >= this.tape.length) this.tape.push(' ');
        },
        left: function () {
            if(this.cursor != 0)
                this.cursor--;
            else
                this.tape.splice(0, 0, ' ');
        }
    };
}

function loadTapeFromFile(filePath) {
    return readFileSync(filePath, 'utf-8').split('');
}

function loadTapeFromString(data) {
    return data.split('');
}

export default Tape;
