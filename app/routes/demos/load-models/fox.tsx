import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import type { MeshProps } from "~/3d/types";
import { useControls } from "leva";
import type { AnimationAction } from "three";

export default function Fox(props: MeshProps) {

  const model = useGLTF("../models/Fox/glTF/Fox.gltf");
  const animations = useAnimations(model.animations, model.scene);
``
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

  return <primitive object={model.scene} {...props} />;
}

useGLTF.preload("../models/Fox/glTF/Fox.gltf");