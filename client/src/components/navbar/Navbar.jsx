import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-center bg-[#013914] text-white">
      <div className=" w-[1400px] flex justify-between py-[20px]">
        <div className=" text-[34px] font-bold">
          <span>fiverr</span>
          <span className=" text-[#1dbf73]">.</span>
        </div>
        <div className=" flex items-center gap-[24px] font-medium">
          <span>Fiverr Buisness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          <span>Become a seller</span>
          <button className=" text-white py-[5px] px-[20px] rounded-md border border-white cursor-pointer hover:bg-[#1dbf73] hover:border-[#1dbf73]">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
