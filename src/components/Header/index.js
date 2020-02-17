import React, { useState } from "react";

import { Link } from "react-router-dom";

import Cookies from "js-cookie";

import "./Header.css";
import svgAsset from "../../images/leboncoin-logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = props => {
  const { user, setUser } = props.states;

  return (
    <header>
      <div>
        <Link to="/">
          <img alt="logo le bon coin" src={svgAsset} />
        </Link>
        <Link to="/newoffer">
          <button className="post">
            <i>
              <FontAwesomeIcon icon="plus-square" />
            </i>
            <span> Déposer une annonce</span>
          </button>
        </Link>
        <Link to="/">
          <button className="search">
            <i>
              <FontAwesomeIcon icon="search" />
            </i>
            <span>Rechercher</span>
          </button>
        </Link>
      </div>

      <Link
        to={user === null ? "/signin" : "/"}
        onClick={event => {
          if (user !== null) {
            Cookies.remove("lbc-loged");
            setUser(null);
          }
        }}
      >
        <button className="status">
          <i>
            <FontAwesomeIcon icon="user" />
          </i>
          <span>{user === null ? "Se connecter" : "Se déconnecter"}</span>
        </button>
      </Link>
    </header>
  );
};

export default Header;
