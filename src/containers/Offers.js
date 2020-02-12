import React, { useState, useEffect } from "react";

// import "./Home.css";

import axios from "axios";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  const [leBonCoinAPI, setLeBonCoinAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  console.log(leBonCoinAPI);

  return (
    <div className="offers">
      <div>{isLoading ? "Loading..." : "found"}</div>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
};

export default Home;
