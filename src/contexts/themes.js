import React, { createContext, useReducer } from 'react';

const themes = {
  dark: {
    backgroundColor: 'white',
    color: 'darkgrey'
  },
  light: {
    backgroundColor: 'darkgrey',
    color: 'white'
  }
};

const ThemesContext = createContext(themes.light);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'setLight':
      return themes.light;
    case 'setDark':
      return themes.dark;
    default:
      return state;
  }
};

const ThemesContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, themes.light);
  const value = { state, dispatch };
  return (
    <ThemesContext.Provider value={value}>
      {props.children}
    </ThemesContext.Provider>
  );
};

const ThemesContextConsumer = ThemesContext.Consumer;

export { ThemesContextProvider, ThemesContextConsumer };
export default ThemesContext;
