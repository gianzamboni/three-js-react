import { useState, useEffect } from "react";

interface UseMediaQueryReturn {
  matches: boolean;
  isLoading: boolean;
}

export const useMediaQuery = (query: string): UseMediaQueryReturn => {
  const [matches, setMatches] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMediaQuery = () => {
      const mediaQuery = window.matchMedia(query);
      setMatches(mediaQuery.matches);
      setIsLoading(false);
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

  return {
    matches,
    isLoading,
  };
};

export default useMediaQuery;
