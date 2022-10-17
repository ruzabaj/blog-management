import React from "react";
import "../../../sass/contact.scss";

import Content from "./content";
import Information from "./Information";

const Card = () => {
  return (
    <div className="container">
      <div className="contact-card">
        <Content/>
        <div className="vl"></div>
        <Information/>
      </div>
    </div>
  );
};

export default Card;
