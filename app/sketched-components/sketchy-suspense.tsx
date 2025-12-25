import { Suspense, type PropsWithChildren } from "react";
import Label from "~/sketched-components/label/label";

type SketchySuspenseProps = PropsWithChildren;

export default function SketchySuspense({ children }: SketchySuspenseProps) {  
  return <Suspense fallback={<Label>Loading...</Label>}>{children}</Suspense>;
}