import { Canvas, type CameraProps, type CanvasProps } from "@react-three/fiber";
import { useMemo } from "react";

import type { Point3D } from "~/sketched-components/utils";

import useResponsiveValue, { type ResponsiveValue } from "~/utils/hooks/use-responsive-value";

type TestCanvasProps = Readonly<CanvasProps & {
  position?: ResponsiveValue<Point3D>;
}>;

export function TestCanvas({ children, position, ...props }: TestCanvasProps) {

  const cameraPosition: Point3D = useResponsiveValue(position ?? {
    320: [-8, 6, 12],
    1024: [-4, 3, 6],
  });

  const cameraSettings: CameraProps = useMemo(() => ({
    fov: 45,
    near: 0.1,
    far: 200,
    position: cameraPosition
  }), [cameraPosition]);

  return <Canvas camera={cameraSettings} {...props}>
    {children}
  </Canvas>
}