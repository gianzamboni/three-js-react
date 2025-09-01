import { Canvas, type CameraProps, type CanvasProps } from "@react-three/fiber";
import { useMemo, type PropsWithChildren } from "react";

type TestCanvasProps = CanvasProps;

export function TestCanvas({ children, ...props }: TestCanvasProps) {

  const cameraSettings: CameraProps = {
    fov: 45,
    near: 0.1,
    far: 200,
    position: [- 4, 3, 6]
  };

  return <Canvas camera={cameraSettings} {...props}>
    {children}
  </Canvas>
}