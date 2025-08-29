import { useThree } from '@react-three/fiber'
import Sphere from '~/3d/sphere';
import Floor from '~/3d/floor';

export default function Experience()
{
    const { camera, gl } = useThree()

    return <>

        <orbitControls args={ [ camera, gl.domElement ] } />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <Sphere />
        <Floor />

        <mesh position-x={ 2 } scale={ 1.5 }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

    </>;
}