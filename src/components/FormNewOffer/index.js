import React from "react";

import "./FormNewOffer.css";

const FormNewOffer = () => {
  return (
    <form
      className="newOffer"
      onSubmit={event => {
        event.preventDefault();
      }}
    >
      <h2>Déposer une annonce</h2>

      <label htmlFor="title">Titre de l'annonce *</label>
      <input type="text" id="title"></input>

      <label htmlFor="description">Texte de l'annonce *</label>
      <textarea type="description" id="description"></textarea>

      <label htmlFor="price">Titre de l'annonce *</label>
      <span>
        <input type="number" id="price"></input>€
      </span>

      <label htmlFor="picture">Titre de l'annonce *</label>
      <input type="file" id="picture"></input>

      <button type="submit">Valider</button>
    </form>
  );
};

export default FormNewOffer;
