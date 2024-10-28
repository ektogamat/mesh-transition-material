import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'
import Overlay from './components/Overlay/Overlay'
import { useSnapshot } from 'valtio'
import { state } from './store'

function App() {
  const { isMobile } = useSnapshot(state)

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [5, 0.5, 7], fov: isMobile ? 45 : 25 }}
      >
        <color attach='background' args={['#1c1c1c']} />
        <fog attach='fog' args={['#1c1c1c', 10, 20]} />
        <Experience />
      </Canvas>
      <Overlay />
    </>
  )
}

export default App
