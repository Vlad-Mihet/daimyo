import React, { useRef, useState } from "react"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useLoader } from "react-three-fiber"
import * as THREE from "three"
import model from "../../static/models/akali.glb"

const AkaliModel = () => {
  const [rotationDeg, setRotationDeg] = useState(0)
  const akali = useRef()

  const gltf = useLoader(GLTFLoader, model)

  useFrame(() => setRotationDeg(rotationDeg + 0.01))

  return (
    <mesh>
      <primitive
        rotation={new THREE.Euler(0, rotationDeg, 0)}
        ref={akali}
        object={gltf.scene}
        position={[0, -3, -2]}
        itemSize={3}
        scale={[0.09, 0.09, 0.09]}
      />
    </mesh>
  )
}

export default AkaliModel
