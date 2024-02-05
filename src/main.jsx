import React from "react";
import ReactDOM from "react-dom/client";
import TodoForm from "./Home/TodoForm.jsx";
import NavBar from "./Home/NavBar/NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <TodoForm />
  </React.StrictMode>
);
