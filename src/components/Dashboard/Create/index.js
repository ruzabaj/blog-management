import React, { useState } from "react";
import "../../../sass/create.scss";
import Dropdown from "react-dropdown";

const Create = () => {
  const options = [
    { value: "Time", label: "Time" },
    { value: "Two", label: "Music", className: "myOptionClassName" },
    { value: "Three", label: "Comedy" },
  ];
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <div className="manuals">
      <img src="add.png" alt="add" className="create-blog" />
      <Dropdown
        className="category"
        id="category"
        options={options}
        onChange={handleChange}
        value={value}
        placeholder="Select an option"
        />
      <p> Category {value}</p>
      <button className="post">POST</button>
      </div>

      <div className="text-area">
        <textarea rows="1" cols="0" minLength="05" maxLength="20" placeholder="Title"/>
        <textarea rows="20" cols="1" minLength="100" maxLength="2000" placeholder="Write something here…"/>
      </div>
    </div>
  );
};

export default Create;
