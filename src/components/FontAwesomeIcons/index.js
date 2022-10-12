import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash , faPlus} from "@fortawesome/free-solid-svg-icons";
import "../../sass/icon.scss";

const Index = () => {
  const [passwordEye, setPasswordEye] = useState(false);
//   const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleClick = () => {
    setPasswordEye(!passwordEye);
    alert("clicked")
  };
  return (
    <div className="eye-icon">
      <div className="password-seen">
        <FontAwesomeIcon icon={faEye} onClick={handleClick} />
      </div>
      <div className="password-closed">
        <FontAwesomeIcon icon={faEyeSlash} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Index;
