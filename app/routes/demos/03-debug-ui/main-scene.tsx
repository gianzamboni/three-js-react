import { useControls, levaStore } from "leva";

import BasicSetup from "~/3d/basic-setup";
import Cube from "~/3d/cube";
import { GreenFloor } from "~/3d/floor";
import Sphere from "~/3d/sphere";

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
    <BasicSetup />
    <Sphere visible={visible} position={[ position.x, position.y, 0]} >
      <meshStandardMaterial color={color} />
    </Sphere>
    <Cube scale={scale} position-x={2}>
      <meshStandardMaterial color="mediumpurple" />
    </Cube>
    <GreenFloor />
  </>;
}