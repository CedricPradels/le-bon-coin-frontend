import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <img alt="logo le bon coin" src="../../images/leboncoin-logo.png" />
      <button>
        <span>+</span> Déposer une annonce
      </button>
      <button>Rechercher</button>
      <button>
        <pan>Bonhomme</pan>
        <span>Se Connecter</span>
      </button>
    </header>
  );
};

export default Header;
