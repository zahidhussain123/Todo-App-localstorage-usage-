import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const changeHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value)
  };
  return (
    <div>
      <form>
        <input
          value={inputText}
          onChange={changeHandler}
          type="text"
          className="todo-input"
          placeholder="Enter work here..."
        />
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
