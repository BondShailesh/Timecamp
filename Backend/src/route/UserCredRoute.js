const express = require("express");
const userCredRouter = express.Router();
const userCredRoute = require("../schema/userCredScheme");

userCredRouter.get("/", async (req, res) => {
    let user = await userCredRoute.find().populate("data")
    res.send(user)
})

userCredRouter.get("/:id", async (req, res) => {
    let user = await userCredRoute.find({ _id: req.params.id }).populate("data")
    res.send(user)
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