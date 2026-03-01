'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faEnvelope, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    specialty: 'Cosmetic Dentistry',
    experience: '15 years of experience in smile transformations',
  },
  {
    name: 'Dr. Michael Chen',
    specialty: 'Orthodontics',
    experience: 'Expert in modern braces and Invisalign',
  },
  {
    name: 'Dr. Emily Rodriguez',
    specialty: 'Dental Implants',
    experience: 'Specialist in implant surgery and restoration',
  },
  {
    name: 'Dr. James Wilson',
    specialty: 'Endodontics',
    experience: 'Root canal specialist with gentle care',
  },
];

function DoctorCard({ doctor, index }: { doctor: typeof doctors[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.2, ease: 'easeOut' }
      }}
      className="h-[420px]"
      style={{ 
        perspective: '1000px',
        willChange: 'transform'
      }}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        onClick={() => setFlipped(!flipped)}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full glass rounded-2xl p-6 flex flex-col items-center justify-between transition-shadow duration-200"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            boxShadow: '0 20px 50px rgba(77, 166, 255, 0.2), 0 10px 25px rgba(0, 0, 0, 0.1)',
            willChange: 'box-shadow',
          }}
        >
          <div className="flex flex-col items-center flex-1 justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faUserMd} className="text-5xl text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white text-center">
              {doctor.name}
            </h3>
            <p className="text-primary font-semibold mb-3 text-center">{doctor.specialty}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center px-2">
              {doctor.experience}
            </p>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary shadow-medium transition-all duration-150 hover:scale-110 hover:shadow-glow"
              title="Email"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <button
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary shadow-medium transition-all duration-150 hover:scale-110 hover:shadow-glow"
              title="Call"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faPhone} />
            </button>
            <button
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-primary shadow-medium transition-all duration-150 hover:scale-110 hover:shadow-glow"
              title="Profile"
              onClick={(e) => e.stopPropagation()}
            >
              <FontAwesomeIcon icon={faBriefcase} />
            </button>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Click to see more
          </p>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full glass rounded-2xl p-6 flex flex-col items-center justify-between shadow-strong"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            boxShadow: '0 20px 50px rgba(77, 166, 255, 0.2), 0 10px 25px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="flex flex-col items-center flex-1 justify-center w-full">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white text-center">
              Contact Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6 text-sm px-2">
              {doctor.experience}
            </p>
            <div className="space-y-3 w-full px-2">
              <div className="flex items-center gap-3 p-3 glass rounded-xl shadow-soft">
                <FontAwesomeIcon icon={faEnvelope} className="text-primary text-lg" />
                <span className="text-xs text-gray-700 dark:text-gray-300 truncate">
                  {doctor.name.toLowerCase().replace(/\s+/g, '.')}@dentalcare.com
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 glass rounded-xl shadow-soft">
                <FontAwesomeIcon icon={faPhone} className="text-primary text-lg" />
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  +1 (555) {Math.floor(100 + index * 111)}-{Math.floor(1000 + index * 1111)}
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 glass rounded-xl shadow-soft">
                <FontAwesomeIcon icon={faBriefcase} className="text-primary text-lg" />
                <span className="text-xs text-gray-700 dark:text-gray-300">
                  {doctor.specialty}
                </span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            Click to go back
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Doctors() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="doctors" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Meet Our <span className="text-primary">Experts</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Experienced professionals dedicated to your smile
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
