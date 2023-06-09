import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import { API_URL } from './config';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/todos`)
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