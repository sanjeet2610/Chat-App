import React from "react";

const User = () => {
  return (
    <div className="flex items-center gap-5 p-2">
      <div className="avatar avatar-online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>
      <div>
        <h2 className="text-[14px] line-clamp-1">Full Name</h2>
        <p className="text-[12px]">Username</p>
      </div>
    </div>
  );
};

export default User;
