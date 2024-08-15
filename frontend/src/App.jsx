import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
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
          element={isAuthenticated ? <Home /> : <Navigate to="/signup" />}
        />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
