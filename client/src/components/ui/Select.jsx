import React from 'react';

/**
 * Reusable Select Component with custom styling, options array, and error handling.
 */
function Select({
  label,
  id,
  value,
  onChange,
  options = [],
  error,
  helperText,
  icon: Icon,
  isDisabled = false,
  required = false,
  placeholder = 'Select an option',
  className = '',
  children,
  ...props
}) {
  const selectId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={`space-y-1.5 w-full ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="block text-xs font-semibold text-slate-300 uppercase tracking-wider"
        >
          {label} {required && <span className="text-rose-400">*</span>}
        </label>
      )}

      <div className="relative rounded-xl shadow-sm">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Icon className="h-4 w-4" />
          </div>
        )}

        <select
          id={selectId}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          className={`w-full bg-slate-950/80 border rounded-xl py-2.5 text-sm text-slate-100 placeholder-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-550/40 disabled:opacity-50 disabled:bg-slate-900/40 appearance-none ${
            Icon ? 'pl-10 pr-8' : 'pl-4 pr-8'
          } ${
            error
              ? 'border-rose-500/80 focus:border-rose-500'
              : 'border-slate-800 focus:border-brand-550/80'
          }`}
          {...props}
        >
          {placeholder && (
            <option value="" disabled className="bg-slate-900 text-slate-400">
              {placeholder}
            </option>
          )}

          {options.length > 0
            ? options.map((opt) => (
                <option
                  key={typeof opt === 'object' ? opt.value : opt}
                  value={typeof opt === 'object' ? opt.value : opt}
                  className="bg-slate-900 text-slate-100"
                >
                  {typeof opt === 'object' ? opt.label : opt}
                </option>
              ))
            : children}
        </select>

        {/* Custom Chevron Indicator */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {error && <p className="text-xs text-rose-400 mt-1">{error}</p>}
      {!error && helperText && <p className="text-xs text-slate-500 mt-1">{helperText}</p>}
    </div>
  );
}

export default Select;
