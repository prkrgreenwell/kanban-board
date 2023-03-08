/** @format */

const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
    minlength: 1,
  },
  description: {
    type: String,
    maxLength: 280,
  },
  project: {
    type: String,
    required: true,
  },
  columnId: {
    type: Number,
    required: true,
  },
});

const Task = model("Task", taskSchema);

module.exports = Task;
