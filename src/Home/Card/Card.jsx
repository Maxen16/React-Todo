import "./card.css";
import PropTypes from "prop-types";

const Card = ({ todoItem, toggleTodo, deleteTodo }) => {
  return (
    <div className="card-container" id={todoItem.id}>
      <div className="card-left">
        <div className="todo-checkbox">
          <input
            type="checkbox"
            checked={todoItem.status}
            onChange={(e) => toggleTodo(todoItem.id, e.target.checked)}
          />
        </div>
        <div className={`todo-name ${todoItem.status ? "completed-task" : ""}`}>
          <span>{todoItem.taskName}</span>
        </div>
      </div>
      <div className="todo-action-container">
        <i className="bi bi-pencil-square"></i>
        <i className="bi bi-trash3" onClick={() => deleteTodo(todoItem.id)}></i>
      </div>
    </div>
  );
};

Card.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    taskName: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default Card;
