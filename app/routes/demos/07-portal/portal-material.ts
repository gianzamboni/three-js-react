import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { Color } from "three";

import portalVertexShader from "./shaders/portal.vert";
import portalFragmentShader from "./shaders/portal.frag";

export const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uStartColor: new Color('#d8d6ff'),
    uEndColor: new Color('#000000')
  },
  portalVertexShader,
  portalFragmentShader
)

extend({ PortalMaterial });


