import React from 'react'

const Content = () => {
  return (
    <div className="card-content">
    <h2>Get In Touch</h2>
    <h6>We would like to hear from you</h6>
    <p className="information">
      Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <div className="card-form">
      <div className="name">
        <label>Name</label>
        <input type="text"/>
      </div>
      <div className="email">
        <label>Email</label>
        <input type="text"/>
      </div>
      <div className="message">
        <label>Message</label>
        <textarea placeholder='Write something ...'></textarea>
      </div>
    </div>
    <button type="submit">Submit</button>
  </div>
  )
}

export default Content