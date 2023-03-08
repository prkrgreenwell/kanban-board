/** @format */

const { Schema, model } = require('mongoose');
const Task = require('./Task');

const projectSchema = new Schema({
	//This is the name of the project
	projectTitle: {
		type: String,
		required: true,
		allowNull: false
	},
	tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

const Project = model('Project', projectSchema);

module.exports = Project;
