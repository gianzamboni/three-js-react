import { levaStore, useControls } from "leva"
import { Perf } from 'r3f-perf'
export default function ToggablePerfPanel() {

  const { perf } = useControls('Performance', {
    perf: {
      label: "Show Panel",
      value: false,
    },
  }, { store: levaStore })

  if(!perf) return null;
  return <Perf position="top-right" />
}