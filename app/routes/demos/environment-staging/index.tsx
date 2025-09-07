import MainScene from "./main-scene";
import type { Route } from "../+types/environment-staging";
import { TestCanvas } from "~/3d/test-canvas";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Environment and Staging" },
    { name: "description", content: "Environment and Staging" },
  ];
}

export default function EnvironmentStaging() {
  return  (
  <TestCanvas shadows>
    <MainScene />
  </TestCanvas>);
} 