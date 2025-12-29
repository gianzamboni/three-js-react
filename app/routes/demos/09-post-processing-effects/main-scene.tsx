import { useControls } from "leva";

import PostProcessingEffects, { effectTypes } from "./effects/post-processing-effects";

import BasicSetup from "~/3d/basic-setup";
import Cube from "~/3d/cube";
import { GreenFloor } from "~/3d/floor";
import { OrangeSphere } from "~/3d/sphere";

export default function MainScene() {

  let { effect } = useControls("Post Processing", {
    effect: {
      label: "Effect",
      options: effectTypes
    }
  })

  return <>
    <color args={ [ effect === "Bloom" ? '#141a17' : '#E6EEEB' ] } attach="background" /> 

    <PostProcessingEffects effect={effect} />

    <BasicSetup castShadow />
    <OrangeSphere />
    <Cube position-x={2} scale={1.5}>
      <meshStandardMaterial color={ effect === "Bloom" ? [1.5, 1, 4] : "mediumpurple"} />
    </Cube>
    <GreenFloor receiveShadow />
  </>
}