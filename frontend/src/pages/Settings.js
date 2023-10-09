import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Settings() {
  const containerStyle = {
    marginLeft: "750px",
    width: "800px",
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "#007BFF",
    color: "#007BFF",
    fontWeight: "bold",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    margin: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s, color 0.3s, transform 0.3s",
    width: "300px",
  };

  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setClickedButton(buttonName);
    setTimeout(() => {
      setClickedButton(null);
    }, 300); // Reset the button state after 300ms
  };

  return (
    <div className="flex justify-center">
      <div style={containerStyle}>
        {/* Use Link component to navigate to Contactus component */}
        <Link to="/Contactus">
          <button
            style={{
              ...buttonStyle,
              transform: clickedButton === "Contact Us" ? "scale(0.95)" : "scale(1)",
            }}
            className="hover:bg-blue-700 hover:text-white"
            onClick={() => handleButtonClick("Contactus")}
          >
            Contact Us
          </button>
        </Link>
        <Link to="/Contactadmin">
          <button
            style={{
              ...buttonStyle,
              transform: clickedButton === "Contact Admin" ? "scale(0.95)" : "scale(1)",
            }}
            className="hover:bg-green-700 hover:text-white"
            onClick={() => handleButtonClick("Contactadmin")}
          >
            Contact Admin
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Settings;
