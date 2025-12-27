import { OrbitControls } from "@react-three/drei";
import { PurpleCube } from "~/3d/cube";
import { GreenFloor } from "~/3d/floor";
import DefaultDirectionalLight from "~/3d/lights";
import { OrangeSphere } from "~/3d/sphere";
import ToggablePerfPanel from "~/utils/toggable-perf-panel";

export default function MainScene() {
    return <>

        <ToggablePerfPanel />
        <OrbitControls makeDefault />

        <DefaultDirectionalLight 
            castShadow 
            shadow-mapSize={[2048, 2048]}/>
        <ambientLight intensity={1.5} />

        <OrangeSphere castShadow />
        <PurpleCube castShadow />
        <GreenFloor receiveShadow />
    </>
}