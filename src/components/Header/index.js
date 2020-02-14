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
        <button className="post">
          <FontAwesomeIcon icon="plus-square" />
          <span> Déposer une annonce</span>
        </button>
        <button className="search">
          <FontAwesomeIcon icon="search" />
          <span>Rechercher</span>
        </button>
      </div>

      <Link
        to={user === null ? "/" : "/"}
        onClick={event => {
          if (user !== null) {
            Cookies.remove("lbc-loged");
            setUser(null);
          }
        }}
      >
        <button className="status">
          <FontAwesomeIcon icon="user" />
          <span>{user === null ? "Se connecter" : "Se déconnecter"}</span>
        </button>
      </Link>
    </header>
  );
};

export default Header;
