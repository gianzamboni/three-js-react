import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

import type { Material, Mesh } from "three";
import type { Point3D } from "~/sketched-components/utils";
import type { GroupProps } from "~/types/types";

type HamburgerProps = Readonly<Omit<GroupProps, 'children'> & {
  castShadow?: boolean;
  receiveShadow?: boolean;
}>;

const HAMBURGER_URL = "https://i0hci4avyoqkwwp1.public.blob.vercel-storage.com/hamburger.glb";

type HamburgerElement = Readonly<{
    node: Mesh;
    material: Material;
    position: Point3D;
}>;

export default function Hamburger({ castShadow, receiveShadow, ...props }: HamburgerProps) {
  const {nodes, materials} = useGLTF(HAMBURGER_URL);

  const elements: HamburgerElement[] = useMemo(() => [
      { node: nodes.bottomBun as Mesh, material: materials.BunMaterial.clone(), position: [0, 0, 0] },
      { node: nodes.meat as Mesh, material: materials.SteakMaterial.clone(), position: [0, 2.75, 0] },
      { node: nodes.cheese as Mesh, material: materials.CheeseMaterial.clone(), position: [0, 3, 0] },
      { node: nodes.topBun as Mesh, material: materials.BunMaterial.clone(), position: [0, 1.715, 0] },
    ], [nodes]);

  return (
    <group {...props}>
      {elements.map((element) => (
        <mesh
          key={element.node.name}
          castShadow={castShadow}
          receiveShadow={receiveShadow}
          geometry={element.node.geometry}
          material={element.material}
          position={element.position}
        />
      ))}
    </group>
  );
}