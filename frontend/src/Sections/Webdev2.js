import React from "react";

function Webdev2() {
  const students = [
    { name: "John Doe", id: "0012", contactNumber: "123-456-7890" },
    { name: "Jane Smith", id: "0022", contactNumber: "987-654-3210" },
    { name: "Alice Johnson", id: "0032", contactNumber: "555-123-4567" },
    { name: "Bob Johnson", id: "0042", contactNumber: "555-987-6543" },
    { name: "Eve Davis", id: "0052", contactNumber: "111-222-3333" },
  ];

  const sectionStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  };

  const tableContainerStyle = {
    marginLeft: "100px",
    width: "500px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%", 
  };

  const thTdStyle = {
    border: "2px solid #ccc",
    padding: "10px",
    textAlign: "left",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
  };

  return (
    <div style={tableContainerStyle}>
      <h1 style={sectionStyle}>Webdev 2 Section</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle, width: "30%" }}>Name</th>
            <th style={{ ...thTdStyle, width: "20%" }}>ID number</th>
            <th style={{ ...thTdStyle, width: "30%" }}>Contact number</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td style={thTdStyle}>{student.name}</td>
              <td style={thTdStyle}>{student.id}</td>
              <td style={thTdStyle}>{student.contactNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Webdev2;
