import { X, Maximize2, Minimize2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface RsvpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RsvpModal({ isOpen, onClose }: RsvpModalProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // Prevent body scroll when modal is open and not minimized
  useEffect(() => {
    if (isOpen && !isMinimized) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMinimized]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !isMinimized) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, isMinimized, onClose]);

  // Reset states when closing
  const handleClose = () => {
    setIsMinimized(false);
    setIsFullScreen(false);
    onClose();
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleRestore = () => {
    setIsMinimized(false);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  if (!isOpen) return null;

  // Minimized floating button
  if (isMinimized) {
    return (
      <button
        onClick={handleRestore}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-orange-500 via-pink-500 to-teal-500 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 animate-pulse"
      >
        <span className="text-lg">Continue RSVP</span>
      </button>
    );
  }

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm ${isFullScreen ? 'p-0' : 'p-4'}`}
      onClick={!isFullScreen ? handleClose : undefined}
    >
      <div 
        className={`relative bg-white shadow-2xl flex flex-col ${
          isFullScreen 
            ? 'w-full h-full rounded-none' 
            : 'rounded-3xl max-w-4xl w-full max-h-[90vh] md:max-h-[90vh]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-teal-500 p-4 md:p-6 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl text-white">RSVP Form (Asana)</h2>
              <p className="text-white/90 mt-1 text-sm md:text-base">Myrtle Beach, SC • May 28-31, 2026</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Full Screen Toggle - Hidden on mobile, show on desktop */}
              <button
                onClick={toggleFullScreen}
                className="hidden md:block text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
              >
                {isFullScreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
              {/* Minimize Button - Only show when not in fullscreen */}
              {!isFullScreen && (
                <button
                  onClick={handleMinimize}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  aria-label="Minimize"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
              )}
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Asana Form Container */}
        <div className="overflow-y-auto flex-1 bg-gradient-to-r from-orange-50 via-white to-teal-50 flex items-start justify-center py-8">
          <div className="asana-embed-container max-w-3xl w-full">
            <link rel="stylesheet" href="https://form.asana.com/static/asana-form-embed-style.css"/>
            <iframe className="override-asana-embed-iframe w-full h-full min-h-[800px] border-0" src="https://form.asana.com/?k=FKeVEt-fpZg3_xs_JIg5hA&d=1211849970832809&embed=true"></iframe>
            <div className="asana-embed-footer">
              <a rel="nofollow noopener" target="_blank" className="asana-embed-footer-link" href="https://asana.com/?utm_source=embedded_form">
                <span className="asana-embed-footer-text">Form powered by</span>
                <div className="asana-embed-footer-logo" role="img" aria-label="Logo of Asana"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}