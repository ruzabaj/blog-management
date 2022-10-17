import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapPin} from "@fortawesome/free-solid-svg-icons";

const Information = () => {
  return (
    <div className="card-information">
          <div className="call">
            <h3>Call Us</h3>
            <p className="call-info">Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
            <p className="call-number"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>+1234456788</p>
          </div>
          <div className="visit">
            <h3>Visit Us</h3>
            <p className="visit-info">Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
            <p className="visit-address"><FontAwesomeIcon icon={faMapPin}></FontAwesomeIcon>123445678 Backstreet</p>
          </div>
        </div>
  )
}

export default Information