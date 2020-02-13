import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ExpansionContextProvider } from './contexts/expansion';
import { ThemesContextProvider } from './contexts/themes';
import Home from './components/Home';
import Post from './components/Post';
import Comment from './components/Comment';

import './App.css';

function App() {
  return (
    <ExpansionContextProvider>
      <ThemesContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/post" component={Post} />
            <Route path="/comment" component={Comment} />
          </Switch>
        </Router>
      </ThemesContextProvider>
    </ExpansionContextProvider>
  );
}

export default App;
