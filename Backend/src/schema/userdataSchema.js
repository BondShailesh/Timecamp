const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  email: String,
  password: String,
  task: String ,
  note: String,
  entrydate:Date,
  startTime: String,
  endTime: String,
  cred: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userCred",
    },
});

const userData = mongoose.model("userData", userschema);

module.exports = userData;
