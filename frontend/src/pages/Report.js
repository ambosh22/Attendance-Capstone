import React, { useState, useEffect } from "react";

const reportContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "20px",
  marginLeft: "90px", // Added left margin
  marginRight: "90px", // Added right margin
  padding: "10px", // Reduced padding
  width: "850px", // Adjusted width
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)", // Added shadow
  borderRadius: "10px", // Added border radius
  background: "#F5F5F5", // Light background color
};

const headerStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  color: "#007BFF", // Adjusted header color
};

const studentFormStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "20px",
};

const studentTableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px", // Added margin-top
};

const thTdStyle = {
  border: "1px solid #ccc",
  padding: "12px", // Increased padding
  textAlign: "center",
};

const addButtonStyle = {
  backgroundColor: "#007BFF", // Button background color
  color: "#FFFFFF", // Button text color
  border: "none",
  borderRadius: "5px",
  padding: "10px 20px",
  cursor: "pointer",
};

const editButtonStyle = {
  backgroundColor: "#28a745", // Edit button background color
  color: "#FFFFFF", // Edit button text color
  border: "none",
  borderRadius: "5px",
  padding: "8px 16px",
  cursor: "pointer",
};

const deleteButtonStyle = {
  backgroundColor: "#FF5733", // Button background color
  color: "#FFFFFF", // Button text color
  border: "none",
  borderRadius: "5px",
  padding: "8px 16px",
  cursor: "pointer",
};

const classSelectionContainerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "10px", // Adjusted margin
};

const classSelectionTextStyle = {
  flex: "1", // Added flex to text
  textAlign: "left", // Aligned text to left
  marginRight: "10px", // Added margin to text
  fontWeight: "bold",
};

const classSelectStyle = {
  flex: "1", // Added flex to select
  textAlign: "left", // Aligned select to left
  marginRight:"600px"
};

function Report() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: "", quizScore: "", examScore: "" });
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [selectedClass, setSelectedClass] = useState("Webdev2"); // Default class selected

  useEffect(() => {
    // Simulated data (replace with your backend API call)
    const initialData = {
      Webdev1: [
        { id: 1, name: "John Doe", quizScore: 85, examScore: 78 },
        { id: 2, name: "Jane Smith", quizScore: 92, examScore: 89 },
        { id: 3, name: "Alice Johnson", quizScore: 92, examScore: 89 },
        { id: 4, name: "Bob Johnson", quizScore: 92, examScore: 89 },
        { id: 5, name: "Eve Davis", quizScore: 92, examScore: 89 },
      ],
      Webdev2: [
        { id: 6, name: "John", quizScore: 90, examScore: 85 },
        { id: 7, name: "Jane", quizScore: 88, examScore: 92 },
        { id: 8, name: "Bob", quizScore: null, examScore: 78 }, 
        { id: 9, name: "Alice", quizScore: null, examScore: 78 }, 
        { id: 10, name: "Eve", quizScore: null, examScore: 78 }, 
      ],
      Webdev3: [
        { id: 11, name: "Doe", quizScore: 75, examScore: null },
        { id: 12, name: "Smith", quizScore: 95, examScore: 89 },
        { id: 13, name: "Johnson", quizScore: 95, examScore: 89 },
        { id: 14, name: "Johny", quizScore: 95, examScore: 89 },
        { id: 15, name: "Davis", quizScore: 95, examScore: 89 },
      ],
    };

    setStudents(initialData[selectedClass]);
  }, [selectedClass]);

  const handleAddStudent = () => {
    if (newStudent.name) {
      setStudents([...students, { ...newStudent, id: students.length + 1 }]);
      setNewStudent({ name: "", quizScore: "", examScore: "" });
    }
  };

  const handleEditStudent = (id) => {
    setEditingStudentId(id);
  };

  const handleSaveStudent = (id, updatedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setEditingStudentId(null);
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    setEditingStudentId(null);
  };

  return (
    <div style={reportContainerStyle}>
      <h2 style={headerStyle}>Teacher's Student Report</h2>
      <div style={studentFormStyle}>
        <input
          type="text"
          placeholder="Student Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quiz Score"
          value={newStudent.quizScore}
          onChange={(e) => setNewStudent({ ...newStudent, quizScore: e.target.value })}
        />
        <input
          type="number"
          placeholder="Exam Score"
          value={newStudent.examScore}
          onChange={(e) => setNewStudent({ ...newStudent, examScore: e.target.value })}
        />
        <button style={addButtonStyle} onClick={handleAddStudent}>
          Add Student
        </button>
      </div>
      <div style={classSelectionContainerStyle}>
        <div style={classSelectionTextStyle}>Class Selection:</div>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          style={classSelectStyle}
        >
          <option value="Webdev1">Webdev1</option>
          <option value="Webdev2">Webdev2</option>
          <option value="Webdev3">Webdev3</option>
        </select>
      </div>
      <h2 style={headerStyle}>{selectedClass}</h2>
      <table style={studentTableStyle}>
        <thead>
          <tr>
            <th style={thTdStyle}>ID</th>
            <th style={thTdStyle}>Name</th>
            <th style={thTdStyle}>Quiz Score</th>
            <th style={thTdStyle}>Exam Score</th>
            <th style={thTdStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td style={thTdStyle}>{student.id}</td>
              <td style={thTdStyle}>
                {editingStudentId === student.id ? (
                  <input
                    type="text"
                    value={student.name}
                    onChange={(e) => handleSaveStudent(student.id, { ...student, name: e.target.value })}
                  />
                ) : (
                  student.name
                )}
              </td>
              <td style={thTdStyle}>
                {editingStudentId === student.id ? (
                  <input
                    type="number"
                    value={student.quizScore}
                    onChange={(e) => handleSaveStudent(student.id, { ...student, quizScore: e.target.value })}
                  />
                ) : (
                  student.quizScore === null ? "N/A" : student.quizScore // Display "N/A" if score is null
                )}
              </td>
              <td style={thTdStyle}>
                {editingStudentId === student.id ? (
                  <input
                    type="number"
                    value={student.examScore}
                    onChange={(e) => handleSaveStudent(student.id, { ...student, examScore: e.target.value })}
                  />
                ) : (
                  student.examScore === null ? "N/A" : student.examScore // Display "N/A" if score is null
                )}
              </td>
              <td style={thTdStyle}>
                {editingStudentId === student.id ? (
                  <button style={editButtonStyle} onClick={() => handleSaveStudent(student.id, student)}>
                    Save
                  </button>
                ) : (
                  <button style={editButtonStyle} onClick={() => handleEditStudent(student.id)}>
                    Edit
                  </button>
                )}
                <button style={deleteButtonStyle} onClick={() => handleDeleteStudent(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Report;
