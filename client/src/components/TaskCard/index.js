function TaskCard({ tasks, columnId }) {
	const filteredTasks = tasks.filter((task) => task.columnId === columnId);
	return (
		<div className="card-body p-2">
			{filteredTasks.map((task) => (
				<div key={task._id} className="task">
					<div className="card-title">{task.task}</div>
					<p>{task.taskDescription}</p>
					<div className="buttons">
						<button className="btn btn-danger btn-sm">Move back</button>
						<button className="btn btn-success btn-sm">Move up</button>
					</div>
				</div>
			))}
		</div>
	);
}

export default TaskCard;
