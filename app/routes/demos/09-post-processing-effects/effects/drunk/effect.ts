import { BlendFunction, Effect } from "postprocessing";
import { Uniform, WebGLRenderer, WebGLRenderTarget } from "three";

import fragmentShader from './shader.frag';

export type DrunkEffectProps = Readonly<{
  frequency?: number;
  amplitude?: number;
}>;

export default class DrunkEffect extends Effect {
  constructor(props: DrunkEffectProps) {
    super("DrunkEffect", fragmentShader, {
      blendFunction: BlendFunction.DARKEN,
      uniforms: new Map([
            [ 'frequency', new Uniform(props.frequency || 2.0) ],
            [ 'amplitude', new Uniform(props.amplitude || 0.1) ],
            [ 'time', new Uniform(0) ]
        ])
    });
  }

 update(_renderer: WebGLRenderer, _inputBuffer: WebGLRenderTarget, deltaTime: number) {
    const timeUniform = this.uniforms.get('time');
    if (timeUniform) {
      timeUniform.value += deltaTime;
    }
  }
}