import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../Wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'abouts']";

    client
      .fetch(query)
      .then((data) => setAbouts(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <h2 className="head-text">
        About <span>me</span>
      </h2>
      <h4 className="head-text-2">
        I'm <span>an avid Cyber Security Enthusiast </span>
        and
        <br />
        <span> React UI Engineer </span>
        with a strong desire to work in these domains.
      </h4>
      <h4 className="head-text-2">
        I'm a <span>couch potato </span>
        who always finds
        <span> an easier solution </span>
        to every given problem.
      </h4>

      <div className="app__profiles">
        {abouts.map((about, idx) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={`${
              about.certLink ? "cursor-pointer" : ""
            } app__profile-item`}
            key={about.title + idx}
          >
            <a href={about?.certLink} target="_blank" rel="noreferrer noopener">
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
