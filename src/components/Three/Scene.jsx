import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Earth from "./Earth";
import Galaxy from "./Galaxy";
import Lights from "./Lights";

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-50">
  <Canvas camera={{ position: [0, 0, 8] }}>
    <Lights />
    <Galaxy />
    <Earth />
  </Canvas>
</div>
  );
}