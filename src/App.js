import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component1/Home/Home";
import Login from "./Component1/Login/Login";
import Signup from "./Component1/Signup/Signup";
import { auth } from "./firebase";

const App = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home name={userName} />} />
        <Route path="/" element={<Home name={userName} />} />
      </Routes>
    </Router>
  );
};

export default App;
