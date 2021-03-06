class DFA {
  constructor(tuple) {
    this.tuple = tuple;
  }
  transition(state,input){
    return this.tuple.delta[state][input];
  }
  doesAccept(language){
    let currentState = this.tuple['start-state'];
    let characters = language.split("");
    currentState = characters.reduce((s,i)=>this.transition(s,i),currentState)
    return this.tuple['final-states'].includes(currentState);
  }
}

module.exports = DFA;
