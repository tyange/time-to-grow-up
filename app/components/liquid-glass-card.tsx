"use client";

import { useTexture } from "@react-three/drei";

export default function LiquidGlassCard() {
  const texture = useTexture(
    "https://tyange.onthewifi.com/api/cms/images/the_sun.png"
  );

  return (
    <>
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial map={texture} toneMapped={false} />
      </mesh>
    </>
  );
}
