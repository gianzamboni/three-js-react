import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import type { MeshProps } from "~/3d/types";
import { useControls } from "leva";
import type { AnimationAction } from "three";

const FOX_URL = "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/refs/heads/main/Models/Fox/glTF/Fox.gltf";

export default function Fox(props: MeshProps) {
  const model = useGLTF(FOX_URL);
  const animations = useAnimations(model.animations, model.scene);

  const { animationName } = useControls({
    animationName: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animationName] as AnimationAction;
    action.reset().fadeIn(2).play();

    return () => {
      action.fadeOut(2);
    }
  }, [animationName]);

  // Preload only on client-side to avoid SSR issues
  useEffect(() => {
    useGLTF.preload(FOX_URL);
  }, []);

  return <primitive object={model.scene} {...props} />;
}