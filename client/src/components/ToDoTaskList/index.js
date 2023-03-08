/** @format */

import React from "react";

const ToDoTaskList = ({ tasks }) => {
  return (
    <div>
      {tasks &&
        tasks.map((task) => (
          <div key={task._id} className="card text-bg-secondary">
            <div className="card-body p-2">
              <div className="card-title">{task.task}</div>
              <p>{task.description}</p>
              <div className="buttons">
                <button className="btn btn-danger btn-sm">Move back</button>
                <button className="btn btn-success btn-sm">Move up</button>
              </div>
            </div>
          </div>
        ))}

      <div> &nbsp; </div>
    </div>
  );
};
