import { useControls } from "leva";
import { useEffect } from "react";

import { EffectType } from "./effects/effect-type";
import PostProcessingEffects from "./effects/post-processing-effects";

import BasicSetup from "~/3d/basic-setup";
import Cube from "~/3d/cube";
import { GreenFloor } from "~/3d/floor";
import { OrangeSphere } from "~/3d/sphere";
import { useSidePanel } from "~/stores/side-panel";

export default function MainScene() {
  let { setActiveStore } = useSidePanel();

  let { effect } = useControls("Post Processing", {
    effect: {
      label: "Effect",
      value: EffectType.Vignette,
      options: {
        "Vignette": EffectType.Vignette,
        "Glitch": EffectType.Glitch,
        "Noise": EffectType.Noise,
        "Bloom": EffectType.Bloom,
        "Depth Of Field": EffectType.DepthOfField,
        "Drunk": EffectType.Drunk
      },
    }
  })

  useEffect(() => {
    setActiveStore(effect);
  }, [effect])

  return <>
    <color args={ [ effect === EffectType.Bloom ? '#141a17' : '#E6EEEB' ] } attach="background" /> 

    <PostProcessingEffects effect={effect} />

    <BasicSetup castShadow />
    <OrangeSphere castShadow />
    <Cube castShadow position-x={2} scale={1.5}>
      <meshStandardMaterial color={ effect === EffectType.Bloom ? [1.5, 1, 4] : "mediumpurple"} />
    </Cube>
    <GreenFloor receiveShadow />
  </>
}