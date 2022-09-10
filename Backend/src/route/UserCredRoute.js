const express = require("express");
const userCredRouter = express.Router();
const userCredRoute = require("../schema/userCredScheme");

userCredRouter.get("/", async (req, res) => {
    let user = await userCredRoute.find().populate("data")
    res.send(user)
})

userCredRouter.get("/:id", async (req, res) => {
    try{
        let userEmail = await userCredRoute.find({ email: req.params.id }).populate("data")
        if(userEmail.length>=1){           
            res.send(userEmail);
        }else{
            let user = await userCredRoute.find({ _id: req.params.id }).populate("data")
            res.send(user)
        }
      
       
    }catch(e){
     res.send("Credential Not Found")
    }

})

userCredRouter.post("/", async (req, res) => {
    try {
        let user = await userCredRoute.create(req.body)
        res.send(user)
    } catch (e) {
        res.send(e.message)
        console.log(req.body);
    }
})

userCredRouter.delete("/:id", async (req, res) => {
    try {
        let user = await userCredRoute.deleteOne({ _id: req.params.id })
        res.send(user)
    } catch (e) {
        res.send(e.message)
        console.log(req.body);
    }
})

module.exports = userCredRouter