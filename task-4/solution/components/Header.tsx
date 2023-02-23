import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center h-20 sm:my-3">
        <div className="">
          <img
            className="w-full"
            src="images/Logo.png"
            alt="logo"
          />
        </div>
        <div className="hidden lg:flex space-x-4 text-md text-secondary">
          <a>About</a>
          <a>Features</a>
          <a>Pricing</a>
          <a>Testimonials</a>
          <a>Help</a>
        </div>
        <div className="hidden lg:flex space-x-4 items-center ">
          <div className="font-semibold text-md hover:cursor-pointer hover:border hover:border-primary px-7 py-1.5 rounded-full transition-colors duration-200 ease-in-out">
            Sign In
          </div>
          <div className="font-semibold text-md cursor-pointer border border-primary px-7 py-1.5 rounded-full text-brand hover:bg-red-600 hover:text-white transition-colors duration-200 ease-in-out">
            Sign Up
          </div>
        </div>
        <svg
          className="lg:hidden w-8 h-8 text-secondary cursor-pointer"
          width="800px"
          height="800px"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 7C3 6.44771 3.44772 6 4 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H4C3.44772 8 3 7.55229 3 7Z"
            fill="#000000"
          />
          <path
            d="M3 14C3 13.4477 3.44772 13 4 13H24C24.5523 13 25 13.4477 25 14C25 14.5523 24.5523 15 24 15H4C3.44772 15 3 14.5523 3 14Z"
            fill="#000000"
          />
          <path
            d="M4 20C3.44772 20 3 20.4477 3 21C3 21.5523 3.44772 22 4 22H24C24.5523 22 25 21.5523 25 21C25 20.4477 24.5523 20 24 20H4Z"
            fill="#000000"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
