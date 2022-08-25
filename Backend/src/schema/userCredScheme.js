const mongoose = require("mongoose");

const userCredRoute = new mongoose.Schema({
  email: { type: String, required: true },
  password:{ type: String, required: true },
  name: { type: String},
  data: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "userData",
    },
  ],
});

const userCred = mongoose.model("userCred", userCredRoute);

module.exports = userCred;
