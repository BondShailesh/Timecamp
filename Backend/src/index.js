const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const userDataRoute = require("./route/UserDataRoute");
const userCredRoute = require("./route/UserCredRoute");
const  jsonParser = bodyParser.json()
const app = express();
app.use(express.json())

const  cors = require('cors')
app.use(cors())
// app.use(express.jsonParser())

app.use("/userdata", userDataRoute)
app.use("/usercred", userCredRoute)

app.listen(8080, () => {
    mongoose.connect("mongodb+srv://Shailesh:12345@cluster0.gujnejd.mongodb.net/?retryWrites=true&w=majority")
    console.log("working");
})
