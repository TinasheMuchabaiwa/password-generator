import React, { useState, useCallback } from 'react';
import PasswordDisplay from './PasswordDisplay';
import PasswordOptions from './PasswordOptions';
import StrengthMeter from './StrengthMeter';
import { generatePassword } from '../../utils/GeneratePassword';
import { calculateStrength } from '../../utils/CalculateStrength';
import { checkPasswordPwned, secureClipboardCopy } from '../../utils/security';
import ArrowIcon from '../../assets/icons/icon-arrow-right.svg';

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
  const [pwnedWarning, setPwnedWarning] = useState(null);

  const handleCopy = async () => {
    const success = await secureClipboardCopy(password);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGenerate = async () => {
    const newPassword = generatePassword(options);
    setPassword(newPassword);
    setCopied(false);
    
    // Check if password has been pwned
    const pwnedResult = await checkPasswordPwned(newPassword);
    if (pwnedResult.isPwned) {
      setPwnedWarning(`This password has appeared in ${pwnedResult.occurrences.toLocaleString()} data breaches`);
    } else {
      setPwnedWarning(null);
    }
  };

  const strength = password === 'P4$5W0rD' ? 'EMPTY' : calculateStrength(password, options);

  return (
    <div className="w-full">
      <PasswordDisplay 
        password={password}
        onCopy={handleCopy}
        copied={copied}
      />

        {pwnedWarning && (
        <div className="mt-2 text-strength-red text-sm font-mono">
          ⚠️ {pwnedWarning}
        </div>
      )}

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
            <img src={ArrowIcon} alt="Arrow Icon" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;