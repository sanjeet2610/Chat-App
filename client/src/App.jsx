import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/authentication/SignUp";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
