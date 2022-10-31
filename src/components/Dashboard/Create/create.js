import React, { useState } from "react";
import Dropdown from "react-dropdown";
import JoditEditor from "jodit-react";
import "../../../sass/create.scss";
import axios from "axios";

const Create = () => {
  //text-editor
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const options = [
    { value: "Time", label: "Food" },
    { value: "Two", label: "Music" },
    { value: "Three", label: "Comedy" },
    { value: "Four", label: "Lifestyle" },
    { value: "Five", label: "Fiction" },
    { value: "Six", label: "Travel" },
  ];

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const imageUpload = (event) => {
    console.log(event.target.files);
    setImage(event.target.files[0]);
  };

  const handlePost = () => {
    const formData = new FormData();
    formData.append("image", image);
    axios
      .post("http://api.allureinternational.com.np/api/add-blog", formData)
      .then((res) => {
        console.log(res);
      });
  };


  return (
    <div>
      <div className="create-bg">
        {/* <img src=" write-bg.jpg" alt="bg" className="background-create" /> */}
      </div>
      <div className="create-width">
        <div className="create-center-align">
          <form>
            <div className="text-area">
              <textarea
                rows="1"
                cols="0"
                minLength="05"
                maxLength="20"
                placeholder="Title"
                className="title"
              />
              {/* <textarea
              rows="05"
              cols="0"
              minLength="100"
              maxLength="2000"
              placeholder="Write something here…"
              className='description'
            /> */}
              <JoditEditor
                value={content}
                tabIndex={1} // tabIndex of textarea
                onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={(newContent) => {}}
              />
            </div>
          </form>
          <div className="manuals">
            <div className="create-blog-category">
              <input
                type="file"
                onChange={imageUpload}
                className="postImage"
                name="file"
              />
              <select
                name="category-list"
                id="category-list"
                // value={}
                onChange={handleChange}
              >
                <option value="#"></option>
                <option value="travel">Travel</option>
              </select>
            </div>
            <button type="submit" className="post" onClick={handlePost}>
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
