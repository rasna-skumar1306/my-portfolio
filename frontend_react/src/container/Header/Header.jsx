import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../Wrapper";
import { images } from "../../constants";
import "./Header.scss";
import { useRef } from "react";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const renderingImages = [
  { src: images.react, name: "React" },
  { src: images.redux, name: "Redux" },
  { src: images.typescript, name: "Typescript" },
  { src: images.git, name: "Git" },
  { src: images.javascript, name: "Javascript" },
];

const Header = () => {
  const typingRef = useRef();

  useEffect(() => {
    typing();
  }, []);

  const sentences = [
    "Frontend Developer",
    "Web 3.0 Developer",
    "React Js Developer",
    "React UI Engineer",
    "Cyber Security Enthusiast",
    "Movie Buff",
  ];

  let cnt = 0;
  let idx = 0;
  let currentSentence = "";
  let letter = "";
  let deleting = false;

  const typing = () => {
    if (cnt === sentences.length) cnt = 0;

    currentSentence = sentences[cnt];
    if (!deleting) {
      letter = currentSentence.slice(0, ++idx);
    }
    if (deleting) {
      letter = currentSentence.slice(0, --idx);
    }

    let typeSpeed = 120;

    if (deleting) {
      typeSpeed /= 3;
    }

    typingRef.current.textContent = letter;
    if (!deleting && letter.length === currentSentence.length) {
      deleting = true;
      typeSpeed = 500;
    } else if (deleting && letter === "") {
      cnt++;
      idx = 0;
      deleting = false;
      typeSpeed /= 2;
    }
    setTimeout(() => typing(), typeSpeed);
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="text-left head-text">Rasswanth Senthilkumar</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">React UI Engineer</p>
            <p className="p-text">@ Propertyloop, London</p>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text">Incoming graduate student</p>
            <p className="p-text">Msc in Network and Information Security</p>
            <p className="p-text">@ Kingston University</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], y: [-100, 0] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <div className="app__header-textWrapper">
          I am a <span ref={typingRef}></span>
        </div>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {renderingImages.map((circle, index) => (
          <div key={`circle-${index}`}>
            <div className="circle-cmp app__flex">
              <img src={circle.src} alt="profile_bg" />
            </div>
            <p className="p-text">{circle.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
