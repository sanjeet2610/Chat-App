import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { loginUserThunk } from "../../store/slice/user/user.thunk";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    dispatch(loginUserThunk(loginData));
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 flex flex-col gap-2">
          <legend className="fieldset-legend text-[1.2rem]">Login</legend>

          <label className="label">Username</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Username"
            name="username"
            value={loginData.username}
            onChange={handleInputChange}
          />

          <label className="label mt-3">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
          />

          <button
            type="button"
            className="btn btn-secondary mt-4"
            onClick={handleLogin}
          >
            Login
          </button>

          <p className="flex gap-1">
            Don't have an account ?
            <Link to="/signup" className="text-blue-400 underline">
              SignUp
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
