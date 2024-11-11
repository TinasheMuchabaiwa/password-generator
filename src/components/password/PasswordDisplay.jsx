import React from 'react';
import copyIcon from '../../assets/icons/icon-copy.svg';

const PasswordDisplay = ({ password, onCopy, copied }) => {
  const isPlaceholder = password === "P4$5W0rD"; // Check if it's in "empty" state

  return (
    <div className="bg-dark-grey p-8 mb-6 rounded-lg">
      <div className="flex items-center justify-between">
        <input
          type="text"
          readOnly
          value={password}
          placeholder="P4$5W0rD!"
          className={`bg-transparent text-2xl font-mono w-full focus:outline-none
            ${isPlaceholder ? 'text-grey' : 'text-[#E6E5EA]'}
            placeholder:font-mono placeholder:text-2xl`}
        />
        <div className="flex items-center gap-4">
          {copied && (
            <span className="font-mono text-neon-green text-lg uppercase tracking-wider">
              COPIED
            </span>
          )}
          <button
            onClick={onCopy}
            className="group"
            aria-label="Copy password"
          >
            <img
              src={copyIcon}
              alt="Copy Icon"
              className={`${copied ? 'text-neon-green' : 'text-[#A4FFAF] group-hover:text-[#E6E5EA]'} transition-colors duration-200`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordDisplay;
