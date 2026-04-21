import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../store/slice/user/user.slice.js";

const User = ({ userDetails }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.user);
  const handleClick = () => {
    dispatch(setSelectedUser(userDetails));
  };
  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-5 p-2 hover:bg-gray-700 rounded-xl cursor-pointer ${userDetails?._id == selectedUser?._id && "bg-gray-700"}`}
    >
      <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
          <img src={userDetails?.avatar} />
        </div>
      </div>
      <div>
        <h2 className="text-[14px] line-clamp-1">{userDetails?.fullName}</h2>
        <p className="text-[12px]">{userDetails?.username}</p>
      </div>
    </div>
  );
};

export default User;
