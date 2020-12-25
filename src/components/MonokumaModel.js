import React, { useRef, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useLoader } from "react-three-fiber"
import * as THREE from "three"

const MonokumaModel = () => {
  const [rotationDeg, setRotationDeg] = useState(0)
  const monokuma = useRef()

  const gltf = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/models/monokuma.glb`
  )

  useFrame(() => setRotationDeg(rotationDeg + 0.01))

  return (
    <mesh>
      <primitive
        rotation={new THREE.Euler(0, rotationDeg, 0)}
        rotateX={100}
        ref={monokuma}
        object={gltf.scene}
        position={[0, 0, 0]}
        scale={[1.2, 1.2, 1.2]}
      />
    </mesh>
  )
}

export default MonokumaModel
