const express = require("express");
// const bodyParser = require('body-parser')
const userDataRouter = express.Router();
const userdataRoute = require("../schema/userdataSchema");
// const  jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

userDataRouter.get("/", async (req, res) => {
    let user = await userdataRoute.find().populate("cred", {
        password: 0, data: 0, __v: 0
    })
    res.send(user)
})

userDataRouter.get("/:id", async (req, res) => {
    try {
        let user1 = await userdataRoute.find({ cred: { _id: req.params.id } })
        if (user1.length < 1) {
            let user2 = await userdataRoute.find({ _id: req.params.id })
            res.send(user2);
        } else {
            res.send(user1);
        }
    } catch (e) {
        res.status(404).send(e.message);
    }
})

userDataRouter.post("/", async (req, res) => {
    try {
        let user = await userdataRoute.create(req.body)
        res.send(user);
        console.log();
    } catch (e) {
        res.send(e.message)
    }
})

userDataRouter.delete("/:id", async (req, res) => {
    try {
        let user1 = await userdataRoute.find({ cred: { _id: req.params.id } })
        if(user1.length>=1){
            let userD = await userdataRoute.deleteMany({ cred: { _id: req.params.id } })
            res.send(userD);
        }else{
           let user = await userdataRoute.deleteOne({ _id: req.params.id })
           res.send(user);
        }

    } catch (e) {
        res.status(401).send(e.message)
    }
})

userDataRouter.patch("/:id", async (req, res) => {
    try {
          let user = await userdataRoute.updateOne({_id:req.params.id},{$set: {...req.body}})
        res.send(user)
    } catch (e) {
        res.status(401).send(e.message);
        console.log("something");
    }
})

module.exports = userDataRouter