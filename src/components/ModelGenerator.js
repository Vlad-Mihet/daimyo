import React, { useRef } from "react"
import { useLoader } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import model from "../../static/Model 1.gltf"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, model)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={nodes.mesh_0.material} geometry={nodes.mesh_0.geometry} />
    </group>
  )
}
