import React from 'react'
import Delete from "./modal";

const Container = ({userData, next}) => {
  return (
    <div className="container">
        <div className="row">
          {userData.map((element) => (
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
                    <button className="btn-more" onClick={next}>
                      Read More
                    </button>
                    <Delete />
                    <button className="btn-edit">Edit</button>
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