import DefaultSetup from '~/3d/basic-setup'
import Cube from '~/3d/cube'
import Sphere from '~/3d/sphere'

export default function MainScene() {
  return <>

    <DefaultSetup castShadow />

    <Sphere castShadow position={[- 2, 2, 0]}>
      <meshStandardMaterial color="orange" />
    </Sphere>

    <Cube castShadow position={[2, 2, 0]}>
      <meshStandardMaterial color="mediumpurple" />
    </Cube>

    <mesh receiveShadow position-y={- 1.25}>
      <boxGeometry args={[10, 0.5, 10]} />
      <meshStandardMaterial color="greenyellow" />
    </mesh>

  </>
}