import BasicSetup from "~/3d/basic-setup";
import Cube, { PurpleCube } from "~/3d/cube";
import { GreenFloor } from "~/3d/floor";
import Sphere, { OrangeSphere } from "~/3d/sphere";
import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, ToneMapping, Vignette } from '@react-three/postprocessing'
import { ToneMappingMode, GlitchMode, BlendFunction } from "postprocessing";
import { Vector2 } from "three";
import { useControls } from "leva";
import type { JSX } from "react";
import Drunk from "./drunk";

enum Effect {
  Vignette,
  Glitch,
  Noise,
  Bloom,
  DepthOfField,
  Drunk
}

type Effects = keyof typeof Effect;
const effectTypes = Object.keys(Effect).filter(key => isNaN(Number(key))) as Effects[];
console.log(effectTypes)

export default function MainScene() {

  let { effect } = useControls("Post Processing", {
    effect: {
      label: "Effect",
      value: "Vignette" as Effects,
      options: effectTypes
    }
  })

  let effectComponent: JSX.Element;
  
  switch(effect) {
    case "Vignette":
      effectComponent = <Vignette 
        offset={0.3} 
        darkness={0.9} 
      />;
      break;
    case "Glitch":
      effectComponent = <Glitch 
        delay={new Vector2(0.5, 1)} 
        duration={new Vector2(0.1, 0.3)} 
        strength={new Vector2(0.2, 0.4)} 
        mode={GlitchMode.CONSTANT_MILD} 
      />;
      break;
    case "Noise":
      effectComponent = <Noise 
        premultiply 
        blendFunction={BlendFunction.SOFT_LIGHT} 
      />;
      break;
    case "Bloom":
      effectComponent = <Bloom 
        luminanceThreshold={0.2} 
        luminanceSmoothing={0.9} 
        height={300} 
      />;
      break;
    case "DepthOfField":
      effectComponent = <DepthOfField 
        focusDistance={0.025} 
        focalLength={0.026}
        bokehScale={6} 
      />;
      break;
    case "Drunk":
      effectComponent = <Drunk />;
      break;
    default:
      effectComponent = <></>;
  }

  return <>
    <color args={ [ effect === "Bloom" ? '#141a17' : '#E6EEEB' ] } attach="background" /> 

    <EffectComposer>
      {effectComponent}
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>

    <BasicSetup castShadow />
    <OrangeSphere />
    <Cube position-x={2} scale={1.5}>
      <meshStandardMaterial color={ effect === "Bloom" ? [1.5, 1, 4] : "mediumpurple"} />
    </Cube>
    <GreenFloor receiveShadow />
  </>
}