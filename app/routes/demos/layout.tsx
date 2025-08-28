import { Link, Outlet } from "react-router";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import styles from "./styles.module.css";

export default function Layout() {
  return <main className="full-screen">
    <SketchedBorder 
      className={styles['home-button-container']}
    >
      <Link to="/">Home</Link>
    </SketchedBorder>
    <Outlet />
  </main>;
}