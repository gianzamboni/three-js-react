import { Effect } from "postprocessing";

import fragmentShader from './shader.frag';

export default class DrunkEffect extends Effect {
  constructor() {
    super("DrunkEffect", fragmentShader, {});
  }
}