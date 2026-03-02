'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { FullPageSkeleton } from '@/components/SkeletonLoader';

// 1. Import your components normally (no lazy or dynamic needed for this test)
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Interactive3D from '@/components/Interactive3D';
import Stats from '@/components/Stats';
import Doctors from '@/components/Doctors';
import Appointment from '@/components/Appointment';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  // 2. Create a loading state, defaulting to true
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3. Set a strict 2-second (2000ms) delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* 4. Use a simple ternary operator to switch between Skeleton and Content */}
      {isLoading ? (
        <FullPageSkeleton />
      ) : (
        <>
          <Hero />
          <Features />
          <Interactive3D />
          <Stats />
          <Doctors />
          <Testimonials />
          <Gallery />
          <Appointment />
          <Footer />
        </>
      )}
    </main>
  );
}