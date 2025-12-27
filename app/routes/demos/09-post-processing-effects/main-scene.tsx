import BasicSetup from "~/3d/basic-setup";
import { PurpleCube } from "~/3d/cube";
import { GreenFloor } from "~/3d/floor";
import { OrangeSphere } from "~/3d/sphere";

export default function MainScene() {
    return <>
        <BasicSetup />

        <OrangeSphere castShadow />
        <PurpleCube castShadow />
        <GreenFloor receiveShadow />
    </>
}