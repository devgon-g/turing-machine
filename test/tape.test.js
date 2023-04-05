import Tape from '../src/tape.js';

var test_data = [ '$', '*', '*', '*', '*', '*' ];

describe('initialize tape', () =>{

    test('new tape with blank', () => {
        let head = Tape.new();
        expect(head.get()).toEqual(' ');
    });

    test('from file start with $', () => {
        let head = Tape.fromFile('resource/src.tp');
        expect(head.get()).toEqual('$');
    });

    test('from sting start with $', () => {
        let head = Tape.fromString('$*****');
        expect(head.get()).toEqual('$');
    });
});

  
describe('traverse tape', () =>{

    test('all data', () => {
        let all_head = Tape.fromString('$*****');
        expect(all_head.all()).toEqual(test_data);
    });
    
    let head = Tape.fromString('$*****%');
    test('traverse right', () => {

        expect(head.get()).toEqual('$');
        head.right();
        expect(head.get()).toEqual('*');
        head.right();
        expect(head.get()).toEqual('*');
        head.right();
        expect(head.get()).toEqual('*');
        head.right();
        expect(head.get()).toEqual('*');
        head.right();
        expect(head.get()).toEqual('*');
        head.right();
        expect(head.get()).toEqual('%');
    });

    test('traverse left', () => {

        expect(head.get()).toEqual('%');
        head.left();
        expect(head.get()).toEqual('*');
        head.left();
        expect(head.get()).toEqual('*');
        head.left();
        expect(head.get()).toEqual('*');
        head.left();
        expect(head.get()).toEqual('*');
        head.left();
        expect(head.get()).toEqual('*');
        head.left();
        expect(head.get()).toEqual('$');
    });
    

    test('new cell at right end', () => {
        let head = Tape.new();
        head.put('*');
        head.right();
        expect(head.get()).toEqual(' ');
        head.right();
        expect(head.get()).toEqual(' ');
        expect(head.all()).toEqual(['*', ' ', ' ']);
    });
    

    test('new cell at left end', () => {
        let head = Tape.new();
        head.put('*');
        head.left();
        expect(head.get()).toEqual(' ');
        head.left();
        expect(head.get()).toEqual(' ');
        expect(head.all()).toEqual([' ', ' ', '*']);
    });
});