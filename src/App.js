import React from "react";

import "./App.css";
import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Form></Form>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      ></a>
    </div>
  );
}

export default App;
