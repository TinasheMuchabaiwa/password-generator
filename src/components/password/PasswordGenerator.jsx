import React, { useState, useCallback } from 'react';
import PasswordDisplay from './PasswordDisplay';
import PasswordOptions from './PasswordOptions';
import StrengthMeter from './StrengthMeter';
import { generatePassword } from '../../utils/GeneratePassword';
import { calculateStrength } from '../../utils/CalculateStrength';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('P4$5W0rD');
  const [copied, setCopied] = useState(false);
  const [options, setOptions] = useState({
    length: 10,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false
  });

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  const handleGenerate = () => {
    const newPassword = generatePassword(options);
    setPassword(newPassword);
    setCopied(false);
  };

  const strength = password === 'P4$5W0rD' ? 'EMPTY' : calculateStrength(password, options);

  return (
    <div className="w-full">
      <PasswordDisplay 
        password={password}
        onCopy={handleCopy}
        copied={copied}
      />

      <div className="bg-dark-grey p-5">
        <PasswordOptions
          options={options}
          onOptionsChange={setOptions}
        />

        <div className="mt-8 bg-very-dark p-4 flex items-center justify-between">
          <span className="text-grey font-mono uppercase text-base">STRENGTH</span>
          <StrengthMeter strength={strength} />
        </div>

        <button
          onClick={handleGenerate}
          className="w-full mt-8 bg-neon-green hover:bg-transparent text-very-dark hover:text-neon-green border-2 border-neon-green font-mono font-bold p-4 flex items-center justify-center gap-2 transition-all duration-200"
        >
          GENERATE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="ml-2"
          >
            <path
              d="M5.106 12L11.106 6L5.106 0"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;