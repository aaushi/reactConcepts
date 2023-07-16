import { render, screen } from "@testing-library/react";
import InformationTable from "../../userDirectory/InformationTable";
import "@testing-library/jest-dom";
let userslist = [];
test("table should have First Name", () => {
  render(<InformationTable props={userslist} />);
  const tableHeaders = screen.getByText("First Name");
  expect(tableHeaders).toBeInTheDocument();
})

test("table should have Number Column", () => {
  render(<InformationTable props={userslist} />);
  const tableHeaders = screen.getByText("Number");
  expect(tableHeaders).toBeInTheDocument();
});

test("table should have user first name", () => {
  const userslist=[{firstName:'coder',lastName:'dfdf',phoneNumber:'34343'}]
  render(<InformationTable props={userslist} />);
  const firstName = screen.getByText("coder");
  expect(firstName).toBeInTheDocument();
});

test("table should have user last name", () => {
  const userslist = [
    { firstName: "coder", lastName: "dfdf", phoneNumber: "34343" },
  ];
  render(<InformationTable props={userslist} />);
  const lastName = screen.getByText("dfdf");
  expect(lastName).toBeInTheDocument();
});

test("table should have user phone number", () => {
  const userslist = [
    { firstName: "coder", lastName: "dfdf", phoneNumber: "34343" },
  ];
  render(<InformationTable props={userslist} />);
  const phone = screen.getByText("34343");
  expect(phone).toBeInTheDocument();
});

test("table should have multiple user", () => {
  const userslist = [
    { firstName: "coder", lastName: "dfdf", phoneNumber: "34343" },
    { firstName: "coder2", lastName: "dfdf", phoneNumber: "34343" },
  ];
  render(<InformationTable props={userslist} />);
  const userdata = screen.getAllByTestId("tableData");
  expect(userdata).toHaveLength(2);
});



