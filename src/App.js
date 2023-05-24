import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:80/todos")
      .then((response) => {
        setTodos(response.data.tasks);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return (
    <div className="App container">
      <h1 className="mt-3">Todo List</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
