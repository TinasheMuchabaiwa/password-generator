import React from 'react';
import Slider from '../common/Slider';
import Checkbox from '../common/Checkbox';

/**
 * Password generation options including length and character types
 * @param {Object} props
 * @param {Object} props.options - Current options state
 * @param {function} props.onOptionsChange - Options change handler
 */
const PasswordOptions = ({ options, onOptionsChange }) => {
  const handleLengthChange = (e) => {
    onOptionsChange({
      ...options,
      length: parseInt(e.target.value)
    });
  };

  const handleCheckboxChange = (optionKey) => {
    onOptionsChange({
      ...options,
      [optionKey]: !options[optionKey]
    });
  };

  return (
    <div className="bg-dark-grey p-6 mt-6">
      <Slider
        value={options.length}
        onChange={handleLengthChange}
        min={10}
        max={20}
      />
      
      <div className="mt-8 space-y-4">
        <Checkbox
          label="Include Uppercase Letters"
          checked={options.uppercase}
          onChange={() => handleCheckboxChange('uppercase')}
        />
        <Checkbox
          label="Include Lowercase Letters"
          checked={options.lowercase}
          onChange={() => handleCheckboxChange('lowercase')}
        />
        <Checkbox
          label="Include Numbers"
          checked={options.numbers}
          onChange={() => handleCheckboxChange('numbers')}
        />
        <Checkbox
          label="Include Symbols"
          checked={options.symbols}
          onChange={() => handleCheckboxChange('symbols')}
        />
      </div>
    </div>
  );
};

export default PasswordOptions;