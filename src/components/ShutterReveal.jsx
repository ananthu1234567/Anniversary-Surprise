import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShutterReveal = ({ imageUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center py-20 w-full overflow-hidden">
      {/* Refined Heading */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-white/30 text-[10px] uppercase tracking-[1em] mb-16 font-light"
      >
        A Masterpiece made specially for you by nasa
      </motion.p>

      <div 
        className="relative w-full max-w-[800px] aspect-[21/9] cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
      >
        {/* THE REVEALED IMAGE */}
        <div className="absolute inset-0 rounded-xl overflow-hidden border border-white/5 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <motion.div 
            animate={{ 
              scale: isHovered ? 1 : 1.1,
              filter: isHovered ? 'blur(0px) brightness(1.1)' : 'blur(4px) brightness(0.5)'
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src={imageUrl} 
              alt="Name Collage" 
              // Using object-contain ensures the full width of your landscape image is visible
              className="w-full h-full object-contain px-4" 
            />
          </motion.div>
          
          {/* Subtle Golden Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-amber-900/10 pointer-events-none" />
        </div>

        {/* LEFT SHUTTER (Luxury Obsidian & Gold) */}
        <motion.div 
          initial={false}
          animate={{ x: isHovered ? '-105%' : '0%' }} // Slides slightly further to prevent clipping
          transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
          className="absolute top-0 left-0 w-1/2 h-full bg-zinc-900 z-20 border-r border-amber-500/30 shadow-2xl"
        >
          {/* Gold Edge Detail */}
          <div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-50" />
          
          {/* Decorative Texture/Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </motion.div>

        {/* RIGHT SHUTTER */}
        <motion.div 
          initial={false}
          animate={{ x: isHovered ? '105%' : '0%' }}
          transition={{ duration: 1, ease: [0.7, 0, 0.3, 1] }}
          className="absolute top-0 right-0 w-1/2 h-full bg-zinc-900 z-20 border-l border-amber-500/30 shadow-2xl"
        >
          <div className="absolute top-0 left-0 h-full w-[1px] bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-50" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </motion.div>

        {/* CENTER SEAL (Adds Luxury "Boutique" feel) */}
        <motion.div
          animate={{ 
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1,
            rotate: isHovered ? 45 : 0
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
        >
          <div className="w-16 h-16 rounded-full bg-zinc-900 border border-amber-500/50 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.2)]">
            <span className="text-amber-400 font-serif italic text-2xl">A</span>
          </div>
        </motion.div>

        {/* REVEAL TEXT */}
        <motion.div 
          animate={{ opacity: isHovered ? 0 : 1 }}
          className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
        >
          <div className="mt-32">
            <span className="text-amber-200/40 font-serif italic text-sm tracking-[0.5em] uppercase">
              Tap to Unveil
            </span>
          </div>
        </motion.div>
      </div>

      {/* MAGICAL AMBIENCE */}
      <div className={`absolute -z-10 w-[600px] h-[300px] bg-amber-500/5 blur-[120px] transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  );
};

export default ShutterReveal;