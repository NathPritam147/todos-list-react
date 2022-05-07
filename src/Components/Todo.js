import React from "react";

export const Todo = (props) => {
  return (
    <div>
      <h4>{props.todo.SrNo}</h4>
      <p>{props.todo.task}</p>
      <p>{props.todo.description}</p>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => {
          props.onDelete(props.todo);
        }}>
        DELETE
      </button>
    </div>
  );
};
