import React from "react"
import { OBJModel } from "react-3d-viewer"

export default function Scene3d() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <OBJModel src="../3d_models/Monokuma/Monokuma.obj" texPath="" />
    </div>
  )
}
