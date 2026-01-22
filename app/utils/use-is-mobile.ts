import { useState, useEffect } from "react";

import { globalWindow } from "./globals";

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      if (globalWindow === undefined) return;
      const mediaQuery = globalWindow.matchMedia("(max-width: 768px)");
      
      const userAgent = navigator?.userAgent.toLowerCase();
      const mobileKeywords = [
        'android', 'webos', 'iphone', 'ipad', 'ipod', 
        'blackberry', 'windows phone', 'mobile'
      ];
      
      const isMobileUA = mobileKeywords.some(keyword => 
        userAgent.includes(keyword)
      );
      
      const isMobileDevice = mediaQuery.matches || 
        (isMobileUA && globalWindow.innerWidth <= 768);
      
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();

    const mediaQuery = globalWindow?.matchMedia("(max-width: 768px)");
    const handleChange = () => checkIsMobile();

    mediaQuery?.addEventListener('change', handleChange);
 
    globalWindow.addEventListener('resize', checkIsMobile);

    return () => {
      mediaQuery?.removeEventListener('change', handleChange);
      globalWindow.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;