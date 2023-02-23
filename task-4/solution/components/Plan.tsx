import React from 'react';
export interface IPlan {
  id: number;
  image: string;
  plan: string;
  perks: string[];
  price: number;
}
const Plan = ({
  image,
  plan,
  perks,
  price,
}: IPlan) => {
  return (
    <div className="flex flex-col justify-between items-center bg-white rounded-xl mb-5 border-2 hover:border-primary transition-colors duration-200 ease-linear px-10 py-8 md:p-7 lg:p-14">
      <div>
        <div className="flex flex-col justify-center items-center ">
          <div className="max-w-[8rem] ">
            <img
              className="w-full"
              src={`images/${image}`}
            />
          </div>
          <div className="text-sm font-bold my-4 ">{`${plan} Plan`}</div>
        </div>
        <div className="mb-10">
          {perks.map((perk) => {
            return (
              <div className="flex items-center space-x-2 mb-2 md:mb-4 text-sm sm:text-md">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4"
                >
                  <path
                    d="M11.4487 17.2796C11.3174 17.2798 11.1874 17.2542 11.0661 17.2041C10.9448 17.154 10.8345 17.0804 10.7417 16.9876L6.4997 12.7446C6.40412 12.6524 6.32786 12.5421 6.27537 12.4201C6.22288 12.2982 6.1952 12.167 6.19395 12.0342C6.19271 11.9014 6.21792 11.7697 6.26811 11.6468C6.3183 11.5238 6.39248 11.4121 6.4863 11.3182C6.58013 11.2242 6.69173 11.1499 6.81458 11.0995C6.93744 11.0492 7.0691 11.0238 7.20188 11.0248C7.33466 11.0259 7.4659 11.0534 7.58794 11.1057C7.70998 11.158 7.82038 11.2341 7.9127 11.3296L11.4477 14.8646L17.8127 8.50156C18.0002 8.31392 18.2546 8.20845 18.5198 8.20836C18.7851 8.20827 19.0396 8.31355 19.2272 8.50106C19.4148 8.68857 19.5203 8.94294 19.5204 9.20821C19.5205 9.47348 19.4152 9.72792 19.2277 9.91556L12.1557 16.9876C12.0629 17.0804 11.9526 17.154 11.8313 17.2041C11.71 17.2542 11.58 17.2798 11.4487 17.2796Z"
                    fill="#2FAB73"
                  />
                </svg>

                <p className="text-xs text-secondary">
                  {perk}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <div>
          <span className="text-md font-extrabold">
            {price > 0 ? `$${price} ` : 'Free'}
          </span>
          <span className="text-sm font-medium text-secondary">
            {price > 0 ? `/ mo` : null}
          </span>
        </div>
        <div className="font-semibold text-md cursor-pointer border border-primary px-7 py-1 rounded-full text-brand hover:bg-red-600 hover:text-white transition-colors duration-200 ease-in-out">
          Select
        </div>
      </div>
    </div>
  );
};

export default Plan;
