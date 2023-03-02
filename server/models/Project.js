/** @format */

const { Schema, model} = require("mongoose");
const Task = require("./Task");

const projectSchema = new Schema({
  //This is the name of the project
  title: {
    type: String,
    required: true,
  },
  tasks: [Task.schema],
});

const Project = model("Project", projectSchema);

module.exports = Project;
