import React, { useState , useRef, useMemo} from 'react';
import Dropdown from "react-dropdown";
import JoditEditor from 'jodit-react';
import "../../../sass/create.scss";
import axios from 'axios';

const Create = () => {
  //text-editor
  const [content, setContent] = useState('');
  const editor = useRef(null);
    //for dropdown
    const options = [
        { value: "Time", label: "Food" },
        { value: "Two", label: "Music" },
        { value: "Three", label: "Comedy" },
        { value: "Four", label: "Lifestyle" },
        { value: "Five", label: "Fiction" },
        { value: "Six", label: "Travel" },
      ];
      const [category, setCategory] = useState("");
    
      const handleChange = (e) => {
        setCategory(e.target.value);
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
                className="post"
                // style={{ display: "none" }} 
                />
              <Dropdown
                className="category"
                id="category"
                options={options}
                onClick={handleChange}
                value={category}
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
              className='title'
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
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
          </div>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Create