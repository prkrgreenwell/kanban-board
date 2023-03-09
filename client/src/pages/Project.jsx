/** @format */

import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import TaskForm
// import TaskList

import { QUERY_USER, QUERY_ME } from "../utils/queries";

const Project = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid pt-3">
      <h3 className="font-weight-light text-white">Kanban Board</h3>
      <div className="row flex-row flex-sm-nowrap py-3">
        <div className="col-sm-6 col-md-4 col-xl-4">
          <div className="card text-bg-dark">
            <div className="card-body">
              <div className="container d-flex justify-content-between">
                <h6 className="card-title text-uppercase text-truncate py-2">
                  To Do
                </h6>
                <button type="button" className="btn btn-dark ">
                  +
                </button>
              </div>
              <div className="items border border-light">
                <div className="card text-bg-secondary">
                  <div className="card-body p-2">
                    <div className="card-title">TSK-154</div>
                    <p>This is a description of a item on the board.</p>
                    <div className="buttons">
                      <button className="btn btn-danger btn-sm">
                        Move back
                      </button>
                      <button className="btn btn-success btn-sm">
                        Move up
                      </button>
                    </div>
                  </div>
                </div>
                <div> &nbsp; </div>
                <div className="card text-bg-secondary">
                  <div className="card-body p-2">
                    <div className="card-title">TSK-154</div>
                    <p>This is a description of a item on the board.</p>
                    <div className="buttons">
                      <button className="btn btn-danger btn-sm">
                        Move back
                      </button>
                      <button className="btn btn-success btn-sm">
                        Move up
                      </button>
                    </div>
                  </div>
                </div>
                <div> &nbsp; </div>
                <div className="card text-bg-secondary">
                  <div className="card-body p-2">
                    <div className="card-title">TSK-154</div>
                    <p>This is a description of a item on the board.</p>
                    <div className="buttons">
                      <button className="btn btn-danger btn-sm">
                        Move back
                      </button>
                      <button className="btn btn-success btn-sm">
                        Move up
                      </button>
                    </div>
                  </div>
                </div>
                <div> &nbsp; </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 col-xl-4">
          <div className="card text-bg-dark">
            <div className="card-body">
              <div className="container d-flex justify-content-between">
                <h6 className="card-title text-uppercase text-truncate py-2">
                  In Progress
                </h6>
                <button type="button" className="btn btn-dark ">
                  +
                </button>
              </div>
              <div className="items border border-light">
                <div className="card text-bg-secondary">
                  <div className="card-body p-2">
                    <div className="card-title">TSK-154</div>
                    <p>This is a description of a item on the board.</p>
                    <div className="buttons">
                      <button className="btn btn-danger btn-sm">
                        Move back
                      </button>
                      <button className="btn btn-success btn-sm">
                        Move up
                      </button>
                    </div>
                  </div>
                </div>
                <div> &nbsp; </div>
                <div className="card text-bg-secondary">
                  <div className="card-body p-2">
                    <div className="card-title">TSK-154</div>
                    <p>This is a description of a item on the board.</p>
                    <div className="buttons">
                      <button className="btn btn-danger btn-sm">
                        Move back
                      </button>
                      <button className="btn btn-success btn-sm">
                        Move up
                      </button>
                    </div>
                  </div>
                </div>
                <div> &nbsp; </div>
                <div className="card text-bg-secondary">
                  <div className="card-body p-2">
                    <div className="card-title">TSK-154</div>
                    <p>This is a description of a item on the board.</p>
                    <div className="buttons">
                      <button className="btn btn-danger btn-sm">
                        Move back
                      </button>
                      <button className="btn btn-success btn-sm">
                        Move up
                      </button>
                    </div>
                  </div>
                </div>
                <div> &nbsp; </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="col-sm-6 col-md-4 col-xl-4">
          <div className="card text-bg-dark">
            <div className="card-body">
              <div className="container d-flex justify-content-between">
                <h6 className="card-title text-uppercase text-truncate py-2">
                  Completed
                </h6>
                <button type="button" className="btn btn-dark ">
                  +
                </button>
              </div>
              <div className="items border border-light">
                <div className="card text-bg-secondary">
                  <div className="card-body p-2">
                    <div className="card-title">TSK-154</div>
                    <p>This is a description of a item on the board.</p>
                    <div className="buttons">
                      <button className="btn btn-danger btn-sm">
                        Move back
                      </button>
                      <button className="btn btn-success btn-sm">
                        Move up
                      </button>
                    </div>
                  </div>
                </div>
                <div> &nbsp; </div>
                <div className="card text-bg-secondary">
                  <div className="card-body p-2">
                    <div className="card-title">TSK-154</div>
                    <p>This is a description of a item on the board.</p>
                    <div className="buttons">
                      <button className="btn btn-danger btn-sm">
                        Move back
                      </button>
                      <button className="btn btn-success btn-sm">
                        Move up
                      </button>
                    </div>
                  </div>
                </div>
                <div> &nbsp; </div>
                <div className="card text-bg-secondary">
                  <div className="card-body p-2">
                    <div className="card-title">TSK-154</div>
                    <p>This is a description of a item on the board.</p>
                    <div className="buttons">
                      <button className="btn btn-danger btn-sm">
                        Move back
                      </button>
                      <button className="btn btn-success btn-sm">
                        Move up
                      </button>
                    </div>
                  </div>
                </div>
                <div> &nbsp; </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
