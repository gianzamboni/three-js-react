export default function Floor() {
  return (
    <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={10}>
      <planeGeometry/>
      <meshBasicMaterial color="greenyellow" />
    </mesh>
  );
};