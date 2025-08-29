import type { PropsWithChildren } from "react";
import type { Object3D } from "three";

type OrangeSphereProps = PropsWithChildren<{
  ref?: React.RefObject<Object3D>;
}>;

export default function OrangeSphere({ children, ref }: OrangeSphereProps) {
  return (
    <mesh position-x={-2} ref={ref}>
      <sphereGeometry />
      <meshStandardMaterial color="orange" />
      {children}
    </mesh>
  );
};  