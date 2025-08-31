type SideProps = {
  start: [number, number  ];
  firstControl: [number, number];
  secondControl: [number, number];
  end: [number, number];
  strokeWidth?: number;
}

export function Side(props: SideProps) {
  return <path 
    d={`M ${props.start[0]} ${props.start[1]} C ${props.firstControl[0]} ${props.firstControl[1]} ${props.secondControl[0]} ${props.secondControl[1]} ${props.end[0]} ${props.end[1]}`} 
    stroke="currentColor"
    strokeWidth={props.strokeWidth}
  />
}