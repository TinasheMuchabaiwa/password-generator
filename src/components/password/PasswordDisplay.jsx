import React from 'react';
import { ClipboardDocumentIcon } from '@heroicons/react/24/outline';

/**
 * Displays the generated password with a copy button
 * @param {Object} props
 * @param {string} props.password - Generated password
 * @param {function} props.onCopy - Copy handler
 * @param {boolean} props.copied - Whether password was copied
 */
const PasswordDisplay = ({ password, onCopy, copied }) => {
  return (
    <div className="bg-dark-grey p-4 flex items-center justify-between">
      <input
        type="text"
        readOnly
        value={password}
        className="bg-transparent text-grey font-mono text-2xl focus:outline-none w-full"
        aria-label="Generated password"
      />
      <button
        onClick={onCopy}
        className="group ml-4 p-2 hover:bg-very-dark rounded transition-colors duration-200"
        aria-label="Copy password"
      >
        <ClipboardDocumentIcon 
          className={clsx(
            'w-6 h-6 transition-colors duration-200',
            copied ? 'text-neon-green' : 'text-grey group-hover:text-neon-green'
          )}
        />
      </button>
    </div>
  );
};

export default PasswordDisplay;