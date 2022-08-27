import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { loadData } from "../utils/localstorage";

const Privateroute = ({ children }) => {
  const data = loadData("userid");
  console.log(data);
  if (!data) {
    return <Navigate to="/auth/login"></Navigate>;
    
  } else {
    return children;
    
  }
};

export default Privateroute;
