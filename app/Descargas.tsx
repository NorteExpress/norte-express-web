import Image from "next/image";
import Link from "next/link";

export default function Descargas() {
    return (
        <section className="relative z-20 py-32 px-6 bg-[#0c182b] border-t border-white/5 overflow-hidden" id="descargas">
            {/* Luces decorativas */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-[#f39200]/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                        Llevá N.O.R.T.E. en tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f39200] to-orange-400">bolsillo</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto">
                        Descargá nuestras aplicaciones móviles diseñadas a medida para optimizar tu tiempo y potenciar tus ingresos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Tarjeta App Cliente (DESTACADA) */}
                    <div className="md:col-span-2 group relative bg-gradient-to-br from-[#f39200]/10 to-[#132540]/80 backdrop-blur-2xl border border-[#f39200]/30 hover:border-[#f39200]/60 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(243,146,0,0.3)] flex flex-col md:flex-row items-center gap-8 md:gap-12 overflow-hidden">
                        <div className="absolute inset-0 bg-[#f39200]/0 group-hover:bg-[#f39200]/5 transition-colors duration-500 pointer-events-none"></div>
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 min-h-[12rem] sm:min-h-[16rem] flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]">
                            <Image src="/images/Norte Delivery.png" alt="App N.O.R.T.E. Delivery" fill sizes="(max-width: 768px) 192px, 256px" className="object-contain" priority />
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow relative z-10">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f39200]/20 text-[#f39200] text-xs font-bold uppercase tracking-widest border border-[#f39200]/30 mb-4">App de Clientes</span>
                            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">N.O.R.T.E. Delivery</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-4">Pedí lo que necesites, rastrealo en tiempo real y disfrutá de la logística más rápida del Norte Argentino directo desde tu celular.</p>
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f39200] bg-[#f39200]/10 border border-[#f39200]/20 px-3.5 py-1.5 rounded-full mt-2">
                                <span className="w-2 h-2 rounded-full bg-[#f39200] animate-pulse"></span>
                                Próximamente en Google Play Store
                            </span>
                        </div>
                    </div>

                    {/* Tarjeta App Comercio */}
                    <div className="group relative bg-gradient-to-br from-[#1c355c]/30 to-[#132540]/80 backdrop-blur-2xl border border-white/10 hover:border-white/30 rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[#f39200]/0 group-hover:bg-[#f39200]/5 transition-colors duration-500 pointer-events-none"></div>
                        <div className="relative w-48 h-32 min-h-[8rem] mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
                            <Image src="/images/norte comercio.png" alt="App N.O.R.T.E. Comercios" fill sizes="192px" className="object-contain" />
                        </div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">App de Comercio</span>
                        <h3 className="text-2xl font-bold text-white mb-4">Para tu Negocio</h3>
                        <p className="text-gray-400 leading-relaxed mb-2">Gestioná tus pedidos, visualizá reportes en tiempo real y solicitá cadetes con un solo toque.</p>
                    </div>

                    {/* Tarjeta App Cadete */}
                    <div className="group relative bg-gradient-to-br from-[#1c355c]/30 to-[#132540]/80 backdrop-blur-2xl border border-white/10 hover:border-white/30 rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[#f39200]/0 group-hover:bg-[#f39200]/5 transition-colors duration-500 pointer-events-none"></div>
                        <div className="relative w-48 h-32 min-h-[8rem] mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
                            <Image src="/images/Norte Cadete.png" alt="App N.O.R.T.E. Cadetes" fill sizes="192px" className="object-contain" />
                        </div>
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-gray-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">App de Cadete</span>
                        <h3 className="text-2xl font-bold text-white mb-4">Para vos (Rider)</h3>
                        <p className="text-gray-400 leading-relaxed mb-2">Recibí alertas de viajes cercanos, trazá las mejores rutas y controlá tus ganancias diarias.</p>
                    </div>
                </div>

                <div className="mt-20 flex flex-col items-center">
                    <Link
                        href="/descargar"
                        className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#f39200] via-[#ffa827] to-[#f39200] bg-[length:200%_auto] hover:bg-[position:right_center] rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(243,146,0,0.5)] overflow-hidden shadow-lg shadow-orange-500/20 border border-white/10 transform-gpu"
                    >
                        {/* Sliding sheen shine */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                        
                        <svg className="w-6 h-6 mr-3 text-white transition-transform group-hover:translate-x-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                        <span className="relative z-10">Acceder al Centro de Descargas</span>
                    </Link>
                    <p className="mt-4 text-sm text-gray-500 italic">
                        * Accedé a los enlaces oficiales de descarga y guías de instalación.
                    </p>
                </div>
            </div>
        </section>
    );
}