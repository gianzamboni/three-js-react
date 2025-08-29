import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Cube from "~/3d/cube";
import Floor from "~/3d/floor";
import Sphere from "~/3d/sphere";

export default function MainScene() {

  const { position, color } = useControls({
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY"
    },
    color: "#ff0000"
  });

  return <>
    <OrbitControls makeDefault />
    <directionalLight position={[1, 2, 3]} intensity={4.5} />
    <ambientLight intensity={1.5} />
    
    <Sphere color={color} position={[ position.x, position.y, 0]} />
    <Cube />
    <Floor>
      <meshStandardMaterial color="greenyellow" />
    </Floor>
  </>;
}