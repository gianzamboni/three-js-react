import { Html, useGLTF } from "@react-three/drei";
import { createPortal } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Euler, type Group, type Object3D } from "three";

import styles from "./styles.module.css";

export function Computer() {
  const computer = useGLTF("../models/macbook.gltf");
  const groupRef = useRef<Group>(null);

  const topLid = computer.nodes.Top as Object3D;

  const progress = useRef({
    xRotation: Math.PI,
  });
  
  useEffect(() => {
    const originalRotation = topLid.rotation.x;
    console.log(originalRotation);
    topLid.setRotationFromEuler(new Euler(progress.current.xRotation, 0, 0));

    if (groupRef.current) {
      gsap.to(groupRef.current.position, {
        y: -1.2,
        duration: 5,
        ease: `elastic.out(1,0.625)`,
      });

      gsap.to(progress.current, {
        xRotation: 1.3105023838474816,
        duration: 10,
        ease: `elastic.out(1,0.625)`,
        delay: 1.5,
        onUpdate: () => {
          topLid.setRotationFromEuler(new Euler(progress.current.xRotation, 0, 0));
        },
      });
    }
  }, []);

  return (
    <group ref={groupRef} position-y={-10}>
      <primitive object={computer.scene} />
      {createPortal(
        <Html
          transform
          occlude={'raycast'}
          wrapperClass={styles["html-screen"]}
          distanceFactor={1.95}
          position={[0, 0, -1.925]}
          rotation-x={-Math.PI / 2}
        >
          <iframe src="https://portfolio.gianfrancozamboni.com.ar/developer" />
        </Html>,
        topLid
      )}
    </group>
  );
}
