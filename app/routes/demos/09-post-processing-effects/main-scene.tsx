import BasicSetup from "~/3d/basic-setup";
import { PurpleCube } from "~/3d/cube";
import { GreenFloor } from "~/3d/floor";
import { OrangeSphere } from "~/3d/sphere";
import { EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from "postprocessing";

export default function MainScene() {

    console.log(ToneMappingMode)
    return <>
        <EffectComposer >
            <ToneMapping mode={ ToneMappingMode.ACES_FILMIC } />
        </EffectComposer>

        <BasicSetup castShadow />
        <OrangeSphere castShadow />
        <PurpleCube castShadow />
        <GreenFloor receiveShadow />
    </>
}