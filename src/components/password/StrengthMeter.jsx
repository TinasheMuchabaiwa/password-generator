import React from 'react';
import clsx from 'clsx';

/**
 * Visual indicator of password strength
 * @param {Object} props
 * @param {string} props.strength - Password strength ('EMPTY' | 'TOO WEAK' | 'WEAK' | 'MEDIUM' | 'STRONG')
 */
const StrengthMeter = ({ strength }) => {
  const strengthLevels = {
    'EMPTY': {
      bars: 4,
      color: 'border-white'
    },
    'TOO WEAK': {
      bars: 1,
      color: 'bg-strength-red border-white'
    },
    'WEAK': {
      bars: 2,
      color: 'bg-strength-orange'
    },
    'MEDIUM': {
      bars: 3,
      color: 'bg-strength-yellow'
    },
    'STRONG': {
      bars: 4,
      color: 'bg-neon-green'
    }
  };

  const currentLevel = strengthLevels[strength] || strengthLevels['EMPTY'];

  const renderBars = () => {
    return Array(4).fill(null).map((_, index) => (
      <div
        key={index}
        className={clsx(
          'w-2.5 h-7 border-2',
          index < currentLevel.bars
            ? currentLevel.color + ' border-transparent'
            : 'border-grey'
        )}
      />
    ));
  };

  return (
    <div className="bg-very-dark p-4 mt-1 text-2xl flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="font-mono text-white uppercase">
          {strength === 'EMPTY' ? '' : strength}
        </span>
        <div className="flex gap-2">
          {renderBars()}
        </div>
      </div>
    </div>
  );
};

export default StrengthMeter;
