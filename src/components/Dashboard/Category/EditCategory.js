import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../sass/blog.scss";
import "../../../sass/category.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

const EditCategory = () => {
  const [getCategory, setGetCategory] = useState([]);
//   const [categoryDetail, setCategoryDetail] = useState({
//     id:"",
//     categoryname: "",
//     status: "",
//   });
  const [id,setId]=useState();
  const[categoryName, setCategoryName]=useState();
  const[status,setStatus]=useState();
    
  
  let navigate = useNavigate();
  const BacktoHme = () => {
    navigate("/create-category");
  };

  useEffect(()=>{
      setId(localStorage.getItem('id'))
      setCategoryName(localStorage.getItem('category name'));
      setStatus(localStorage.getItem('status'));
    },[])

  useEffect(() => {
    axios
      .get("http://api.allureinternational.com.np/api/get-all-category")
      .then((response) => {
        setGetCategory(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    
    //   const newdata = { ...categoryDetail };
    //   newdata[e.target.id] = e.target.value;
    //   setCategoryDetail(newdata);
    //   console.log(newcdata, "newdata");
    };
    
//     const handleSubmit =  (e) => {
//     axios
//       .post("http://api.allureinternational.com.np/api/add-new-category",
//        {
//         category_name: categoryDetail.categoryname,
//         status: categoryDetail.categorystatus,
   
//       }
//       )
// }
//       .then((res) => {
//         axios
//           .get("http://api.allureinternational.com.np/api/get-all-category")
//           .then((response) => {
//             setGetCategory(response.data.data);
//           })
//           .catch((error) => {
//             console.log(error);
//           });
//       });
//   };

//   useEffect(() => {
//     console.log(getCategory, "get of edit page");
//     axios
//       .get("http://api.allureinternational.com.np/api/get-all-category")
//       .then((response) => {
//         console.log("tag", response.data.data);
//         setGetCategory(response.data.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

  return (
    <div>
      <Navbar />
      <FontAwesomeIcon
        icon={faArrowAltCircleLeft}
        onClick={BacktoHme}
        className="back"
      />
      <form type="submit" 
    //   onSubmit={handleSubmit}
      >
        <div className="category-center">
          <div className="category-name">
            <label className="">Category name:</label>
            <input
              type="text"
              id="categoryname"
              value={categoryName}
            //   value={categoryDetail.categoryname}
            onChange={handleChange}
              name="name"
            />
          </div>
          <div className="category-status">
            <label>Status:</label>
            <select name="status" 
            id="status" 
            value={status}
            // value={categoryDetail.status}
            onChange={handleChange}
            >
              <option value="active"  >Active</option>
              <option value="inactive" >Inactive</option>
            </select>
          </div>
        </div>
        <div className="btn-submit">
          <button
            type="submit"
            className="category-btn"
            // onSubmit={handleSubmit}
          >
            Submit
          </button>
        </div>
        {getCategory.map((ele,index)=>(
            <div key={index}>{ele.id}</div>
        ))}
      </form>
    </div>
  );
};

export default EditCategory;
