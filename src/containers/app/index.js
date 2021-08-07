import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BottleGame from '../bottle-game';
import PabbleChessboard from '../pebble-chessboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/bottle-game" component={BottleGame} />
        <Route path="/pebble-chessboard" component={PabbleChessboard} />
      </Switch>
    </Router>
  );
};

export default App;
