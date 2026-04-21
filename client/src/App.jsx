import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/authentication/Login";
import Home from "./pages/home/Home";
import SignUp from "./pages/authentication/SignUp";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { profileThunk, otherUsersThunk } from "./store/slice/user/user.thunk";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await dispatch(profileThunk());
      await dispatch(otherUsersThunk());
    })();
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default App;
