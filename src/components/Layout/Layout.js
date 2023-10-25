import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";
import { employeeRoles, employeesMap } from "../../dataLayer/employeesDb";
function Layout(props) {
  const [employee, setEmployee] = useState("Select Employee");
  const [employeesList, setEmployeesList] = useState(null);

  function handleChange(e) {
    setEmployee(e.target.name);
    () => props.handleEmployeeChange(e);
  }

  function getEmployees() {
    let employeeListContent = [];
    employeesMap.forEach((value, index) => {
      // console.log(value);

      let content = (
        <NavDropdown.Item
          key={index}
          href="#action/3.1"
          onClick={handleChange}
          name={value.name}
          id={value.id}
        >
          {value.name}
        </NavDropdown.Item>
      );
      employeeListContent.push(content);
    });
    return employeeListContent;
  }

  useEffect(() => {
    const fetchData = () => {
      const data = getEmployees();
      setEmployeesList(data);
    };
    fetchData();
  }, []);

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="home">Go to home</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title={employee}
              menuVariant="dark"
            >
              {employeesList}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;
