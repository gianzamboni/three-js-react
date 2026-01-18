import { useState, useEffect, useMemo } from "react";

type BreakpointMap<T> = Record<number, T>;

export function useResponsiveValue<T>(breakpointMap: BreakpointMap<T>): T {
  // Sort breakpoints descending (largest first) for efficient lookup
  const sortedBreakpoints = useMemo(() => 
    Object.keys(breakpointMap)
      .map(Number)
      .sort((a, b) => b - a),
    [breakpointMap]
  );

  const getValueForWidth = (width: number): T => {
    for (const breakpoint of sortedBreakpoints) {
      if (width >= breakpoint) {
        return breakpointMap[breakpoint];
      }
    }
    return breakpointMap[sortedBreakpoints[sortedBreakpoints.length - 1]];
  };

  const [value, setValue] = useState<T>(() => 
    getValueForWidth(typeof window !== 'undefined' ? window.innerWidth : 1920)
  );

  useEffect(() => {
    const handleResize = () => {
      setValue(getValueForWidth(window.innerWidth));
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [sortedBreakpoints]);

  return value;
}

export default useResponsiveValue;
