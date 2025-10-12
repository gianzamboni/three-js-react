import { OrbitControls, Sparkles } from "@react-three/drei";
import Portal from "./portal";
import { Suspense } from "react";
import Label from "~/sketched-components/label";

export default function MainScene() {
  return <>
    <color attach="background" args={["#080712"]} />
    <OrbitControls makeDefault />
    
    <Suspense fallback={<Label>Loading...</Label>}>  
      <Portal />
    </Suspense>
    <Sparkles 
      size={6} 
      scale={[4, 1, 4]}
      position-y={-0.5}
      speed={0.2}
      count={30}
    />

  </>;
}