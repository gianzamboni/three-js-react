import { LevaPanel, levaStore } from 'leva'

import { MemoizedSketchyShadow } from '../randomized-shadow'
import { SketchyBorder } from '../sketchy-borders'

import { levaTheme } from './leva-theme'

type ResponsiveSketchyPanelProps = {
  store: typeof levaStore
}

export default function SketchyLevaPanel({ store }: ResponsiveSketchyPanelProps) {
  return (
    <SketchyBorder baseStrokeWidth='sm'>
      <MemoizedSketchyShadow strokeWidth='sm' offsetX={1} offsetY={1}/>
      <LevaPanel
        store={store}
        theme={levaTheme}
        fill={true}
        flat={true}
        oneLineLabels={false}
        titleBar={false}
        hideCopyButton={true}
      />
    </SketchyBorder>
  )
}

