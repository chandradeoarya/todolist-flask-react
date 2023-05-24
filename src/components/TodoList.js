import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <TodoItem key={todo.task_id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;
