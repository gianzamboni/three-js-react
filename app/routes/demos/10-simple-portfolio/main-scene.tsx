import { Environment, Float, PresentationControls, useGLTF } from "@react-three/drei";

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
        <primitive object={computer.scene} position-y={-1.2} />
      </Float>
    </PresentationControls>
  </>
}