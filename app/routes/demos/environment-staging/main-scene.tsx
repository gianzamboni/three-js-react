import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Floor from "~/3d/floor";
import RotatingCube from "~/routes/demos/first-r3f-app/rotating-cube";
import Sphere from "~/3d/sphere";

export default function MainScene() {

    return <>
        <Perf position="top-bottom" />

        <OrbitControls makeDefault />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <Sphere color="orange" position-x={-2}/>
        <RotatingCube rotationSpeed={0.2} />
  
        <Floor>
            <meshStandardMaterial color="greenyellow" />
        </Floor>

  </>;
}