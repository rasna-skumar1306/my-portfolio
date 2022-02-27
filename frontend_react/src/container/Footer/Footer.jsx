import React, { useState } from "react";
import { VscFilePdf } from "react-icons/vsc";
import { BiLoaderAlt } from "react-icons/bi";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    
    if (error) {
      setTimeout(() => setError(""), 2000);
    }
    setFormData({ ...formData, [name]: value });
  };

  const isEmpty = () =>
    formData.email === "" || formData.message === "" || !formData.name === "";

  const handleSubmit = () => {
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    if (!isEmpty) {
      setLoading(true);
      client.create(contact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    } else {
      setError("Please fill in all fields!");
    }
  };

  return (
    <>
      <h2 className="head-text">Have a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:rasswanth.senthilkumar@gmail.com" className="p-text">
            rasswanth.senthilkumar@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <VscFilePdf className="logo" />
          <a
            href="https://drive.google.com/file/d/1n8poNmVkGAMiux8xSxdXIRaHWwp-ogB_/view?usp=sharing"
            className="p-text"
            target="_blank"
            rel="noreferrer noopener"
          >
            My Resume/CV
          </a>
        </div>
        {/* <div className="app__footer-card">
          <img src={images.mobile} alt="email" />
          <a href="tel:+919487088723" className="p-text">
            +91-(948) 7088-723
          </a>
        </div> */}
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className={`${error ? "error" : ""} app__flex`}>
            <input
              type="text"
              className="p-text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>
          <div className={`${error ? "error" : ""} app__flex`}>
            <input
              type="email"
              className="p-text"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className={`${error ? "error" : ""} `}>
            <textarea
              name="message"
              cols="30"
              rows="10"
              onChange={handleChangeInput}
              value={message}
              className="p-text"
              placeholder="Leave a message here"
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? (
              <BiLoaderAlt className="app__footer-loader" fontSize={"1rem"} />
            ) : (
              ""
            )}
            {loading ? "Sending..." : "Send message"}
          </button>
          {error && <div className="error-msg">{error}</div>}
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
