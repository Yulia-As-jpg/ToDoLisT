import React from "react";

import "./NewTaskForm.css";

const NewTaskForm = () => {
    return (
        <div>
            <input className="new-todo" type="text" placeholder="What needs to be done?"></input>
        </div>
    )
}

export default NewTaskForm;