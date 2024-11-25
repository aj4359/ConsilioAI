"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesList = CoursesList;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
var courses = [
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
function CoursesList() {
    return (<section className="mb-16">
      <h2 className="text-2xl font-bold text-white mb-8">Featured Courses</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(function (course, index) { return (<framer_motion_1.motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-800/70 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <lucide_react_1.BookOpen className="h-6 w-6 text-cyan-400"/>
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
              <lucide_react_1.Play className="h-4 w-4 mr-2"/>
              Start Learning
            </button>
          </framer_motion_1.motion.div>); })}
      </div>
    </section>);
}
