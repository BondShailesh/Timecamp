import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import BookDemo from "../Sauravcomp/BookDemo";
import Main from "../Sauravcomp/Main";
import MainContent from "../Sauravcomp/MainContent";




const Allroute = () => {
  return (
    <div>
      <Routes>
        <Route path="/auth/login" element={<Login/>}></Route>
        <Route path="/auth/signup" element={<Signup/>}></Route>
       <Route path ="/" element = {<Home/>} ></Route>
       <Route path= "/app" element ={<Main/>}></Route>
       <Route path= "/bookdemo" element ={<BookDemo/>}></Route>
      </Routes>
    </div>
  );
};

export default Allroute;