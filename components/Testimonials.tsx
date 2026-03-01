'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: 'John Smith',
    rating: 5,
    text: 'Amazing experience! The staff was professional and the results exceeded my expectations.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  },
  {
    name: 'Emma Davis',
    rating: 5,
    text: 'Best dental clinic in town. Modern equipment and painless procedures.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
  {
    name: 'Michael Brown',
    rating: 5,
    text: 'My smile transformation was incredible. Highly recommend their cosmetic services!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
  },
  {
    name: 'Sarah Wilson',
    rating: 5,
    text: 'Professional, caring, and efficient. They made me feel comfortable throughout.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Patient <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            What our happy patients say about us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 -translate-x-4 z-10 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 md:translate-x-16 translate-x-4 z-10 w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-12 text-center shadow-strong"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
              >
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="flex justify-center mb-4 gap-1">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-yellow-400 text-2xl"
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </motion.div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic"
              >
                "{testimonials[current].text}"
              </motion.p>

              <motion.h4
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl font-bold text-gray-800 dark:text-white"
              >
                {testimonials[current].name}
              </motion.h4>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
