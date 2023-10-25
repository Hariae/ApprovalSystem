const documents = [];

const documentType = {
  EXPENSE_REPORT: "Expense Report",
  REQUISITION: "Requisition"
};

const documentStatus = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  REFERRED: "referred"
};

let document = {
  id: "001",
  type: documentType.EXPENSE_REPORT,
  status: documentStatus.PENDING,
  createdAt: new Date("October 24, 2023 11:13:00"),
  createdBy: "Peter Parker",
  createdById: "005",
  approver: "Tony Stark",
  details: {
    description: "Coffee",
    total: 6
  }
};
documents.push(document);
let document1 = {
  id: "002",
  type: documentType.REQUISITION,
  status: documentStatus.PENDING,
  createdAt: new Date("October 23, 2023 14:30:00"),
  createdBy: "Bruce Wayne",
  createdById: "002",
  approver: "Diana Prince",
  details: {
    description: "Office Supplies",
    total: 250
  }
};
documents.push(document1);

let document2 = {
  id: "003",
  type: documentType.EXPENSE_REPORT,
  status: documentStatus.PENDING,
  createdAt: new Date("October 22, 2023 09:45:00"),
  createdBy: "Clark Kent",
  createdById: "006",
  approver: "Lois Lane",
  details: {
    description: "Lunch Meeting",
    total: 40
  }
};
documents.push(document2);

let document3 = {
  id: "004",
  type: documentType.REQUISITION,
  status: documentStatus.PENDING,
  createdAt: new Date("October 21, 2023 16:20:00"),
  createdBy: "Natasha Romanoff",
  createdById: "002",
  approver: "Steve Rogers",
  details: {
    description: "Lab Equipment",
    total: 1200
  }
};
documents.push(document3);

let document4 = {
  id: "005",
  type: documentType.EXPENSE_REPORT,
  status: documentStatus.PENDING,
  createdAt: new Date("October 20, 2023 10:10:00"),
  createdBy: "Wanda Maximoff",
  createdById: "006",
  approver: "Vision",
  details: {
    description: "Business Trip Expenses",
    total: 800
  }
};
documents.push(document4);

export { documents, documentStatus, documentType };
