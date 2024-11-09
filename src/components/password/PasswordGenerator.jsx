import React, { useState, useCallback } from 'react';
import PasswordDisplay from './PasswordDisplay';
import PasswordOptions from './PasswordOptions';
import StrengthMeter from './StrengthMeter';
import Button from '../common/Button';
import { generatePassword } from '../../utils/GeneratePassword';
import { calculateStrength } from '../../utils/CalculateStrength';

/**
 * Main password generator container component
 */
const PasswordGenerator = () => {
  const [password, setPassword] = useState('PTx1f5DaFX');
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

  const strength = calculateStrength(password, options);

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <h1 className="text-grey text-center font-mono text-2xl mb-8">
        Password Generator
      </h1>

      <PasswordDisplay
        password={password}
        onCopy={handleCopy}
        copied={copied}
      />

      <PasswordOptions
        options={options}
        onOptionsChange={setOptions}
      />

      <StrengthMeter strength={strength} />

      <Button
        onClick={handleGenerate}
        fullWidth
        className="mt-8"
      >
        <span>GENERATE</span>
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </Button>
    </div>
  );
};

export default PasswordGenerator;