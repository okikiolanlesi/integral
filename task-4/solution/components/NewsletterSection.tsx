import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="my-4 p-4 py-6 shadow-xl rounded-lg">
      <div className="flex justify-between items-center">
        <div className="max-w-[50%]">
          <div className="font-bold ">
            Subscribe Now to Get Special Features!
          </div>
          <div className="font-light text-secondary text-xs">
            Let's subscribe with us and find the
            fun.
          </div>
        </div>
        <div>
          <div className=" bg-primary max-w-max px-4 py-2 lg:px-10 lg:py-3 text-white rounded-md flex justify-center text-xs lg:text-sm cursor-pointer shadow-lg shadow-[#f66661]">
            Subscribe Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
