"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TripleEntrada from "./TripleEntrada";
import QuienesSomos from "./QuienesSomos";
import Descargas from "./Descargas";
import SocialProof from "./SocialProof";
import Footer from "./Footer";

export default function PremiumLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
  const [showManifesto, setShowManifesto] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
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
  }, []);

  // Rotación de fondos premium cinematográfica
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % 4); // Alterna entre 4 recursos
    }, 8000); // Cambia de paisaje cada 8 segundos
    return () => clearInterval(interval);
  }, []);

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
    <main className="relative min-h-screen bg-[#1c355c] overflow-x-hidden font-sans selection:bg-[#f39200] selection:text-white">
      {/* 🏔️ FONDOS Y PATRONES */}
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none overflow-hidden">
        {/* 🎬 CARRUSEL DE FONDOS PREMIUM (Mix Videos/Imágenes) */}

        <Image
          src="/images/salta1.jpg"
          alt="Paisaje Salta 1"
          fill
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-[2500ms] ease-in-out ${bgIndex === 0 ? 'opacity-30' : 'opacity-0'}`}
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[2500ms] ease-in-out ${bgIndex === 1 ? 'opacity-40' : 'opacity-0'}`}
        >
          <source src="/Videos/Salta1.webm" type="video/webm" />
        </video>

        <Image
          src="/images/Salta2.jpg"
          alt="Paisaje Salta 2"
          fill
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-[2500ms] ease-in-out ${bgIndex === 2 ? 'opacity-30' : 'opacity-0'}`}
        />

        <Image
          src="/images/Salta3.jpg"
          alt="Paisaje Salta 3"
          fill
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-[2500ms] ease-in-out ${bgIndex === 3 ? 'opacity-30' : 'opacity-0'}`}
        />

        {/* 🎵 MÚSICA DE FONDO (Oculta, controlada por el reproductor flotante) */}
        <audio ref={audioRef} loop>
          <source src="/musica/Norte Va_ Andean Cumbia RKT Fusion de 10.mp3" type="audio/mpeg" />
        </audio>

        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#f39200]/10 blur-[150px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#2a528a]/30 blur-[150px] rounded-full"></div>

        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
          <Image
            src="/images/Logo Norte.png"
            alt="Patrón Montañas Salta"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1c355c]/50 to-[#1c355c]"></div>
      </div>

      <Navbar />
      <Hero />
      <TripleEntrada />
      <QuienesSomos onOpenManifesto={() => setShowManifesto(true)} />
      <Descargas />
      <SocialProof />
      <Footer />

      {/* 📄 MODAL DEL MANIFIESTO (VISOR PDF INTEGRADO) */}
      {showManifesto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070e1a]/90 backdrop-blur-sm p-4 md:p-10 transition-opacity duration-300">
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#1c355c] rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
            {/* Header del Modal */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-[#0f1d35]">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <svg className="w-6 h-6 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Manifiesto N.O.R.T.E. Express
              </h3>
              <button
                onClick={() => setShowManifesto(false)}
                className="p-2 text-gray-400 hover:text-[#f39200] hover:bg-white/10 rounded-full transition-colors"
                title="Cerrar presentación"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            {/* Visor PDF (Escondemos la barra de herramientas del PDF para que parezca una presentación pura) */}
            <div className="flex-1 w-full bg-[#1c355c]">
              <iframe
                src="/manifiesto/Manifiesto%20N.O.R.T.E.%20Express.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-full border-none"
                title="Presentación Manifiesto N.O.R.T.E."
              />
            </div>
          </div>
        </div>
      )}

      {/* 🎵 REPRODUCTOR DE AUDIO FLOTANTE */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-[#0f1d35]/90 backdrop-blur-xl border border-white/10 p-2 pr-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-[#f39200]/50 group">
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
    </main>
  );
}
