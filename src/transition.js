
export function newTransitions(){
  return {
    map: new Map(),
    add: function (conf) {
      let tokens = conf.split("");
      this.map.set(tokens.slice(0, 2).toString(), newTransition(tokens.slice(2)));
    },
    of: function (state) {
      return this.map.get(state.toString());
    },
  };
}

export function newTransition(conf) {
  return (tape) => {
    tape.put(conf[1]);
    if (conf[2] == "L") tape.left();
    else if (conf[2] == "R") tape.right();
    else throw new Error("Unknown direction - " + conf[2]);

    return conf[0];
  };
}

export default newTransitions;
