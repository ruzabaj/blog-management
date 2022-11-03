import Delete from "./modal";
import { useNavigate } from "react-router-dom";

const Container = ({activeBlog, next,allBlog, setAllBlog}) => {
  let navigate = useNavigate();
  
const editBlog=(element)=>{
  console.log("clicked on edit blog");
  let { id, title, image, description, category_id, status } = element;
  localStorage.setItem("id", id);
  localStorage.setItem("title", title);
  localStorage.setItem("image", image);
  localStorage.setItem("description", description);
  localStorage.setItem("category id", category_id);
  localStorage.setItem("status", status);
  console.log("object", element);
  console.log("category id", element.category_id);
  navigate("/edit-blog");
}
  return (
    <div className="container">
        <div className="row">
          {allBlog.map((element) => (
            <div className="col-4" key={element.id}>
              <div className="card">
                <img
                  src={element.image}
                  className="card-img"
                  alt="user-profile"
                />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text">{element.description}</p>
                  <div className="read-edit-delete">
                    <button className="btn-more" onClick={()=>next(element)} >
                      {element.id}
                      Read More
                    </button>
                    <Delete element={element} setAllBlog={setAllBlog}/>
                    <button className="btn-edit" onClick={()=>editBlog(element)}>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Container