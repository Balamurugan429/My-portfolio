import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ConstellationProps {
  mouseX: number;
  mouseY: number;
}

const DeepCosmosConstellation: React.FC<ConstellationProps> = ({ mouseX, mouseY }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const secondaryPointsRef = useRef<THREE.Points>(null);

  // High-density ambient cosmic particle field (purely background, unobtrusive)
  const primaryCount = 1200;
  const primaryPositions = useMemo(() => {
    const pos = new Float32Array(primaryCount * 3);
    for (let i = 0; i < primaryCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 2; // pushed back into depth
    }
    return pos;
  }, []);

  const primaryColors = useMemo(() => {
    const cols = new Float32Array(primaryCount * 3);
    const cyan = new THREE.Color('#00f5d4');
    const indigo = new THREE.Color('#6366f1');
    const slate = new THREE.Color('#94a3b8');

    for (let i = 0; i < primaryCount; i++) {
      const rand = Math.random();
      const color = rand > 0.6 ? cyan : rand > 0.3 ? indigo : slate;
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, []);

  // Subtle floating secondary data nodes
  const secondaryCount = 300;
  const secondaryPositions = useMemo(() => {
    const pos = new Float32Array(secondaryCount * 3);
    for (let i = 0; i < secondaryCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02 + mouseX * 0.08;
      pointsRef.current.rotation.x = mouseY * 0.06;
    }
    if (secondaryPointsRef.current) {
      secondaryPointsRef.current.rotation.y = -t * 0.015 - mouseX * 0.05;
      secondaryPointsRef.current.rotation.x = -mouseY * 0.04;
    }
  });

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={primaryCount}
            array={primaryPositions}
            itemSize={3}
            args={[primaryPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={primaryCount}
            array={primaryColors}
            itemSize={3}
            args={[primaryColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          vertexColors
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <points ref={secondaryPointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={secondaryCount}
            array={secondaryPositions}
            itemSize={3}
            args={[secondaryPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00f5d4"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      <ambientLight intensity={0.4} />
    </>
  );
};

const FallbackScene: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-radial from-indigo-500/10 via-obsidian-950 to-obsidian-950" />
    </div>
  );
};

export const SceneCanvas: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [hasWebGL, setHasWebGL] = React.useState(true);

  React.useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setHasWebGL(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hasWebGL) {
    return <FallbackScene />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <DeepCosmosConstellation mouseX={mousePosition.x} mouseY={mousePosition.y} />
      </Canvas>
    </div>
  );
};
