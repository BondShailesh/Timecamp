const express = require("express");
const userCredRouter = express.Router();
const userCredRoute = require("../schema/userCredScheme");
//
userCredRouter.get("/",async(req,res)=>{
    let user = await userCredRoute.find().populate("data")
    // .populate("blog")
    res.send(user)
})

userCredRouter.post("/",async(req,res)=>{
    try{
  let user = await userCredRoute.create(req.body)
  res.send(user)
    }catch(e){
        res.send(e.message)
        console.log(req.body);
    }
})

module.exports = userCredRouter