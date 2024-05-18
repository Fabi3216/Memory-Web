  // src/App.js
  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import Home from './components/Home';
  import Game from './components/Game';

  const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game" component={Game} />
        </Switch>
      </Router>
    );
  };

  export default App;
  
