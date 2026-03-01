'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Particles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: (i * 7.3) % 100,
    y: (i * 13.7) % 100,
    size: (i % 3) + 2,
    duration: (i % 3) + 2,
  }));

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section id="hero" className="relative h-screen gradient-bg overflow-hidden">
      <Particles />

      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white"
            >
              Your Smile, <br />
              <span className="text-primary">Our Passion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Advanced Dental Care with Modern Technology
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#appointment"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(77, 166, 255, 0.4), 0 15px 50px rgba(77, 166, 255, 0.25)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-glow font-semibold text-center"
              >
                Book Appointment
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold text-gray-700 dark:text-white shadow-medium"
              >
                Free Consultation
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[350px] md:h-[500px] glass rounded-3xl overflow-hidden shadow-strong"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* Before/After Comparison */}
            <div className="relative w-full h-full">
              {/* Before Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/before.jpg)',
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
              />
              
              {/* After Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(/images/after.jpg)',
                  clipPath: `inset(0 0 0 ${sliderPosition}%)`
                }}
              />

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl cursor-ew-resize"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faChevronLeft} className="text-primary text-sm absolute left-2" />
                  <FontAwesomeIcon icon={faChevronRight} className="text-primary text-sm absolute right-2" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                After
              </div>
            </div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-gray-600 dark:text-gray-300 bg-white/90 dark:bg-gray-800/90 px-4 py-2 rounded-full">
              Drag to compare
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
