import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import ExpenseReport from "./ExpenseReport";
import Requisition from "./Requisition";
import EmployeeDashboard from "./EmployeeDashboard";
function Employee(props) {
  const [showExpenseReport, setshowExpenseReport] = useState(false);

  const handleCloseExpenseReport = () => setshowExpenseReport(false);
  const handleShowExpenseReport = () => setshowExpenseReport(true);

  const [showRequisition, setshowRequisition] = useState(false);

  const handleCloseRequisition = () => setshowRequisition(false);
  const handleShowRequisition = () => setshowRequisition(true);

  return (
    <div className="container">
      <Container>
        <Container>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Create Document +
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                onClick={handleShowExpenseReport}
              >
                Expense Report
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" onClick={handleShowRequisition}>
                Requisition document
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
        <Container>
          <ExpenseReport
            employee={props.employee}
            show={showExpenseReport}
            handleClose={handleCloseExpenseReport}
          />
        </Container>
        <Container>
          <Requisition
            employee={props.employee}
            show={showRequisition}
            handleClose={handleCloseRequisition}
          />
        </Container>
        <Container className="mt-3">
          <EmployeeDashboard employeeId={props.employeeId} />
        </Container>
      </Container>
    </div>
  );
}

export default Employee;
