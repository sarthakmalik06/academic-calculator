import React from 'react';

/**
 * Reusable Section Header component for uniform page and section headings.
 */
function SectionHeader({
  badge,
  title,
  highlightTitle,
  description,
  align = 'left',
  className = '',
  action,
}) {
  const alignments = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={`flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/60 pb-6 mb-8 ${className}`}>
      <div className={`space-y-2 max-w-2xl flex flex-col ${alignments[align] || alignments.left}`}>
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-brand-550/30 bg-brand-550/10 text-brand-300 text-xs font-semibold uppercase tracking-wider">
            {badge}
          </div>
        )}

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {title}{' '}
          {highlightTitle && (
            <span className="bg-gradient-to-r from-brand-400 via-brand-550 to-brand-600 bg-clip-text text-transparent glow-text-primary">
              {highlightTitle}
            </span>
          )}
        </h1>

        {description && (
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{description}</p>
        )}
      </div>

      {action && <div className="shrink-0 pt-2 md:pt-0">{action}</div>}
    </div>
  );
}

export default SectionHeader;
