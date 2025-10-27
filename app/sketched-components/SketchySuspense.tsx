import { Suspense, useEffect, useState } from "react";
import Label from "~/sketched-components/label/label";

export default function SketchySuspense({ children }: { children: React.ReactNode }) {
  const [promise, setPromise] = useState<Promise<any> | null>(null);

  useEffect(() => {
    const promise = Promise.resolve(new Promise((resolve) => setTimeout(() => resolve(true), 10000)));
    setPromise(promise as Promise<any>);
  }, []);
  return <Suspense fallback={<Label>Loading...</Label>}>{promise as React.ReactNode}</Suspense>;
}