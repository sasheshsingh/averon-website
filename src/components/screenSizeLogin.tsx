'use client';

import { useState, useEffect } from 'react';

const ScreenSizeGuard = ({ children }: { children: React.ReactNode }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isSmallScreen) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white text-xl text-center p-4">
        Please check on a laptop or desktop for the best experience.
      </div>
    );
  }

  return <>{children}</>;
};

export default ScreenSizeGuard;
