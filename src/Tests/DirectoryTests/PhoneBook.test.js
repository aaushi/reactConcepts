import { fireEvent, render, screen } from "@testing-library/react";
import PhoneBookForm from "../../userDirectory/PhoneBookForm";
import "@testing-library/jest-dom";
import InformationTable from "../../userDirectory/InformationTable";
test("table should have First Name", () => {
  //const addEntryToPhoneBook=
  render(<PhoneBookForm />);
  const firstNameInput = screen.getByTestId("firstNameInput");
  expect(firstNameInput).toBeInTheDocument();
});
test("table should have Last Name", () => {
  //const addEntryToPhoneBook=
  render(<PhoneBookForm />);
  const lastNameInput = screen.getByTestId("lastNameInput");
  expect(lastNameInput).toBeInTheDocument();
});
test("table should have  phone Number ", () => {
  //const addEntryToPhoneBook=
  render(<PhoneBookForm />);
  const phoneNumberInput = screen.getByTestId("phoneNumberInput");
  expect(phoneNumberInput).toBeInTheDocument();
});

test("User enters First Name", () => {
  //const addEntryToPhoneBook=
  render(<PhoneBookForm />);
  const firstNameInput = screen.getByTestId("firstNameInput");
  fireEvent.change(firstNameInput, { target: { value: "Aaushi" } });
  expect(firstNameInput).toBeInTheDocument();
});
test("User enters Last Name", () => {
  //const addEntryToPhoneBook=
  render(<PhoneBookForm />);
  const lastNameInput = screen.getByTestId("lastNameInput");
  fireEvent.change(lastNameInput, { target: { value: "Gupta" } });
  expect(lastNameInput).toBeInTheDocument();
});
test("User enters Phone Number", () => {
  //const addEntryToPhoneBook=
  render(<PhoneBookForm />);
  const phoneNumberInput = screen.getByTestId("phoneNumberInput");
  fireEvent.change(phoneNumberInput, { target: { value: "123456" } });
  expect(phoneNumberInput).toBeInTheDocument();
});

test("user clicks on submit button", () => {
  const addEntryToPhoneBook=jest.fn();
  const { getByTestId } =render(<PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />);
  const addUserSpy = jest.spyOn(PhoneBookForm.prototype, "addUser");

  const firstNameInput = screen.getByTestId("firstNameInput");
  const lastNameInput = screen.getByTestId("lastNameInput");
  const phoneNumberInput = screen.getByTestId("phoneNumberInput");
  const submitButton = screen.getByTestId("submitButton");

  fireEvent.change(firstNameInput, { target: { value: "John" } });
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  fireEvent.change(phoneNumberInput, { target: { value: "1234567890" } });
  fireEvent.click(submitButton);

  expect(addUserSpy).toHaveBeenCalled();
  /* expect(addEntryToPhoneBook).toHaveBeenCalledWith({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "1234567890",
  }); */

  addUserSpy.mockRestore();
});



test("addUser calls addEntryToPhoneBook with the user object", () => {
  const addEntryToPhoneBook = jest.fn();
  const { getByTestId } = render(
    <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
  );

  const firstNameInput = screen.getByTestId("firstNameInput");
  const lastNameInput = screen.getByTestId("lastNameInput");
  const phoneNumberInput = screen.getByTestId("phoneNumberInput");
  const submitButton = screen.getByTestId("submitButton");

  fireEvent.change(firstNameInput, { target: { value: "John" } });
  fireEvent.change(lastNameInput, { target: { value: "Doe" } });
  fireEvent.change(phoneNumberInput, { target: { value: "1234567890" } });
  fireEvent.click(submitButton);

  expect(addEntryToPhoneBook).toHaveBeenCalledWith({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "1234567890",
  });
});
