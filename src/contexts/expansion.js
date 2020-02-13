import React, { createContext, useReducer } from 'react';

const ExpansionContext = createContext(false);

const reducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return true;
    case 'close':
      return false;
    default:
      return state;
  }
};

const ExpansionContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, false);
  console.log(state);
  const value = { state, dispatch };
  return (
    <ExpansionContext.Provider value={value}>
      {props.children}
    </ExpansionContext.Provider>
  );
};

const ExpansionContextConsumer = ExpansionContext.Consumer;

export { ExpansionContextProvider, ExpansionContextConsumer };
export default ExpansionContext;
