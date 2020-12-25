import React, { Suspense, useRef } from "react"
import { Canvas, useFrame, useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

const Scene3D = () => {
  const model = useRef()

  const { nodes } = useLoader(GLTFLoader, "models/model.glb")

  useFrame(() => (model.current.rotation.y += 0.0002))
  return (
    <Canvas className="canvas">
      <Suspense fallback={<div>Loading...</div>}>
        <mesh
          ref={model}
          visible
          position={[0, 0, 0]}
          // Adding data from mars.glb to the geometry and material of the sphere
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
        />
      </Suspense>
    </Canvas>
  )
}

export default Scene3D
