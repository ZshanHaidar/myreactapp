import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./BootStrapwebsite/Navbar";
import Home from "./BootStrapwebsite/Home";
import Service from "./BootStrapwebsite/Service";
import About from "./BootStrapwebsite/About";
import Contact from "./BootStrapwebsite/Contact";
import Footer from "./BootStrapwebsite/Footer";
import './index.css'

const AppBootstrap = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact caseSensitive={false} path="/" element={<Home />} />
        <Route
          exact
          caseSensitive={false}
          path="/Contact"
          element={<Contact />}
        />
        <Route exact caseSensitive={false} path="/About" element={<About />} />
        <Route
          exact
          caseSensitive={false}
          path="/Service"
          element={<Service />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default AppBootstrap;
