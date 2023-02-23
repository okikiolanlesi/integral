import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-[24rem] lg:min-h-[30rem]  flex flex-col sm:flex-row sm:space-x-3 sm:justify-between  items-center space-y-12 sm:space-y-0">
      <div className="flex-col flex space-y-4 sm:max-w-[50%]">
        <h2 className="text-primary font-semibold text-2xl sm:text-4xl lg:text-5xl sm:max-w-[50vw]">
          Want anything to be easy with{' '}
          <span className="font-extrabold sm:max-w-[50%]">
            LaslesVPN.
          </span>
        </h2>
        <p className="text-secondary text-xs sm:text-md">
          Provide a network for all your needs
          with ease and fun using{' '}
          <span className="font-semibold">
            LaslesVPN
          </span>{' '}
          discover interesting features from us.
        </p>
        <div className=" bg-primary max-w-max px-7 py-2 lg:px-10 lg:py-3 text-white rounded-md flex justify-center text-xs lg:text-sm cursor-pointer shadow-lg shadow-[#f66661]">
          Get Started
        </div>
      </div>
      <div className=" max-w-xs sm:max-w-[50%] ">
        <img
          src="images/Illustration 1.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
