import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleFieldProps {
  mouseX: number;
  mouseY: number;
}

const ParticleField: React.FC<ParticleFieldProps> = ({ mouseX, mouseY }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  const particleCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const colors = useMemo(() => {
    const cols = new Float32Array(particleCount * 3);
    const cyan = new THREE.Color('#00f5d4');
    const purple = new THREE.Color('#7b2cbf');
    
    for (let i = 0; i < particleCount; i++) {
      const color = Math.random() > 0.5 ? cyan : purple;
      cols[i * 3] = color.r;
      cols[i * 3 + 1] = color.g;
      cols[i * 3 + 2] = color.b;
    }
    return cols;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x = mouseY * 0.0001;
      pointsRef.current.rotation.z = mouseX * 0.0001;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x += 0.001;
      torusRef.current.rotation.y += 0.002;
      torusRef.current.rotation.x += mouseY * 0.00005;
      torusRef.current.rotation.y += mouseX * 0.00005;
    }
  });

  return (
    <>
      {/* Particle constellation */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={colors}
            itemSize={3}
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          vertexColors
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Floating Torus Knot */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={torusRef}>
          <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
          <meshStandardMaterial
            color="#7b2cbf"
            wireframe
            emissive="#00f5d4"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      </Float>

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f5d4" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7b2cbf" />
    </>
  );
};

const FallbackScene: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-gradient-radial from-electric-purple/20 via-obsidian-950 to-obsidian-950 animate-pulse-slow" />
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!hasWebGL) {
    return <FallbackScene />;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ParticleField mouseX={mousePosition.x} mouseY={mousePosition.y} />
      </Canvas>
    </div>
  );
};
