import { Html, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import styles from "./styles.module.css";

import type { Group } from "three";

export function Computer() {
  const computer = useGLTF("../models/macbook.gltf");
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.position, {
        y: -1.2,
        duration: 5,
        ease: `elastic.out(1,0.625)`,
      })
    }
  }, []);

  return (
    <group ref={groupRef} position-y={-10}>
      <primitive object={computer.scene}>
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
    </group>
  );
}
