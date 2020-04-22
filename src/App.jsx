import React from "react";

import { Game } from "./pages/Game";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Form } from "./components/Form";
import { useState } from "react";
import { UserContext } from "./userContext";

export function App() {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/form">
              <Form></Form>
            </Route>
            <Route path="/game">
              <Game></Game>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}
