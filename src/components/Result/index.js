import React from "react";
import "./Result.css";

import { format } from "date-fns";

import { Link } from "react-router-dom";

const Result = props => {
  const { picture, title, price, created } = props;
  const date = format(new Date(created), "dd/MM/yyyy");
  const hour = format(new Date(created), "HH:mm");

  return (
    <div className="resultContainer">
      <Link to={`/offer/${props._id}`}>
        <section className="result">
          <div className="imageContainer">
            {picture && <img src={picture} />}
          </div>
          <div className="resultInformations">
            <div>
              <h2>{title}</h2>
              {price && <span className="price">{`${price} €`}</span>}
            </div>
            <span className="date">{`${date} à ${hour}`}</span>
          </div>
        </section>
      </Link>
    </div>
  );
};
export default Result;
