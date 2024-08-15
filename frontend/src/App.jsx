import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Home from "./pages/Home";
import Documentation from "./pages/Documentation";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { login, logout } from "./reducer/authReducer";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token && username) {
      dispatch(login({ token, username }));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

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
