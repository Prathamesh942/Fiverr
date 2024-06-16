import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const isActive = () => {
    window.scrollY ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 123,
    username: "john123",
    isSeller: true,
  };

  return (
    <div
      className={` flex items-center px-[6%] ${
        active ? "bg-white text-black" : "bg-[#013914] text-white"
      }   flex-col sticky top-0 navbar`}
    >
      <div className=" w-[100%] flex justify-between py-[20px]">
        <div className=" text-[34px] font-bold">
          {/* <Link to={"/"}> */}
          <span>fiverr</span>
          {/* </Link> */}
          <span className=" text-[#1dbf73]">.</span>
        </div>
        <div className=" flex items-center gap-[24px] font-medium">
          <span>Fiverr Buisness</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!currentUser.isSeller && <span>Become a seller</span>}
          {currentUser && (
            <button className=" text-white py-[5px] px-[20px] rounded-md border border-white cursor-pointer hover:bg-[#1dbf73] hover:border-[#1dbf73]">
              Join
            </button>
          )}
          {currentUser && (
            <div
              className="flex items-center gap-[10px] cursor-pointer relative"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <img
                className=" w-[32px] h-[32px] rounded-full object-cover"
                src="https://external-preview.redd.it/au1qG7mkHgDHoSk_I3kjZhNanbU3E8gsjfc2hqS5Iuk.jpg?width=640&crop=smart&auto=webp&s=2a759f78528adfa721be681517ea942a91a4901f"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className=" absolute top-[50px] right-0 p-[20px] bg-white border rounded-md flex gap-[10px] text-gray-600 flex-col">
                  {currentUser?.isSeller && (
                    <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                    </>
                  )}
                  <span>Orders</span>
                  <span>Messages</span>
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {active && (
        <>
          <hr className=" w-[100%] h-0 border-[0.5px] border-gray-400" />
          <div className=" w-[1400px] py-[10px] flex justify-between font-light text-gray-400">
            <span>Test</span>
            <span>Test2</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
