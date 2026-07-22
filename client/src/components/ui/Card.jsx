import React from 'react';

/**
 * Reusable Card component suite with glassmorphic styling, dark mode support, and hover variants.
 */
export function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`glass-panel ${hover ? 'glass-panel-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`p-6 pb-4 border-b border-slate-800/60 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', icon: Icon, ...props }) {
  return (
    <h3 className={`text-xl font-bold text-white flex items-center gap-2.5 ${className}`} {...props}>
      {Icon && <Icon className="text-brand-400 shrink-0 h-5 w-5" />}
      <span>{children}</span>
    </h3>
  );
}

export function CardDescription({ children, className = '', ...props }) {
  return (
    <p className={`text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed ${className}`} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`p-6 pt-4 border-t border-slate-800/60 flex items-center justify-between gap-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default Card;
