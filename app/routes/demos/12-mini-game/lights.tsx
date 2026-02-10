import { DirectionalLightWithShadows } from "~/3d/lights";

export default function Lights() {
  return <>
    <DirectionalLightWithShadows
      position={[4, 4, 1]}
      intensity={4.5}
      shadow-camera-near={1}
      shadow-camera-far={10}
      shadow-camera-top={10}
      shadow-camera-right={10}
      shadow-camera-bottom={-10}
      shadow-camera-left={-10}
    />
    <ambientLight intensity={1.5} />
  </>
}