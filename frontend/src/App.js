// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PropertyDetailPage from './pages/PropertyDetailPage'; // Create this component to show individual property details.

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/property/:id" element={<PropertyDetailPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
