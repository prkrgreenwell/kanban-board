import React from 'react';

import { QUERY_PROJECTS } from '../utils/queries'

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Board = () => {

    const { projectId } = useParams();
     
    const { data } = useQuery (QUERY_PROJECTS, {
        variables:{ projectId: projectId}
    })

}

export default Board;