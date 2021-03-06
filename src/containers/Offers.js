import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Search from "../components/Search";
import Result from "../components/Result";
import PageNumber from "../components/PageNumbers";

require("dotenv").config();

const Home = () => {
  const [leBonCoinAPI, setLeBonCoinAPI] = useState([]);
  const [isLoadingAPI, setIsLoadingAPI] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [skipResult, setSkipResult] = useState(0);
  const [tabPages, setTabPages] = useState([]);

  const [search, setSearch] = useState("");

  const getPageResult = async () => {
    const limit = 2;
    const response = await axios.get(
      `http://localhost:4000/offer/with-count?title=${searchResult}&skip=${skipResult}&limit=${limit}`
    );

    const tmpTabPages = [];

    const announesAmount = response.data.count;
    for (let i = 1; i * limit <= announesAmount; i++) {
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
            return <Result {...offer} key={index}></Result>;
          }
        })}

      <PageNumber states={{ tabPages, skipResult, setSkipResult }}></PageNumber>
    </div>
  );
};

export default Home;
