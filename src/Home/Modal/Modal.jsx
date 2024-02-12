import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";
import "./modal.css";

function EditTodoModal({
  show,
  onHide,
  currentTaskName,
  handleTaskNameEdit,
  saveChanges,
  id,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form.Group className="mb-3" controlId="task.ControlInput1">
          <Form.Label>Edit task</Form.Label>
          <Form.Control
            type="text"
            placeholder="Eat five star do nothing"
            autoFocus
            defaultValue={currentTaskName}
            onChange={(e) => handleTaskNameEdit(e)}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button className="custom-btn" onClick={() => saveChanges(id)}>
          Save Changes
        </Button>
        <Button className="custom-btn" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

EditTodoModal.propTypes = {
  show: PropTypes.bool.isRequired,
  currentTaskName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  handleTaskNameEdit: PropTypes.func.isRequired,
  saveChanges: PropTypes.func.isRequired,
};

export default EditTodoModal;
