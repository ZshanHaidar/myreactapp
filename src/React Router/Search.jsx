import React from "react";
import "./search.css";
import { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setimg] = useState("");

  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setimg(data)
  };
  return (
    <>
      <div className="input_div">
        <input
          type="text"
          placeholder="Search AnyThing"
          onChange={inputEvent}
          value={img}
        />
        {img === "" ? null : <Sresult name={img}/>}
      </div>
    </>
  );
};

export default Search;
