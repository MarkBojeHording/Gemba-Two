
import React from 'react';

interface GembaLogoProps {
  className?: string;
}

const GembaLogo: React.FC<GembaLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative h-8 w-8 rounded-md overflow-hidden bg-gradient-to-br from-gemba-blue via-gemba-teal to-gemba-orange animate-gradient-shift">
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">G</div>
      </div>
      <span className="ml-2 text-xl font-bold text-gemba-dark">GEMBA INDONESIA KARYA</span>
    </div>
  );
};

export default GembaLogo;
