import { Link } from "react-router";
import type { Demo } from "../demo";
import styles from "./styles.module.css";

type DemoCardProps = {
  demo: Demo;
};

export const DemoCard = ({ demo }: DemoCardProps) => {
  return (
    <Link to={demo.link} className={styles['demo-card']}>
      <img src={demo.thumbnail} alt={demo.title} />
      <div>
        <h2>{demo.title}</h2>
        <p>{demo.description}</p>
      </div>
    </Link>
  );
};
