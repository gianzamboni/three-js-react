import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, ToneMapping, Vignette } from '@react-three/postprocessing'
import { useControls } from "leva";
import { ToneMappingMode, GlitchMode, BlendFunction } from "postprocessing";
import { Vector2 } from "three";

import Drunk from "./drunk";

import type { JSX } from "react";

import BasicSetup from "~/3d/basic-setup";
import Cube from "~/3d/cube";
import { GreenFloor } from "~/3d/floor";
import { OrangeSphere } from "~/3d/sphere";

const effectTypes = ["Vignette", "Glitch", "Noise", "Bloom", "DepthOfField", "Drunk"];

export default function MainScene() {

  let { effect } = useControls("Post Processing", {
    effect: {
      label: "Effect",
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