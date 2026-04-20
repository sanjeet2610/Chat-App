import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { signupUserThunk } from "../../store/slice/user/user.thunk.js";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "Male",
  });
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  const handleInputChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    if (signupData.password !== signupData.confirmPassword) {
      return toast.error("Password and Confirm Password did not match");
    }
    const response = await dispatch(signupUserThunk(signupData));
    if (response.payload?.success) {
      navigate("/");
    }
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <form>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 flex flex-col gap-2">
          <legend className="fieldset-legend text-[1.2rem]">SignUp</legend>

          <label className="label">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={signupData.fullName}
            className="input w-full"
            placeholder="Full Name"
            onChange={handleInputChange}
          />

          <label className="label mt-3">Username</label>
          <input
            type="text"
            name="username"
            value={signupData.username}
            className="input w-full"
            placeholder="Username"
            onChange={handleInputChange}
          />

          <label className="label mt-3">Password</label>
          <input
            type="password"
            name="password"
            value={signupData.password}
            className="input w-full"
            placeholder="Password"
            onChange={handleInputChange}
          />

          <label className="label mt-3">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={signupData.confirmPassword}
            className="input w-full"
            placeholder="Confirm Password"
            onChange={handleInputChange}
          />

          <label className="label mt-3 flex items-center">
            Select Gender :
            <label className="flex gap-2 ml-2">
              Male
              <input
                type="radio"
                name="gender"
                value="Male"
                className="radio radio-secondary radio-sm"
                onChange={handleInputChange}
                defaultChecked
              />
            </label>
            <label className="flex gap-2 ml-4">
              Female
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleInputChange}
                className="radio radio-secondary radio-sm"
              />
            </label>
          </label>

          <button
            type="button"
            className="btn btn-secondary mt-4"
            onClick={handleSignup}
          >
            SignUp
          </button>

          <p className="flex gap-1">
            Already have an account ?
            <Link to="/login" className="text-blue-400 underline">
              Login
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;
