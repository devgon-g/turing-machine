import { readFileSync } from 'fs';
import newTransitions from "./transition.js";

const Instruction = {
    of: (name) => {
        let codes = readFileSync('resource/inst/'+name, 'utf-8').split(/[\r\n]+/);
        console.log(codes);
        let states = codes[0].split('');
        console.log(states);
        let trns = newTransitions();
        codes.slice(1).forEach(code => trns.add(code));

        return {
            state:states[0],
            endState:states[1],
            transitions: trns,
            excute: function(tape){
                while(this.state != this.endState){
                    this.state = this.transitions.of([this.state, tape.get()])(tape);
                    console.log(tape.all());
                }
            }
        };
    
    }
};

export default Instruction;