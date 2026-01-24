import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { createPortal } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Euler, Group, type Object3D } from "three";

import { PortfolioHtml } from "../portfolio-html";

import { COMPUTER_SETTINGS } from "./responsive-settings";

import useResponsiveValue from "~/utils/hooks/use-responsive-value";

type ComputerProps = Readonly<{
  emitLight?: boolean;
}>;

export function Computer({ emitLight = true }: ComputerProps) {
  const computerSettings = useResponsiveValue(COMPUTER_SETTINGS);

  const computer = useGLTF("../models/macbook.gltf");

  const groupRef = useRef<Group>(null);

  const topLid = computer.nodes.Top as Object3D;

  const progress = useRef({ xRotation: Math.PI });

  useEffect(() => {
    computer.scene.getObjectByName('FrontCameraRing001')?.removeFromParent();

    if(!topLid) return;

    topLid.setRotationFromEuler(new Euler(progress.current.xRotation, 0, 0));
  }, []);

  useGSAP(() => {
    if (!groupRef.current) return;

    gsap.to(progress.current, {
      xRotation: computerSettings.lidRotation,
      duration: 10,
      ease: `elastic.out(1,${computerSettings.elasticBounce})`,
      onUpdate: () => {
        if (!topLid) return;
        topLid.setRotationFromEuler(new Euler(progress.current.xRotation, 0, 0));
      },
    });

    
    gsap.to(groupRef.current.position, {
      x: computerSettings.position[0],
      y: computerSettings.position[1],
      z: computerSettings.position[2],
      duration: 10,
      ease: `elastic.out(1,0.625)`,
    });

    gsap.to(groupRef.current.rotation, {
      x: computerSettings.rotation[0],
      y: computerSettings.rotation[1],
      z: computerSettings.rotation[2],
      duration: 10,
      ease: `elastic.out(1,0.625)`,
    });
  }, { dependencies: [computerSettings] });

  return (
    <group ref={groupRef}>
      <primitive object={computer.scene} />
      {topLid && createPortal(
        <group>
          {emitLight &&  <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ffffff"
            rotation={[Math.PI / 2, 0, 0]}
            position={[-0.2, 0.11, -2]}
          />}
          <PortfolioHtml
            orientation={computerSettings.orientation}
            animationDuration={10}
            elasticBounce={computerSettings.elasticBounce}
          />
        </group>,
        topLid
      )}
    </group>
  );
}
