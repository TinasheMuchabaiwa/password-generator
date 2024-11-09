import React from 'react';
import clsx from 'clsx';

const Checkbox = ({ label, checked, onChange, className }) => {
  return (
    <label className={clsx('flex items-center cursor-pointer group', className)}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only" // Hidden but accessible
        />
        <div className={clsx(
          'w-5 h-5 border-2 transition-colors duration-200',
          checked ? 'bg-neon-green border-neon-green' : 'border-grey',
          'group-hover:border-neon-green'
        )}>
          {checked && (
            <svg
              className="w-4 h-4 text-very-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </div>
      <span className="ml-4 text-grey text-lg font-mono">
        {label}
      </span>
    </label>
  );
};

export default Checkbox;