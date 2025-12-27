import { OrbitControls } from "@react-three/drei";
import { OrangeSphere } from "~/3d/sphere";
import ToggablePerfPanel from "~/utils/toggable-perf-panel";

export default function MainScene() {
    return <>

        <ToggablePerfPanel />
        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} shadow-mapSize={[2048, 2048]}/>
        <ambientLight intensity={1.5} />

        <OrangeSphere />
        {/* <mesh castShadow position-x={- 2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        <mesh castShadow position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh> */}
    </>
}