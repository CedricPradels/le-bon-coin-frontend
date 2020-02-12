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

  return (
    <div className="offers">
      <Header></Header>
      <Search states={{ search, setSearch, setSearchResult }}></Search>
      {!isLoading &&
        leBonCoinAPI.offers.map((offer, index) => {
          const regExp = new RegExp(searchResult, "i");
          if (regExp.test(offer.title) || regExp.test(offer.description)) {
            return <Result {...offer} key={index}></Result>;
          }
        })}
      <Footer></Footer>
    </div>
  );
};

export default Home;
