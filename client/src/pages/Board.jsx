import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECT } from '../utils/queries';
import AddTask from '../components/AddTask';

const Board = () => {
  const { projectId } = useParams();

  const { data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
    
  });

  return (
    <div>
      <h1>{data?.project?.projectTitle}</h1>
      <AddTask projectId={projectId} />
    </div>
  );
};

export default Board;
