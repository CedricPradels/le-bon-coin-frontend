import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Offers";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faUser,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
library.add(faPlusSquare, faUser, faSearch);

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
