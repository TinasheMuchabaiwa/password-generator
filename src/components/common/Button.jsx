import React from 'react';
import clsx from 'clsx';

/**
 * Button component with hover and active states
 * @param {Object} props
 * @param {string} props.children - Button content
 * @param {function} props.onClick - Click handler
 * @param {string} props.variant - Button style variant ('primary' | 'secondary')
 * @param {boolean} props.fullWidth - Whether button should take full width
 */

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = false,
  className,
  ...props 
}) => {
  const baseStyles = 'flex items-center justify-center px-6 py-4 font-mono font-bold transition-colors duration-200';
  
  const variants = {
    primary: 'bg-neon-green text-very-dark hover:bg-very-dark hover:text-neon-green border-2 border-neon-green',
    secondary: 'bg-transparent text-neon-green hover:bg-neon-green hover:text-very-dark'
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        baseStyles,
        variants[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;