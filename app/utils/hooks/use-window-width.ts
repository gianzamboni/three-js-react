import { create } from 'zustand';
import { globalWindow } from '../globals';

interface WindowWidthState {
  width: number;
}

export const useWindowWidthStore = create<WindowWidthState>(() => ({
  width: globalWindow?.innerWidth ?? 1920,
}));

let initialized = false;

export function initWindowWidthListener() {
  if (initialized || globalWindow === undefined) return;
  initialized = true;
  
  const handleResize = () => {
    useWindowWidthStore.setState({ width: globalWindow.innerWidth });
  };
  
  handleResize();
  globalWindow.addEventListener('resize', handleResize);
}
