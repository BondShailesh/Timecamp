import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";




const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login/>}></Route>
        <Route path="/auth/signup" element={<Signup/>}></Route>
       <Route path ="/" element = {<Home/>} ></Route>
      </Routes>
    </div>
  );
};

export default Allroute;