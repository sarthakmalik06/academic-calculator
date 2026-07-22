import React from 'react';

/**
 * Reusable Loading Spinner and Skeleton Loaders for asynchronous loading states.
 */
export function LoadingSpinner({ size = 'md', className = '', label = 'Loading...' }) {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className={`flex flex-col items-center justify-center p-6 space-y-3 ${className}`}>
      <div
        className={`${sizes[size] || sizes.md} rounded-full border-brand-550/30 border-t-brand-400 animate-spin`}
      />
      {label && <span className="text-xs font-medium text-slate-400">{label}</span>}
    </div>
  );
}

export function CardSkeleton({ count = 1 }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="glass-panel p-6 space-y-4 animate-pulse border-slate-800/60"
        >
          <div className="flex items-center justify-between">
            <div className="h-5 w-32 bg-slate-800 rounded-md" />
            <div className="h-6 w-16 bg-slate-800 rounded-full" />
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-slate-800/60 rounded" />
            <div className="h-4 w-3/4 bg-slate-800/60 rounded" />
          </div>
          <div className="h-2 w-full bg-slate-800 rounded-full mt-4" />
        </div>
      ))}
    </div>
  );
}

export default LoadingSpinner;
