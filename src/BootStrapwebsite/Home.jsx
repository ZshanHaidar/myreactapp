import React from "react";
import { NavLink } from "react-router-dom";
import web from "./img/best-seller.png";
import web2 from "./img/reading-book.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        pagename="Home"
        btnname="Get Started"
        imgsrc={web}
        visit="/service"
      />
    </>
  );
};

export default Home;
