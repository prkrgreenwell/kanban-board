/** @format */

const { default: mongoose } = require("mongoose");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
    minlength: 1,
  },
  project: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
