/** @format */

const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
	task: {
		type: String,
		required: true,
		minlength: 1,
	},
	taskDescription: {
		type: String,
		required: true,
	},
	columnId: {
		type: String,
		required: true,
	},
	projectId: {
		type: Schema.Types.ObjectId,
		ref: "Project",
		required: true,
	},
});

const Task = model("Task", taskSchema);

module.exports = Task;
