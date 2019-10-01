import React from "react";


const Todo  = (props) => {
    return(
        <div className={`${props.task.completed ? 'task completed' : 'task'}`}
        onClick={() => props.toggleTask(props.task.id)}>
            <div>{props.task.task}</div>
        </div>
    )
}

export default Todo ;