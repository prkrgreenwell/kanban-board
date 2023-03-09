import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PROJECT } from '../utils/queries';
import AddTask from '../components/AddTask';
import Card from '../components/Card/Card';
import Column from '../components/Column/Column'


function Board ()  {

  
  const { projectId } = useParams();

  const { data } = useQuery(QUERY_PROJECT, {
    variables: { projectId: projectId },
  });

  
  
  
 

  return (
    <div className='board'>
      
      <Column id="todo" className="column">
        <Card id="task" className='card' draggable = "true">
          <p> task 1</p>
        </Card>
      </Column>
      <Column id="doing" className="column">
        <Card id="task" className='card' draggable = "true">
          <p> task 2</p>
        </Card>
      </Column>
      <Column id="done" className="column">
        <Card id="task" className='card' draggable = "true">
          <p> task 3</p>
        </Card>
      </Column>
    


    
     </div>
   
  );
};

export default Board;
