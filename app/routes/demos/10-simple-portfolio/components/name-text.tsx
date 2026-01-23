import { Text } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import type { Mesh } from "three";
import type { Point3D } from "~/types/types";

import useResponsiveValue from "~/utils/hooks/use-responsive-value";

type NameTextSettings = {
  position: Point3D;
  rotation: Point3D;
  fontSize: number;
}

const DEFAULT_POSITION: Point3D = [2.4, 0.75, 1];
const DEFAULT_ROTATION: Point3D = [0, -1.25, 0];
const DEFAULT_FONT_SIZE = 1;

const NAME_TEXT_SETTINGS: Record<number, NameTextSettings> = {
  320: {
    position: [-0.2, -1.25, 0.5],
    rotation: [-0.5, -0.3, -0.1],
    fontSize: 0.54,
  },
  1024: {
    position: DEFAULT_POSITION,
    rotation: DEFAULT_ROTATION,
    fontSize: DEFAULT_FONT_SIZE,
  },
}

type Text3D = typeof Text & Mesh; 

export function NameText() {

  const nameTextSettings = useResponsiveValue(NAME_TEXT_SETTINGS);

  const nameTextRef = useRef<Text3D>(null);

  useEffect(() => {
    if (!nameTextRef.current) return;
    console.log(nameTextRef.current);
    const positionAnimation = gsap.to(nameTextRef.current.position, {
      x: nameTextSettings.position[0],
      y: nameTextSettings.position[1],
      z: nameTextSettings.position[2],
      duration: 10,
      ease: `elastic.out(1,0.625)`,
    });
    
    const rotationAnimation = gsap.to(nameTextRef.current.rotation, {
      x: nameTextSettings.rotation[0],
      y: nameTextSettings.rotation[1],
      z: nameTextSettings.rotation[2],
      duration: 10,
      ease: `elastic.out(1,0.625)`,
    });
    
    const fontSizeAnimation = gsap.to(nameTextRef.current.scale, {
      x: nameTextSettings.fontSize,
      y: nameTextSettings.fontSize,
      z: nameTextSettings.fontSize,
      duration: 10,
      ease: `elastic.out(1,0.625)`,
    });
    
    return () => {
      positionAnimation.kill();
      rotationAnimation.kill();
      fontSizeAnimation.kill();
    };

  }, [nameTextSettings]);
  
  return (
    <Text
      ref={nameTextRef}
      font="/fonts/bangers-v20-latin-regular.woff"
      position={DEFAULT_POSITION}
      rotation={DEFAULT_ROTATION}
      scale={DEFAULT_FONT_SIZE}
      maxWidth={2}
      textAlign="center"
      color={"#ffffff"}
    >
      Gianfranco Zamboni
    </Text>
  );
}
