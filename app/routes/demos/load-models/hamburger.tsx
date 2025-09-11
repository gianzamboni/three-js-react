import { Clone, useGLTF } from "@react-three/drei";
import type { Group, Mesh } from "three";
import type { GroupProps } from "~/3d/types";

type HamburgerProps = Omit<GroupProps, 'children'>;
export default function Hamburger({ ...props }: HamburgerProps) {
  const {nodes, materials} = useGLTF("../models/hamburger-draco.glb");
  return (
    <group {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.bottomBun as Mesh).geometry}
        material={materials.BunMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.meat as Mesh).geometry}
        material={materials.SteakMaterial}
        position={[0, 2.817, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cheese as Mesh).geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.topBun as Mesh).geometry}
        material={materials.BunMaterial}
        position={[0, 1.771, 0]}
      />
    </group>
  );
}

useGLTF.preload("../models/hamburger-draco.glb");