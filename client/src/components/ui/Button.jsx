import React from 'react';

/**
 * Reusable Button Component with multiple variants, sizes, and state styles.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none';

  const variants = {
    primary: 'bg-gradient-to-r from-brand-600 to-brand-550 hover:from-brand-500 hover:to-brand-600 text-white shadow-premium hover:shadow-glow-primary hover:-translate-y-0.5 active:translate-y-0 focus:ring-brand-500',
    secondary: 'bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:bg-slate-800/80 hover:border-slate-700 shadow-sm focus:ring-slate-700 hover:-translate-y-0.5',
    outline: 'bg-transparent border border-brand-550/40 text-brand-400 hover:bg-brand-550/10 hover:border-brand-550 focus:ring-brand-500',
    ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50 focus:ring-slate-700',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white shadow-sm hover:shadow-rose-900/40 focus:ring-rose-500 hover:-translate-y-0.5',
    accent: 'bg-gradient-to-r from-accent-teal to-accent-emerald hover:brightness-110 text-slate-950 font-bold shadow-md focus:ring-accent-teal hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs gap-1.5 rounded-lg',
    md: 'px-4 py-2.5 text-sm gap-2 rounded-xl',
    lg: 'px-6 py-3.5 text-base gap-2.5 rounded-2xl',
  };

  return (
    <button
      type={type}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : (
        Icon && iconPosition === 'left' && <Icon className="shrink-0" />
      )}

      <span>{children}</span>

      {!isLoading && Icon && iconPosition === 'right' && <Icon className="shrink-0" />}
    </button>
  );
}

export default Button;
