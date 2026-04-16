import { CiSearch } from "react-icons/ci";
import User from "./User";

const UserSidebar = () => {
  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col">
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
        <User />
        <User />
        <User />
      </div>
      <div className="h-14 bg-black/20 p-3 flex items-center justify-between rounded-xl">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <button className="btn btn-secondary h-7 w-24">Log Out</button>
      </div>
    </div>
  );
};

export default UserSidebar;
