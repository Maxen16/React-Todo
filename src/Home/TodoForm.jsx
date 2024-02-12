import { useState, useEffect } from "react";
import Card from "./Card/Card.jsx";
import EditTodoModal from "./Modal/Modal.jsx";
import "./styles.css";

export default function TodoForm() {
  const [newItem, setNewItem] = useState("");
  const [todo, setNewTodo] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];

    return JSON.parse(localValue);
  });
  const [modalShow, setModalShow] = useState(false);
  const [currentTaskName, setCurrentTaskName] = useState("");
  const [editedTaskName, setEditedName] = useState("");
  const [currentTaskId, setTaskId] = useState("");

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo));
  }, [todo]);

  function handleTaskNameEdit(event) {
    setEditedName(event.target.value);
  }

  function EditTodo(status, id) {
    setModalShow(status);
    setTaskId(id);
    todo.map((todo) => {
      if (todo.id == id) {
        setCurrentTaskName(todo.taskName);
      }
    });
  }

  function handleSubmit() {
    setNewTodo((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          taskName: newItem,
          status: false,
        },
      ];
    });
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setNewTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id == id) {
          return { ...todo, status: completed };
        }
        return todo;
      });
    });
  }

  function saveChanges(id) {
    setNewTodo((currentTodo) => {
      return currentTodo.map((todo) => {
        if (todo.id == id) {
          return { ...todo, taskName: editedTaskName };
        }
        return todo;
      });
    });
    setModalShow(false);
  }

  function deleteTodo(id) {
    setNewTodo((currentTodo) => {
      return currentTodo.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="form-body">
      <div>
        <div className="todo-counter-container">
          <div className="todo-counter-text">
            <h4>Todo Done</h4>
            <h6>Keep it up</h6>
          </div>
          <div className="todo-counter">
            <div>
              <span>{todo.filter((item) => item.status === true).length}</span>{" "}
              / <span>{todo.length}</span>
            </div>
          </div>
        </div>
        <div className="todo-form">
          <div className="form-row">
            <input
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="todo-input"
              type="text"
              id="todo-item"
              placeholder="write your next task"
            />
          </div>
          <div className="todo-add-btn" onClick={handleSubmit}>
            <i className="bi bi-plus"></i>
          </div>
        </div>
        <div className="todo-cards-container">
          {todo.map((todoItem) => {
            return (
              <Card
                key={todoItem.id}
                todoItem={todoItem}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
                setModalShow={setModalShow}
                EditTodo={EditTodo}
              />
            );
          })}
        </div>
        <EditTodoModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          currentTaskName={currentTaskName}
          handleTaskNameEdit={handleTaskNameEdit}
          saveChanges={saveChanges}
          id={currentTaskId}
        />
      </div>
    </div>
  );
}
