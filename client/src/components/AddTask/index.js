import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TASK } from "../../utils/mutations";
import { useParams } from "react-router-dom";

const AddTask = (props) => {
	const { closeModal } = props;
	const [task, setTask] = useState("");
	const [taskDescription, setDescription] = useState("");
	const [columnId, setColumnId] = useState("");
	const { projectId } = useParams();

	const [addTask, { error }] = useMutation(ADD_TASK, {});

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		if (name === "task") {
			setTask(value);
		} else if (name === "taskDescription") {
			setDescription(value);
		} else if (name === "columnId") {
			setColumnId(value);
		}
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			const { data } = await addTask({
				variables: { projectId, task, taskDescription, columnId },
			});
			closeModal();
			window.location.reload();
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="d-flex justify-content-center">
			<div className="task-form">
				<h3>Add Task</h3>
				<form onSubmit={handleFormSubmit}>
					<div className="form-group">
						<label htmlFor="task">Title:</label>
						<input
							type="text"
							className="form-control"
							id="task"
							name="task"
							placeholder="Enter task title"
							value={task}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="taskDescription">
							Enter your Task description:
						</label>
						<input
							type="text"
							className="form-control"
							id="taskDescription"
							name="taskDescription"
							placeholder="Enter task description"
							value={taskDescription}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="columnId">
							Select which column to add the task to:
						</label>
						<select
							className="form-control"
							id="columnId"
							name="columnId"
							value={columnId}
							onChange={handleInputChange}
						>
							<option value="">Select a column</option>
							<option value="To Do">To Do</option>
							<option value="In Progress">In Progress</option>
							<option value="Done">Done</option>
						</select>
					</div>
					<button type="submit" className="btn">
						Submit
					</button>
				</form>
				{error && <div>Error: {error.message}</div>}
			</div>
		</div>
	);
};

export default AddTask;
