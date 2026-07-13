export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={4}
      />

      <pointLight
        position={[-10, -5, -5]}
        intensity={3}
        color="#00ffff"
      />
    </>
  );
}