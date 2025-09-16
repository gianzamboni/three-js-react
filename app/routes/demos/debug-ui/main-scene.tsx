import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";
import Cube from "~/3d/cube";
import Floor from "~/3d/floor";
import Sphere from "~/3d/sphere";
import { Perf } from 'r3f-perf'

export default function MainScene() {

  const { position, color, visible } = useControls('sphere', {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY"
    },
    color: "#ff0000",
    visible: true,
  });

  const { scale } = useControls('cube', {
    scale:
    {
        value: 1.5,
        step: 0.01,
        min: 0,
        max: 5
    }
})

  const { perf } = useControls('performance', {
    perf: true,
  })

  return <>
    <OrbitControls makeDefault />
    <directionalLight position={[1, 2, 3]} intensity={4.5} />
    <ambientLight intensity={1.5} />

    {perf && <Perf position="bottom-right" />}
    
    <Sphere visible={visible} color={color} position={[ position.x, position.y, 0]} />
    <Cube scale={scale} position-x={2}>
      <meshStandardMaterial color="mediumpurple" />
    </Cube>
    <Floor position-y={-1}>
      <meshStandardMaterial color="greenyellow" />
    </Floor>
  </>;
}