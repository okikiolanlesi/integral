import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between h-12  items-center">
        {" "}
        <div className=" font-bold text-xl text-secondary">Events</div>
        <div className="flex space-x-3 items-center">
          <div className="w-4/5 sm:w-full">
            <img
              className=" w-full"
              src="/images/user-image.svg"
              alt="user image"
            />
          </div>

          <p className="text-sm  text-secondary font-semibold">Bernice</p>
          <div className="bg-[#EAEDF7] p-2 rounded-lg cursor-pointer">
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3334 1.33334L6.00002 6.00001L1.66669 1.33334"
                stroke="black"
                strokeLinecap="square"
              />
            </svg>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
