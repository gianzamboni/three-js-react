import { useStoreContext } from "leva";

export function SketchyPanel() {
  // get values directly from the store
  const levaStore = useStoreContext();
  return (
    <div style={{ padding: 12, background: "#222", color: "#fff" }}>
      {levaStore.getVisiblePaths().join(', ')}
    </div>
  );  
}
