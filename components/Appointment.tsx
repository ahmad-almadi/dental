'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Appointment() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
  });

  const services = [
    'General Checkup',
    'Teeth Whitening',
    'Dental Implants',
    'Orthodontics',
    'Cosmetic Dentistry',
    'Emergency Care',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Appointment booked successfully!');
  };

  return (
    <section id="appointment" className="py-12 md:py-20 gradient-bg">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Book Your <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
            Schedule your visit in just a few steps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="max-w-2xl mx-auto glass rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-strong"
        >
          {/* Progress Steps */}
          <div className="flex justify-center items-center mb-8 px-2">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: s * 0.1 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-all duration-300 ${
                    step >= s 
                      ? 'bg-primary text-white shadow-lg scale-110' 
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {s}
                </motion.div>
                {s < 3 && (
                  <div className="relative w-12 sm:w-16 md:w-20 h-1 mx-1 sm:mx-2 bg-gray-300 dark:bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: '0%' }}
                      animate={{ width: step > s ? '100%' : '0%' }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="absolute inset-0 bg-primary"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="peer w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass border-2 border-gray-300 dark:border-gray-600 focus:border-primary outline-none transition text-sm sm:text-base text-gray-800 dark:text-white"
                    required
                  />
                  <label className="absolute left-3 sm:left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs sm:peer-focus:text-sm transition-all">
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="peer w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass border-2 border-gray-300 dark:border-gray-600 focus:border-primary outline-none transition text-sm sm:text-base text-gray-800 dark:text-white"
                    required
                  />
                  <label className="absolute left-3 sm:left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs sm:peer-focus:text-sm transition-all">
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder=" "
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="peer w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass border-2 border-gray-300 dark:border-gray-600 focus:border-primary outline-none transition text-sm sm:text-base text-gray-800 dark:text-white"
                    required
                  />
                  <label className="absolute left-3 sm:left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-2.5 sm:peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm sm:peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-xs sm:peer-focus:text-sm transition-all">
                    Phone Number
                  </label>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-gray-700 dark:text-gray-300">
                    Select Service
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {services.map((service) => (
                      <motion.button
                        key={service}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormData({ ...formData, service })}
                        className={`p-3 sm:p-4 rounded-xl text-left transition text-sm sm:text-base ${
                          formData.service === service
                            ? 'bg-primary text-white shadow-lg'
                            : 'glass text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {service}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-6"
              >
                <div className="relative">
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass border-2 border-gray-300 dark:border-gray-600 focus:border-primary outline-none text-sm sm:text-base text-gray-800 dark:text-white"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl glass border-2 border-gray-300 dark:border-gray-600 focus:border-primary outline-none text-sm sm:text-base text-gray-800 dark:text-white"
                    required
                  />
                </div>
              </motion.div>
            )}

            <div className="flex justify-between mt-6 sm:mt-8">
              {step > 1 && (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(step - 1)}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl glass font-semibold text-sm sm:text-base text-gray-700 dark:text-white"
                >
                  Back
                </motion.button>
              )}
              
              {step < 3 ? (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(step + 1)}
                  className="ml-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-primary text-white font-semibold shadow-lg text-sm sm:text-base"
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-primary text-white font-semibold shadow-lg text-sm sm:text-base"
                >
                  Book Appointment
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
