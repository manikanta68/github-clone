import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Login from "./components/Login"
import Home from "./components/Home"
import "./App.css"



const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const ProtectedRoute = ({ element, ...rest }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };
  return <BrowserRouter>
    <Routes>
      <Route path="/login" element={
            isAuthenticated ? <Navigate to="/" /> : <Login onLoginSuccess={handleLoginSuccess} />
          } />
      <Route
        path="/"
        element={<ProtectedRoute element={<Home />} />}
      />
    </Routes>
  </BrowserRouter>
}


export default App