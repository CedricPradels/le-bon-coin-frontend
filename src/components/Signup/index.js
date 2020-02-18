import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import Cookies from "js-cookie";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

require("dotenv").config();

const Signup = () => {
  let history = useHistory();

  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isAccepted, setIsAccepted] = useState(false);

  const sendNewUser = async () => {
    const response = await axios.post("http://localhost:4000/user/sign_up", {});
  };

  return (
    <main className="signup">
      <aside className="explains">
        <h2>Pourquoi créer un compte ?</h2>
        <div className="reason">
          <i>
            <FontAwesomeIcon icon="clock" />
          </i>
          <div>
            <h3>Gagner du temps</h3>
            <p>
              Publiez vos annonces rapidement, avec vos informations ré-remplies
              chaque fois que vous souter déposer une nouvelle annonce.
            </p>
          </div>
        </div>
        <div className="reason">
          <i>
            <FontAwesomeIcon icon="bell" />
          </i>
          <div>
            <h3>Soyez les premiers informés</h3>
            <p>
              Créer des aleretes Immo ou Emploi et ne manquez jamais les
              annonces qui vous intéressent
            </p>
          </div>
        </div>
        <div className="reason">
          <i>
            <FontAwesomeIcon icon="eye" />
          </i>
          <div>
            <h3>Visibilité</h3>
            <p>
              Suivez les statistiques de vos annonces (nombre de fois où vos
              annonces ont été vues, nombre de contact reçu).
            </p>
          </div>
        </div>
      </aside>
      <form
        onSubmit={async event => {
          event.preventDefault();
          let response;
          if (password === confirm && isAccepted === true) {
            response = await axios.post(
              `${process.env.URL_BACKEND}/user/sign_up`,
              { email: email, username: pseudo, password: password }
            );
            Cookies.set("lbc-loged", response.data._id, { expires: 42 });
            history.push("/");
            setPseudo("");
            setEmail("");
          }
          setIsAccepted(false);
          setPassword("");
          setConfirm("");
        }}
      >
        <h2>Créer un compte</h2>
        <label htmlFor="pseudo">Pseudo *</label>
        <input
          type="text"
          id="pseudo"
          onChange={event => {
            event.preventDefault();
            setPseudo(event.target.value);
          }}
          value={pseudo}
        ></input>
        <label htmlFor="mail">Adresse email *</label>
        <input
          type="email"
          id="email"
          onChange={event => {
            event.preventDefault();
            setEmail(event.target.value);
          }}
          value={email}
        ></input>
        <div className="password">
          <span>
            <label htmlFor="passsword">Mot de passe *</label>
            <input
              type="password"
              id="password"
              onChange={event => {
                event.preventDefault();
                setPassword(event.target.value);
              }}
              value={password}
            ></input>
          </span>
          <span>
            <label htmlFor="confirm">Confirmer le mot de passe *</label>
            <input
              type="password"
              id="confirm"
              onChange={event => {
                event.preventDefault();
                setConfirm(event.target.value);
              }}
              value={confirm}
            ></input>
          </span>
        </div>
        <div>
          <input
            type="checkbox"
            id="rules"
            className="rules"
            onChange={event => {
              setIsAccepted(!isAccepted);
            }}
            checked={isAccepted}
          ></input>
          <label htmlFor="rules">
            J'accepte les conditions générales de vente et les conditions
            générales d'utilisation.
          </label>
        </div>
        <button type="submit">Créer mon Compte Personnel</button>
      </form>
    </main>
  );
};
export default Signup;
