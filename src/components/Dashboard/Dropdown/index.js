import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus} from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
    const[open, setOpen]=useState(false);
    const toggleDropdown=()=>{
        setOpen(!open);
        console.log("cicked")
    }
  return (
    <div>
         <FontAwesomeIcon icon={faPlus} onClick={toggleDropdown}/>
    </div>
  )
}

export default Dropdown