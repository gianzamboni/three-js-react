import { Link, Outlet } from "react-router";
import { SketchedBorder } from "~/sketched-components/sketched-border";
import styles from "./styles.module.css";
import { SketchyShadow } from "~/sketched-components/randomized-shadow";
import { levaStore, LevaStoreProvider } from "leva";
import { SketchyPanel } from "~/sketchy-controllers/panel";

export default function Layout() {
  return <main className="full-screen">
    <Link to="/" className={styles['home-button-container']}>
      <SketchedBorder baseStrokeWidth={0.01} >
        <img src="/home.svg" alt="Home Icon" className={styles['home-icon']} />
      </SketchedBorder>
      <SketchyShadow strokeWidth={0.01} offsetX={3} offsetY={3} />
    </Link>
  <LevaStoreProvider store={levaStore} > 
    <SketchyPanel />
    <Outlet />
  </LevaStoreProvider>
  </main>;  
}