import React, { useState } from "react";
import "./App.css";

import Cookies from "js-cookie";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Connexion from "./containers/Connexion";
import NewUser from "./containers/NewUser";
import NewOffer from "./containers/NewOffer";
import Payment from "./containers/Payment";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faUser,
  faSearch,
  faShoppingCart,
  faClock,
  faBell,
  faEye
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faShoppingCart,
  faPlusSquare,
  faUser,
  faSearch,
  faClock,
  faBell,
  faEye
);

const App = () => {
  const token = Cookies.get("lbc-loged") ? Cookies.get("lbc-loged") : null;

  const [user, setUser] = useState(token);

  return (
    <>
      <Router>
        <Header states={{ user, setUser }}></Header>
        <Switch>
          <Route path="/signup">
            <NewUser></NewUser>
          </Route>
          <Route path="/signin">
            <Connexion states={{ setUser }}></Connexion>
          </Route>
          <Route path="/offer/:id">
            <Offer></Offer>
          </Route>
          <Route path="/newoffer">
            <NewOffer states={{ setUser }}></NewOffer>
          </Route>
          <Route path="/pay">
            <Payment></Payment>
          </Route>
          <Route path="/">
            <Offers></Offers>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
};
export default App;
