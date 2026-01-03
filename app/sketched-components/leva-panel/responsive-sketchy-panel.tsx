import { LevaPanel, levaStore } from 'leva'

import { MemoizedSketchyShadow } from '../randomized-shadow'
import { MemoizedSketchedBorder } from '../sketchy-borders'

import { levaTheme } from './leva-theme'

type ResponsiveSketchyPanelProps = {
  store: typeof levaStore
}

export default function ResponsiveSketchyPanel({ store }: ResponsiveSketchyPanelProps) {
  return (
    <MemoizedSketchedBorder baseStrokeWidth='sm'>
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
    </MemoizedSketchedBorder>
  )
}

