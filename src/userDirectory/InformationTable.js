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

const InformationTable=(props)=> {
  //console.log("****");
  //console.log(props.props);
  return (
    <>
      <table
        style={style.table}
        className="informationTable"
        data-testid="userTable"
      >
        <thead>
          <tr data-testid="tableHeaders">
            <th style={style.tableCell}>First Name</th>
            <th style={style.tableCell}>Last Name</th>
            <th style={style.tableCell}>Number</th>
          </tr>
          {props &&
            props.props.map((item, index) => (
              <tr key={index} data-testid="tableData">
                <td>{item.firstName} </td>
                <td>{item.lastName} </td>
                <td>{item.phoneNumber} </td>
              </tr>
            ))}
        </thead>
      </table>
    </>
  );
}
export default InformationTable;