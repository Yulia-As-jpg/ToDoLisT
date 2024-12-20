import React from 'react'

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import Footer from '../Footer/Footer'

import './App.css'

const App = () => {
  return (
    <div className="todo-app">
      <h1 className="todo-header">TODO</h1>
      <NewTaskForm />
      <Footer />
      <ul className="todo-list"></ul>
    </div>
  )
}

export default App
