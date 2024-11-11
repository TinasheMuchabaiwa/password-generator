import React, { useState } from 'react';

const Slider = ({
  value,
  onChange,
  min = 0,
  max = 20,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-[#E6E5EA] font-mono">Character Length</span>
        <span className="text-neon-green font-mono text-2xl">{value}</span>
      </div>
      <div className="relative h-2">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={onChange}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="absolute w-full h-7 opacity-0 cursor-pointer z-20"
        />
        {/* Track background */}
        <div className="absolute w-full h-full bg-very-dark rounded-full" />
        {/* Filled track */}
        <div 
          className="absolute h-full bg-neon-green rounded-full"
          style={{ width: `${percentage}%` }}
        />
        {/* Thumb */}
        <div 
          className={`absolute w-7 h-7 rounded-full transition-all duration-200 -translate-y-1/2 top-1/2
            ${isHovering ? 'bg-very-dark border-2 border-neon-green' : 'bg-[#E6E5EA]'}`}
          style={{ 
            left: `calc(${percentage}% - 14px)`
          }}
        />
      </div>
    </div>
  );
};

export default Slider;