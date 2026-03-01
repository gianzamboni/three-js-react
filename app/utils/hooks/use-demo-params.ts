import { useSearchParams } from "react-router";

export type MiniGameParams = {
  showHomeButton: boolean;
  debugMode: boolean;
};

export function useDemoParams(): MiniGameParams {
  const [searchParams] = useSearchParams();
  return {
    showHomeButton: searchParams.get("hideHomeButton") !== "true",
    debugMode: searchParams.get("debugMode") === "true",
  };
}
