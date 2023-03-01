/** @format */

const mongoose = require("mongoose");

const { Schema } = mongoose;
const Task = require("./Task");

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [Task.Schema],
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
