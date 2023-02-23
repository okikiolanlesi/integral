import React, { useState } from 'react';
import Plan, { IPlan } from './Plan';

const ChoosePlanSection = () => {
  const [plans, setPlans] = useState<IPlan[]>([
    {
      id: 1,
      image: 'Free.png',
      plan: 'Free',
      price: 0,
      perks: [
        'Unlimited Bandwith',
        'Encrypted Connection',
        'No Traffic Logs',
        'Works on All Devices',
      ],
    },
    {
      id: 2,
      image: 'Standard.png',
      plan: 'Standard',
      price: 9,
      perks: [
        'Unlimited Bandwith',
        'Encrypted Connection',
        'No Traffic Logs',
        'Works on All Devices',
        'Connect Anywhere',
      ],
    },
    {
      id: 3,
      image: 'Premium.png',
      plan: 'Premium',
      price: 12,
      perks: [
        'Unlimited Bandwith',
        'Encrypted Connection',
        'No Traffic Logs',
        'Works on All Devices',
        'Connect Anywhere',
        'Get New Features',
      ],
    },
  ]);

  const planList = plans.map((plan) => {
    return <Plan key={plan.id} {...plan} />;
  });
  return (
    <div className="py-8 px-3 bg-secondary flex flex-col items-center rounded-lg">
      <h3 className="text-xl font-semibold">
        Choose Your Plan
      </h3>
      <p className="max-w-sm text-xs lg:text-sm text-center mb-8 md:mb-12">
        Let's choose the package that is best for
        you and explore it happily and cheerfully.
      </p>
      <div className="flex flex-col md:flex-row md:w-full md:justify-evenly ">
        {planList}
      </div>
    </div>
  );
};

export default ChoosePlanSection;
