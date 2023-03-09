import React from 'react';

function Board (props)  {

    const drop = e => {
      e.preventDefault();
      const cardId = e.dataTransfer.getData('cardId');
  
      const card = document.getElementById(cardId);
      card.style.display = 'block';
  
      e.target.appendChild(card);
    }
  
    const dragOver = e => {
      e.preventDefault();
    }
    
  
    
    
    
   
  
    return (
      <div 
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
      >
        
       {props.children}
  
    
        
      
       </div>
     
    );
  };
  
  export default Board;
  