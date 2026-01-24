import { useGSAP } from "@gsap/react";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useState } from "react";

import { useSimplePortfolioState } from "../../use-simple-portfolio-state";

import styles from "./styles.module.css";

type PortfolioHtmlProps = Readonly<{ 
  orientation: "landscape" | "portrait";
  animationDuration: number;
  elasticBounce: number;
}>;

export function PortfolioHtml({ orientation, animationDuration, elasticBounce }: PortfolioHtmlProps) {
  const { setZoomedIn } = useSimplePortfolioState();
  const htmlScreenRef = useRef<HTMLDivElement>(null);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const opacity = useRef(0);

  const handleMouseEnterScreen = () => {
    setZoomedIn(true);
  };

  const handleMouseLeaveScreen = () => {
    setZoomedIn(false);
  };

  useGSAP(() => {
    if (!htmlScreenRef.current) return;

    gsap.to(opacity, {
        current: 1,
        duration: animationDuration,
        ease: `expo.out`,
        onUpdate: () => {
          htmlScreenRef.current?.style.setProperty('opacity', opacity.current.toString());
        },
      });
  }, { dependencies: [isLoaded, htmlScreenRef] });

  return (
    <Html
      transform
      ref={htmlScreenRef}
      occlude={'raycast'}
      wrapperClass={styles["html-screen"]}
      distanceFactor={1.975}
      position={[0, 0.01, -1.925]}
      rotation-x={-Math.PI / 2}
      style={{ opacity: 0 }}
    >
      <div
        onMouseEnter={handleMouseEnterScreen}
        onMouseLeave={handleMouseLeaveScreen}
        role="application"
        aria-roledescription="Zoom in into the computer screen so you can see the portfolio website"
        aria-label="Zoom in/out"
      >
        <iframe
          onLoad={() => setIsLoaded(true)}
          title="My Portfolio Website"
          src="https://portfolio.gianfrancozamboni.com.ar?embed=true"
          className={styles[orientation]}
        />
      </div>
    </Html>
  );
}
