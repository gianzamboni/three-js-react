import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, ToneMapping, Vignette } from '@react-three/postprocessing'
import { ToneMappingMode, GlitchMode } from "postprocessing";
import { Vector2 } from "three";

import { useBloomControls } from './bloom-controls';
import { useDepthOfFieldControls } from './depth-of-field-controls';
import Drunk from "./drunk";
import { useNoiseControls } from './noise-controls';
import { useVignetteControls } from './vignette-controls';

import type { JSX } from "react";


const effectTypes = ["Vignette", "Glitch", "Noise", "Bloom", "DepthOfField", "Drunk"];

interface PostProcessingEffectsProps {
  effect: string;
}

export default function PostProcessingEffects({ effect }: PostProcessingEffectsProps) {
  const vignetteControls = useVignetteControls(effect === "Vignette");
  const noiseControls = useNoiseControls(effect === "Noise");
  const bloomControls = useBloomControls(effect === "Bloom");
  const depthOfFieldControls = useDepthOfFieldControls(effect === "DepthOfField");

  let effectComponent: JSX.Element;
  
  switch(effect) {
    case "Vignette":
      effectComponent = <Vignette 
        { ...vignetteControls}
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
        { ...noiseControls}
      />;
      break;
    case "Bloom":
      effectComponent = <Bloom 
        { ...bloomControls}
      />;
      break;
    case "DepthOfField":
      effectComponent = <DepthOfField 
        { ...depthOfFieldControls}
      />;
      break;
    case "Drunk":
      effectComponent = <Drunk />;
      break;
    default:
      effectComponent = <></>;
  }

  return (
    <EffectComposer>
      {effectComponent}
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  );
}

export { effectTypes };
