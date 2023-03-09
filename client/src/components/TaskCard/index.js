function TaskCard(props) {
    console.log(props)
    return (
      <div className="card-body p-2">
        <div className="card-title">{props.data.project.projectTitle}</div>
        {props.data.tasks.map(task => (
          <div key={task._id} className="task">
            <p>{task.task}</p>
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