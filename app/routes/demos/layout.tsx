import { Leva } from "leva";
import { Outlet } from "react-router";

import styles from "./styles.module.css";

import SketchyLevaPanel from "~/sketched-components/leva-panel";
import SketchyLink from "~/sketched-components/link";
import HomeIcon from "~/utils/icons/home.svg?react";

export default function Layout() {
  return <main className="full-screen parent-no-scroll">
    <SketchyLink 
      to="/" 
      icon={HomeIcon} 
      className={`${styles['home-link']}`} 
      arialLabelledBy="home-link"
    />
    <SketchyLevaPanel />
    <Leva hidden />
    <Outlet />
  </main>;
}