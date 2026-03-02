'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGem, 
  faTooth, 
  faScrewdriverWrench, 
  faShieldHeart,
  faTruckMedical,
  faUserDoctor
} from '@fortawesome/free-solid-svg-icons';

const features = [
  { icon: faGem, title: 'Cosmetic Dentistry', desc: 'Transform your smile with our advanced cosmetic procedures' },
  { icon: faTooth, title: 'Teeth Whitening', desc: 'Professional whitening for a brighter, confident smile' },
  { icon: faShieldHeart, title: 'Dental Implants', desc: 'Permanent solution for missing teeth' },
  { icon: faScrewdriverWrench, title: 'Orthodontics', desc: 'Straighten your teeth with modern braces and aligners' },
  { icon: faTruckMedical, title: 'Emergency Care', desc: '24/7 emergency dental services' },
  { icon: faUserDoctor, title: 'General Dentistry', desc: 'Comprehensive oral health care' },
];

export default function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-blue-50/50 via-white/80 to-cyan-50/50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950/50 dark:to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Comprehensive dental care tailored to your needs
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2, ease: 'easeOut' }
              }}
              className="glass p-6 md:p-8 rounded-2xl cursor-pointer transition-shadow duration-200"
              style={{
                boxShadow: '0 15px 40px rgba(77, 166, 255, 0.2), 0 8px 20px rgba(0, 0, 0, 0.1)',
                willChange: 'transform',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(77, 166, 255, 0.3), 0 15px 35px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(77, 166, 255, 0.2), 0 8px 20px rgba(0, 0, 0, 0.1)';
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl mb-4 text-primary"
              >
                <FontAwesomeIcon icon={feature.icon} />
              </motion.div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
