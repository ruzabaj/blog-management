import React from 'react';
import "../../../sass/create.scss";

const Edit = () => {
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
                maxLength="25"
                placeholder="Title"
                className="title"
                id="title"
                // value={content.title}
                // onChange={handleChange}
              />
              <p style={{ color: "grey", size: "10px" }}>
                Do not exceed more than 25 characters.
              </p>
              <div className="create-blog-category">
                <select
                  name="category-list"
                  id="category"
                  // value={content.category}
                  // onChange={handleChange}
                >
                  {/* {category.map((element, index) => (
                    <option value={element.id} key={index}>
                      {element.category_name}
                    </option>
                  ))} */}
                </select>
                <select
                  name="active-status"
                  id="status"
                  // value={content.status}
                  // onChange={handleChange}
                >
                  <option value="#"></option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
                <input
                  type="file"
                  id="file"
                  // onChange={imageUpload}
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
                // onChange={handleChange}
                // value={content.description}
              />
              <p style={{ color: "grey", size: "10px" }}>
                Do not exceed more than 3000 characters.
              </p>
            </div>
          </form>
          <button type="submit" className="post"
          //  onClick={handlePost}
           >
            POST
          </button>
          <div className="upload-image-class">
            <label>Uploaded image</label>
          <img 
          // src={image}
           alt="pic" classname="uploaded-image"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit