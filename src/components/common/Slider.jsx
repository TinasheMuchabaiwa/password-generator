import React from 'react';
import clsx from 'clsx';

const Slider = ({
  value,
  onChange,
  min = 0,
  max = 20,
  className
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={clsx('w-full', className)}>
      <div className="flex justify-between mb-2">
        <span className="text-grey font-mono">Character Length</span>
        <span className="text-neon-green font-mono text-2xl">{value}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          className={clsx(
            'w-full h-2 bg-very-dark appearance-none rounded-lg',
            'focus:outline-none focus:ring-2 focus:ring-neon-green',
            'range-slider'
          )}
          style={{
            background: `linear-gradient(to right, 
              #A4FFAF 0%, 
              #A4FFAF ${percentage}%, 
              #18171F ${percentage}%, 
              #18171F 100%)`
          }}
        />
      </div>
    </div>
  );
};

export default Slider;