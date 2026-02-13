import { boxGeometry } from "../globals/geometries";
import { trapBlockMaterial } from "../globals/materials";

import type { ReactNode } from "react";
import type { MeshStandardMaterial } from "three";

export type BlockProps = {
  position?: [number, number, number];
};

type BlockBaseProps = BlockProps & {
  material?: MeshStandardMaterial;
  platformPosition?: [number, number, number];
  children?: ReactNode;
};

export default function BlockBase({
  position = [0, 0, 0],
  material = trapBlockMaterial,
  platformPosition,
  children,
}: BlockBaseProps) {
  return (
    <group position={position}>
      <mesh
        receiveShadow
        scale={[4, 0.2, 4]}
        geometry={boxGeometry}
        material={material}
        position={platformPosition}
      />
      {children}
    </group>
  );
}
