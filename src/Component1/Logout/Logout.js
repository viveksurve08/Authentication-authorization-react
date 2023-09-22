import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase"; // Make sure to import your firebase configuration here

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login"); // Redirect to the login page after successful logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
      <p>
        Back to <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Logout;
