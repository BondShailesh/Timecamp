const express = require("express");
const userDataRouter = express.Router();
const userdataRoute = require("../schema/userdataSchema");
//
userDataRouter.get("/",async(req,res)=>{
    let user = await userdataRoute.find().populate("cred",{
        name:1,
        _id:0
    })
    res.send(user)
})

userDataRouter.get("/:id",async(req,res)=>{
    let user = await userdataRoute.findById(req.params._id)
    res.send(user)
})

userDataRouter.post("/",async(req,res)=>{
    try{
  let user = await userdataRoute.create(req.body)
  res.send(user)
    }catch(e){
        res.send(e.message)
        console.log(req.body);
    }
})

userDataRouter.delete("/",async(req,res)=>{
    try{
  let user = await userdataRoute.deleteOne({_id:req.params.id})
  res.send(user)
    }catch(e){
        res.send(e.message)
        console.log(req.body);
    }
})

module.exports = userDataRouter