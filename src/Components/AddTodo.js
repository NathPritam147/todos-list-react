import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title or Description cannot be empty!");
    } else {
      props.addTodo(title, description);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="container my-3">
      <h3>Add Items to TODO List</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            TODO Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            TODO Description
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>
        <button type="submit" className="btn btn-success">
          ADD TODO
        </button>
      </form>
    </div>
  );
};
