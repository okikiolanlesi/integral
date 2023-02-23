import React from 'react';

const GlobalSection = () => {
  return (
    <div>
      <div className="py-8 px-3 flex flex-col items-center rounded-lg">
        <h3 className="text-xl font-semibold text-center">
          Huge Global Network of Fast VPN{' '}
        </h3>
        <p className="max-w-sm text-xs lg:text-sm text-center mb-8 md:mb-12">
          See LaslesVPN everywhere to make it
          easier for you when you move locations.
        </p>{' '}
        <div>
          <img
            src="images/Huge Global.png"
            alt="Global map"
          />
        </div>
        <div>
          <img
            src="images/Sponsored.png"
            alt="sponsored by brand logos"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalSection;
