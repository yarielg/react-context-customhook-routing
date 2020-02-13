import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ExpansionContext from '../contexts/expansion';
import ThemesContext from '../contexts/themes';
import List from './List';

const Content = ({ data }) => {
  let history = useHistory();
  const path = window.location.pathname;
  const { state: expansion, dispatch: dispatchExpansion } = useContext(
    ExpansionContext
  );
  const { state: theme, dispatch: dispatchTheme } = useContext(ThemesContext);

  const handlePathClick = e => {
    e.preventDefault();
    history.push(path === '/comment' ? '/post' : '/comment');
  };

  const handleExpansionClick = e => {
    e.preventDefault();
    dispatchExpansion({ type: expansion ? 'close' : 'open' });
  };

  const handleThemeClick = e => {
    e.preventDefault();
    console.log(theme);
    dispatchTheme({ type: theme.color === 'white' ? 'setDark' : 'setLight' });
  };

  return (
    <div style={theme}>
      <div>
        <button onClick={handlePathClick}>
          {path === '/comment' ? 'To Post' : 'To Comment'}
        </button>
        <button onClick={handleExpansionClick}>
          {expansion ? 'Close' : 'Open'}
        </button>
        <button onClick={handleThemeClick}>
          {theme.color === 'white' ? 'Light Theme' : 'Dark Theme'}
        </button>
      </div>

      <div>
        {data && data.length
          ? data.map(item => <List key={item.id} data={item} />)
          : null}
      </div>
    </div>
  );
};

export default Content;
