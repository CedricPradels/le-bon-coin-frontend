import React from "react";
import "./Ad.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ad = ({ title, description, pictures, price, creator, created }) => {
  return (
    <main className="ad">
      <article>
        <div className="imageWrapper">
          <div className="picture">
            {pictures[0] && <img alt="item photo" src={pictures[0]} />}
          </div>
          <div className="text">
            <div>
              <h2>{title}</h2>
              <div className="price">{`${price} €`}</div>
            </div>
            <div className="date">{created}</div>
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
