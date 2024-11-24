import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Play, Award } from 'lucide-react';

const courses = [
  {
    title: "Investment Fundamentals",
    description: "Learn the basics of investing and portfolio management",
    duration: "4 hours",
    level: "Beginner",
    modules: 8
  },
  {
    title: "Technical Analysis",
    description: "Master chart patterns and technical indicators",
    duration: "6 hours",
    level: "Intermediate",
    modules: 12
  },
  {
    title: "AI in Finance",
    description: "Understanding AI's role in modern finance",
    duration: "3 hours",
    level: "Advanced",
    modules: 6
  }
];

export function CoursesList() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">Featured Courses</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <BookOpen className="h-6 w-6 text-cyan-400" />
              <span className="text-sm text-cyan-400 px-2 py-1 bg-cyan-400/10 rounded-full">
                {course.level}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-white mb-2">
              {course.title}
            </h3>
            <p className="text-slate-400 mb-4">{course.description}</p>
            
            <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
              <span>{course.duration}</span>
              <span>{course.modules} modules</span>
            </div>
            
            <button className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 text-white py-2 rounded-lg hover:from-cyan-400 hover:to-indigo-400 transition-colors flex items-center justify-center">
              <Play className="h-4 w-4 mr-2" />
              Start Learning
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}