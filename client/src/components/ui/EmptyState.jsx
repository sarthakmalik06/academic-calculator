import React from 'react';
import { HiOutlineFolderOpen } from 'react-icons/hi';
import Button from './Button';

/**
 * Reusable Empty State component with customizable icon, title, message, and call-to-action button.
 */
function EmptyState({
  icon: Icon = HiOutlineFolderOpen,
  title = 'No entries found',
  description = 'You have not added any records yet. Click the button below to get started.',
  actionLabel,
  onAction,
  actionIcon,
  className = '',
}) {
  return (
    <div className={`glass-panel p-8 sm:p-12 text-center flex flex-col items-center justify-center space-y-4 max-w-lg mx-auto ${className}`}>
      <div className="h-16 w-16 rounded-2xl bg-brand-550/10 border border-brand-550/20 flex items-center justify-center text-brand-400 shadow-glow-primary">
        <Icon className="h-8 w-8" />
      </div>

      <div className="space-y-1.5 max-w-sm">
        <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>

      {actionLabel && onAction && (
        <div className="pt-2">
          <Button variant="primary" size="md" onClick={onAction} icon={actionIcon}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
}

export default EmptyState;
