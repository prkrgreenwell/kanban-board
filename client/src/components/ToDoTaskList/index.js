/** @format */

import React from "react";

const ToDoTaskList = ({ tasks, description, columnId }) => {
  return (
    <div>
      <div className="card text-bg-secondary">
        <div className="card-body p-2">
          <div className="card-title">TSK-154</div>
          <p>This is a description of a item on the board.</p>
          <div className="buttons">
            <button className="btn btn-danger btn-sm">Move back</button>
            <button className="btn btn-success btn-sm">Move up</button>
          </div>
        </div>
      </div>
      <div> &nbsp; </div>
    </div>
  );
};
