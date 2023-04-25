import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Html, Plane } from "@react-three/drei";
import { TextureLoader, CubeTextureLoader, RepeatWrapping } from "three";
import * as THREE from "three";

function Model(props) {
  const gltf = useLoader(GLTFLoader, props.modelPath);

  // Access the object's transform
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.y += 0.01; // Rotate 0.01 radians per frame
  });

  return <primitive object={gltf.scene} ref={meshRef} />;
}

function Skybox() {
  const meshRef = React.useRef();

  const materials = [
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(
        "src/assets/skybox/vz_classic_right.PNG"
      ),
      side: THREE.BackSide,
    }),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("src/assets/skybox/aura.jpg"),
      side: THREE.BackSide,
    }),
  ];

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[150, 150, 150]} />
      {materials.map((material, index) => (
        <primitive key={index} object={material} attachArray="material" />
      ))}
    </mesh>
  );
}

function ModelLoader(props) {
  const texture = useLoader(TextureLoader, "src/assets/aura3.PNG");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(5, 5);

  return (
    <Canvas camera={{ position: [-10, 3, 5], fov: 80 }}>
      <ambientLight intensity={0.5} />
      <directionalLight color="white" intensity={1} position={[0, 10, 5]} />
      <Suspense
        fallback={
          <Html>
            <div>Loading...</div>
          </Html>
        }
      >
        <Skybox />
        <Model modelPath={props.modelPath} />
      </Suspense>
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[1000, 1000, 100, 100]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      <OrbitControls
        enablePan={false}
        enableRotate={true}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2 - 0.1}
      />
    </Canvas>
  );
}

export default ModelLoader;
