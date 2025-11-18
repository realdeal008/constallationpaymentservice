"use client";

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const starsData = Array.from({ length: 200 }, () => ({
  position: [
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 100,
    (Math.random() - 0.5) * 100,
  ] as [number, number, number],
}));

export default function ConstellationCanvas() {
  return (
    <Canvas className="canvas-bg" camera={{ position: [0, 0, 5], fov: 75 }}>
      <Stars />
    </Canvas>
  );
}

function Stars() {
  const group = useRef<THREE.Group>(null);

  const stars = useMemo(() => starsData, []);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += 0.0008;
  });

  return (
    <group ref={group}>
      {stars.map((s: { position: [number, number, number] }, i: number) => (
        <mesh key={i} position={s.position}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#00aaff" />
        </mesh>
      ))}
    </group>
  );
}
