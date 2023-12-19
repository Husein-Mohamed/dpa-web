import React from 'react';

const Hamuda: React.FC = () => {
  const steps: string[] = ["custom info", "shipping info", "payment"];

  return (
    <div className='flex justify-between'>
      {steps?.map((step, i) => (
        <div key={i} className='step-item'>
          <div>{i + 1}</div>
          <p className='text-gray-500'>{step}</p>
        </div>
      ))}
    </div>
  );
};

export default Hamuda;