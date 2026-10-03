// src/components/Hero3D.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere } from "@react-three/drei";

export default function Hero3D() {
  return (
    <div style={{ height: "100vh", background: "#0a0f1a" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} color="#4db8ff" />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
        <Sphere args={[1.5, 64, 64]}>
          <meshStandardMaterial
            color="#0077cc"
            emissive="#4db8ff"
            emissiveIntensity={0.6}
            wireframe
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
      <div className="overlay">
        <h1>Advanced Security Platform</h1>
        <p>Trap attackers. Talk to them. Predict what they&apos;ll do next.</p>
      </div>
    </div>
  );
}
