export default function OrangeSphere() {
  return (
    <mesh position-x={-2}>
      <sphereGeometry />
      <meshStandardMaterial color="hsl(33, 100%, 50%)" />
    </mesh>
  );
};  