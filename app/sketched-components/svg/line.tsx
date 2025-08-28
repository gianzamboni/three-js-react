type SideProps = {
  startX: number;
  startY: number;
  firstControlX: number;
  firstControlY: number;
  secondControlX: number;
  secondControlY: number;
  endX: number;
  endY: number;
  strokeWidth?: number;
}

export function Side(props: SideProps) {
  return <path 
    d={`M ${props.startX} ${props.startY} C ${props.firstControlX} ${props.firstControlY} ${props.secondControlX} ${props.secondControlY} ${props.endX} ${props.endY}`} 
    stroke="currentColor"
    strokeWidth={props.strokeWidth ?? 0.0001}
  />
}