import React from "react";

import  NewTaskForm  from "./NewTaskForm";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  return (
    <div className="todo-app">
      <h1 className="todo-header">TODO</h1>
        <NewTaskForm />
        <Footer /> 
    </div>
  );
}




export default App;