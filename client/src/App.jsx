import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/authentication/SignUp";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
