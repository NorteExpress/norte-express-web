"use client";

import { useState, useRef, useEffect } from "react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Autoplay e Interacción
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;

      // Intento de autoplay directo
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            console.log("Autoplay bloqueado. Esperando interacción.");
            setIsPlaying(false);
          });
      }

      const playOnInteraction = () => {
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current.play()
            .then(() => setIsPlaying(true))
            .catch(() => { });
        }
        document.removeEventListener("click", playOnInteraction);
        document.removeEventListener("scroll", playOnInteraction);
      };

      document.addEventListener("click", playOnInteraction, { once: true });
      document.addEventListener("scroll", playOnInteraction, { once: true });

      return () => {
        document.removeEventListener("click", playOnInteraction);
        document.removeEventListener("scroll", playOnInteraction);
      };
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) {
      audioRef.current.volume = newVol;
    }
  };

  return (
    <>
      {/* 🎵 MÚSICA DE FONDO (Oculta, controlada por el reproductor flotante) */}
      <audio ref={audioRef} loop>
        <source src="/musica/Norte Va_ Andean Cumbia RKT Fusion de 10.mp3" type="audio/mpeg" />
      </audio>

      {/* 🎵 REPRODUCTOR DE AUDIO FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-[999] flex items-center gap-4 bg-[#0f1d35]/90 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#f39200]/50 group">
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-12 h-12 bg-[#f39200] text-white rounded-full hover:bg-orange-500 transition-transform hover:scale-105 shadow-[0_0_15px_rgba(243,146,0,0.4)] flex-shrink-0"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          title={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6zm8 0h4v16h-4z" /></svg>
          ) : (
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>
        <div className="hidden sm:flex flex-col gap-1 w-24">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Audio</span>
            {isPlaying && (
              <span className="flex gap-[2px] items-end h-3">
                <span className="w-1 bg-[#f39200] animate-[pulse_0.8s_infinite] h-full"></span>
                <span className="w-1 bg-[#f39200] animate-[pulse_1.2s_infinite] h-2/3"></span>
                <span className="w-1 bg-[#f39200] animate-[pulse_1s_infinite] h-full"></span>
              </span>
            )}
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
            style={{ accentColor: '#f39200' }}
            title="Volumen"
          />
        </div>
      </div>
    </>
  );
}