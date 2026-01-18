import { useState, useEffect } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const checkMediaQuery = () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
    };

    // Initial check
    checkMediaQuery();

    // Listen for media query changes
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener('change', checkMediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', checkMediaQuery);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
