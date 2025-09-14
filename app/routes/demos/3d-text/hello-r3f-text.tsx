import { Text3D, type Text3DProps } from "@react-three/drei";

type HelloR3FTextProps = Omit<Text3DProps, 'font'>;
export default function HelloR3FText({ children, ...props }: HelloR3FTextProps) {
  return (
    <Text3D 
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.75}
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
      {...props}
    >
      HELLO R3F
      {children}
    </Text3D>
  );
}
