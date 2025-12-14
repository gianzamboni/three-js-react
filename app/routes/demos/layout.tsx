import { Link, Outlet } from "react-router";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import styles from "./styles.module.css";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import SketchyLink from "~/sketched-components/link";
import HomeIcon from "~/utils/icons/home.svg?react";

export default function Layout() {
  return <main className="full-screen">
    <SketchyLink to="/" className={styles['home-link']} aria-label="Home">
        <HomeIcon className={styles['home-icon']}  />
    </SketchyLink>
    <Outlet />
  </main>;  
}