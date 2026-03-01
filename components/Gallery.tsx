'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

const galleryItems = [
  { 
    id: 1, 
    title: 'Teeth Whitening',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80'
  },
  { 
    id: 2, 
    title: 'Dental Implant',
    before: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80'
  },
  { 
    id: 3, 
    title: 'Smile Makeover',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80'
  },
  { 
    id: 4, 
    title: 'Orthodontics',
    before: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80'
  },
  { 
    id: 5, 
    title: 'Veneers',
    before: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1609840114035-3c981407e31f?w=600&q=80'
  },
  { 
    id: 6, 
    title: 'Full Restoration',
    before: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80',
    after: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80'
  },
];

export default function Gallery() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="gallery" className="py-20 gradient-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">
            Before & <span className="text-primary">After</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            See the amazing transformations we've achieved
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              onClick={() => setSelectedItem(item.id)}
              className="glass rounded-2xl overflow-hidden cursor-pointer shadow-medium"
            >
              <div className="relative h-64 group">
                {/* Before/After Slider */}
                <div className="absolute inset-0 flex">
                  <div 
                    className="relative bg-cover bg-center"
                    style={{ 
                      width: '50%',
                      backgroundImage: `url(${item.before})`
                    }}
                  />
                  <div 
                    className="relative bg-cover bg-center"
                    style={{ 
                      width: '50%',
                      backgroundImage: `url(${item.after})`
                    }}
                  />
                </div>

                {/* Divider Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white shadow-lg -translate-x-1/2" />

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  Before
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  After
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <span className="text-white text-2xl font-bold flex items-center gap-2">
                    <FontAwesomeIcon icon={faSearchPlus} /> View
                  </span>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="glass rounded-3xl p-8 max-w-4xl w-full shadow-strong"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold text-white">
                  {galleryItems.find((i) => i.id === selectedItem)?.title}
                </h3>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedItem(null)}
                  className="text-white text-4xl w-12 h-12 flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </motion.button>
              </div>
              
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex">
                  <div 
                    className="relative bg-cover bg-center"
                    style={{ 
                      width: `${sliderPosition}%`,
                      backgroundImage: `url(${galleryItems.find((i) => i.id === selectedItem)?.before})`
                    }}
                  />
                  <div 
                    className="relative bg-cover bg-center"
                    style={{ 
                      width: `${100 - sliderPosition}%`,
                      backgroundImage: `url(${galleryItems.find((i) => i.id === selectedItem)?.after})`
                    }}
                  />
                </div>
                
                {/* Interactive Slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 z-10"
                />
                
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
                  style={{ left: `${sliderPosition}%` }}
                />
              </div>
              
              <div className="flex justify-center gap-8 mt-6 text-white text-lg">
                <div>Before</div>
                <div className="text-primary font-bold">→</div>
                <div>After</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
