import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LockScreen from './components/LockScreen';
import Timeline from './components/Timeline';
import MenuButton from './components/MenuButton';
import MusicPlayer from './components/MusicPlayer';
import MagicalEnvelope from './components/MagicalEnvelope';
import ShutterReveal from './components/ShutterReveal'; // <-- Import here
import collageImg from './assets/NASA.png'; // <-- Your image path


function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); 
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);

  // This is the function that the MenuButton will trigger
  const handleLightsOn = () => {
    setIsDarkMode(false);
    setShowMusicPlayer(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-[1500ms] ease-in-out ${
      isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-[#fff5f5] text-gray-900'
    }`}>
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <motion.div
            key="lock"
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.8 }}
          >
            <LockScreen onUnlock={() => setIsUnlocked(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="relative"
          >
            {/* Background Decorations - Colors change based on theme */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30">
               <div className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse transition-colors duration-1000 ${
                 isDarkMode ? 'bg-pink-900' : 'bg-pink-200'
               }`} />
               <div className={`absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl transition-colors duration-1000 ${
                 isDarkMode ? 'bg-red-900/20' : 'bg-red-100'
               }`} />
            </div>

            {/* --- LUXURY HEADER SECTION --- */}
<header className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
  
  {/* Background Ambiance: Large, soft golden glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-600/10 blur-[120px] rounded-full pointer-events-none" />
  
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="relative z-10 flex flex-col items-center"
  >
    {/* Floating Badge */}
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="mb-6"
    >
      <span className="px-5 py-1 rounded-full border border-amber-500/30 bg-amber-500/5 text-[9px] uppercase tracking-[0.6em] text-amber-200/50 font-light backdrop-blur-md">
        Established 2025
      </span>
    </motion.div>

    {/* Main Heading: Gold Gradient & Shimmer */}
<div className="relative group pb-4 px-2"> {/* Added padding to prevent clipping */}
  <motion.h1
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    /* 
       FIX: Changed 'leading-none' to 'leading-[1.1]' 
       Added 'py-2' to allow space for the italic descenders and shadows
    */
    className="text-7xl md:text-8xl lg:text-9xl font-serif italic tracking-tighter leading-[1.1] py-2 text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-400 to-amber-700 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
  >
    365 Days of Us
  </motion.h1>
  
  {/* Moving Shine Effect */}
  <motion.div 
    animate={{ x: ['-100%', '200%'] }}
    transition={{ duration: 4, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-25deg] pointer-events-none"
  />
</div>

    {/* Subtitle & Ornate Divider */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="mt-10 flex flex-col items-center"
    >
      <div className="flex items-center space-x-8 mb-6">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-amber-500/40" />
        <div className="w-2 h-2 rotate-45 border border-amber-500/60" />
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-amber-500/40" />
      </div>

      <p className="font-serif italic text-2xl md:text-3xl text-white/40 tracking-wide font-light">
        Our First <span className="text-white/90 drop-shadow-sm">Love Anniversary</span>
      </p>

      {/* Elegant Scroll Line */}
      <motion.div
        animate={{ height: [40, 80, 40], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="mt-16 w-[1px] bg-gradient-to-b from-amber-500/60 to-transparent"
      />
    </motion.div>
  </motion.div>

  {/* Background Cinematic Particles */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-amber-400 rounded-full"
        animate={{
          y: [0, -120],
          opacity: [0, 0.6, 0],
          scale: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${80 + Math.random() * 20}%`,
        }}
      />
    ))}
  </div>
</header>

            {/* Timeline Section - CRITICAL: Passing isDarkMode prop */}
            <main className="relative z-10">
              <Timeline isDarkMode={isDarkMode} />
            </main>

            {/* Footer Section */}
            <footer className="relative py-32 text-center border-t border-white/5 bg-gradient-to-t from-pink-900/10 to-transparent">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="space-y-6"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-pink-500 text-4xl"
                >
                  ❤️
                </motion.div>

                {/* The Music Player - Appears after "Lights On" or first interaction */}
      {showMusicPlayer && (
        <div className="mt-12 w-full flex justify-center">
          <MusicPlayer />
          
          
        </div>
        
        
      )}
      {/* The Magical Envelope Section */}
      <section className="w-full flex flex-col items-center">
          <MagicalEnvelope />
        </section>

                <div className="space-y-2">
                  <p className={`font-serif italic text-2xl tracking-wide transition-colors duration-1000 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-800'
                  }`}>
                    Scroll down for more
                  </p>
                  <p className="text-pink-400/60 text-xs tracking-[0.5em] uppercase font-light">
                    A few more surprises left
                  </p>
                </div>

                <div className="pt-8">
                  <p className="text-gray-500 text-[10px] tracking-widest uppercase opacity-50">
                    Est. 2025 — Forever Together
                  </p>
                </div>

                {/* CRITICAL: Passing handleLightsOn as a prop to MenuButton */}
                <MenuButton onLightsOn={handleLightsOn} />
                
{/* 2. The Separate Shutter Component */}
<ShutterReveal imageUrl={collageImg} />


                
              </motion.div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;