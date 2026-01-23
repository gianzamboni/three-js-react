import { useGSAP } from "@gsap/react";
import { Float } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useState } from "react";

import { useSimplePortfolioState } from "../use-simple-portfolio-state";

import type { PropsWithChildren } from "react";

export const AnimatedFloat = ({ children }: PropsWithChildren) => {

  const { zoomedIn } = useSimplePortfolioState();

  const [rotation, setRotation] = useState(0.4);
  const [yPosition, setYPosition] = useState(-10);

  const rotationAnimationRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {
    gsap.to({ value: yPosition }, {
      value: 0,
      duration: 5,
      ease: `elastic.out(1,0.6)`,
      onUpdate: function () {
        setYPosition(this.targets()[0].value);
      }
    });
  }, { dependencies: [] });

  useGSAP(() => {
    rotationAnimationRef.current = gsap.to({ value: rotation }, {
      value: zoomedIn ? 0 : 0.4,
      duration: 5,
      ease: `elastic.out(1,0.6)`,
      onUpdate: function () {
        setRotation(this.targets()[0].value);
      }
    });
  }, { dependencies: [zoomedIn] });

  return (<Float rotationIntensity={rotation} position-y={yPosition}>
    {children}
  </Float>);
}