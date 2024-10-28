import {
  Circle,
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
} from '@react-three/drei'
import { state } from '../store'
import { useSnapshot } from 'valtio'
import { Suspense } from 'react'
import Lambo from './Lambo'
import {
  Bloom,
  EffectComposer,
  SMAA,
  Vignette,
} from '@react-three/postprocessing'

export const Experience = () => {
  const { selectedColor } = useSnapshot(state)

  return (
    <Suspense>
      <OrbitControls
        minDistance={6}
        maxDistance={10}
        autoRotate
        autoRotateSpeed={-0.45}
        target={[0, 0.5, 0]}
        minPolarAngle={1.3}
        maxPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <directionalLight
        position={[-2, 2, 1]}
        castShadow
        shadow-mapSize-width={256}
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset='warehouse' environmentIntensity={0.8} />

      <Lambo transitionColor={selectedColor} />

      <Circle
        args={[1, 16]}
        receiveShadow
        scale={100}
        rotation-x={-Math.PI / 2}
        position-y={0}
      >
        <MeshReflectorMaterial
          color={'#2f2e3b'}
          envMapIntensity={0}
          blur={[512, 512]}
          mixBlur={1}
          mixStrength={3}
          mixContrast={1}
          resolution={1024}
          mirror={1}
          depthScale={1}
          minDepthThreshold={0.8}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.45}
          roughness={1}
        />
      </Circle>

      <EffectComposer>
        <SMAA />
        <Bloom
          mipmapBlur
          luminanceThreshold={0.5}
          levels={9}
          intensity={0.25}
          radius={0.8}
          luminanceSmoothing={0}
        />
        <Bloom
          mipmapBlur
          radius={0.5}
          luminanceThreshold={0.3}
          levels={4}
          intensity={0.4}
        />
        <Vignette offset={0.5} darkness={0.4} />
      </EffectComposer>
    </Suspense>
  )
}
