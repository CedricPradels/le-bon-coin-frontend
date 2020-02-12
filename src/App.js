import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Offers";

const App = () => {
  return (
    <>
      <Router path="/">
        <Switch>
          <Home></Home>
        </Switch>
      </Router>
    </>
  );
};
export default App;
