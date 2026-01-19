import { Html, useGLTF } from "@react-three/drei";
import { createPortal } from "@react-three/fiber";
import gsap from "gsap";
import { useControls, levaStore } from "leva";
import { useEffect, useRef } from "react";
import { Euler, Group, type Object3D } from "three";

import styles from "../styles.module.css";
import { useSimplePortfolioState } from "../use-simple-portfolio-state";

import type { Point3D } from "~/types/types";

import useResponsiveValue from "~/utils/hooks/use-responsive-value";


type ComputerFinalState = {
  lidRotation: number;
  elasticBounce: number;
  position: Point3D;
  rotation: Point3D;
  orientation: 'portrait' | 'landscape';
}

const COMPUTER_SETTINGS: Record<number, ComputerFinalState> = {
  320: {
    lidRotation: -2.0,
    elasticBounce: 2,
    position: [0, 0.5, -1.3],
    rotation: [-0.5, 2.58, -1.5],
    orientation: 'portrait',
  },
  2550: {
    lidRotation: 1.3105023838474816,
    elasticBounce: 0.625,
    position: [0, -1.2, 0],
    rotation: [0, 0, 0],
    orientation: 'landscape',
  },
}

export function Computer() {
  
  const { setZoomedIn } = useSimplePortfolioState();
  const computerSettings = useResponsiveValue(COMPUTER_SETTINGS);

  const computer = useGLTF("../models/macbook.gltf");

  const groupRef = useRef<Group>(null);
  const htmlScreenRef = useRef<HTMLDivElement>(null);

  const { lidRotation, elasticBounce, positionX, positionY, positionZ, rotationX, rotationY, rotationZ } = useControls('Computer Settings', {
    lidRotation: { value: computerSettings.lidRotation, min: -Math.PI, max: Math.PI, step: 0.01 },
    elasticBounce: { value: computerSettings.elasticBounce, min: 0, max: 3, step: 0.01 },
    positionX: { value: computerSettings.position[0], min: -5, max: 5, step: 0.1 },
    positionY: { value: computerSettings.position[1], min: -5, max: 5, step: 0.1 },
    positionZ: { value: computerSettings.position[2], min: -5, max: 5, step: 0.1 },
    rotationX: { value: computerSettings.rotation[0], min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { value: computerSettings.rotation[1], min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { value: computerSettings.rotation[2], min: -Math.PI, max: Math.PI, step: 0.01 },
  }, { store: levaStore }, [computerSettings]);

  const topLid = computer.nodes.Top as Object3D;

  const progress = useRef({
    xRotation: Math.PI,
    htmlScreenOpacity: 0,
  });

  const handleMouseEnterScreen = () => {
    setZoomedIn(true);
  };

  const handleMouseLeaveScreen = () => {
    setZoomedIn(false);
  };

  useEffect(() => {
    computer.scene.getObjectByName('FrontCameraRing001')?.removeFromParent();

    topLid.setRotationFromEuler(new Euler(progress.current.xRotation, 0, 0));

    gsap.to(progress.current, {
      xRotation: lidRotation,
      htmlScreenOpacity: 1,
      duration: 10,
      ease: `elastic.out(1,${elasticBounce})`,
      onUpdate: () => {
        topLid.setRotationFromEuler(new Euler(progress.current.xRotation, 0, 0));
        htmlScreenRef.current?.style
          .setProperty('opacity', progress.current.htmlScreenOpacity.toString());
      },
    });

  }, []);

  

  return (
    <group ref={groupRef} rotation={[rotationX, rotationY, rotationZ]} position={[positionX, positionY, positionZ]}>
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
            onMouseEnter={handleMouseEnterScreen}
            onMouseLeave={handleMouseLeaveScreen}
          >
            <iframe 
              src="https://portfolio.gianfrancozamboni.com.ar"
              className={styles[computerSettings.orientation]}
            />
          </div>
        </Html>,
        topLid
      )}
    </group>
  );
}
