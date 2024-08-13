import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Replace "authToken" with your actual token key
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* If the user is not authenticated, redirect to the login page */}
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/singup" />}
        />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
