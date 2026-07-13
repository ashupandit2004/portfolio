import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Earth() {
  const earthRef = useRef();

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="deepskyblue" />
    </mesh>
  );
}