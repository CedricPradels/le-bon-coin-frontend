import React from "react";
import "./Result.css";
const Result = props => {
  const { pictures, title, price, created } = props;
  const date = new String(/\d{4}-\d{2}-\d{2}/.exec(created)).replace(/-/g, "/");
  const hour = /\d{2}:\d{2}/.exec(created);

  return (
    <section className="result">
      <div className="imageContainer">
        {pictures[0] && <img src={pictures[0]} />}
      </div>
      <div className="resultInformations">
        <div>
          <h2>{title}</h2>
          {price && <span className="price">{`${price} €`}</span>}
        </div>
        <span className="date">{`${date} à ${hour}`}</span>
      </div>
    </section>
  );
};
export default Result;
