import { useMemo } from "react";

import { useWindowWidthStore } from "./use-window-width";

type BreakpointMap<T> = Record<number, T>;

export function useResponsiveValue<T>(breakpointMap: BreakpointMap<T>): T {
  const sortedBreakpoints = useMemo(() => 
    Object.keys(breakpointMap)
      .map(Number)
      .sort((a, b) => b - a),
    [breakpointMap]
  );

  const value = useWindowWidthStore((state) => {
    for (const breakpoint of sortedBreakpoints) {
      if (state.width >= breakpoint) {
        return breakpointMap[breakpoint];
      }
    }
    return breakpointMap[sortedBreakpoints[sortedBreakpoints.length - 1]];
  });

  return value;
}

export default useResponsiveValue;
