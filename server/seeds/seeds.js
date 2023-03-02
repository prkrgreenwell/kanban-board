const db = require("../config/connection");
const { User, Project, Task } = require("../models");

const users = require("./projectSeeds.json");
const projects = require("./projectSeeds.json");
const tasks = require("./projectSeeds.json");

db.once("open", async () => {
	try {
	await User.deleteMany({});
	await Project.deleteMany({});
	await Task.deleteMany({});

	//create users
	const createdUsers = await User.create(users);

    // Map project usernames to user ids
    const userIdMap = createdUsers.reduce((map, user) => {
      map[user.username] = user._id;
      return map;
    }, {});

    // Seed projects
    for (const project of projects) {
      const userId = userIdMap[project.username];
      await Project.create({
        title: project.title,
        userId: userId,
      });
    }

    // Seed tasks
    const createdProjects = await Project.find({});
    const projectIdMap = createdProjects.reduce((map, project) => {
      map[project.title] = project._id;
      return map;
    }, {});

    for (const task of tasks) {
      const projectId = projectIdMap[task.project];
      await Task.create({
        title: task.title,
        projectId: projectId,
      });
    }

    console.log("Seeding complete!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});