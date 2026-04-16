import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
            type="email"
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

          <button className="btn btn-secondary mt-4">SignUp</button>

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
