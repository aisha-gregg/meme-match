import React from "react";

import { Game } from "../src/pages/Game";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/game">
            <Game></Game>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
