import React, { useState } from "react";
import "./Login.css";

import axios from "axios";

import Cookies from "js-cookie";

import { useHistory, Link } from "react-router-dom";

import "./Login.css";
const Login = props => {
  const { setUser } = props.states;
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <form
        onSubmit={async event => {
          event.preventDefault();
          const response = await axios.post(
            "https://leboncoin-api.herokuapp.com/api/user/log_in",
            {
              email,
              password
            }
          );
          const token = response.data.token ? response.data.token : null;

          if (token !== null) {
            Cookies.set("lbc-loged", token);
            setUser(token);
            history.push("/");
          }

          setEmail("");
          setPassword("");
        }}
      >
        <h2>Connexion</h2>
        <label htmlFor="email">Adress email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={event => {
            event.preventDefault();
            setEmail(event.target.value);
          }}
        ></input>
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={event => {
            event.preventDefault();
            setPassword(event.target.value);
          }}
        ></input>
        <button type="submit">Se connecter</button>
      </form>
      <div className="signupRedirect">
        <label htmlFor="signup">Vous n'avez pas de compte ?</label>

        <button id="signup">
          <Link to="/signup">Créer un compte</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
