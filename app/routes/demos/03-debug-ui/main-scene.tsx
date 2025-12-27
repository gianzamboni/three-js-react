import { OrbitControls } from "@react-three/drei";
import { useControls, levaStore } from "leva";

import Cube from "~/3d/cube";
import Floor, { GreenFloor } from "~/3d/floor";
import DefaultDirectionalLight from "~/3d/lights";
import Sphere from "~/3d/sphere";
import ToggablePerfPanel from "~/utils/toggable-perf-panel";

export default function MainScene() {

  const { position, color, visible } = useControls('Sphere', {
    position: {
      label: "Position",
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY"
    },
    color: {
      label: "Color",
      value: "#ff0000",
    },
    visible: {
      label: "Visible",
      value: true,
    },
  }, { store: levaStore });

  const { scale } = useControls('Cube', {
    scale:
    {
      label: "Scale",
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5
    }
}, { store: levaStore })

  return <>
    <OrbitControls makeDefault />
    <DefaultDirectionalLight />
    <ambientLight intensity={1.5} />

    <ToggablePerfPanel />
    
    <Sphere visible={visible} position={[ position.x, position.y, 0]} >
      <meshStandardMaterial color={color} />
    </Sphere>
    <Cube scale={scale} position-x={2}>
      <meshStandardMaterial color="mediumpurple" />
    </Cube>
    <GreenFloor />
  </>;
}