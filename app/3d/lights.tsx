import type { JSX } from "react";

type DirectionalLightProps = JSX.IntrinsicElements["directionalLight"];

export default function DefaultDirectionalLight(props: DirectionalLightProps) {
    return <directionalLight 
        position={[1,2,3]} 
        intensity={4.5}
        {...props}
    />
}

export function DirectionalLightWithShadows(props: DirectionalLightProps) {
    return <DefaultDirectionalLight
        castShadow
        shadow-mapSize={[2048, 2048]}
        {...props}
    />
}