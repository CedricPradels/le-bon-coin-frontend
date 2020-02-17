import React from "react";
import "./PageNumbers.css";

import { Link } from "react-router-dom";

const PageNumbers = props => {
  const { tabPages, setSkipResult, skipResult } = props.states;
  return (
    <ul className="pageNumbers">
      <li>
        <Link
          to={"/"}
          onClick={() => {
            if (skipResult >= 1) {
              setSkipResult(skipResult - 1);
            }
          }}
        >
          &lt;
        </Link>
      </li>
      {tabPages.map((pageNumber, index) => {
        return (
          <li
            key={index}
            className={pageNumber === skipResult + 1 && "isActual"}
          >
            <Link
              to={"/"}
              onClick={() => {
                setSkipResult(pageNumber - 1);
              }}
            >
              {pageNumber}
            </Link>
          </li>
        );
      })}
      <li>
        <Link
          to={"/"}
          onClick={() => {
            if (skipResult + 1 < tabPages[tabPages.length - 1]) {
              setSkipResult(skipResult + 1);
            }
          }}
        >
          &gt;
        </Link>
      </li>
    </ul>
  );
};

export default PageNumbers;
