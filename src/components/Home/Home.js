import Layout from "../Layout/Layout";
import Container from "react-bootstrap/Container";
import Employee from "../Employee/Employee";
import Dropdown from "react-bootstrap/Dropdown";
import Manager from "../Manager/Manager";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Ceo from "../Ceo/Ceo";
import { useState, useEffect } from "react";
import { employeeRoles, employeesMap } from "../../dataLayer/employeesDb";

function Home() {
  //const [roles, setRoles] = useState([]);
  const [rolesList, setRolesList] = useState(null);
  const [role, setRole] = useState("");
  //const [employee, setEmployee] = useState(null);
  const [employeeName, setEmployeeName] = useState("Select Employee");
  const [employeeId, setEmployeeId] = useState("");
  const [employeesList, setEmployeesList] = useState(null);
  const [tab, setTab] = useState(null);

  function handleChange(e) {
    // console.log("emp", emp);
    // setEmployee(emp);
    setEmployeeName(e.target.name);
    setRolesList(getRoles(e.target.id));
    setEmployeeId(e.target.id);
    setRole(null);
    setTab(null);
  }

  function getRoles(emp) {
    let roles = employeesMap.get(emp).roles;
    return roles.map((role, index) => {
      return (
        <Dropdown.Item
          key={index}
          href="#/action-1"
          onClick={handleRoleChange}
          role={role}
        >
          {role}
        </Dropdown.Item>
      );
    });
  }

  function getEmployees() {
    let employeeListContent = [];
    employeesMap.forEach((value, index) => {
      //  console.log(value);

      let content = (
        <NavDropdown.Item
          key={index}
          href="#action/3.1"
          onClick={handleChange}
          name={value.name}
          id={value.id}
          employee={value}
        >
          {value.name}
        </NavDropdown.Item>
      );
      employeeListContent.push(content);
    });
    return employeeListContent;
  }
  useEffect(() => {
    // Code here will run after *every* render
    const fetchData = () => {
      const data = getEmployees();
      setEmployeesList(data);
    };
    fetchData();
  }, []);

  function handleRoleChange(e) {
    //console.log("rpole", role);
    setRole(e.target.role);
  }

  //check role and setTab
  //let tab = null;
  useEffect(() => {
    //console.log("inside", role);
    if (role === employeeRoles.EMPLOYEE) {
      setTab(<Employee employeeId={employeeId} />);
    } else if (role === employeeRoles.MANAGER) {
      setTab(<Manager />);
    } else if (role === employeeRoles.CEO) {
      setTab(<Ceo />);
    }
  }, [role, rolesList]);

  return (
    <div className="container home-container">
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="home">Go to home</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title={employeeName}
                menuVariant="dark"
              >
                {employeesList}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Layout handleEmployeeChange={(e) => handleEmployeeChange(e)} /> */}
      <div className="content">
        <div className="container home-page-content">
          <Container className="mt-5 ml-50">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select role
              </Dropdown.Toggle>

              <Dropdown.Menu>{rolesList}</Dropdown.Menu>
            </Dropdown>
          </Container>
          <Container className="mt-5">{tab}</Container>
        </div>
      </div>
    </div>
  );
}

export default Home;
