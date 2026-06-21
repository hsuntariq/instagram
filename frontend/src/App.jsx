import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import Login from "./pages/auth/Login";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
