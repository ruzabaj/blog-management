import React, { useState, useEffect } from "react";
import JoditEditor from "jodit-react";
import "../../../sass/create.scss";
import axios from "axios";

const Create = () => {
  const [content, setContent] = useState("");
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
    .get("http://api.allureinternational.com.np/api/get-all-active-category")
    .then((response) => {
        console.log(response.data.data);
        setCategory(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
 
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
              <label>Title:</label>
              <textarea
                rows="1"
                cols="0"
                minLength="05"
                maxLength="20"
                placeholder="Title"
                className="title"
              />
              <div className="create-blog-category">
                <select
                  name="category-list"
                  id="category-list"
                  // value={}
                  // onChange={handleChange}
                >
                  {category.map((element, index) => (
                    <option value={element.id} key={index}>{element.category_name}</option>
                  ))} 
                </select>
                <input
                  type="file"
                  id="file"
                  onChange={imageUpload}
                  className="postimage"
                  name="file"
                />
                <label for="file">Upload</label>
              </div>
              <label>Description:</label>
              <textarea
                rows="10"
                cols="100"
                minLength="05"
                maxLength="1000"
                placeholder="Description"
                className="description"
              />
              <p style={{ color: "grey", size: "10px" }}>
                Do not exceed more than 1000 characters.
              </p>
            </div>
          </form>

          <button type="submit" className="post" onClick={handlePost}>
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default Create;
