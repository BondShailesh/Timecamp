const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  project: String,
  task: String,
  note: String,
  entrydate: String,
  startTime: {type:String,required:true},
  endTime: {type:String,required:true},
  cred:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userCred",
  },
});

const userData = mongoose.model("userData", userschema);

module.exports = userData;
