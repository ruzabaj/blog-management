import React, { useState } from "react";
import axios from "axios";

const Content = () => {
  const [data, setData] = useState({
    names: "",
    emails: "",
    phones: "",
    subjects: "",
    messages: "",
  });

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata, "newdata");
  };
  const handleSubmit = () => {
    console.log("submit");
    axios
      .post("http://api.allureinternational.com.np/api/add-contact", {
        name: data.names,
        email: data.emails,
        phone: data.phones,
        subject: data.subjects,
        message: data.messages,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const submitForm=(e)=>{
  //     e.preventDefault();
  //     console.log(e.target.value,"value");
  //     console.log(e.target.name,"name");
  //     const name=e.target.name;
  //     const email=e.target.email.value;
  //     const phone=e.target.phone.value;
  //     const subject=e.target.subject.value;
  //     const message=e.target.message.value;
  //     axios.post('http://api.allureinternational.com.np/api/add-contact',{
  //       name,
  //       email,
  //       phone,
  //       subject,
  //       message
  //     })
  //     .then((res)=>{
  //       console.log(res)
  //     })
  //     .catch((error)=>{
  //       console.log(error)
  //     })
  //   }
  const showContact = () => {
    console.log("clicked show contact");
    axios.get("http://api.allureinternational.com.np/api/get-all-contact");
  };

  return (
    <div className="card-content">
      <h2>Get In Touch</h2>
      <h6>We would like to hear from you</h6>
      <p className="information">
        Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      </p>
      <form>
        <div className="card-form">
          <div className="form-name">
            <div className="name">
              <input
                type="text"
                name="name"
                id="names"
                required
                onChange={handleChange}
                value={data.name}
              />
              <div className="underline" />
              <label>Name</label>
            </div>
          </div>
          <div className="form-email">
            <div className="email">
              <input
                type="text"
                id="emails"
                onChange={handleChange}
                value={data.email}
              />
              <div className="underline" />
              <label>Email</label>
            </div>
          </div>
          <div className="form-phone">
            <div className="phone">
              <input
                type="number"
                id="phones"
                onChange={handleChange}
                value={data.phone}
              />
              <div className="underline" />
              <label>phone</label>
            </div>
          </div>
          <div className="form-subject">
            <div className="subject">
              <input
                type="text"
                id="subjects"
                onChange={handleChange}
                value={data.subject}
              />
              <div className="underline" />
              <label>Subject</label>
            </div>
          </div>
          <div className="form-message">
            <div className="message">
              <input
                type="text"
                id="messages"
                name="message"
                onChange={handleChange}
                value={data.message}
              />
              <div className="underline" />
              <label>message</label>
            </div>
          </div>
        </div>
      </form>

      <div className="btn-submit">
        <button className="contact-submit" onClick={handleSubmit}>
          Submit
        </button>
        <div>
          <button className="show-contact" onClick={showContact}>
            Show contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
