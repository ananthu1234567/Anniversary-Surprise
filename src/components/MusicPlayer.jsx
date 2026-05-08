import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, SkipBack, Music } from 'lucide-react';

// --- IMPORT YOUR SONGS HERE ---
import song1 from "../assets/music/themetroproposal.mp3"
import song2 from "../assets/music/Kattuchembakam.mp3"
import song3 from "../assets/music/Kangal Edho.mp3"

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  const playlist = [
    { title: "The Metro Proposal", artist: "Dude", src: song1, color: "from-pink-400 to-rose-500" },
    { title: "Kattuchembakam", artist: "Pallichattambi", src: song2, color: "from-indigo-400 to-purple-500" },
    { title: "Kangal Edho", artist: "Chithha", src: song3, color: "from-cyan-400 to-blue-500" }
  ];

  const currentSong = playlist[currentSongIndex];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    if (duration) {
      setProgress((currentTime / duration) * 100);
    }
  };

  const handleProgressClick = (e) => {
    const rect = progressBarRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = pos * audioRef.current.duration;
  };

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  }, [currentSongIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-[280px] p-5 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl text-white mx-auto"
    >
      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={nextSong}
      />

      {/* Mini Header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          key={currentSongIndex}
          whileHover={{ scale: 1.05 }}
          className={`w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br ${currentSong.color} flex items-center justify-center shadow-lg border border-white/10`}
        >
          <Music size={20} className="text-white drop-shadow-sm" />
        </motion.div>
        
        <div className="overflow-hidden">
          <h3 className="font-bold text-sm truncate text-white/90">{currentSong.title}</h3>
          <p className="text-white/50 text-[11px] font-medium truncate uppercase tracking-wider">{currentSong.artist}</p>
        </div>
      </div>

      {/* Progress Section */}
      <div className="px-1 mb-6">
        <div 
          ref={progressBarRef}
          onClick={handleProgressClick}
          className="relative h-1.5 w-full bg-white/20 rounded-full cursor-pointer group"
        >
          {/* Active Progress Bar */}
          <motion.div 
            className="absolute h-full bg-white rounded-full z-10 shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            style={{ width: `${progress}%` }}
          />
          
          {/* Playhead (Visible Knob) */}
          <motion.div 
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full z-20 shadow-[0_0_12px_rgba(255,255,255,0.6)] border-[3px] border-black/10"
            style={{ left: `calc(${progress}% - 8px)` }}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.95 }}
          />
        </div>
        
        <div className="flex justify-between mt-3 text-[10px] text-white/40 font-bold tracking-tighter uppercase">
          <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : "0:00"}</span>
          <span>{audioRef.current ? formatTime(audioRef.current.duration) : "0:00"}</span>
        </div>
      </div>

      {/* Control Bar */}
      <div className="flex items-center justify-between px-1">
        <button onClick={prevSong} className="text-white/40 hover:text-white transition-colors">
          <SkipBack size={18} fill="currentColor" />
        </button>

        <button 
          onClick={togglePlay}
          className="w-12 h-12 flex items-center justify-center bg-white rounded-full text-slate-900 hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-0.5" fill="currentColor" />}
        </button>

        <button onClick={nextSong} className="text-white/40 hover:text-white transition-colors">
          <SkipForward size={18} fill="currentColor" />
        </button>
      </div>
    </motion.div>
  );
};

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default MusicPlayer;