import { Link, Outlet } from "react-router";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import styles from "./styles.module.css";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import SketchyLink from "~/sketched-components/link";

export default function Layout() {
  return <main className={`full-screen ${styles['no-scroll']}`}>
    <SketchyLink to="/" className={styles['home-link']} >
        <img src="/home.svg" alt="Home Icon" className={styles['home-icon']} />
    </SketchyLink>
    <Outlet />
  </main>;  
}