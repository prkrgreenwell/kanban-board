import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TASKS } from "../utils/queries";
import AddTask from "../components/AddTask";
import TaskCard from "../components/TaskCard";
import Modal from "react-modal";

const Board = (props) => {
	const { projectId } = useParams();
	const [showModal, setShowModal] = useState(false);
	const { data, error } = useQuery(QUERY_TASKS, {
		variables: { projectId: projectId },
		skip: !projectId,
	});

	if (error) {
		return <p>Error: {error.message}</p>;
	}

	const tasks = data ? data.tasks : [];

	const handleClick = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			<div className="container-fluid pt-3 mt-5">
				<div className="row flex-row flex-sm-nowrap py-3">
					<div className="col-sm-6 col-md-4 col-xl-4">
						<div className="card text-bg-dark">
							<div className="card-body">
								<div className="container d-flex justify-content-between">
									<h6 className="card-title text-uppercase text-truncate py-2">
										To Do
									</h6>
									<button
										type="button"
										className="btn btn-dark"
										onClick={handleClick}
									>
										+
									</button>

									<Modal isOpen={showModal} onRequestClose={closeModal}>
										<AddTask projectId={projectId} closeModal={closeModal} />
										<button className="btn btn-danger" onClick={closeModal}>
											Close
										</button>
									</Modal>
								</div>
								<div className="items border border-light">
									<div className="card text-bg-secondary">
										<div className="card-body p-2">
											<TaskCard tasks={tasks} columnId="To Do" />
										</div>
									</div>
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
								</div>
								<div className="items border border-light">
									<div className="card text-bg-secondary">
										<div className="card-body p-2">
											<TaskCard tasks={tasks} columnId="In Progress" />
										</div>
									</div>
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
								</div>
								<div className="items border border-light">
									<div className="card text-bg-secondary">
										<div className="card-body p-2">
											<TaskCard tasks={tasks} columnId="Done" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Board;
