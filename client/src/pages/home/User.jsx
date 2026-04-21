import React from "react";

const User = ({ userDetails }) => {
  return (
    <div className="flex items-center gap-5 p-2 hover:bg-gray-700 rounded-xl cursor-pointer ">
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
