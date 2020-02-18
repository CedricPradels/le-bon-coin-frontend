import React from "react";
import "./Ad.css";

import { format } from "date-fns";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ad = ({ title, description, picture, price, creator, created }) => {
  const date = format(new Date(created), "dd/MM/yyyy");
  const hour = format(new Date(created), "HH:mm");

  return (
    <main className="ad">
      <article>
        <div className="imageWrapper">
          <div className="picture">
            {picture && <img alt="item photo" src={picture} />}
          </div>
          <div className="text">
            <div>
              <h2>{title}</h2>
              <div className="price">{`${price} €`}</div>
            </div>
            <div className="date">{`${date} à ${hour}`}</div>
          </div>
        </div>
        <h3>Description</h3>
        <div className="description">{description}</div>
      </article>
      <aside>
        <div>
          <h2>{creator.account.username}</h2>
          <div className="addNumber">17 annonces en ligne</div>
        </div>
        <button>
          <i>
            <FontAwesomeIcon icon="shopping-cart" />
          </i>
          Acheter
        </button>
      </aside>
    </main>
  );
};
export default Ad;
