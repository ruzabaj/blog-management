import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  return (
    <div className="eye-icon">
                <div className="password-seen">
                  <FontAwesomeIcon icon={faEye} />
                </div>
                <div className="password-closed">
                  <FontAwesomeIcon icon={faEyeSlash} />
                </div>
              </div>
  )
}

export default index