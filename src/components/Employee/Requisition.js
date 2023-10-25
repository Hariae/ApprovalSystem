import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
  documents,
  documentType,
  documentStatus
} from "../../dataLayer/documentsDb";

function Requisition(props) {
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0);
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handleCostChange(e) {
    setCost(e.target.value);
  }
  function clearState() {
    setDescription(null);
    setCost(0);
  }
  function addRequisition() {
    let document = {
      id: "010",
      type: documentType.REQUISITION,
      status: documentStatus.PENDING,
      createdAt: new Date(),
      createdBy: "Dark Knight",
      approver: "Shield",
      details: {
        description: description,
        cost: cost
      }
    };
    documents.push(document);
    props.handleClose();
    clearState();
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Requisition document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={handleDescriptionChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Cost</Form.Label>
              <Form.Control
                type="number"
                placeholder="$"
                value={cost}
                onChange={handleCostChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addRequisition}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Requisition;
