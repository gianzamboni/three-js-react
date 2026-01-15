import { Html, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import styles from "./styles.module.css";

import { Euler, type Group } from "three";

export function Computer() {
  const computer = useGLTF("../models/macbook.gltf");
  const groupRef = useRef<Group>(null);
  const xRotation = useRef(Math.PI)
  ;
  useEffect(() => {
    const top = computer.nodes.Top;
    const originalRotation = top.rotation.x;
    console.log(originalRotation);
    top.setRotationFromEuler(new Euler(xRotation.current, 0, 0));

    if (groupRef.current) {
      gsap.to(groupRef.current.position, {
        y: -1.2,
        duration: 5,
        ease: `elastic.out(1,0.625)`,
      })
        
      gsap.to(xRotation, {
        current: 1.3105023838474816,
        duration: 10,
        ease: `elastic.out(1,0.625)`,
        delay: 1.5,
        onUpdate: () => {
          console.log(xRotation.current);
          top.setRotationFromEuler(new Euler(xRotation.current, 0, 0));
        },
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
