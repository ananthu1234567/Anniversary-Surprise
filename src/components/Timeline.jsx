import React from 'react';
import { motion } from 'framer-motion';
import { MEMORIES } from '../data/memories.js';

const Timeline = ({ isDarkMode }) => { // 1. Accept isDarkMode as a prop
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="relative">
        {/* The Vertical Line: Changes color based on theme */}
        <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-0.5 transition-colors duration-1000 ${
          isDarkMode ? 'bg-zinc-800' : 'bg-pink-200'
        }`}></div>

        {MEMORIES.map((memory, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={memory.id} className="relative mb-24">
              {/* The Dot: Changes border color to match card background */}
              <div className={`absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 bg-pink-400 rounded-full border-4 z-10 shadow-sm transition-colors duration-1000 ${
                isDarkMode ? 'border-[#0a0a0a]' : 'border-[#fff5f5]'
              }`} />

              <div className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-1/2 pl-12 md:pl-0"
                >
                  {/* The Card: Dynamic Background, Text, and Border colors */}
                  <div className={`p-6 rounded-2xl shadow-2xl border transition-all duration-1000 
                    ${isDarkMode 
                      ? 'bg-[#161616] border-white/5 text-white' 
                      : 'bg-white border-pink-100 text-gray-800'
                    } ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                    
                    {/* Date Tag */}
                    <span className={`inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest rounded-full uppercase transition-colors duration-1000 ${
                      isDarkMode ? 'text-pink-400 bg-pink-400/10' : 'text-pink-500 bg-pink-50'
                    }`}>
                      {memory.date}
                    </span>

                    {/* Image Container */}
                    <div className={`overflow-hidden rounded-xl mb-4 aspect-video transition-colors duration-1000 ${
                      isDarkMode ? 'bg-zinc-800' : 'bg-gray-100'
                    }`}>
                      <img 
                        src={memory.image} 
                        alt={memory.title} 
                        className={`w-full h-full object-cover transform hover:scale-110 transition-all duration-500 ${
                          isDarkMode ? 'opacity-80 hover:opacity-100' : 'opacity-100'
                        }`} 
                      />
                    </div>

                    {/* Text content: Heading and Description */}
                    <h3 className={`text-2xl font-serif transition-colors duration-1000 ${
                      isDarkMode ? 'text-white/90' : 'text-gray-800'
                    }`}>
                      {memory.title}
                    </h3>
                    <p className={`mt-2 font-light italic leading-relaxed transition-colors duration-1000 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      "{memory.description}"
                    </p>
                  </div>
                </motion.div>

                <div className="hidden md:block md:w-1/2"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;