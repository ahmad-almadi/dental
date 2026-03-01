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
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Comprehensive dental care tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="glass p-8 rounded-2xl cursor-pointer transition-shadow duration-200"
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
                className="text-6xl mb-4 text-primary"
              >
                <FontAwesomeIcon icon={feature.icon} />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
