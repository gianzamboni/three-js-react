import { useEffect } from "react";

import MainScene from "./main-scene";

import type { Route } from "./+types/index";

import { TestCanvas } from "~/3d/test-canvas";
import { useSidePanel } from "~/stores/side-panel";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Leva Debug UI" },
    { name: "description", content: "Leva Debug UI" },
  ];
}


export default function DebugUI() {
  const setIsOpen = useSidePanel((s) => s.setIsOpen);

  useEffect(() => {
    setIsOpen(true);

    return () => {
      setIsOpen(false);
    }
  }, []);

  return(<TestCanvas>
    <MainScene />
  </TestCanvas>);
}