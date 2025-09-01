import React from 'react';

interface LogoProps {
  size?: number;
  darkMode?: boolean;
  imageUrl: string;
}

const Logo: React.FC<LogoProps> = ({ size = 40, darkMode = false, imageUrl }) => {
  const textColor = darkMode ? 'text-white' : 'text-slate-900';
  
  return (
    <div
      className="relative flex-shrink-0"
      style={{ width: size, height: size }}
    >
      <img
        src= {'/images/logo.png'}
        alt="TML Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
