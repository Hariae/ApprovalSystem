import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { documents } from "../../dataLayer/documentsDb";
import { useEffect, useState } from "react";
function EmployeeDashboard(props) {
  const [documentContents, setDocumentContents] = useState(null);
  function getDocuments(emp) {
    return documents.map((doc) => {
      console.log(emp);
      if (doc.createdById === emp) {
        return (
          <tr key={doc.id}>
            <td>{doc.id}</td>
            <td>{doc.type}</td>
            <td>{JSON.stringify(doc.createdAt)}</td>
            <td>{JSON.stringify(doc.details)}</td>
            <td>{doc.approver}</td>
            <td>{doc.status}</td>
          </tr>
        );
      } else {
        return <></>;
      }
    });
  }

  useEffect(() => {
    // Code here will run after *every* render
    const fetchData = () => {
      setDocumentContents(getDocuments(props.employeeId));
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <Container>
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Document Type</th>
                <th>Created At</th>
                <th>Details</th>
                <th>Approver</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{documentContents}</tbody>
          </Table>
        </Container>
      </Container>
    </div>
  );
}

export default EmployeeDashboard;
