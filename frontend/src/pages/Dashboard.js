import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faUserGraduate, faCalendar } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const numberOfStudents = 15;

  const containerStyle = {
    display: "flex",
    marginLeft: "90px",
    marginRight: "auto",
    width: "800px",
    textAlign: "left",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
    background: "#F5F5F5",
  };

  const leftBoxStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRight: "1px solid #ccc",
    paddingRight: "20px",
  };

  const rightBoxStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingLeft: "20px",
  };

  const iconStyle = {
    fontSize: "48px",
    marginBottom: "10px",
    color: "#007BFF",
  };

  const headingStyle = {
    color: "#007BFF",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const numberStyle = {
    color: "#007BFF",
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const notificationStyle = {
    backgroundColor: "#FF5733",
    color: "#FFFFFF",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    marginLeft: "90px",
    width: "800px",
    marginTop: "10px",
  };

  const scheduleStyle = {
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    marginLeft: "90px",
    width: "800px",
  };

  const schedule = [
    {
      day: "Monday",
      startTime: "7:30 AM",
      endTime: "5:00 PM",
    },
    {
      day: "Friday",
      startTime: "7:30 AM",
      endTime: "5:00 PM",
    },
  ];

  return (
    <div>
      <h1 className="b-10" style={{ fontWeight: "bold", marginLeft: "90px", fontSize: "50px" }}>
        DASHBOARD
      </h1>
      <div style={containerStyle}>
        <div style={leftBoxStyle}>
          <div style={iconStyle}>
            <FontAwesomeIcon icon={faUserGraduate} />
          </div>
          <div>
            <h2 style={headingStyle}>Number of Students</h2>
            <p style={numberStyle}>{numberOfStudents}</p>
          </div>
        </div>

        <div style={rightBoxStyle}>
          <div style={iconStyle}>
            <FontAwesomeIcon icon={faCubes} />
          </div>
          <div>
            <h2 style={headingStyle}>Section Handle</h2>
            <p style={numberStyle}>3</p>
          </div>
        </div>
      </div>
      <div style={notificationStyle}>
        <strong>Important:</strong> You have a new notification!
      </div>
      <div style={scheduleStyle}>
        <FontAwesomeIcon icon={faCalendar} style={{ marginRight: "5px" }} />
        <strong>Schedule:</strong>
        {schedule.map((item, index) => (
          <p key={index}>
            {item.day}: {item.startTime} - {item.endTime}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
