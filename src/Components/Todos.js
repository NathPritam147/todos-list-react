import React from "react";

import { Todo } from "./Todo.js";

export const Todos = (props) => {
  const todosStyle = {
    margin: "40px auto",
    minHeight: "3vh",
  };

  return (
    <div className="container my-3" style={todosStyle}>
      <h3 className="my-3">Todo List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <>
                <Todo todo={todo} key={todo.SrNo} onDelete={props.onDelete} />
                <hr />
              </>
            );
          })}
    </div>
  );
};
