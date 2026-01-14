import { Html, useGLTF } from "@react-three/drei";

import styles from "./styles.module.css";

export function Computer() {
  const computer = useGLTF("../models/macbook.gltf");

  const top = computer.nodes.Top;
  console.log(top);

  return (
    <primitive object={computer.scene} position-y={-1.2}>
      <Html
        transform
        wrapperClass={styles["html-screen"]}
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
      >
        <iframe src="https://portfolio.gianfrancozamboni.com.ar/developer" />
      </Html>
    </primitive>
  );
}
