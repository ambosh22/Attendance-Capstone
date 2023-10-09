import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function StudentForm({ isOpen, onClose, onSubmit, initialValues }) {
  const [values, setValues] = useState(initialValues || { name: "", studentNumber: "", contactNumber: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    onClose();
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
  };

  const inputStyle = {
    width: "100%",
    padding: "5px",
    marginBottom: "10px",
    borderRadius: "3px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "10px 20px",
  };


  return isOpen ? (
    <div className="modal">
      <div className="modal-content" style={formStyle}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Add Student</h2>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>
            Name:
            <input type="text" name="name" value={values.name} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Student Number:
            <input type="text" name="studentNumber" value={values.studentNumber} onChange={handleChange} required style={inputStyle} />
          </label>
          <label style={labelStyle}>
            Contact Number:
            <input type="text" name="contactNumber" value={values.contactNumber} onChange={handleChange} required style={inputStyle} />
          </label>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  ) : null;
}

function Attendance() {
  const [date, setDate] = useState(new Date());
  const [selectedTable, setSelectedTable] = useState(null); 
  const [tableData, setTableData] = useState({
    Webdev1: [
      { name: "John Doe", studentNumber: "001", contactNumber: "123-456-7890", attendance: "" },
      { name: "Jane Smith", studentNumber: "002", contactNumber: "987-654-3210", attendance: "" },
      { name: "Alice Johnson", studentNumber: "003", contactNumber: "555-123-4567", attendance: "" },
      { name: "Bob Johnson", studentNumber: "004", contactNumber: "555-987-6543", attendance: "" },
      { name: "Eve Davis", studentNumber: "005", contactNumber: "111-222-3333", attendance: "" },
    ],
    Webdev2: [
      { name: "John ", studentNumber: "006", contactNumber: "123-456-7890", attendance: "" },
      { name: "Jane ", studentNumber: "007", contactNumber: "987-654-3210", attendance: "" },
      { name: "Alice", studentNumber: "008", contactNumber: "555-123-4567", attendance: "" },
      { name: "Bob ", studentNumber: "009", contactNumber: "555-987-6543", attendance: "" },
      { name: "Eve ", studentNumber: "010", contactNumber: "111-222-3333", attendance: "" },
    ],
    Webdev3: [
      { name: "Doe", studentNumber: "011", contactNumber: "123-456-7890", attendance: "" },
      { name: "Smith", studentNumber: "012", contactNumber: "987-654-3210", attendance: "" },
      { name: "Johnson", studentNumber: "013", contactNumber: "555-123-4567", attendance: "" },
      { name: "Johny", studentNumber: "014", contactNumber: "555-987-6543", attendance: "" },
      { name: "Davis", studentNumber: "015", contactNumber: "111-222-3333", attendance: "" },
    ],
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editStudentData, setEditStudentData] = useState(null);
  

  useEffect(() => {
    const dateString = date.toDateString();
    const storedData = localStorage.getItem(dateString);

    if (storedData) {
      const storedAttendance = JSON.parse(storedData);

      const updatedTableData = { ...tableData };
      for (const tableName in updatedTableData) {
        updatedTableData[tableName] = updatedTableData[tableName].map((student) => ({
          ...student,
          attendance: storedAttendance[tableName]?.[student.studentNumber] || "",
        }));
      }

      setTableData(updatedTableData);
    }
  }, [date, tableData]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const handleToggleAttendance = (tableName, studentNumber) => {
    const dateString = date.toDateString();
    const updatedTableData = { ...tableData };

    const studentIndex = updatedTableData[tableName].findIndex((student) => student.studentNumber === studentNumber);

    if (studentIndex !== -1) {
      if (updatedTableData[tableName][studentIndex].attendance === "Present") {
        updatedTableData[tableName][studentIndex].attendance = "Absent";
      } else {
        updatedTableData[tableName][studentIndex].attendance = "Present";
      }

      const storedData = localStorage.getItem(dateString) || "{}";
      const storedAttendance = JSON.parse(storedData);
      storedAttendance[tableName] = storedAttendance[tableName] || {};
      storedAttendance[tableName][studentNumber] = updatedTableData[tableName][studentIndex].attendance;
      localStorage.setItem(dateString, JSON.stringify(storedAttendance));

      setTableData(updatedTableData);
    }
  };

  const handleOpenForm = () => {
    setIsFormOpen(true);
    setEditStudentData(null);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSubmitForm = (studentData) => {
    if (editStudentData) {
      const { tableName, studentNumber } = editStudentData;
      const updatedTableData = { ...tableData };
      const studentIndex = updatedTableData[tableName].findIndex((student) => student.studentNumber === studentNumber);

      if (studentIndex !== -1) {
        updatedTableData[tableName][studentIndex] = { ...studentData, studentNumber };
        setTableData(updatedTableData);
        setIsFormOpen(false);

        const dateString = date.toDateString();
        const storedData = localStorage.getItem(dateString) || "{}";
        const storedAttendance = JSON.parse(storedData);
        storedAttendance[tableName] = storedAttendance[tableName] || {};
        storedAttendance[tableName][studentNumber] = studentData.attendance;
        localStorage.setItem(dateString, JSON.stringify(storedAttendance));
      }
    } else {
      if (selectedTable) {
        const updatedTableData = { ...tableData };
        updatedTableData[selectedTable].push(studentData);
        setTableData(updatedTableData);
        setIsFormOpen(false);

        const dateString = date.toDateString();
        const storedData = localStorage.getItem(dateString) || "{}";
        const storedAttendance = JSON.parse(storedData);
        storedAttendance[selectedTable] = storedAttendance[selectedTable] || {};
        storedAttendance[selectedTable][studentData.studentNumber] = studentData.attendance;
        localStorage.setItem(dateString, JSON.stringify(storedAttendance));
      }
    }
  };

  const handleEditStudent = (tableName, studentNumber) => {
    const studentIndex = tableData[tableName].findIndex((student) => student.studentNumber === studentNumber);
    if (studentIndex !== -1) {
      setEditStudentData({ tableName, studentNumber });
      setIsFormOpen(true);
    }
  };

  const handleDeleteStudent = (tableName, studentNumber) => {
    const updatedTableData = { ...tableData };
    const studentIndex = updatedTableData[tableName].findIndex((student) => student.studentNumber === studentNumber);
    if (studentIndex !== -1) {
      updatedTableData[tableName].splice(studentIndex, 1);
      setTableData(updatedTableData);

      const dateString = date.toDateString();
      const storedData = localStorage.getItem(dateString) || "{}";
      const storedAttendance = JSON.parse(storedData);
      if (storedAttendance[tableName]) {
        delete storedAttendance[tableName][studentNumber];
        localStorage.setItem(dateString, JSON.stringify(storedAttendance));
      }
    }
  };

  const containerStyle = {
    marginLeft: "90px",
    width: "800px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "50px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.5)",
    borderRadius: "5px",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
  };

  const buttonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
  };

  const presentButtonStyle = {
    ...buttonStyle,
    backgroundColor: "green",
  };

  const absentButtonStyle = {
    ...buttonStyle,
    backgroundColor: "red",
  };

  const tableButtonStyle = {
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "5px 10px",
    margin: "5px",
  };

  const openTableModal = (table) => {
    setSelectedTable(table);
  };

  const closeTableModal = () => {
    setSelectedTable(null);
  };

  return (
    <div style={containerStyle}>
      <h1 className="b-10" style={{ fontWeight: "bold", fontSize: "50px" }}>
        ATTENDANCE
      </h1>
      <div
  style={{
    backgroundColor: "#ffffcc", // Yellow background color
    border: "2px solid #ffcc00", // Yellow border color
    borderRadius: "10px", // Rounded corners
    padding: "20px",
    boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.5)", // Drop shadow
    display: "flex",
    alignItems: "center",
  }}
>
  <div>
    <Calendar onChange={handleDateChange} value={date} />
  </div>
  <div style={{ marginLeft: "20px" }}>
    <p style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
      Schedule for Today
    </p>
    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
      <li style={{ marginBottom: "8px" }}>
        <span style={{ fontWeight: "bold" }}>9:00 AM -</span> Team Meeting
      </li>
      <li style={{ marginBottom: "8px" }}>
        <span style={{ fontWeight: "bold" }}>11:00 AM -</span> Client Presentation
      </li>
      <li style={{ marginBottom: "8px" }}>
        <span style={{ fontWeight: "bold" }}>1:00 PM -</span> Lunch Break
      </li>
      <li style={{ marginBottom: "8px" }}>
        <span style={{ fontWeight: "bold" }}>3:00 PM -</span> Project Deadline
      </li>
      <li style={{ marginBottom: "8px" }}>
        <span style={{ fontWeight: "bold" }}>5:00 PM -</span> Wrap-Up Meeting
      </li>
    </ul>
    <p style={{ fontSize: "16px", marginTop: "20px" }}>
      Don't forget to prepare for the client presentation at 10:30 AM.
    </p>
  </div>
</div>

      <div>
        <h2>Attendance for {date.toDateString()}:</h2>
        {selectedTable && (
          <>
            <button onClick={closeTableModal} style={tableButtonStyle}>
              Close
            </button>

            <h1 className="b-10" style={{ fontWeight: "bold", fontSize: "20px" }}>
              {selectedTable}
            </h1>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>Student Name</th>
                  <th style={thStyle}>Student Number</th>
                  <th style={thStyle}>Contact Number</th>
                  <th style={thStyle}>Attendance</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tableData[selectedTable].map((student, index) => (
                  <tr key={student.studentNumber}>
                    <td style={tdStyle}>{student.name}</td>
                    <td style={tdStyle}>{student.studentNumber}</td>
                    <td style={tdStyle}>{student.contactNumber}</td>
                    <td style={tdStyle}>
                      {student.attendance === "Present" ? (
                        <button
                          onClick={() => handleToggleAttendance(selectedTable, student.studentNumber)}
                          style={presentButtonStyle}
                        >
                          Present
                        </button>
                      ) : (
                        <button
                          onClick={() => handleToggleAttendance(selectedTable, student.studentNumber)}
                          style={absentButtonStyle}
                        >
                          Absent
                        </button>
                      )}
                    </td>
                    <td style={tdStyle}>
                      <button onClick={() => handleEditStudent(selectedTable, student.studentNumber)} style={{ ...buttonStyle, marginRight: "5px" }}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteStudent(selectedTable, student.studentNumber)} style={{ ...buttonStyle, backgroundColor: "red" }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {!selectedTable && (
          <div>
            <button onClick={() => openTableModal("Webdev1")} style={tableButtonStyle}>
              Webdev1
            </button>
            <button onClick={() => openTableModal("Webdev2")} style={tableButtonStyle}>
              Webdev2
            </button>
            <button onClick={() => openTableModal("Webdev3")} style={tableButtonStyle}>
              Webdev3
            </button>
          </div>
        )}

        {selectedTable && (
          <button onClick={handleOpenForm} style={tableButtonStyle}>
            Add Student
          </button>
        )}
      </div>
      <StudentForm isOpen={isFormOpen} onClose={handleCloseForm} onSubmit={handleSubmitForm} initialValues={editStudentData ? tableData[editStudentData.tableName].find((student) => student.studentNumber === editStudentData.studentNumber) : null} />
    </div>
  );
}

export default Attendance;
