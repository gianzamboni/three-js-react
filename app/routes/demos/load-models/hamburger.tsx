import { useGLTF } from "@react-three/drei";
import type { Mesh } from "three";
import type { GroupProps } from "~/3d/types";
import { useEffect } from "react";

type HamburgerProps = Omit<GroupProps, 'children'>;

const HAMBURGER_URL = "https://i0hci4avyoqkwwp1.public.blob.vercel-storage.com/hamburger.glb";

export default function Hamburger({ ...props }: HamburgerProps) {
  const {nodes, materials} = useGLTF(HAMBURGER_URL);
  
  // Preload only on client-side to avoid SSR issues
  useEffect(() => {
    useGLTF.preload(HAMBURGER_URL);
  }, []);

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