import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, type ThreeElement } from "@react-three/fiber";
import { gsap } from "gsap/dist/gsap";
import { useControls } from "leva";
import { useEffect, useRef } from "react";
import { Color } from "three";

import portalFragmentShader from "./shaders/portal.frag";
import portalVertexShader from "./shaders/portal.vert";

const PortalShaderMaterial = shaderMaterial({
  uTime: 0,
  uStartColor: new Color('#d8d6ff'),
  uEndColor: new Color('#080712'),
  uSmokyMix: 0,
  uDistStrength: 0,
  uPowStrength: 2,
}, portalVertexShader, portalFragmentShader)

extend({ PortalShaderMaterial })

declare module '@react-three/fiber' {
  export interface ThreeElements {
    portalShaderMaterial: ThreeElement<typeof PortalShaderMaterial>
  }
}

const PORTAL_SETTINGS: Record<string, { uSmokyMix: number, uDistStrength: number, uPowStrength: number }> = {
  "Smoky": {
    uSmokyMix: 0,
    uDistStrength: 12.4,
    uPowStrength: 4.55
  },
  "Swirly": {
    uSmokyMix: 1,
    uDistStrength: 100,
    uPowStrength: 7.4
  }
}

export default function PortalMaterial() {
  const portalMaterial = useRef<InstanceType<typeof PortalShaderMaterial>>(null);

  let [{ portalType, glowEffect, glowPower }, setControlsValues ] = useControls(() => ({
    portalType: {
      label: "Portal Type",
      value: "Smoky",
      options: ["Smoky", "Swirly"],
    },
    glowEffect: {
      label: "Outer Glow",
      value: 1,
      min: 0,
      max: 100,
      step: 0.001,
    },
    glowPower: {
      label: "Glow Power",
      value: 2,
      min: 0,
      max: 10,
      step: 0.001,
    }
  }))

  useEffect(() => {
    gsap.to(portalMaterial.current, {
      duration: 2,
      uSmokyMix: PORTAL_SETTINGS[portalType].uSmokyMix,
      uDistStrength: PORTAL_SETTINGS[portalType].uDistStrength,
      uPowStrength: PORTAL_SETTINGS[portalType].uPowStrength,
      ease: "power1.inOut",
      onUpdate: () => {
        setControlsValues({
          glowEffect: portalMaterial.current?.uDistStrength,
          glowPower: portalMaterial.current?.uPowStrength
        })
      }
    })
  }, [portalType])

  useFrame((_, delta) => {
    if (portalMaterial.current != null) {
      portalMaterial.current.uTime += delta * 0.5;
    }
  })

  return <portalShaderMaterial
    ref={portalMaterial}
    key={PortalShaderMaterial.key}
    uSmokyMix={0}
    uDistStrength={glowEffect}
    uPowStrength={glowPower}
  />
}