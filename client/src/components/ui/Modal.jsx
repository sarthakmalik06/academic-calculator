import React, { useEffect } from 'react';
import { HiX } from 'react-icons/hi';

/**
 * Reusable Modal Dialog Component with backdrop blur, animations, and accessible keyboard escape handling.
 */
function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  footerActions,
  maxWidth = 'max-w-lg',
}) {
  // Close on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Darkened Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card Container */}
      <div
        className={`relative w-full ${maxWidth} bg-slate-900 border border-slate-800/90 rounded-2xl shadow-2xl overflow-hidden z-10 animate-scaleIn`}
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-slate-800/80">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
            {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <HiX className="h-5 w-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">{children}</div>

        {/* Footer Actions (Optional) */}
        {footerActions && (
          <div className="flex items-center justify-end gap-3 p-6 pt-4 border-t border-slate-800/80 bg-slate-950/40">
            {footerActions}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
