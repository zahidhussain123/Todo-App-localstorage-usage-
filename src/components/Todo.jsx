import React from "react";

const Todo = ({text ,todo ,todos , setTodos}) => {
  
  const handleDelete = () => {
    setTodos(todos.filter(e=> e.id !== todo.id))
  }
  const handleComplete = () =>{
    setTodos(todos.map((item)=>{
      if(item.id === todo.id){
        return {
          ...item, completed:!item.completed

      }
      }
      return item ;
    }))
  }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={handleComplete} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
