import React, { useState } from "react";
import Cookies from "js-cookie";

import FormNewOffer from "../components/FormNewOffer";
import Login from "../components/Login";

const NewOffer = props => {
  const { setUser } = props.states;

  const isCookieExist = Cookies.get("lbc-loged") ? true : false;

  return (
    <div>
      {!isCookieExist && (
        <div className="modal">
          <Login states={{ setUser }}></Login>
        </div>
      )}
      <FormNewOffer></FormNewOffer>
    </div>
  );
};

export default NewOffer;
