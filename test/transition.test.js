import { Transitions, newTransition } from "../src/transition.js";
import { jest } from "@jest/globals";
import Tape from "../src/tape.js";

describe("how to use transitions", () => {
    test("initialize transitions", () => {
      Transitions.add("1*1*R");
      Transitions.add("1$2*R");
      Transitions.add("2*1$R");
      Transitions.add("2$2$R");

      expect(Transitions.of(['0', '*'])).toBeUndefined();
      expect(Transitions.of(['1', '*'])).toBeDefined();
      
    });

  //   test("resolve transition", () => {
  //     let state = "1";
  //     state = Transition(state).of("*").apply(tape);

  //     State().transition().apply();

  //     expect(2).not.toBe(3);
  //   });

  test("should newTransition(1*R) put * then move right then return state 1", () => {
    let tape = {
      put: jest.fn(),
      left: jest.fn(),
      right: jest.fn(),
    };

    let state = newTransition("1*R")(tape);

    expect(state).toEqual('1');
    expect(tape.put.mock.calls[0][0]).toBe('*');
    expect(tape.put.mock.calls).toHaveLength(1);
    expect(tape.left.mock.calls).toHaveLength(0);
    expect(tape.right.mock.calls).toHaveLength(1);
  });

  test("should newTransition(0$L) put $ then move left then return state 0", () => {
    let tape = {
      put: jest.fn(),
      left: jest.fn(),
      right: jest.fn(),
    };

    let state = newTransition("0$L")(tape);

    expect(state).toEqual('0');
    expect(tape.put.mock.calls[0][0]).toBe('$');
    expect(tape.put.mock.calls).toHaveLength(1);
    expect(tape.left.mock.calls).toHaveLength(1);
    expect(tape.right.mock.calls).toHaveLength(0);
  });
});
