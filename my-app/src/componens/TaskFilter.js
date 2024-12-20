import React from "react";

const TaskFilter = () => {
    return (
        <div>
            <button className="selected btn">Все</button>
            <button className="selected btn">Активные</button>
            <button className="selected btn">Завершонные</button>
        </div>
    )
}

export default TaskFilter;