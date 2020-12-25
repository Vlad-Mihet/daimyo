import React, { useRef, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useLoader } from "react-three-fiber"
import * as THREE from "three"
import model from "../../static/models/squirtle.glb"

const SquirtleModel = () => {
  const [rotationDeg, setRotationDeg] = useState(0)
  const squirtle = useRef()

  const gltf = useLoader(GLTFLoader, model)

  useFrame(() => setRotationDeg(rotationDeg + 0.01))
  return (
    <mesh>
      <primitive
        rotation={new THREE.Euler(0, rotationDeg, 0)}
        ref={squirtle}
        object={gltf.scene}
        position={[0, 0, 0]}
        scale={[2.5, 2.5, 2.5]}
      />
    </mesh>
  )
}

export default SquirtleModel
