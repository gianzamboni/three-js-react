import { Html, useGLTF } from "@react-three/drei";
import { createPortal } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Euler, type Object3D } from "three";

import styles from "./styles.module.css";

type ComputerProps = {
  onMouseEnterScreen: () => void;
  onMouseLeaveScreen: () => void;
};

export function Computer({ onMouseEnterScreen, onMouseLeaveScreen }: ComputerProps) {
  const computer = useGLTF("../models/macbook.gltf");
  const htmlScreenRef = useRef<HTMLDivElement>(null);

  const topLid = computer.nodes.Top as Object3D;

  const progress = useRef({
    xRotation: Math.PI,
    htmlScreenOpacity: 0,
  });

  useEffect(() => {
    computer.scene.getObjectByName('FrontCameraRing001')?.removeFromParent();

    topLid.setRotationFromEuler(new Euler(progress.current.xRotation, 0, 0));

    gsap.to(progress.current, {
      xRotation: 1.3105023838474816,
      htmlScreenOpacity: 1,
      duration: 10,
      ease: `elastic.out(1,0.625)`,
      delay: 1.325,
      onUpdate: () => {
        topLid.setRotationFromEuler(new Euler(progress.current.xRotation, 0, 0));
        htmlScreenRef.current?.style
          .setProperty('opacity', progress.current.htmlScreenOpacity.toString());
      },
    });
  }, []);

  return (
    <group position-y={-1.2}>
      <primitive object={computer.scene} />
      {createPortal(
        <Html
          transform
          ref={htmlScreenRef}
          occlude={'raycast'}
          wrapperClass={styles["html-screen"]}
          distanceFactor={1.975}
          position={[0, 0, -1.925]}
          rotation-x={-Math.PI / 2}
          style={{ opacity: 0 }}
        >
          <div
            onMouseEnter={onMouseEnterScreen}
            onMouseLeave={onMouseLeaveScreen}
          >
            <iframe src="https://portfolio.gianfrancozamboni.com.ar" />
          </div>
        </Html>,
        topLid
      )}
    </group>
  );
}
