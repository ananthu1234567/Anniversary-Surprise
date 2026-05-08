import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const LockScreen = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const secretAnswer = "08052025"; // Your secret code

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === secretAnswer) {
      onUnlock();
    } else {
      // Shaking animation or alert
      alert("Wrong! Hint: first day of our love story (DDMMYYYY)");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#0a0a0a] p-4 overflow-hidden relative">
      
      {/* Background Glow Decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-pink-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-rose-900/20 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 w-full max-w-md text-center"
      >
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <Lock className="text-pink-500 w-8 h-8" />
          </div>
        </div>

        <h1 className="text-4xl font-serif text-white mb-2 leading-tight">
          Private Archive
        </h1>
        <p className="text-gray-500 font-light mb-10 tracking-widest uppercase text-xs">
          Authorized Access Only
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <div className="relative group w-full px-8">
            <input
              type="password" // Changed to password for privacy
              placeholder="Enter the secret code"
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 text-center text-white outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all placeholder:text-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-2/3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium py-3 rounded-full shadow-lg shadow-pink-900/20 hover:shadow-pink-600/40 transition-all uppercase text-sm tracking-widest"
          >
            Unlock Memories
          </motion.button>
        </form>

        <p className="mt-8 text-gray-600 text-[10px] uppercase tracking-tighter">
          Hint: A very special date (DDMMYYYY)
        </p>
      </motion.div>
    </div>
  );
};

export default LockScreen;