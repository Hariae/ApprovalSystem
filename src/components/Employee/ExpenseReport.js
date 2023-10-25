import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
  documents,
  documentType,
  documentStatus
} from "../../dataLayer/documentsDb";

function ExpenseReport(props) {
  const [description, setDescription] = useState("");
  const [total, setTotal] = useState(0);

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }
  function handleTotalChange(e) {
    setTotal(e.target.value);
  }
  function addExpense() {
    console.log(props.employee);
    let document = {
      id: documents.length + 1 + "",
      type: documentType.EXPENSE_REPORT,
      status: documentStatus.PENDING,
      createdAt: new Date(),
      createdBy: props.employee.name,
      createdById: props.employee.id,
      approverId: props.employee.reportsTo,
      details: {
        description: description,
        total: total
      }
    };
    documents.push(document);
    props.handleClose();
    clearState();
  }

  function clearState() {
    setDescription(null);
    setTotal(0);
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Expense Report</Modal.Title>
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
              <Form.Label>Total</Form.Label>
              <Form.Control
                type="number"
                placeholder="$0.0"
                value={total}
                onChange={handleTotalChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addExpense}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExpenseReport;
