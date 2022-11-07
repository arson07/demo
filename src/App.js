import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
