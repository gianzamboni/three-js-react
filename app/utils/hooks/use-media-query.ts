import { useState, useEffect } from "react";

import { globalWindow } from "../globals";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(
    () => globalWindow.matchMedia(query).matches ?? false
  );

  useEffect(() => {
    if (!globalWindow) return;

    const mediaQuery = globalWindow.matchMedia(query);

    const checkMediaQuery = () => {
      setMatches(mediaQuery.matches);
    };

    checkMediaQuery();
    mediaQuery.addEventListener('change', checkMediaQuery);

    return () => {
      mediaQuery.removeEventListener('change', checkMediaQuery);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
