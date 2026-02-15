import { LevaPanel, levaStore } from 'leva'

import { SketchyShadow } from '../randomized-shadow'
import { SketchyBorder } from '../sketchy-borders'

import { levaLightTheme, levaDarkTheme } from './leva-theme'

import { usePrefersDarkTheme } from '~/utils/hooks/use-prefers-dark-theme'

type ResponsiveSketchyPanelProps = Readonly<{
  store: typeof levaStore
}>

export default function SketchyLevaPanel({ store }: ResponsiveSketchyPanelProps) {
  const prefersDarkTheme = usePrefersDarkTheme()
  const theme = prefersDarkTheme ? levaDarkTheme : levaLightTheme
  
  return (
    <SketchyBorder baseStrokeWidth='sm'>
      <SketchyShadow strokeWidth='sm' offsetX={1} offsetY={1}/>
      <LevaPanel
        key={store.storeId} // This is needed to force a re-render of the panel when the store changes. Otherwise, the panel will not update its size causing a visible overflow.
        store={store}
        theme={theme}
        fill={true}
        flat={true}
        oneLineLabels={false}
        titleBar={false}
        hideCopyButton={true}
      />
    </SketchyBorder>
  )
}

