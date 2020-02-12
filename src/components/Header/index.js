import React from "react";

import "./Header.css";
import svgAsset from "../../images/leboncoin-logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div>
        <img alt="logo le bon coin" src={svgAsset} />
        <button className="post">
          <FontAwesomeIcon icon="plus-square" />
          <span> Déposer une annonce</span>
        </button>
        <button className="search">
          <FontAwesomeIcon icon="search" />
          <span>Rechercher</span>
        </button>
      </div>
      <button className="status">
        <FontAwesomeIcon icon="user" />
        <span>Se connecter</span>
      </button>
    </header>
  );
};

export default Header;
