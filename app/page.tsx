'use client';

import { Suspense, lazy } from 'react';
import Navbar from '@/components/Navbar';
import { FullPageSkeleton } from '@/components/SkeletonLoader';

// Lazy load components for better performance
const Hero = lazy(() => import('@/components/Hero'));
const Features = lazy(() => import('@/components/Features'));
const Interactive3D = lazy(() => import('@/components/Interactive3D'));
const Stats = lazy(() => import('@/components/Stats'));
const Doctors = lazy(() => import('@/components/Doctors'));
const Appointment = lazy(() => import('@/components/Appointment'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const Gallery = lazy(() => import('@/components/Gallery'));
const Footer = lazy(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Suspense fallback={<FullPageSkeleton />}>
        <Hero />
        <Features />
        <Interactive3D />
        <Stats />
        <Doctors />
        <Testimonials />
        <Gallery />
        <Appointment />
        <Footer />
      </Suspense>
    </main>
  );
}
