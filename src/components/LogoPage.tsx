import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import GembaLogo from './GembaLogo';

const LogoPage = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const [isCaptured, setIsCaptured] = useState(false);

  const handleDownload = () => {
    if (logoRef.current) {
      console.log('Capturing element:', logoRef.current);
      html2canvas(logoRef.current, {
        scale: 1.5, // Lowered scale for testing
        useCORS: true, // Handle CORS issues
        logging: true, // Enable logging for debugging
      })
        .then((canvas) => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/png');
          link.download = 'gemba-logo.png';
          link.click();
          setIsCaptured(true);
        })
        .catch((error) => {
          console.error('Error capturing the logo:', error);
        });
    } else {
      console.error('logoRef is null');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div ref={logoRef} className="mb-4">
        <GembaLogo className="h-16 w-auto" />
      </div>
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Download Logo as PNG
      </button>
      {isCaptured && (
        <p className="mt-4 text-green-600">Image downloaded successfully!</p>
      )}
    </div>
  );
};

export default LogoPage;
