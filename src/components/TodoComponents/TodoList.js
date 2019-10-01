// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList(props) {
return(
    <div className='todoList'>
        {props.displayList.map(task => {
                return <Todo task={task} toggleTask={props.toggleTask} />;
            })}
    </div>
)
}

export default TodoList;