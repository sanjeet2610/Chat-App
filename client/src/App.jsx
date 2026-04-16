import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import { loginUserThunk } from "./store/slice/user/user.thunk";
import Home from "./pages/home/Home";
import SignUp from "./pages/authentication/SignUp";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => state.user.isAuthenticated);
  console.log(state);
  const dispatch = useDispatch();
  dispatch(loginUserThunk());

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
