import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TASK } from '../../utils/mutations';

const AddTask = ({ projectId }) => {
	const [task, setTask] = useState('');
	const [project, setProject] = useState('');
	const [columnId, setColumnId] = useState('');

	const [addTask, { error }] = useMutation(ADD_TASK, {
		variables: { projectId, task, project, columnId },
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === 'task') {
			setTask(value);
		} else if (name === 'project') {
			setProject(value);
		} else if (name === 'columnId') {
			setColumnId(value);
		}
	};

	const handleFormSubmit = async (event) => {
		event.preventDefault();
		try {
			await addTask();
			setTask('');
			setProject('');
			setColumnId('');
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='container d-flex justify-content-center'>
			<div className='task-form'>
				<h3>Add Task</h3>
				<form onSubmit={handleFormSubmit}>
					<div className='form-group'>
						<label htmlFor='task'>Title:</label>
						<input
							type='text'
							className='form-control'
							id='task'
							name='task'
							placeholder='Enter task title'
							value={task}
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='project'>Project:</label>
						<input
							type='text'
							className='form-control'
							id='project'
							name='project'
							placeholder='Enter project description'
							value={project}
							onChange={handleInputChange}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='columnId'>Column ID:</label>
						<select
							className='form-control'
							id='columnId'
							name='columnId'
							value={columnId}
							onChange={handleInputChange}
						>
							<option value=''>Select column ID</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
						</select>
					</div>
					<button type='submit' className='btn'>
						Submit
					</button>
				</form>
				{error && <div>Error: {error.message}</div>}
			</div>
		</div>
	);
};

export default AddTask;
