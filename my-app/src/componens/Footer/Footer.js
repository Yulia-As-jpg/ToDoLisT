import React from 'react'

import TaskFilter from '../TaskFilter/TaskFilter'
import './Footer.css'

const Footer = () => {
  // const cleaningForm = () => {

  // }
  return (
    <div className="footer">
      <span className="todo-count">1 Осталась</span>
      <TaskFilter />
      <button className="clear-completed btn" onClick={console.log('ggg')}>
        Очистить всё
      </button>
    </div>
  )
}

export default Footer
