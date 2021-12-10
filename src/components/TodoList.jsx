import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos ,filterTodo }) => {
  return (
    <div class="todo-container">
      <ul class="todo-list">
        {filterTodo.map((todo) => (
          <Todo
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
