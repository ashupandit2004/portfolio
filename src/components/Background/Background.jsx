import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float } from "@react-three/drei";

function Planet() {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh rotation={[0.4, 0.5, 0]}>
        <icosahedronGeometry args={[2, 2]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00bfff"
          emissiveIntensity={2}
          wireframe
        />
      </mesh>
    </Float>
  );
}

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={20} />

        <Stars
          radius={300}
          depth={80}
          count={7000}
          factor={7}
          fade
          speed={1}
        />

        <Planet />

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
}