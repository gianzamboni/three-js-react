import { Link, Outlet } from "react-router";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import styles from "./styles.module.css";
import { SketchyShadow } from "~/sketched-components/svg/randomized-shadow";

export default function Layout() {
  return <main className="full-screen">
    <Link to="/" className={styles['home-button-container']}>
      <SketchedBorder baseStrokeWidth={0.01} sketchySVG={<SketchyShadow strokeWidth={0.005} />}>
        <p>Home</p>
      </SketchedBorder>
    </Link>
    <Outlet />
  </main>;
}