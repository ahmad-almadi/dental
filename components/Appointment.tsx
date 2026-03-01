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
    <section id="appointment" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Book Your <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Schedule your visit in just a few steps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="max-w-2xl mx-auto glass rounded-3xl p-8 shadow-strong"
        >
          {/* Progress Steps */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3].map((s) => (
              <motion.div
                key={s}
                className="flex items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: s * 0.1 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                    step >= s ? 'bg-primary text-white' : 'bg-gray-300 text-gray-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {s}
                </motion.div>
                {s < 3 && (
                  <div
                    className={`w-20 h-1 mx-2 ${
                      step > s ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                )}
              </motion.div>
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
                    className="peer w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary outline-none transition"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">
                    Full Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder=" "
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="peer w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary outline-none transition"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    placeholder=" "
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="peer w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary outline-none transition"
                    required
                  />
                  <label className="absolute left-4 -top-2.5 bg-white dark:bg-gray-800 px-2 text-sm text-gray-600 dark:text-gray-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">
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
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Select Service
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service) => (
                      <motion.button
                        key={service}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFormData({ ...formData, service })}
                        className={`p-4 rounded-xl text-left transition ${
                          formData.service === service
                            ? 'bg-primary text-white'
                            : 'glass'
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
                    className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary outline-none"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass border-2 border-transparent focus:border-primary outline-none"
                    required
                  />
                </div>
              </motion.div>
            )}

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 rounded-xl glass font-semibold"
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
                  className="ml-auto px-6 py-3 rounded-xl bg-primary text-white font-semibold"
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ml-auto px-6 py-3 rounded-xl bg-primary text-white font-semibold"
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
