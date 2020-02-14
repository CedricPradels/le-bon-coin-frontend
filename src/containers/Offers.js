import React, { useState, useEffect } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import Search from "../components/Search";
import Result from "../components/Result";
import PageNumber from "../components/PageNumbers";

const Home = () => {
  const [leBonCoinAPI, setLeBonCoinAPI] = useState([]);
  const [isLoadingAPI, setIsLoadingAPI] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [skipResult, setSkipResult] = useState(0);
  const [tabPages, setTabPages] = useState([]);

  const [search, setSearch] = useState("");

  const getPageResult = async () => {
    const response = await axios.get(
      `https://leboncoin-api.herokuapp.com/api/offer/with-count?title=${searchResult}&skip=${skipResult *
        3}&limit=3`
    );

    const tmpTabPages = [];

    const announesAmount = response.data.count;
    for (let i = 1; i * 3 < announesAmount; i++) {
      tmpTabPages.push(i);
    }

    setTabPages(tmpTabPages);
    setLeBonCoinAPI(response.data);
    setIsLoadingAPI(false);
  };

  useEffect(() => {
    getPageResult();
  }, [searchResult, skipResult]);

  return (
    <div className="offers">
      <Search
        states={{ search, setSearch, setSearchResult, setSkipResult }}
      ></Search>
      {!isLoadingAPI &&
        leBonCoinAPI.offers.map((offer, index) => {
          const regExp = new RegExp(searchResult, "i");
          if (regExp.test(offer.title) || regExp.test(offer.description)) {
            return (
              <Link key={index} to={`/offer/${offer._id}`}>
                <Result {...offer}></Result>
              </Link>
            );
          }
        })}

      <PageNumber states={{ tabPages, skipResult, setSkipResult }}></PageNumber>
    </div>
  );
};

export default Home;
