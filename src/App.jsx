import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import Overlay from './components/Overlay/Overlay'

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [-2, 0, 2], fov: 80 }}>
        <color attach='background' args={['#ececec']} />
        <Experience />
      </Canvas>
      <Overlay />
    </>
  )
}

export default App
