"use client";

import LiquidGlassCard from "@/app/components/liquid-glass-card";
import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <LiquidGlassCard />
      </Canvas>
    </div>
  );
}
