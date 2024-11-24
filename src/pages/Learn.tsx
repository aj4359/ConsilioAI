import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CoursesList } from '../components/learn/CoursesList';
import { ResourceLibrary } from '../components/learn/ResourceLibrary';
import { CommunityForums } from '../components/learn/CommunityForums';

export default function Learn() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-white text-center mb-8"
            >
              Financial Education
            </motion.h1>

            <CoursesList />
            <ResourceLibrary />
            <CommunityForums />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}