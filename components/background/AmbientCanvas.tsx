'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function StarField(props: any) {
  const ref: any = useRef();
  const [sphere] = useState(() => {
    const coords = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 10;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 10;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return coords;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function AmbientCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <StarField />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-[#050508]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
      <div className="absolute inset-0 scanline opacity-20" />
    </div>
  );
}
