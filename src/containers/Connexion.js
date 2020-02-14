import React from "react";

const Connexion = () => {
  return (
    <div className="connexion">
      <form
        className="login"
        onSubmit={event => {
          event.preventDefault();
        }}
      >
        <h2>Connexion</h2>
        <label htmlFor="email">Adress email</label>
        <input type="email" id="email"></input>
        <label htmlFor="password">Mot de passe</label>
        <input type="password" id="password"></input>
        <button type="submit">Se connecter</button>
      </form>
      <label htmlFor="signup">Vous n'avez pas de compte ?</label>
      <button id="signup">Créer un compte</button>
    </div>
  );
};

export default Connexion;
