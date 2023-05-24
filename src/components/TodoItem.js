import React from "react";
import axios from "axios";

function TodoItem({ todo, todos, setTodos }) {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:80/todos/${todo.task_id}`)
      .then(() => {
        setTodos(todos.filter((item) => item.task_id !== todo.task_id));
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.title}
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
