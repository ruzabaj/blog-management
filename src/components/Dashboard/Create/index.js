import React, { useState } from "react";
import "../../../sass/create.scss";
import Dropdown from "react-dropdown";
import Navbar from "../Navbar";

const Create = () => {
  const options = [
    { value: "Time", label: "Time" },
    { value: "Two", label: "Music", },
    { value: "Three", label: "Comedy" },
    { value: "Four", label: "Life" },
    { value: "Five", label: "Style" },
  ];
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="create-bg">
        <img src=" write-bg.jpg" alt="bg" className="background-create" />
      </div>
      <div className="create-width">
        <div className="create-center-align">
          <div className="manuals">
            <div className="create-blog-category">
            <img src="add.png" alt="add" className="create-blog" />
            <Dropdown
              className="category"
              id="category"
              options={options}
              onChange={handleChange}
              value={value}
              placeholder="Select a category"
              
              />
              </div>
            <button className="post">POST</button>
          </div>

          <div className="text-area">
            <textarea
              rows="1"
              cols="0"
              minLength="05"
              maxLength="20"
              placeholder="Title"
            />
            <textarea
              rows="20"
              cols="1"
              minLength="100"
              maxLength="2000"
              placeholder="Write something here…"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
