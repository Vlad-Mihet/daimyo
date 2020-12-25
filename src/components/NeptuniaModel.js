import React, { useRef, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useLoader } from "react-three-fiber"
import * as THREE from "three"

const NeptuniaModel = () => {
  const [rotationDeg, setRotationDeg] = useState(0)
  const neptunia = useRef()

  const gltf = useLoader(GLTFLoader, "/models/neptunia.glb")

  useFrame(() => setRotationDeg(rotationDeg + 0.01))

  return (
    <mesh>
      <primitive
        rotation={new THREE.Euler(0, rotationDeg, 0)}
        rotateX={100}
        ref={neptunia}
        object={gltf.scene}
        position={[0, 0, 0]}
        itemSize={3}
        scale={[2.45, 2.45, 2.45]}
      />
    </mesh>
  )
}

export default NeptuniaModel
