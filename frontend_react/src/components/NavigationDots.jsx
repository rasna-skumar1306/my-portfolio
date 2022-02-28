import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "contact"].map((item, idx) => (
        //eslint-disable-next-line
        <a
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313BAC" } : {}}
          key={item + idx}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
