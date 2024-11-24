import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX, Quote } from 'lucide-react';

const quotes = [
  {
    author: "Warren Buffett",
    role: "CEO of Berkshire Hathaway",
    quote: "The most important investment you can make is in yourself.",
    video: "https://player.vimeo.com/video/123456789?background=1&autoplay=1&loop=1&byline=0&title=0",
    image: "https://images.unsplash.com/photo-1554244933-d876deb6b2ff?auto=format&fit=crop&w=800&q=80"
  },
  {
    author: "Jay-Z",
    role: "Entrepreneur & Artist",
    quote: "I'm not a businessman. I'm a business, man.",
    video: "https://player.vimeo.com/video/987654321?background=1&autoplay=1&loop=1&byline=0&title=0",
    image: "https://images.unsplash.com/photo-1588453251771-cd919b362ed4?auto=format&fit=crop&w=800&q=80"
  },
  {
    author: "Ray Dalio",
    role: "Founder of Bridgewater Associates",
    quote: "Pain + Reflection = Progress",
    video: "https://player.vimeo.com/video/456789123?background=1&autoplay=1&loop=1&byline=0&title=0",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
  }
];

export function InspirationVideos() {
  const [activeQuote, setActiveQuote] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Wisdom from the Masters
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-xl blur-xl group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  {/* Video Background */}
                  <div className="absolute inset-0">
                    <img
                      src={quote.image}
                      alt={quote.author}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  </div>
                  
                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveQuote(activeQuote === index ? null : index)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </motion.button>

                  {/* Quote */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-start space-x-2">
                      <Quote className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-white font-medium mb-1">{quote.quote}</p>
                        <p className="text-sm text-slate-400">{quote.author}</p>
                        <p className="text-xs text-slate-500">{quote.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sound Control */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMuted(!isMuted)}
          className="fixed bottom-6 left-6 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white/80 hover:text-white transition-colors"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </motion.button>
      </div>
    </section>
  );
}