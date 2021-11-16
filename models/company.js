const mongoose = require("mongoose");
const { Schema } = mongoose;

const peopleSchema = new Schema({
  name: { type: String, required: true, trim: true },
  slackId: { type: String, required: true, trim: true },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("People", peopleSchema);
