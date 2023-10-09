import React from "react";
import { Link } from "react-router-dom";

function Students() {
  const customMarginStyle = {
    marginLeft: "90px",
    width: "800px",
  };

  const sectionHeaderStyle = {
    fontWeight: "bold",
  };

  const boxStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "10px",
    borderRadius: "10px",
    marginTop: "20px",
    width: "201px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const buttonStyle = {
    fontSize: "16px", // Adjust font size
    padding: "5px 10px", // Adjust padding to make the button smaller
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)", // Add shadow to the button
    borderRadius: "5px",
  };

  const students = [
    { name: "John Doe", id: "001", contactNumber: "123-456-7890" },
    { name: "Jane Smith", id: "002", contactNumber: "987-654-3210" },
    { name: "Alice Johnson", id: "003", contactNumber: "555-123-4567" },
    { name: "Bob Johnson", id: "004", contactNumber: "555-987-6543" },
    { name: "Eve Davis", id: "005", contactNumber: "111-222-3333" },
  ];

  const tableContainerStyle = {
    marginLeft: "100px",
    width: "500px",
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    border: "2px solid #ccc",
    marginTop: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
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
    <div style={customMarginStyle}>
      <h1 className="mb-10" style={{ fontWeight: "bold", marginLeft: "90px", fontSize: "50px" }}>
        STUDENT SECTION
      </h1>

      <div className="grid grid-cols-1 col-span-12 lg:col-span-10 gap-6 md:grid-cols-3 lg:grid-cols-4 p-4">
        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6" style={boxStyle}>
          <div>
            <Link to="/webdev1">
              <button type="button" name="button" id="sec" style={{ ...buttonStyle, fontSize: "14px" }}>
                WebDev1
              </button>
            </Link>
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6" style={boxStyle}>
          <div>
            <Link to="/webdev2">
              <button type="button" name="button" id="sec" style={{ ...buttonStyle, fontSize: "14px" }}>
                WebDev2
              </button>
            </Link>
          </div>
        </article>

        <article className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6" style={boxStyle}>
          <div>
            <Link to="/webdev3">
              <button type="button" name="button" id="sec" style={{ ...buttonStyle, fontSize: "14px" }}>
                WebDev3
              </button>
            </Link>
          </div>
        </article>
      </div>

      <div style={tableContainerStyle}>
        <h2 style={{ ...sectionHeaderStyle, marginTop: "40px" }}>Webdev 1 Section</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle, ...thStyle, width: "30%" }}>Name</th>
              <th style={{ ...thTdStyle, width: "20%" }}>ID Number</th>
              <th style={{ ...thTdStyle, width: "30%" }}>Contact Number</th>
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
      <div style={tableContainerStyle}>
        <h2 style={{ ...sectionHeaderStyle, marginTop: "40px" }}>Webdev 2 Section</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle, ...thStyle, width: "30%" }}>Name</th>
              <th style={{ ...thTdStyle, width: "20%" }}>ID Number</th>
              <th style={{ ...thTdStyle, width: "30%" }}>Contact Number</th>
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
      <div style={tableContainerStyle}>
        <h2 style={{ ...sectionHeaderStyle, marginTop: "40px" }}>Webdev 3 Section</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={{ ...thTdStyle, ...thStyle, width: "30%" }}>Name</th>
              <th style={{ ...thTdStyle, width: "20%" }}>ID Number</th>
              <th style={{ ...thTdStyle, width: "30%" }}>Contact Number</th>
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
    </div>
  );
}

export default Students;
