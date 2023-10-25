import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ActionDropdown from "../Utils/ActionDropdown";
function Manager() {
  return (
    <div className="container">
      <Container>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Document ID</th>
                <th>Document Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>0011</td>
                <td>Expense report</td>
                <td>
                  <ActionDropdown />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>0011</td>
                <td>Expense report</td>
                <td>
                  <ActionDropdown />
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>0011</td>
                <td>Expense report</td>
                <td>
                  <ActionDropdown />
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
}

export default Manager;
