import { useState, useEffect } from "react";

import { window } from "./globals";

export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      if (window === undefined) return;
      const mediaQuery = window.matchMedia("(max-width: 820px)");
      
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = [
        'android', 'webos', 'iphone', 'ipad', 'ipod', 
        'blackberry', 'windows phone', 'mobile'
      ];
      
      const isMobileUA = mobileKeywords.some(keyword => 
        userAgent.includes(keyword)
      );
      
      const isMobileDevice = mediaQuery.matches || 
        (isMobileUA && window.innerWidth <= 768);
      
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const handleChange = () => checkIsMobile();

    mediaQuery.addEventListener('change', handleChange);
 
    window.addEventListener('resize', checkIsMobile);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;