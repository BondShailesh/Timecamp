const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const cors = require('cors')
const userDataRoute = require("./route/UserDataRoute");
const userCredRoute = require("./route/UserCredRoute");

const app = express();

app.use(express.json())
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use("/userdata", userDataRoute)
app.use("/usercred", userCredRoute)

app.listen(8080, () => {
    mongoose.connect("mongodb+srv://Shailesh:12345@cluster0.gujnejd.mongodb.net/?retryWrites=true&w=majority")
    console.log("working");
})
