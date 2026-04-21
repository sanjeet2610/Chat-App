import { CiSearch } from "react-icons/ci";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from "../../store/slice/user/user.thunk";
import { useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { otherUsers } = useSelector((state) => state.user);
  const handleLogout = async () => {
    const response = await dispatch(logoutUserThunk());
    if (response.payload?.success) {
      navigate("/login");
    }
  };
  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col border-r border-r-white/10">
      <h2 className="bg-[#DE2A8A] p-2 m-3 mb-0 rounded-xl text-center">
        Chat App
      </h2>
      <div className="p-3">
        <label className="input">
          <input type="search" required placeholder="Search" />
          <CiSearch />
        </label>
      </div>
      <div className="h-full overflow-y-auto">
        {otherUsers?.map((userDetails) => {
          return <User key={userDetails._id} userDetails={userDetails} />;
        })}
      </div>
      <div className="h-14 bg-black/20 p-3 flex items-center justify-between rounded-xl m-1">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <button className="btn btn-secondary h-7 w-24" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
