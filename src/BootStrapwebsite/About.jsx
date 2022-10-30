import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from "./img/best-seller.png";
import web2 from "./img/reading-book.png";

const About = () => {
  return (
    <>
      <Common
        pagename="About"
        btnname="Contact Now"
        imgsrc={web2}
        visit="/contact"
      />
    </>
  );
};

export default About;
