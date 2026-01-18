import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  Text,
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { Computer } from "./computer";

import type { Group } from "three";
import type { Point3D } from "~/types/types";

import SketchySuspense from "~/sketched-components/sketchy-suspense";
import { useSimplePortfolioState } from "./use-simple-portfolio-state";


type TweenTarget = gsap.TweenTarget
type Tween = gsap.core.Tween;

const CAMERA_MOVE_DURATION = 1.5;

function move3DPoint(target: TweenTarget, newPosition: Point3D) {
  return gsap.to(target, {
    x: newPosition[0],
    y: newPosition[1],
    z: newPosition[2],
    duration: CAMERA_MOVE_DURATION,
    ease: "power2.inOut"
  });
}
export default function MainScene() {

  const { zoomedIn } = useSimplePortfolioState();

  const { camera } = useThree();
  const [rotationIntensity, setRotationIntensity] = useState(0.4);
  const [floatPosition, setFloatPosition] = useState(-10);

  const positionAnimationRef = useRef<Tween | null>(null);
  const rotationAnimationRef = useRef<Tween | null>(null);
  const floatAnimationRef = useRef<Tween | null>(null);
  const floatRef = useRef<Group>(null);

  const moveCamera = (position: Point3D, rotation: Point3D, targetIntensity: number = 0.4) => {
    positionAnimationRef.current?.kill();
    rotationAnimationRef.current?.kill();
    floatAnimationRef.current?.kill();

    positionAnimationRef.current = move3DPoint(camera.position, position);
    rotationAnimationRef.current = move3DPoint(camera.rotation, rotation);

    floatAnimationRef.current = gsap.to({ value: rotationIntensity }, {
      value: targetIntensity,
      duration: CAMERA_MOVE_DURATION,
      ease: "power2.inOut",
      onUpdate: function () {
        setRotationIntensity(this.targets()[0].value);
      }
    });
  }

  useEffect(() => {
    if (zoomedIn) {
      moveCamera(
        [0.34, 0.5, 3.3],
        [0, 0, 0],
        0
      );
    } else {
      moveCamera(
        [-4, 3, 6],
        [-0.4636476090008062, -0.5376832530932062, -0.2506869231230346],
        0.4
      );
    }

  }, [zoomedIn])

  useEffect(() => {
    gsap.to({ value: floatPosition }, {
      value: 0,
      duration: 5,
      ease: `elastic.out(1,0.6)`,
      onUpdate: function () {
        setFloatPosition(this.targets()[0].value);
      }
    });
  }, []);

  return (
    <>
      <Environment preset="city" />
      <color args={["#241a1a"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.12, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        damping={0.1}
        snap
      >
        <Float ref={floatRef} rotationIntensity={rotationIntensity} position-y={floatPosition}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ffffff"
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <SketchySuspense>
            <Computer />
          </SketchySuspense>
          <Text
            font="/fonts/bangers-v20-latin-regular.woff"
            fontSize={1}
            position={[2.4, 0.75, 1]}
            rotation-y={-1.25}
            maxWidth={2}
            textAlign="center"
            color={"#ffffff"}
          >
            Gianfranco Zamboni
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows
        position-y={-1.4}
        opacity={0.4}
        blur={2.4}
        scale={5}
      />
    </>
  );
}