import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faUser,
  faSearch,
  faShoppingCart,
  faClock,
  faBell
} from "@fortawesome/free-solid-svg-icons";
library.add(faShoppingCart, faPlusSquare, faUser, faSearch, faClock, faBell);

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/offer/:id">
            <Offer></Offer>
          </Route>
          <Route path="/">
            <Offers></Offers>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
