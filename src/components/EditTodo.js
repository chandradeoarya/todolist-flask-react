import React, { useState } from "react";
import axios from "axios";

import { API_URL } from '../config';

function EditTodo({ todo, setEditing }) {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [isDone, setIsDone] = useState(todo.is_done);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API_URL}/todos/${todo.task_id}`, {
        title,
        description,
        is_done: isDone ? 1 : 0
      })
      .then((response) => {
        setEditing(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="isDone"
          checked={isDone}
          onChange={(e) => setIsDone(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="isDone">
          Done
        </label>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Update Task
      </button>
    </form>
  );
}

export default EditTodo;