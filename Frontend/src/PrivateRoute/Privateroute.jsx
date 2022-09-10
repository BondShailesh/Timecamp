import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { loadData } from "../utils/localstorage";

const Privateroute = ({ children }) => {
  const data = loadData("loginid");
  console.log(data);
  if (data===null) {
    return <Navigate to="/auth/login"></Navigate>;
    
  } else {
    return children;
    
  }
};

export default Privateroute;
