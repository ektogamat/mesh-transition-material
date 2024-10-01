import { Environment, Float, OrbitControls } from '@react-three/drei'
import { state } from '../store'
import { useSnapshot } from 'valtio'
import { Airplane } from './Airplane'
import { Suspense } from 'react'

export const Experience = () => {
  const { selectedColor } = useSnapshot(state)

  return (
    <Suspense>
      <OrbitControls minDistance={2} maxDistance={4} />
      <directionalLight
        position={[-2, 1, 1]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Environment
        files={'/sky.jpg'}
        background
        backgroundIntensity={1.5}
        environmentIntensity={1.1}
      />
      <mesh>
        <Float speed={5} rotationIntensity={0.5}>
          <Airplane transitionColor={selectedColor} />
        </Float>
      </mesh>
    </Suspense>
  )
}
