import Delete from "./modal";
import { Link } from "react-router-dom";

const Container = ({activeBlog, next,allBlog, setAllBlog}) => {
 
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
                    <Link to="/edit-blog"><button className="btn-edit">Edit</button></Link>
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