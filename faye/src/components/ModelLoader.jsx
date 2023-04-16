import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Plane } from "@react-three/drei";
import { TextureLoader, RepeatWrapping } from "three";

function Model() {
  const gltf = useLoader(
    GLTFLoader,
    "src/assets/models/mercedes-benz_s_500_-_ps1_low_poly/scene.gltf"
  );

  // Access the object's transform
  const meshRef = useRef();
  useFrame(() => {
    meshRef.current.rotation.y += 0.01; // Rotate 0.01 radians per frame
  });

  return <primitive object={gltf.scene} ref={meshRef} />;
}

function ModelLoader() {
  const texture = useLoader(TextureLoader, "src/assets/aura2.PNG");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(800, 1000);

  return (
    <Canvas camera={{ position: [-20, 3, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight color="white" intensity={1} position={[0, 10, 5]} />
      <Suspense
        fallback={
          <Html>
            <div>Loading...</div>
          </Html>
        }
      >
        <Model />
      </Suspense>
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[1000, 1000, 100, 100]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <OrbitControls
        enablePan={false}
        enableRotate={false}
        enableZoom={false}
      />
    </Canvas>
  );
}

export default ModelLoader;
