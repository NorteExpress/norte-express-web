"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SocialProof() {
    // Números base realistas
    const [comercios, setComercios] = useState(512);
    const [envios, setEnvios] = useState(5000);
    const [riders, setRiders] = useState(95);

    // Efecto de simulación en tiempo real
    useEffect(() => {
        const intervalEnvios = setInterval(() => {
            if (Math.random() > 0.3) {
                setEnvios(prev => prev + 1);
            }
        }, 3500);

        const intervalComercios = setInterval(() => {
            if (Math.random() > 0.7) {
                setComercios(prev => prev + 1);
            }
        }, 30000);

        const intervalRiders = setInterval(() => {
            setRiders(prev => {
                if (Math.random() > 0.5) {
                    const cambio = Math.random() > 0.5 ? 1 : -1;
                    const nuevoValor = prev + cambio;
                    if (nuevoValor < 80) return 80;
                    if (nuevoValor > 120) return 120;
                    return nuevoValor;
                }
                return prev;
            });
        }, 4000);

        return () => {
            clearInterval(intervalEnvios);
            clearInterval(intervalComercios);
            clearInterval(intervalRiders);
        };
    }, []);

    return (
        <section className="relative z-20 py-24 bg-[#0c182b] border-t border-white/5 overflow-hidden" id="estadisticas">

            {/* 🏔️ FONDO PATRÓN REGIONAL (Visible y Elegante) */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <Image
                    src="/images/guarda-norte-salta.png"
                    alt="Identidad Salteña"
                    fill
                    className="object-cover opacity-50"
                />
                {/* Velo oscuro para que el texto blanco resalte perfectamente */}
                <div className="absolute inset-0 bg-[#0c182b]/70"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight drop-shadow-lg">
                    Orgullo <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f39200] to-orange-400">Salteño</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center justify-center p-8 bg-[#132540]/60 backdrop-blur-md rounded-[2rem] border border-white/10 hover:border-[#f39200]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        <span className="text-4xl md:text-6xl font-black text-white mb-3 drop-shadow-lg tabular-nums">+{comercios}</span>
                        <span className="text-[#f39200] uppercase tracking-widest text-[10px] sm:text-xs font-bold drop-shadow-md">Comercios Adheridos</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 bg-[#132540]/60 backdrop-blur-md rounded-[2rem] border border-white/10 hover:border-[#f39200]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        <span className="text-4xl md:text-6xl font-black text-white mb-3 drop-shadow-lg tabular-nums">+{envios.toLocaleString('es-AR')}</span>
                        <span className="text-[#f39200] uppercase tracking-widest text-[10px] sm:text-xs font-bold drop-shadow-md">Envíos Exitosos</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 bg-[#132540]/60 backdrop-blur-md rounded-[2rem] border border-white/10 hover:border-[#f39200]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        <span className="text-4xl md:text-6xl font-black text-white mb-3 drop-shadow-lg tabular-nums">+{riders}</span>
                        <span className="text-[#f39200] uppercase tracking-widest text-[10px] sm:text-xs font-bold drop-shadow-md">Riders Activos</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-8 bg-[#132540]/60 backdrop-blur-md rounded-[2rem] border border-white/10 hover:border-[#f39200]/50 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        <span className="text-4xl md:text-6xl font-black text-[#f39200] mb-3 drop-shadow-lg">100%</span>
                        <span className="text-white uppercase tracking-widest text-[10px] sm:text-xs font-bold drop-shadow-md">Compromiso Local</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
