import Image from "next/image";

interface Props {
    onOpenManifesto: () => void;
}

export default function QuienesSomos({ onOpenManifesto }: Props) {
    return (
        <section className="relative z-20 py-32 bg-[#0f1d35] border-t border-white/5 overflow-hidden" id="nosotros">
            {/* Luces de fondo decorativas para efecto Premium */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#f39200]/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-3/4 h-96 bg-[#1c355c]/50 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-stretch">
                    <div className="flex-1 text-center lg:text-left relative flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8 drop-shadow-lg">
                            Tecnología global.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f39200] via-orange-400 to-[#f39200]">
                                Corazón cien por ciento salteño.
                            </span>
                        </h2>

                        {/* Feature Image Block */}
                        <div className="relative w-full max-w-lg mx-auto lg:mx-0 h-56 md:h-72 rounded-3xl overflow-hidden mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
                            <Image 
                                src="/images/Tecnologia Global2.jpg" 
                                alt="Tecnología Global en Salta" 
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#1c355c]/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-5 left-6">
                                <span className="bg-[#f39200] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(243,146,0,0.5)] border border-white/20">
                                    Innovación & Desarrollo
                                </span>
                            </div>
                        </div>

                        <div className="inline-block border-l-4 border-[#f39200] pl-8 py-3 mb-8 relative">
                            <div className="absolute -left-[4px] top-0 w-1 h-full bg-[#f39200] shadow-[0_0_15px_#f39200]"></div>
                            <p className="text-2xl md:text-3xl text-gray-300 font-light italic leading-snug">
                                "No movemos paquetes;<br />aceleramos el motor económico de nuestra provincia."
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 relative group w-full">
                        <div className="absolute -inset-1 bg-gradient-to-br from-[#f39200]/30 to-transparent rounded-[2.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-700"></div>
                        <div className="relative h-full flex flex-col justify-between space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light bg-[#132540]/90 backdrop-blur-2xl p-10 md:p-14 rounded-[2rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div>
                                <p className="mb-6">
                                    <strong className="text-white font-bold tracking-wide drop-shadow-md">N.O.R.T.E. Transporte Express</strong> nació para romper un estándar: demostrar que la logística de ultra-tecnología no es exclusividad de las corporaciones extranjeras. Hemos desarrollado una plataforma de nivel mundial pensada, diseñada y ejecutada desde Salta.
                                </p>
                                <p className="mb-6">
                                    Conectamos la precisión del software de última generación con el empuje inquebrantable del comercio local. Entendemos los ritmos de nuestra ciudad, cada calle y cada necesidad, porque somos de aquí.
                                </p>
                                <p>
                                    No venimos a intermediar; venimos a potenciar. Creamos un ecosistema justo donde el cliente disfruta de una experiencia instantánea y fluida, el rider encuentra un respaldo real y un trato digno, y el comercio de barrio obtiene las herramientas digitales de las grandes cadenas para competir y ganar.
                                </p>
                            </div>
                            <div className="pt-10 mt-10 border-t border-white/10 text-center lg:text-left">
                                <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-[#f39200] font-semibold italic text-2xl md:text-3xl tracking-wide drop-shadow-md mb-8">
                                    "La velocidad que el mundo moderno exige, con el apretón de manos en el que Salta confía."
                                </p>
                                <button
                                    onClick={onOpenManifesto}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#1c355c] hover:bg-[#2a528a] border border-white/10 hover:border-[#f39200]/50 rounded-full text-sm font-bold text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(243,146,0,0.3)] group"
                                >
                                    <svg className="w-5 h-5 text-[#f39200] group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    Ver Manifiesto Completo (Presentación)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}