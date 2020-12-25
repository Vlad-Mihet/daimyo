import React, { Suspense } from "react"
import { Canvas } from "react-three-fiber"
import NeptuniaModel from "./NeptuniaModel"
import styles from "../styles/neptunia.module.scss"

const Neptunia = () => {
  return (
    <div className={styles.canvasWrapper}>
      <Canvas
        className={styles.canvas}
        onCreated={state => state.gl.setClearColor("#121212")}
      >
        <directionalLight intensity={1} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 0, 100]} angle={0.5} penumbra={0} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback="loading">
          <NeptuniaModel />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Neptunia
