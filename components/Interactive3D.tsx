'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Center } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Suspense, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

// Suppress THREE.js deprecation warnings and errors
if (typeof window !== 'undefined') {
  const originalWarn = console.warn;
  const originalError = console.error;
  
  console.warn = (...args) => {
    const message = args[0]?.toString() || '';
    if (
      message.includes('THREE.Clock') ||
      message.includes('deprecated') ||
      message.includes('PCFSoftShadowMap') ||
      message.includes('THREE.WebGLShadowMap')
    ) {
      return;
    }
    originalWarn(...args);
  };
  
  console.error = (...args) => {
    const message = args[0]?.toString() || '';
    if (
      message.includes('THREE.Clock') ||
      message.includes('deprecated') ||
      message.includes('PCFSoftShadowMap')
    ) {
      return;
    }
    originalError(...args);
  };
}

function DenturesModel() {
  // Load the GLB model from public/images folder
  const { scene } = useGLTF('/images/dentures.glb');
  
  useEffect(() => {
    if (scene) {
      console.log('Model loaded successfully');
      // Traverse the scene to enable shadows and check materials
      scene.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // Make sure materials are visible
          if (child.material) {
            child.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene]);
  
  return (
    <Center>
      <primitive 
        object={scene} 
        scale={1}
        position={[0, 0, 0]}
      />
    </Center>
  );
}

// Preload the model
useGLTF.preload('/images/dentures.glb');

export default function Interactive3D() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-12 md:py-20 gradient-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Interactive <span className="text-primary">3D Dentures Model</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Explore our advanced dental prosthetics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] glass rounded-2xl md:rounded-3xl overflow-hidden shadow-strong bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 relative"
        >
          <Canvas 
            camera={{ position: [0, 0, 5], fov: 50 }}
            gl={{ 
              antialias: true,
              alpha: true,
              preserveDrawingBuffer: true,
              powerPreference: 'high-performance'
            }}
            style={{ background: 'transparent' }}
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
            frameloop="always"
          >
            <Suspense fallback={null}>
              <DenturesModel />
              
              {/* Lighting */}
              <ambientLight intensity={1.2} />
              <directionalLight position={[5, 5, 5]} intensity={1.5} />
              <directionalLight position={[-5, 5, 5]} intensity={1} />
              <directionalLight position={[0, -5, 5]} intensity={0.8} />
              <pointLight position={[0, 0, 5]} intensity={1} color="#ffffff" />
              <hemisphereLight intensity={0.6} groundColor="#ffffff" />
              
              <OrbitControls 
                enableZoom={true} 
                autoRotate 
                autoRotateSpeed={1.5}
                minDistance={2}
                maxDistance={10}
                enablePan={false}
                enableDamping={true}
                dampingFactor={0.05}
              />
            </Suspense>
          </Canvas>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 md:mt-8 text-sm md:text-base text-gray-600 dark:text-gray-400"
        >
          Drag to rotate • Scroll to zoom • Auto-rotating
        </motion.p>
      </div>
    </section>
  );
}
