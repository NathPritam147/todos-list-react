import "./App.css";

import Header from "./Components/Header.js";
import { Todos } from "./Components/Todos.js";
import { Footer } from "./Components/Footer.js";
import React, { useState } from "react";
import { AddTodo } from "./Components/AddTodo";
import { About } from "./Components/About";
import { Router, Routes, Route } from "react-router-dom";

export default function App() {
  let initTodo = [];

  if (localStorage.getItem("todos") !== null) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  let onDelete = (todo) => {
    console.log("I am on delete", todo);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, description) => {
    console.log("Adding todo ", title, description);

    const myTodo = {
      SrNo: todos.length === 0 ? 1 : todos[todos.length - 1].SrNo + 1,
      task: title,
      description: description,
    };

    setTodos([...todos, myTodo]);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <>
      <Router>
        <Header title="My Todo List" searchBar={true} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            } />
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
