import { useState } from "react";
const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [user, setUser] = useState({
    firstName: "Coder",
    lastName: "Byte",
    phoneNumber: "8885559999",
  });
  const addUser = () => {
    console.log(user);
    addEntryToPhoneBook(user);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addUser();
      }}
      style={style.form.container}
      data-testid="submitButton"
    >
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        value={user.firstName}
        type="text"
        data-testid="firstNameInput"
        onChange={(e) => {
          setUser(() => ({ ...user, firstName: e.target.value }));
        }}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        data-testid="lastNameInput"
        value={user.lastName}
        type="text"
        onChange={(e) => {
          setUser(() => ({ ...user, lastName: e.target.value }));
        }}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        data-testid="phoneNumberInput"
        value={user.phoneNumber}
        type="text"
        onChange={(e) => {
          setUser(() => ({ ...user, phoneNumber: e.target.value }));
        }}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}
 export default PhoneBookForm