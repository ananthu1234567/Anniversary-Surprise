import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Lightbulb, Sparkles, Check, X } from 'lucide-react';
import confetti from 'canvas-confetti';

// 1. IMPORT the video file here
import reelVideo from '../assets/timeline/reel.mp4'; 

const MenuButton = ({ onLightsOn }) => {
  const [step, setStep] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleNextStep = () => {
    if (step === 0) {
      if (onLightsOn) onLightsOn(); 
    } else if (step === 1) {
      setShowVideo(true);
    } else if (step === 2) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff69b4', '#ffffff', '#ffd700']
      });
    }
    
    if (step < 3) setStep(step + 1);
  };

  const steps = [
    { label: "Turn Lights On", icon: <Lightbulb size={20} />, color: "bg-yellow-500 shadow-yellow-500/40" },
    { label: "Watch Our Moment", icon: <Play size={20} />, color: "bg-pink-500 shadow-pink-500/40" },
    { label: "Start Celebration", icon: <Sparkles size={20} />, color: "bg-purple-600 shadow-purple-500/40" },
    { label: "Happy Anniversary!", icon: <Check size={20} />, color: "bg-green-500 shadow-green-500/40" }
  ];

  const current = steps[step];

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      
      {/* --- VIDEO MODAL --- */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              // Changed to portrait ratio (9:16) and restricted height
              className="relative h-[85vh] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all"
              >
                <X size={20} />
              </button>

              <video 
                ref={videoRef}
                className="w-full h-full object-contain" // ensures portrait fits without cropping
                controls
                autoPlay
                playsInline // important for mobile playback
                src={reelVideo} // 2. Using the imported variable
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN BUTTON --- */}
      <AnimatePresence mode="wait">
        <motion.button
          key={step}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -10 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleNextStep}
          className={`flex items-center space-x-3 px-8 py-4 rounded-full text-white shadow-xl transition-all duration-500 ${current.color}`}
        >
          <span className={step < 3 ? "animate-pulse" : ""}>{current.icon}</span>
          <span className="font-bold tracking-widest uppercase text-xs">
            {current.label}
          </span>
        </motion.button>
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="flex space-x-2 mt-6">
        {steps.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-700 ${
              step === i ? 'w-8 bg-pink-500' : 'w-2 bg-zinc-700'
            } ${i < step ? 'bg-pink-300' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuButton;