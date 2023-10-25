const employeesMap = new Map();

const employeeRoles = {
  EMPLOYEE: "Employee",
  MANAGER: "Manager",
  CEO: "CEO"
};

// Employees data
let ceo = {
  id: "001",
  name: "Tony Stark",
  roles: [employeeRoles.EMPLOYEE, employeeRoles.MANAGER, employeeRoles.CEO],
  reportsTo: null
};
employeesMap.set(ceo.id, ceo);

let managers = [
  {
    id: "002",
    name: "Steve Rogers",
    roles: [employeeRoles.EMPLOYEE, employeeRoles.MANAGER],
    reportsTo: "001"
  },
  {
    id: "006",
    name: "Diana Prince",
    roles: [employeeRoles.EMPLOYEE, employeeRoles.MANAGER],
    reportsTo: "001"
  }
];
managers.forEach((manager) => employeesMap.set(manager.id, manager));

let employeesData = [
  {
    id: "003",
    name: "Natasha Romanoff",
    roles: [employeeRoles.EMPLOYEE],
    reportsTo: "002"
  },
  {
    id: "004",
    name: "Bruce Wayne",
    roles: [employeeRoles.EMPLOYEE],
    reportsTo: "002"
  },
  {
    id: "005",
    name: "Peter Parker",
    roles: [employeeRoles.EMPLOYEE],
    reportsTo: "002"
  },
  {
    id: "007",
    name: "Clark Kent",
    roles: [employeeRoles.EMPLOYEE],
    reportsTo: "006"
  },
  {
    id: "008",
    name: "Wanda Maximoff",
    roles: [employeeRoles.EMPLOYEE],
    reportsTo: "006"
  }
];
employeesData.forEach((employee) => employeesMap.set(employee.id, employee));

console.log(employeesMap);
export { employeesMap, employeeRoles };
