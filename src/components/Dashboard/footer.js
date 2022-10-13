import React from "react";
import '../../sass/footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return <section className="footer">
      <FontAwesomeIcon icon={faHome} />
      <p>© Copyright 2022</p>
  </section>;
};

export default Footer;
