const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  ipAddress: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  loginTime: {
    type: Date,
    default: Date.now,
  },
  action: {
    type: String,
    required: true,
  },
  riskPoints: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Activity", activitySchema);