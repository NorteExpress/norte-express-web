"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import TripleEntrada from "./TripleEntrada";
import QuienesSomos from "./QuienesSomos";
import Descargas from "./Descargas";
import SocialProof from "./SocialProof";
import Footer from "./Footer";

export default function PremiumLanding() {
  const [showManifesto, setShowManifesto] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  // Rotación de fondos premium cinematográfica
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % 4); // Alterna entre 4 recursos
    }, 8000); // Cambia de paisaje cada 8 segundos
    return () => clearInterval(interval);
  }, []);

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
    </main>
  );
}