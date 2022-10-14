import axios from 'axios';
import React, { useState , useRef} from 'react';
import Dropdown from "react-dropdown";
import "../../../sass/create.scss";

const Create = () => {
    //for dropdown
    const options = [
        { value: "Time", label: "Time" },
        { value: "Two", label: "Music" },
        { value: "Three", label: "Comedy" },
        { value: "Four", label: "Life" },
        { value: "Five", label: "Style" },
      ];
      const [value, setValue] = useState("");
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };

      //for  uploading file
      const  [file, setFile]= useState(false);
    
      const fileUpload = (event) => {
        setFile(event.target.value[0]);
      };
      const handlePost=()=>{
        //handle API
        // axios.post('http://localhost:5000/blog/post');
      }

      const fileInputField = useRef(null)

  return (
    <div>
        <div className="create-bg">
        <img src=" write-bg.jpg" alt="bg" className="background-create" />
      </div>
      <div className="create-width">
        <div className="create-center-align">
          <div className="manuals">
            <div className="create-blog-category">
                <p>{file}</p>
                <input type="file" 
                onChange={fileUpload}
                ref={fileInputField}
                // style={{ display: "none" }} 
                />
              {/* <button>
                <img src="add.png" alt="add" className="create-blog" />
              </button> */}

              <Dropdown
                className="category"
                id="category"
                options={options}
                onChange={handleChange}
                value={value}
                placeholder="Select a category"
              />
            </div>
            <button className="post" onClick={handlePost}>POST</button>
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
              rows="10"
              cols="1"
              minLength="100"
              maxLength="2000"
              placeholder="Write something here…"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create