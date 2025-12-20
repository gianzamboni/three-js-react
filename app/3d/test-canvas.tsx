import { Canvas, type CameraProps, type CanvasProps } from "@react-three/fiber";
import { useMemo } from "react";
import useIsMobile from "~/utils/useIsMobile";

type TestCanvasProps = CanvasProps;

export function TestCanvas({ children, ...props }: TestCanvasProps) {

  const { isMobile } = useIsMobile();

  const cameraSettings: CameraProps = useMemo(() => ({
    fov: 45,
    near: 0.1,
    far: 200,
    position: isMobile ? [-8, 6, 12] : [- 4, 3, 6]
  }), [isMobile]);

  return <Canvas camera={cameraSettings} {...props}>
    {children}
  </Canvas>
}