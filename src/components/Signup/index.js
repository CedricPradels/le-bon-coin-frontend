import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <main className="signup">
      <aside className="explains">
        <h2>Pourquoi créer un compte</h2>
        <div>
          <i></i>
          <div>
            <h3>Gagner du temps</h3>
            <p>
              Publiez vos annonces rapidement, avec vos informations ré-remplies
              chaque fois que vous souter déposer une nouvelle annonce.
            </p>
          </div>
        </div>
      </aside>
      <form>
        <h2>Créer un compte</h2>
        <label for="pseudo">Pseudo *</label>
        <input type="text" name="pseudo"></input>
        <label for="mail">Adresse email</label>
        <input type="email" name="email"></input>
        <div>
          <span>
            <label for="passsword">Mot de passe *</label>
            <input type="password" name="password"></input>
          </span>
          <span>
            <label for="confirm">Confirmer le mot de passe *</label>
            <input type="password" name="confirm"></input>
          </span>
        </div>
        <div>
          <input type="checkbox" name="rules"></input>
          <label for="rules">
            J'accepte les conditions générales de vente et les conditions
            générales d'utilisation.
          </label>
        </div>
        <button type="submit"></button>
      </form>
    </main>
  );
};
export default Signin;
