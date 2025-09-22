import React, { useState } from "react";

export default function ZoomableImage({ src, alt, className = "", caption }) {
  const [zoomOpen, setZoomOpen] = useState(false);
  const handleZoomOpen = (e) => {
    e.stopPropagation();
    setZoomOpen(true);
  };
  const handleZoomClose = () => setZoomOpen(false);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-2 relative">
      <img
        src={src}
        alt={alt}
        className={`${className} cursor-zoom-in`}
        style={{ background: "none", border: "none" }}
        onClick={handleZoomOpen}
      />
      {caption && <span className="text-gray-500 text-sm">{caption}</span>}
      {/* Zoom Modal */}
      {zoomOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={handleZoomClose}>
          <div className="relative max-w-4xl w-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
            <button onClick={handleZoomClose} className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10" aria-label="Close zoom">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={src}
              alt={alt + " Zoomed"}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
