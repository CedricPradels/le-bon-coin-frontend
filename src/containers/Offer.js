import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Ad from "../components/Ad";

require("dotenv").config();

const Offer = props => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [offerData, setOfferData] = useState({});

  const getOfferData = async () => {
    const response = await axios.get(`http://localhost:4000/offer/${id}`);
    setOfferData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getOfferData();
  }, []);
  return <div>{!isLoading && <Ad {...offerData}></Ad>}</div>;
};

export default Offer;
