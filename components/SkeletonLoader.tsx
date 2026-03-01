'use client';

import { motion } from 'framer-motion';

export function HeroSkeleton() {
  return (
    <div className="h-screen gradient-bg flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="skeleton h-16 w-3/4 rounded-2xl" />
            <div className="skeleton h-16 w-2/3 rounded-2xl" />
            <div className="skeleton h-6 w-full rounded-xl" />
            <div className="skeleton h-6 w-5/6 rounded-xl" />
            <div className="flex space-x-4 mt-8">
              <div className="skeleton h-14 w-40 rounded-2xl" />
              <div className="skeleton h-14 w-40 rounded-2xl" />
            </div>
          </div>
          <div className="skeleton h-[500px] rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

export function FeaturesSkeleton() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="skeleton h-12 w-64 mx-auto rounded-2xl mb-4" />
          <div className="skeleton h-6 w-96 mx-auto rounded-xl" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="skeleton h-16 w-16 rounded-full mb-4" />
              <div className="skeleton h-8 w-3/4 rounded-xl mb-3" />
              <div className="skeleton h-4 w-full rounded-lg mb-2" />
              <div className="skeleton h-4 w-5/6 rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DoctorsSkeleton() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="skeleton h-12 w-64 mx-auto rounded-2xl mb-4" />
          <div className="skeleton h-6 w-96 mx-auto rounded-xl" />
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl h-80"
            >
              <div className="skeleton h-24 w-24 rounded-full mx-auto mb-4" />
              <div className="skeleton h-6 w-3/4 mx-auto rounded-xl mb-2" />
              <div className="skeleton h-4 w-1/2 mx-auto rounded-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FullPageSkeleton() {
  return (
    <div className="min-h-screen">
      <HeroSkeleton />
      <FeaturesSkeleton />
      <DoctorsSkeleton />
    </div>
  );
}
