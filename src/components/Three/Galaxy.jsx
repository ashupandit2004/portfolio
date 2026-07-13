import { Stars } from "@react-three/drei";

export default function Galaxy() {
  return (
    <Stars
      radius={400}
      depth={150}
      count={10000}
      factor={8}
      fade
      speed={1}
    />
  );
}