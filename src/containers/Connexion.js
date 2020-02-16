import React, { useState } from "react";

import Login from "../components/Login";

const Connexion = props => {
  const { setUser } = props.states;
  return <Login states={{ setUser }}></Login>;
};

export default Connexion;
