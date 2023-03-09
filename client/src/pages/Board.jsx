import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PROJECT } from "../utils/queries";
import AddTask from "../components/AddTask";
import TaskCard from '../components/TaskCard'
import Modal from "react-modal";


const Board = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [task, setTask] = useState({});
	const { projectId } = useParams();
	const { id } = useParams();


	const { data } = useQuery(QUERY_PROJECT, {
		variables: { projectId: projectId },
	});

	const projects = data?.projects || [];
	console.log(projects);

	const handleClick = () => {
		setShowModal(true);
	};

	const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			<div className="container-fluid pt-3">
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
										<button onClick={closeModal}>Close Modal</button>
									</Modal>
								</div>
								<div className="items border border-light">
									<div className="card text-bg-secondary">
										<div className="card-body p-2">
											{task.id && <TaskCard data={data} />}
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
									<button type="button" className="btn btn-dark ">
										+
									</button>
								</div>
								<div className="items border border-light">
									<div className="card text-bg-secondary">
										<div className="card-body p-2">
											<div className="card-title">TSK-1546</div>
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
