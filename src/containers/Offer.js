import React, { useState, useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";

import Ad from "../components/Ad";

const Offer = props => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [offerData, setOfferData] = useState({});

  const getOfferData = async () => {
    const response = await axios.get(
      `https://leboncoin-api.herokuapp.com/api/offer/${id}`
    );
    setOfferData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getOfferData();
  }, []);
  return <div>{!isLoading && <Ad {...offerData}></Ad>}</div>;
};

export default Offer;
