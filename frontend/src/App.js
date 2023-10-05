// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
