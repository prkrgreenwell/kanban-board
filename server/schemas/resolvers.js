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

		//Fetch all tasks for a project
		tasks: async (parent, { projectId }, { user }) => {
			if (!user) {
				throw new AuthenticationError("You need to be logged in view tasks.");
			}
			const project = await Project.findById(projectId);
			if (!project) {
				throw new UserInputError("No project with ths id");
			}
			if (project.userId.toString() !== user._id.toString()) {
				throw new AuthenticationError(
					"You are not authorized to see tasks for this project."
				);
			}

			//Get tasks associated with the project
			const tasks = await Task.find({ projectId });
			return tasks;
		},
	},
	Project: {
		//Fetch all tasks associated with a project
		tasks: async (parent) => {
			const tasks = await Task.find({ projectId: parent._id });
			return tasks;
		},

		//Fetch the user associated with a project
		user: async (parent) => {
			const user = await User.findById(parent.userId);
			return user;
		},
	},
	Mutation: {
		createProject: async (parent, { title }, context) => {
			if (!context.user) {
				throw new AuthenticationError("Not logged in");
			}
			const project = await Project.create({ title, userId: context.user._id });
			return project;
		},

		createTask: async (parent, { title, projectId }, context) => {
			if (!context.user) {
				throw new AuthenticationError("Not logged in");
			}
			const task = await Task.create({ title, projectId });
			return task;
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
