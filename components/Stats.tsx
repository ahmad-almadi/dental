'use client';

import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2 });
      return controls.stop;
    }
  }, [count, value, inView]);

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}

const stats = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 5000, suffix: '+', label: 'Happy Patients' },
  { value: 15, suffix: '+', label: 'Specialists' },
  { value: 98, suffix: '%', label: 'Success Rate' },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {mounted && (
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: (i % 3) * 30 + 50,
                height: (i % 3) * 30 + 50,
                left: `${(i * 5.3) % 100}%`,
                top: `${(i * 7.7) % 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: (i % 3) + 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl opacity-90">Excellence in every aspect of dental care</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <motion.div
                className="text-6xl font-bold mb-2"
                whileHover={{ scale: 1.2 }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-xl opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
