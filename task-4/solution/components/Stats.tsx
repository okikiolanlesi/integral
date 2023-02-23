import React from "react";

const Stats = () => {
  return (
    <div className="flex justify-between  items-center py-4 rounded-lg h-20 sm:h-32 lg:h-36 my-7 sm:mt-0 shadow-xl">
      <div className="flex justify-center items-center w-full border-r-2">
        <div className="flex justify-center items-center space-x-2">
          <div className="w-6 md:w-12 lg:w-14">
            <img className="w-full" src="images/user.png" alt="" />
          </div>
          <div>
            <div className="font-bold text-sm sm:text-md md:text-lg lg:text-2xl">
              90+
            </div>
            <div className="text-[0.5rem] sm:text-xs md:text-sm lg:text-md">
              Users
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full border-r-2 ">
        <div className="flex justify-center items-center space-x-2 ">
          <div className="w-6 md:w-12 lg:w-14">
            <img className="w-full" src="images/location.png" alt="" />
          </div>
          <div>
            <div className="font-bold text-sm sm:text-md md:text-lg lg:text-2xl">
              30+{" "}
            </div>
            <div className="text-[0.5rem] sm:text-xs md:text-sm lg:text-md">
              Locations{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full ">
        <div className="flex justify-center items-center space-x-2">
          <div className="w-6 md:w-12 lg:w-14">
            <img className="w-full" src="images/Server.png" alt="" />
          </div>
          <div>
            <div className="font-bold text-sm sm:text-md md:text-lg lg:text-2xl">
              50+
            </div>
            <div className="text-[0.5rem] sm:text-xs md:text-sm lg:text-md">
              Servers
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
