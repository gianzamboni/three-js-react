import { useEffect, useMemo, useRef } from "react";
import { type BufferGeometry, DoubleSide } from "three";

export default function RandomTriangles() {

  const verticesCount = 10 * 3;
  const positions = useMemo(() => {
    const positions = new Float32Array(verticesCount * 3);
    for (let i = 0; i < verticesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  const geometryRef = useRef<BufferGeometry>(null);

  useEffect(() => {
    geometryRef.current?.computeVertexNormals();
  }, [ positions ])

  return <mesh>
    <bufferGeometry ref={geometryRef}>
      <bufferAttribute 
        attach="attributes-position" 
        args={[positions, 3]}
        count={verticesCount}
      />
    </bufferGeometry>
    <meshStandardMaterial color="red" side={DoubleSide}/>
  </mesh>;
}