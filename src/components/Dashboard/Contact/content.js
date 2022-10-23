import React, { useState, useEffect } from "react";
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
  const [getContact, setGetContact] = useState([]);

  useEffect(() => {
    async function contactProfile() {
      console.log("clicked show contact");
      const response = await axios
        .get("http://api.allureinternational.com.np/api/get-all-contact")
        .then((res) => {
          console.log(res.data.data, "then");
          setGetContact(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    contactProfile();
  }, []);

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
        </div>
          <div >
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Message</th>
                </tr>
              </thead>
        {getContact.map((element, index) => (
              <tbody key={index}>
                <tr>
                  <th scope="row">{element.name}</th>
                  <td>{element.email}</td>
                  <td>{element.phone}</td>
                  <td>{element.subject}</td>
                  <td>{element.message}</td>
                </tr>
              </tbody>
                ))}
            </table>
          </div>
     
    </div>
  );
};

export default Content;
