import React from 'react';
import Dashboard from './Components/Dashboard';
import AddProfileModal from './Components/AddProfileModal';
import Login from './Components/Login';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />

        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Optional: Profile Modal as a standalone route */}
        <Route
          path="/add-profile"
          element={<AddProfileModal isOpen={true} onClose={() => {}} />}
        />
      </Routes>
    </>
  );
};

export default App;
