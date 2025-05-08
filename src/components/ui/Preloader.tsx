import React from 'react';
import Logo from './Logo';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="animate-pulse">
        <Logo size={150} />
      </div>
    </div>
  );
};

export default Preloader;