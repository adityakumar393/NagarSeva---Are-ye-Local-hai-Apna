import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./components/Login";
import AdminLogin from "./components/AdminLogin";
import CitizenDashboard from "./pages/CitizenDashboard";
import SubmitComplaint from "./pages/SubmitComplaint";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/dashboard" element={<CitizenDashboard />} />
        <Route path="/submit-complaint" element={<SubmitComplaint />} />
      </Routes>
    </>
  );
}

export default App;
