import type { JSX } from "react";

export type MeshProps = JSX.IntrinsicElements["mesh"];
export type GroupProps = JSX.IntrinsicElements["group"];

export type Point2D = [number, number];

export type Point3D = [...Point2D, number];