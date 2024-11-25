"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Learn;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var Header_1 = require("../components/Header");
var Footer_1 = require("../components/Footer");
var CoursesList_1 = require("../components/learn/CoursesList");
var ResourceLibrary_1 = require("../components/learn/ResourceLibrary");
var CommunityForums_1 = require("../components/learn/CommunityForums");
function Learn() {
    return (<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900">
      <Header_1.Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-6">
            <framer_motion_1.motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-white text-center mb-8">
              Financial Education
            </framer_motion_1.motion.h1>

            <CoursesList_1.CoursesList />
            <ResourceLibrary_1.ResourceLibrary />
            <CommunityForums_1.CommunityForums />
          </div>
        </section>
      </main>
      <Footer_1.Footer />
    </div>);
}
