import { create } from 'zustand';

interface WindowWidthState {
  width: number;
}

export const useWindowWidthStore = create<WindowWidthState>(() => ({
  width: typeof window !== 'undefined' ? window.innerWidth : 1920,
}));

let initialized = false;

export function initWindowWidthListener() {
  if (initialized || typeof window === 'undefined') return;
  initialized = true;
  
  const handleResize = () => {
    useWindowWidthStore.setState({ width: window.innerWidth });
  };
  
  handleResize();
  window.addEventListener('resize', handleResize);
}
