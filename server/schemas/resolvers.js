const {
	AuthenticationError,
	UserInputError,
} = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { User, Project, Task } = require("../models");

const resolvers = {
	Query: {
		//Fetch all projects for a user
		projects: async (parent, args, context) => {
			if (!context.user) {
				throw new AuthenticationError("Not logged in");
			}
			const projects = await Project.find({
				userId: context.user._id,
			}).populate("tasks");
			return projects;
		},

		//Get project by Id
		project: async (parent, { projectId }) => {
			if (!projectId) {
				throw new AuthenticationError("No project with this ID");
			}
			const project = await Project.findById(projectId).populate("tasks");
			return project;
		},

		user: async (parent, { username }) => {
			return User.findOne({ username }).populate("projects");
		},

		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id }).populate("projects");
			}
			throw new AuthenticationError("You need to be logged in!");
		},

		//Fetch all tasks for a project
		tasks: async (parent, { projectId }) => {
			const tasks = await Task.find({ projectId });
			return tasks;
		},
	},
	Mutation: {
		addProject: async (_parent, { projectTitle }, context) => {
			console.log(projectTitle);
			if (context.user) {
				const project = await Project.create({
					projectTitle,
					userId: context.user.username,
				});
				console.log(project._id);
				await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $addToSet: { projects: project._id } }
				);
				return project;
			}
			throw new AuthenticationError("Not logged in");
		},

		addTask: async (
			parent,
			{ projectId, task, taskDescription, columnId },
			context
		) => {
			if (!context.user) {
				throw new AuthenticationError("Not logged in");
			}
			const addNewTask = await Task.create({
				projectId,
				task,
				taskDescription,
				columnId,
			});
			return addNewTask;
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError("No user found with this email address");
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);

			return { token, user };
		},
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},
	},
};

module.exports = resolvers;
