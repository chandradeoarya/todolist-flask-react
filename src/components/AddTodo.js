import React, { useState } from "react";
import axios from "axios";

import { API_URL } from '../config';

function AddTodo({ todos, setTodos }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/todos`, { title })
      .then((response) => {
        setTodos([...todos, response.data.newly_added_task]);
        setTitle("");
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
      <button type="submit" className="btn btn-primary mt-3">
        Add Task
      </button>
    </form>
  );
}

export default AddTodo;