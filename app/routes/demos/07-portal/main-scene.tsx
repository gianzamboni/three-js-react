import { OrbitControls, Sparkles } from "@react-three/drei";
import Portal from "./portal";

export default function MainScene() {
  return <>
    <color attach="background" args={["#080712"]} />
    <OrbitControls makeDefault />
    
    <Portal />
    <Sparkles 
      size={6} 
      scale={[4, 1, 4]}
      position-y={-0.5}
      speed={0.2}
      count={30}
    />

  </>;
}