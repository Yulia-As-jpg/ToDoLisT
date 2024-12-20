import React from "react";

import TaskFilter from "./TaskFilter";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <span className="todo-count">1 Осталась</span>
            <TaskFilter />
            <button className="clear-completed btn">Очистить всё</button>
        </div>
    )
}

export default Footer;