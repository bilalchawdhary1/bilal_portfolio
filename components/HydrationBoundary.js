"use client";

import {useEffect, useState} from "react";

const HydrationBoundary = ({children}) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Clean up any browser extension modifications
    const cleanup = () => {
      const html = document.documentElement;
      // Remove common browser extension attributes
      const attributesToRemove = [
        "data-arp",
        "data-new-gr-c-s-check-loaded",
        "data-gr-ext-installed",
      ];
      attributesToRemove.forEach(attr => {
        if (html.hasAttribute(attr)) {
          html.removeAttribute(attr);
        }
      });
    };

    // Run cleanup immediately
    cleanup();

    // Run cleanup after a short delay to ensure extensions have finished
    const timeoutId = setTimeout(() => {
      cleanup();
      setIsHydrated(true);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, []);

  if (!isHydrated) {
    return (
      <div className='min-h-screen bg-white flex items-center justify-center'>
        <div className='flex flex-col items-center space-y-4'>
          <div className='w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin'></div>
          <p className='text-gray-600 font-medium'>Loading...</p>
        </div>
      </div>
    );
  }

  return children;
};

export default HydrationBoundary;
