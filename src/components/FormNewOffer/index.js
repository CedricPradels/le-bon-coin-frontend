import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

import Cookies from "js-cookie";

import "./FormNewOffer.css";

const FormNewOffer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState({});

  const history = useHistory();

  const token = Cookies.get("lbc-loged");

  return (
    <form
      className="newOffer"
      onSubmit={async event => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("title", title);
        formData.append("files", file);
        formData.append("description", description);
        formData.append("price", new Number(price));

        try {
          const response = await axios.post(
            "https://leboncoin-api.herokuapp.com/api/offer/publish",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
              }
            }
          );
          history.push("/");
        } catch {}
      }}
    >
      <h2>Déposer une annonce</h2>

      <label htmlFor="title">Titre de l'annonce *</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={event => {
          setTitle(event.target.value);
        }}
      ></input>

      <label htmlFor="description">Texte de l'annonce *</label>
      <textarea
        type="description"
        id="description"
        onChange={event => {
          setDescription(event.target.value);
        }}
      >
        {description}
      </textarea>

      <label htmlFor="price">Titre de l'annonce *</label>
      <span>
        <input
          type="number"
          id="price"
          value={price}
          onChange={event => {
            setPrice(event.target.value);
          }}
        ></input>
        €
      </span>

      <label htmlFor="picture">Titre de l'annonce *</label>
      <input
        type="file"
        id="picture"
        onChange={event => {
          setFile(event.target.files[0]);
        }}
      ></input>

      <button type="submit">Valider</button>
    </form>
  );
};

export default FormNewOffer;
