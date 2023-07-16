import React, { useState } from "react";
import InformationTable from "./InformationTable";
import PhoneBookForm from "./PhoneBookForm";
//const usersList = [];

const Directory = () => {
  const [usersList, setUsersList] = useState([]);

  const addEntryToPhoneBook = (data) => {
    console.log(data);
    setUsersList((currentUsersList) => [...currentUsersList, data]);
    console.log(usersList);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable props={usersList} />
    </section>
  );
};

export default Directory;
