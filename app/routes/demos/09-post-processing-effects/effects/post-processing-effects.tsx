import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, ToneMapping, Vignette } from '@react-three/postprocessing'
import { ToneMappingMode, GlitchMode } from "postprocessing";
import { Vector2 } from "three";

import { useBloomControls } from './bloom-controls';
import { useDepthOfFieldControls } from './depth-of-field-controls';
import Drunk from "./drunk";
import { useDrunkControls } from './drunk-controls';
import { EffectType } from './effect-type';
import { useNoiseControls } from './noise-controls';
import { useVignetteControls } from './vignette-controls';

type PostProcessingEffectsProps = Readonly<{
  effect: EffectType;
}>

export default function PostProcessingEffects({ effect }: PostProcessingEffectsProps) {

  // It would be nice to have this inside a component with its respective effect.
  // But given the @react-three/postprocessing and postprocessing APIs states at the moment of implementing this. 
  // it's not possible because the EffectComposer doesn't relize it has to remake the render pipeline if we add
  // a level of nesting to the effects components.
  const vignetteControls = useVignetteControls();
  const noiseControls = useNoiseControls();
  const bloomControls = useBloomControls();
  const depthOfFieldControls = useDepthOfFieldControls();
  const drunkControls = useDrunkControls();

  return (
    <EffectComposer>
      {effect === EffectType.Vignette &&  <Vignette { ...vignetteControls}/> }
      {effect === EffectType.Glitch && <Glitch 
          delay={new Vector2(0.5, 1)} 
          duration={new Vector2(0.1, 0.3)} 
          strength={new Vector2(0.2, 0.4)} 
          mode={GlitchMode.CONSTANT_MILD} 
      />}
      {effect === EffectType.Noise && <Noise 
        { ...noiseControls}
      />}
      {effect === EffectType.Bloom && <Bloom 
        { ...bloomControls}
      />}
      {effect === EffectType.DepthOfField && <DepthOfField 
        { ...depthOfFieldControls}
      />}
      {effect === EffectType.Drunk && <Drunk {...drunkControls} />}
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  );
}