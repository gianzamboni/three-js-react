import { RigidBody } from "@react-three/rapier";
import { forwardRef } from "react";

import { boxGeometry } from "../globals/geometries";
import { obstacleMaterial } from "../globals/materials";

import type { RapierRigidBody } from "@react-three/rapier";

type ObstacleProps = {
  scale: [number, number, number];
};

const Obstacle = forwardRef<RapierRigidBody, ObstacleProps>(
  ({ scale }, ref) => {
    return (
      <RigidBody
        ref={ref}
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          receiveShadow
          castShadow
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={scale}
        />
      </RigidBody>
    );
  }
);

Obstacle.displayName = "Obstacle";

export default Obstacle;
