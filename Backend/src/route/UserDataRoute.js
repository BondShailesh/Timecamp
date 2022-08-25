const express = require("express");
const userDataRouter = express.Router();
const userdataRoute = require("../schema/userdataSchema");
//
userDataRouter.get("/",async(req,res)=>{
    let user = await userdataRoute.find().populate("cred",{
    })
    res.send(user)
})

userDataRouter.get("/:id",async(req,res)=>{
    let user = await userdataRoute.find({cred:{_id:req.params.id}})
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

userDataRouter.delete("/:id",async(req,res)=>{
    try{
  let user = await userdataRoute.deleteOne({_id:req.params.id})
  res.send(user)
    }catch(e){
        res.status(401).send(e.message)
    }
})

module.exports = userDataRouter