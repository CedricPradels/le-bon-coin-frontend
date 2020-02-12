import React, { useState, useEffect } from "react";

// import "./Home.css";

import axios from "axios";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Search from "../components/Search";
import Result from "../components/Result";
import Footer from "../components/Footer";

const Home = () => {
  const [leBonCoinAPI, setLeBonCoinAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);

  const [search, setSearch] = useState("");

  const getApi = async () => {
    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/api/offer/with-count"
    );

    setLeBonCoinAPI(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getApi();
  }, []);

  const buildSearchResult = () => {
    let out = [];
    const regExp = new RegExp(search, "i");
    for (let i = 0; i < leBonCoinAPI.offers.length; i++) {
      const { title, description } = leBonCoinAPI.offers[i];
      if (regExp.test(title) || regExp.test(description)) {
        out.push(leBonCoinAPI.offers[i]);
      }
    }
    setSearchResult(out);
  };

  useEffect(() => {
    !isLoading && buildSearchResult();
  }, [search]);

  return (
    <div className="offers">
      <Header></Header>
      <Search states={{ search, setSearch }}></Search>
      {searchResult.map((offer, index) => {
        const { pictures, title, price, created } = offer;
        return (
          <Result
            offer={{ pictures, title, price, created }}
            key={index}
          ></Result>
        );
      })}
      <Footer></Footer>
    </div>
  );
};

export default Home;
