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
            if (skipResult > 1) {
              setSkipResult(skipResult - 1);
            }
          }}
        >
          &lt;
        </Link>
      </li>
      {tabPages.map((pageNumber, index) => {
        return (
          <li key={index} className={pageNumber === skipResult && "isActual"}>
            <Link
              to={"/"}
              onClick={() => {
                setSkipResult(pageNumber);
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
            if (skipResult < tabPages[tabPages.length - 1]) {
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
