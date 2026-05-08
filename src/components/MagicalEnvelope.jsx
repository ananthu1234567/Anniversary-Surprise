import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MagicalEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation Variants
  const flapVariants = {
    closed: { rotateX: 0, zIndex: 5, transition: { duration: 0.4 } },
    opened: { 
      rotateX: 160, 
      zIndex: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const letterVariants = {
    closed: { y: 20, opacity: 0, scale: 0.9 },
    opened: { 
      y: -140, 
      opacity: 1, 
      scale: 1,
      transition: { delay: 0.5, duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] perspective-2000">
      <div 
        className="relative group"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* ENVELOPE SHADOW/GLOW */}
        <div className={`absolute inset-0 bg-rose-500/20 blur-[60px] transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />

        <div className="relative w-80 h-52 transition-transform duration-500 hover:scale-105">
          
          {/* THE LETTER (Luxury Glass) */}
          <motion.div
            variants={letterVariants}
            animate={isOpen ? "opened" : "closed"}
            className="absolute inset-x-3 top-2 h-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center z-[1] overflow-hidden"
          >
            {/* Elegant Letter Content */}
            <div className="text-center px-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="font-serif text-4xl text-white tracking-tight italic bg-gradient-to-b from-white to-rose-200 bg-clip-text text-transparent">
                  To my forever
                </h2>
                <div className="h-px w-12 bg-rose-400/50 mx-auto my-4" />
                <p className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-light">
                "In a world of constant change, you are my beautiful constant. 365 days haven't just passed; they have been discovered, one heartbeat at a time, with you."
                <div>Forever and Always</div>
                <div>Ram 🤍</div>
                </p>
              </motion.div>
            </div>
            
            {/* Glass Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </motion.div>

          {/* ENVELOPE BODY (Obsidian Base) */}
          <div className="absolute inset-0 bg-zinc-900 rounded-2xl shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)] border border-white/5 overflow-hidden">
            {/* Diagonal Design Lines */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            {/* Internal Shadow for depth */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]" />
          </div>

          {/* FRONT FLAPS (Constructed with skewed divs for a premium feel) */}
          <div className="absolute inset-0 z-10 pointer-events-none">
             {/* Left Skew */}
             <div className="absolute bottom-0 left-0 w-1/2 h-full bg-zinc-800 shadow-2xl origin-bottom-left" 
                  style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
             {/* Right Skew */}
             <div className="absolute bottom-0 right-0 w-1/2 h-full bg-zinc-800 shadow-2xl origin-bottom-right" 
                  style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />
          </div>

          {/* TOP FLAP (The obsidian lid) */}
          <motion.div
            variants={flapVariants}
            initial="closed"
            animate={isOpen ? "opened" : "closed"}
            className="absolute top-0 left-0 w-full h-1/2 bg-zinc-800 z-30 origin-top shadow-xl"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          >
            {/* Gold Seal / Button */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-600 shadow-[0_0_15px_rgba(251,191,36,0.4)] flex items-center justify-center border border-amber-200/50">
              <div className="w-6 h-6 rounded-full border border-amber-900/20 flex items-center justify-center">
                <span className="text-[10px] text-amber-900 font-bold tracking-tighter">❤</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* HINT TEXT */}
        <motion.div 
          animate={{ y: isOpen ? 20 : 0, opacity: isOpen ? 0 : 1 }}
          className="text-center mt-12 space-y-2"
        >
          <p className="text-white/20 text-[9px] uppercase tracking-[0.6em] font-medium">
            Personal Correspondence
          </p>
          <div className="h-px w-8 bg-white/10 mx-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default MagicalEnvelope;