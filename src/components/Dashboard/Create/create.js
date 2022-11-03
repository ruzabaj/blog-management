import React, { useState, useEffect } from "react";
import "../../../sass/create.scss";
import axios from "axios";
import Test from './test';

const Create = () => {
  const [content, setContent] = useState({
    title: "",
    category: "",
    description: "",
    status: "",
  });
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    axios
      .get("http://api.allureinternational.com.np/api/get-all-active-category")
      .then((response) => {
        console.log(response.data.data);
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const imageUpload = (event) => {
    console.log(event.target.files);
    setImage(event.target.files[0]);
    // setImage(URL.createObjectURL(event.target.files[0]))
  };

  const handlePost = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", content.title);
    formData.append("category_id", content.category);
    formData.append("description", content.description);
    formData.append("status", content.status);
    axios
      .post("http://api.allureinternational.com.np/api/add-blog", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      <Test/>
  };
  const handleChange = (event) => {
    const newdata = { ...content };
    newdata[event.target.id] = event.target.value;
    setContent(newdata);
    console.log(newdata, "newdata");
  };

  return (
    <div>
      <div className="create-bg"></div>
      <div className="create-width">
        <div className="create-center-align">
          <form>
            <div className="text-area">
              <label>Title:</label>
              <textarea
                rows="1"
                cols="0"
                minLength="05"
                maxLength="50"
                placeholder="Title"
                className="title"
                id="title"
                value={content.title}
                onChange={handleChange}
              />
              <p style={{ color: "grey", size: "10px" }}>
                Do not exceed more than 25 characters.
              </p>
              <div className="create-blog-category">
                <select
                  name="category-list"
                  id="category"
                  value={content.category}
                  onChange={handleChange}
                >
                  {category.map((element, index) => (
                    <option value={element.id} key={index}>
                      {element.category_name}
                    </option>
                  ))}
                </select>
                <select
                  name="active-status"
                  id="status"
                  value={content.status}
                  onChange={handleChange}
                >
                  <option value="#"></option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
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
                maxLength="3000"
                placeholder="Description"
                className="description"
                id="description"
                onChange={handleChange}
                value={content.description}
              />
              <p style={{ color: "grey", size: "10px" }}>
                Do not exceed more than 3000 characters.
              </p>
            </div>
          </form>
          <button type="submit" className="post" onClick={handlePost}>
            POST
          </button>
          <div className="upload-image-class">
            <label>Uploaded image</label>
          <img src={image} alt="pic" classname="uploaded-image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
