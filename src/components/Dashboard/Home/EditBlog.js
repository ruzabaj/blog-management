import React,{useState, useEffect} from 'react';
import "../../../sass/create.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowAltCircleLeft} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const [id, setId] =useState();
  const [title, setTitle] =useState();
  const [categoryID, setCategoryID] =useState();
  const [status, setStatus]= useState();
  const [image, setImage]= useState();
  const [description, setDescription]= useState();

  // const [editBlog, setEditBlog]= useState();
  const navigate=useNavigate();
  const backtoHome=()=>{
    navigate("/home")
  }
  useEffect(() => {
    setId(localStorage.getItem('id'))
    setTitle(localStorage.getItem('title'));
    setCategoryID(localStorage.getItem('category id'));
    setStatus(localStorage.getItem('status'))
    setImage(localStorage.getItem('image'))
    setDescription(localStorage.getItem('description'))
  }, []);

 const handlePost=()=>{
  axios.post(`http://api.allureinternational.com.np/api/update-blog/${id}`,
  {
    _method: "PATCH",
    title:title,
    description:description,
    status:status,
    image:image,
    category_id:categoryID
  })
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
 }
  return (
    <div>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={backtoHome} className="back"/>
      <div className="create-bg">
      <div className="create-width">
        <div className="create-center-align">
    
          {console.log(id,title)}
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
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
              <p style={{ color: "grey", size: "10px" }}>
                Do not exceed more than 25 characters.
              </p>
              <div className="create-blog-category">
                <select
                  name="category-list"
                  id="category"
                  value={categoryID}
                  onChange={(e)=>setCategoryID(e.target.value)}
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
                  value={status}
                  onChange={(e)=>setStatus(e.target.value)}

                >
                  <option value="#"></option>
                  <option value="active">active</option>
                  <option value="inactive">inactive</option>
                </select>
                <input
                  type="file"
                  id="file"
                  onChange={(e)=>setImage(e.target.value)}
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
                onChange={(e)=>setDescription(e.target.value)}
                value={description}
              />
              <p style={{ color: "grey", size: "10px" }}>
                Do not exceed more than 3000 characters.
              </p>
            </div>
          </form>
          <button type="submit" className="post"
           onClick={handlePost}
           >
            POST
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Edit