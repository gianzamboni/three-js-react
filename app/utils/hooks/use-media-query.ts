import { useState, useEffect } from "react";

import { globalWindow } from "../globals";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const checkMediaQuery = () => {
      const mediaQuery = globalWindow.matchMedia(query);
      setMatches(mediaQuery.matches);
    };

    // Initial check
    checkMediaQuery();

    const mediaQuery = globalWindow.matchMedia(query);
    mediaQuery.addEventListener('change', checkMediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', checkMediaQuery);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
