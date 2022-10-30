import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Challenge1 from "./Challenge1";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppBootstrap from "./AppBootstrap";

ReactDOM.render(
  <>
    {/* <Challenge1 /> */}
    <BrowserRouter>
      {/* <App/>  */}
      <AppBootstrap />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
