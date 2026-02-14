import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";

import type { AnimationAction, Mesh } from "three";
import type { MeshProps } from "~/types/types";

const FOX_URL = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/refs/heads/main/Models/Fox/glTF/Fox.gltf";

export default function Fox({ castShadow, receiveShadow, ...props }: MeshProps) {
  const model = useGLTF(FOX_URL);
  const animations = useAnimations(model.animations, model.scene);

  useEffect(() => {
    model.scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        child.castShadow = castShadow ?? false;
        child.receiveShadow = receiveShadow ?? false;
      }
    });
  }, [model.scene, castShadow, receiveShadow]);

  const { animationName } = useControls("Fox", {
    animationName: { options: animations.names, label: "Animation" },
  });

  useEffect(() => {
    const action = animations.actions[animationName] as AnimationAction;
    action.reset().fadeIn(2).play();

    return () => {
      action.fadeOut(2);
    }
  }, [animationName]);

  return <primitive object={model.scene} {...props} />;
}