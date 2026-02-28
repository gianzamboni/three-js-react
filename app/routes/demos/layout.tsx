import { Leva } from "leva";
import { Outlet } from "react-router";

import styles from "./styles.module.css";

import SketchyLevaPanel from "~/sketched-components/leva-panel";
import SketchyLink from "~/sketched-components/link";
import { useDemoParams } from "~/utils/hooks/use-demo-params";
import HomeIcon from "~/utils/icons/home.svg?react";

export default function Layout() {
  const { showHomeButton, debugMode } = useDemoParams();
  const showSketchyLevaPanel = !debugMode;

  return <main className="full-screen parent-no-scroll">
    {showHomeButton && (
      <SketchyLink 
        to="/" 
        icon={HomeIcon} 
        className={`${styles['home-link']}`} 
        ariaLabel="Go to home"
      />
    )}
    {showSketchyLevaPanel && <SketchyLevaPanel />}
    <Leva hidden={showSketchyLevaPanel} />
    <div className="full-screen" style={{ isolation: "isolate" }}>
      <Outlet />
    </div>
  </main>;
}