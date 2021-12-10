import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodo, setFilterTodo] = useState([]);
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    LocalTodos();
  }, [status, todos]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todos.filter((item) => item.completed === true));
        break;
      case "uncompleted":
        setFilterTodo(todos.filter((item) => item.completed === false));
        break;
      default:
        setFilterTodo(todos);
        break;
    }
  };

  const LocalTodos = () => {

      localStorage.setItem("todos", JSON.stringify(todos));
    
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
    let localTodo = JSON.parse(  localStorage.getItem("todos"));
    setTodos(localTodo)
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Zaid Todo App</h1>
      </header>
      <Form
        setStatus={setStatus}
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList filterTodo={filterTodo} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
