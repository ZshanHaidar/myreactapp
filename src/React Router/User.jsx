import React from "react";
import { useLocation, useParams, useNavigate  } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  console.log(navigate)
  return (
    <>
      <h1>
        Hello this is {fname} {lname} page
      </h1>
      <h1>My Current Location is {location.pathname}</h1>
      {location.pathname === `/user/Zeeshan/Haidar` ?
      (<button onClick={()=>navigate('/')}>Click Me</button>) : null
      }
    </>
  );
};

export default User;
