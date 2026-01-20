import { Text } from "@react-three/drei";
import { useControls, levaStore } from "leva";

import type { Point3D } from "~/types/types";

import useResponsiveValue from "~/utils/hooks/use-responsive-value";

type NameTextSettings = {
  position: Point3D;
  rotation: Point3D;
  fontSize: number;
}

const NAME_TEXT_SETTINGS: Record<number, NameTextSettings> = {
  320: {
    position: [-0.2, -1.1, 0.5],
    rotation: [-0.5, -0.3, 0],
    fontSize: 0.54,
  },
  640: {
    position: [2.4, 0.75, 1],
    rotation: [0, -1.25, 0],
    fontSize: 1,
  },
}

export function NameText() {

  const nameTextSettings = useResponsiveValue(NAME_TEXT_SETTINGS);

  const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ, fontSize } = useControls('Name Text', {
    positionX: { label: "Position X", value: nameTextSettings.position[0], min: -5, max: 5, step: 0.01 },
    positionY: { label: "Position Y", value: nameTextSettings.position[1], min: -5, max: 5, step: 0.01 },
    positionZ: { label: "Position Z", value: nameTextSettings.position[2], min: -5, max: 5, step: 0.01 },
    rotationX: { label: "Rotation X", value: nameTextSettings.rotation[0], min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationY: { label: "Rotation Y", value: nameTextSettings.rotation[1], min: -Math.PI, max: Math.PI, step: 0.01 },
    rotationZ: { label: "Rotation Z", value: nameTextSettings.rotation[2], min: -Math.PI, max: Math.PI, step: 0.01 },
    fontSize: { label: "Font Size", value: nameTextSettings.fontSize, min: 0.1, max: 5, step: 0.01 },
  }, { store: levaStore });

  return (
    <Text
      font="/fonts/bangers-v20-latin-regular.woff"
      fontSize={fontSize}
      position={[positionX, positionY, positionZ]}
      rotation={[rotationX, rotationY, rotationZ]}
      maxWidth={2}
      textAlign="center"
      color={"#ffffff"}
    >
      Gianfranco Zamboni
    </Text>
  );
}
