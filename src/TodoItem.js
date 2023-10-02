import React from "react";

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <span className="created-time">{`Created at ${todo.createdTime}`}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
