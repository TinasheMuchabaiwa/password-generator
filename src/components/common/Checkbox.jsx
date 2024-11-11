import React from 'react';
import clsx from 'clsx';
import CheckIcon from '../../assets/icons/icon-check.svg';

/**
 * Custom checkbox component with styling matching the design
 * @param {Object} props
 * @param {string} props.label - Checkbox label
 * @param {boolean} props.checked - Checkbox state
 * @param {function} props.onChange - Change handler
 */
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
            <img src={CheckIcon} alt="Check Icon" className="w-3 h-3 m-1" />
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