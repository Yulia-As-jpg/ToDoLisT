import React from 'react';

const TaskList = () => {
    return (
        <div className='main'>
            <input className='tooggle' type="checkbox" />
            <span>Task 1</span>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    )
}

export default TaskList