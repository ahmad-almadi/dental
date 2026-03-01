'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">DentalCare</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for advanced dental care and beautiful smiles.
            </p>
            <div className="flex space-x-4">
              {['FB', 'IG', 'TW', 'LI'].map((icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-sm font-bold"
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Doctors', 'Gallery', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary transition">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Cosmetic Dentistry', 'Teeth Whitening', 'Dental Implants', 'Orthodontics', 'Emergency Care'].map((service) => (
                <motion.li key={service} whileHover={{ x: 5 }}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 mb-6">
              <li>Address: 123 Dental Street, City</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@dentalcare.com</li>
              <li>Hours: Mon-Fri: 9AM-6PM</li>
            </ul>

            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-xl bg-gray-800 border border-gray-700 focus:border-primary outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary px-6 py-2 rounded-r-xl font-semibold"
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl overflow-hidden h-64 mb-8"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="border-t border-gray-800 pt-8 text-center text-gray-400"
        >
          <p>© 2024 DentalCare. All rights reserved. Made with care for beautiful smiles.</p>
        </motion.div>
      </div>
    </footer>
  );
}
