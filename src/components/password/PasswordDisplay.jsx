import React from 'react';

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
            <svg 
              width="21" 
              height="24" 
              className={`${copied ? 'text-neon-green' : 'text-[#A4FFAF] group-hover:text-[#E6E5EA]'} transition-colors duration-200`}
            >
              <path 
                fill="currentColor"
                d="M20.341 3.091L17.909.659A2.25 2.25 0 0016.319 0H8.25A2.25 2.25 0 006 2.25V4.5H2.25A2.25 2.25 0 000 6.75v15A2.25 2.25 0 002.25 24h10.5A2.25 2.25 0 0015 21.75V19.5h3.75A2.25 2.25 0 0021 17.25V4.682a2.25 2.25 0 00-.659-1.591zM12.469 21.75H2.53a.281.281 0 01-.281-.281V7.03a.281.281 0 01.281-.281H6v10.5a2.25 2.25 0 002.25 2.25h4.5v1.969a.282.282 0 01-.281.281zm6-4.5H8.53a.281.281 0 01-.281-.281V2.53a.281.281 0 01.281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 01-.281.281zm.281-12h-3v-3h.451c.075 0 .147.03.2.082l2.316 2.316a.283.283 0 01.082.199v.451z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordDisplay;
