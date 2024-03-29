import Delete from "./modal";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Container = ({
  activeBlog,
  next,
  allBlog,
  setAllBlog,
  filteredBlog,
  filter,
  activeCategory
}) => {
  let navigate = useNavigate();

  const editBlog = (element) => {
    console.log("clicked on edit blog",element.category.category_name);
    let { id, title, image, description, category_id, status } = element;
    let {category_name}=element.category
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("image", image);
    localStorage.setItem("description", description);
    localStorage.setItem("category_id", category_id);
    localStorage.setItem("category name", category_name);
    localStorage.setItem("status", status);
    console.log("object", element);
    console.log("category id", element.category_id);
    navigate("/edit-blog");
  };
  useEffect(() => {
    console.log("hi", filteredBlog);
    console.log(filter, "all");
  }, []);
  return (
    <div className="container">
      <div className="row">
        {filter
          ? filteredBlog.map((element) => (
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
                      <button
                        className="btn-more"
                        onClick={() => next(element)}
                      >
                        Read More
                      </button>
                      <Delete element={element} setAllBlog={setAllBlog} />
                      <button
                        className="btn-edit"
                        onClick={() => editBlog(element)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : allBlog.map((element) => (
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
                      <button
                        className="btn-more"
                        onClick={() => next(element)}
                      >
                        Read More
                      </button>
                      <Delete element={element} setAllBlog={setAllBlog} />
                      <button
                        className="btn-edit"
                        onClick={() => editBlog(element)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Container;
