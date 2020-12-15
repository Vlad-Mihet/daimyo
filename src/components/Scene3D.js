import React, { useRef, useState, useMemo } from "react"
import { Canvas, useFrame } from "react-three-fiber"
import * as THREE from "three"
import face from "../images/face_c.png"

export default function Scene3D() {
  const mesh = useRef()

  const [active, setActive] = useState(false)

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  const texture = useMemo(() => new THREE.TextureLoader().load(face), [])
  return <Scene3D />
}
