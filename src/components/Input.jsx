import React from 'react';

const Input = React.forwardRef(({ label, error, className = '', id, ...props }, ref) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label htmlFor={inputId} className="block text-base font-semibold text-zinc-800 mb-2 text-center">
          {label}
        </label>
      )}
      <div className="relative max-w-md mx-auto">
        <input
          id={inputId}
          ref={ref}
          className={`wizard-input text-center outline-none ring-0 focus:ring-0 ${error ? 'border-red-400 focus:border-red-500' : ''}`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-500 ml-1 flex items-center">
          <svg className="w-4 h-4 mr-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
