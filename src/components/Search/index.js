import React, { useState } from "react";
import "./Search.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = props => {
  const { search, setSearch, setSearchResult } = props.states;

  return (
    <div className="ellipseSearch">
      <form
        onSubmit={event => {
          event.preventDefault();
          setSearchResult(search);
          setSearch("");
        }}
      >
        <div className="searchField">
          <i>
            <FontAwesomeIcon icon="search" />
          </i>
          <input
            type="text"
            placeholder="Que cherchez-vous ?"
            onChange={event => {
              setSearch(event.target.value);
            }}
            value={search}
          ></input>
        </div>
        <button type="submit">Recherche</button>
      </form>
    </div>
  );
};
export default Search;
