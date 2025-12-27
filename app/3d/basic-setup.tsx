import { OrbitControls } from "@react-three/drei"

import DefaultDirectionalLight, { DirectionalLightWithShadows } from "./lights"

import ToggablePerfPanel from "~/utils/toggable-perf-panel";

type DefaultSetupProps = {
    hidePerfPanel?: boolean
    withoutLights?: boolean
    castShadow?: boolean
};

export default function DefaultSetup({ hidePerfPanel, withoutLights, castShadow }: DefaultSetupProps) {

    const showPerfPanel = !hidePerfPanel;
    const hasLights = !withoutLights;
    const hasShadows = hasLights && castShadow;

    return <>
        { showPerfPanel && <ToggablePerfPanel /> }
        <OrbitControls makeDefault />
        { hasShadows ? <DirectionalLightWithShadows /> : <DefaultDirectionalLight /> }
        { hasLights && <ambientLight intensity={1.5} /> }
    </>
}