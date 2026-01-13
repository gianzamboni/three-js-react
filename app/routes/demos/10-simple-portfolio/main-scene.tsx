import { 
  ContactShadows, 
  Environment, 
  Float, 
  Html, 
  PresentationControls, 
  useGLTF,
 } from "@react-three/drei";

import styles from "./styles.module.css";

export default function MainScene() {

  const computer = useGLTF("../models/macbook.gltf");
  
  return <>
    <Environment preset="city" />
    <color args={ [ '#241a1a' ] } attach="background" />

    <PresentationControls 
      global
      rotation={[0.12, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      damping={0.1}
      snap
    >
      <Float rotationIntensity={0.4}>
        <rectAreaLight 
          width={2.5}
          height={1.65}
          intensity={65}
          color="#ffffff"
          rotation={[ -0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />
        <primitive 
          object={computer.scene} 
          position-y={-1.2}
        >
          <Html 
            transform
            wrapperClass={styles["html-screen"]}
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <iframe src="https://portfolio.gianfrancozamboni.com.ar/calisthenics" />
          </Html>
        </primitive>
      </Float>
    </PresentationControls>
    <ContactShadows 
      position-y={-1.4} 
      opacity={0.4}
      blur={2.4}
      scale={5}
    />
  </>
}