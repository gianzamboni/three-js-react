import { Suspense, useEffect, useState } from "react";
import Label from "~/sketched-components/label/label";

export default function SketchySuspense({ children }: { children: React.ReactNode }) {  
  return <Suspense fallback={<Label>Loading...</Label>}>{children}</Suspense>;
}