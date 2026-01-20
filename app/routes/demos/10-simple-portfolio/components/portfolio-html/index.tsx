import { Html } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { useSimplePortfolioState } from "../../use-simple-portfolio-state";

import styles from "./styles.module.css";

type PortfolioHtmlProps = {
  orientation: "landscape" | "portrait";
  animationDuration: number;
  elasticBounce: number;
};

export function PortfolioHtml({ orientation, animationDuration, elasticBounce }: PortfolioHtmlProps) {
  const { setZoomedIn } = useSimplePortfolioState();
  const htmlScreenRef = useRef<HTMLDivElement>(null);
  const progress = useRef({ opacity: 0 });

  const handleMouseEnterScreen = () => {
    setZoomedIn(true);
  };

  const handleMouseLeaveScreen = () => {
    setZoomedIn(false);
  };

  useEffect(() => {
    if (htmlScreenRef.current) {
      htmlScreenRef.current.style.setProperty('opacity', '0');

      gsap.to(progress.current, {
        opacity: 1,
        duration: animationDuration,
        ease: `elastic.out(1,${elasticBounce})`,
        onUpdate: () => {
          htmlScreenRef.current?.style.setProperty('opacity', progress.current.opacity.toString());
        },
      });

    }
  }, []);

  return (
    <Html
      transform
      ref={htmlScreenRef}
      occlude={'raycast'}
      wrapperClass={styles["html-screen"]}
      distanceFactor={1.975}
      position={[0, 0.01, -1.925]}
      rotation-x={-Math.PI / 2}
    >
      <div
        onMouseEnter={handleMouseEnterScreen}
        onMouseLeave={handleMouseLeaveScreen}
      >
        <iframe
          src="https://portfolio.gianfrancozamboni.com.ar"
          className={styles[orientation]}
        />
      </div>
    </Html>
  );
}
