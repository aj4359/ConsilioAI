"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoVideo = DemoVideo;
var react_1 = require("react");
var framer_motion_1 = require("framer-motion");
var lucide_react_1 = require("lucide-react");
function DemoVideo() {
    var _a = react_1.default.useState(true), isMuted = _a[0], setIsMuted = _a[1];
    var videoRef = react_1.default.useRef(null);
    var toggleMute = function () {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };
    return (<section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <framer_motion_1.motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 mb-4">
            Experience the Future of Finance
          </framer_motion_1.motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Watch how our AI-powered financial assistant transforms your financial journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <framer_motion_1.motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-800">
            <div className="aspect-video relative">
              <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted={isMuted} playsInline poster="/video-thumbnail.jpg">
                <source src="/demo-video.mp4" type="video/mp4"/>
                <track kind="captions" src="/demo-captions.vtt" srcLang="en" label="English" default/>
              </video>

              {/* Video Controls */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <framer_motion_1.motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={toggleMute} className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
                  {isMuted ? (<lucide_react_1.VolumeX className="h-5 w-5"/>) : (<lucide_react_1.Volume2 className="h-5 w-5"/>)}
                </framer_motion_1.motion.button>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="bg-slate-800/90 backdrop-blur-sm p-6">
              <div className="grid md:grid-cols-3 gap-6">
                {[
            "AI-Powered Analysis",
            "Real-time Insights",
            "Smart Portfolio Management",
        ].map(function (feature, index) { return (<framer_motion_1.motion.div key={feature} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-slate-700/50 p-4 rounded-xl text-center">
                    <p className="text-white">{feature}</p>
                  </framer_motion_1.motion.div>); })}
              </div>
            </div>
          </framer_motion_1.motion.div>
        </div>
      </div>
    </section>);
}
