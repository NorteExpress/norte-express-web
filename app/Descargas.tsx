import Image from "next/image";

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
                            <Image src="/images/Norte Delivery.png" alt="App N.O.R.T.E. Delivery" fill sizes="(max-width: 768px) 192px, 256px" className="object-contain" />
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow relative z-10">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-[#f39200]/20 text-[#f39200] text-xs font-bold uppercase tracking-widest border border-[#f39200]/30 mb-4">App de Clientes</span>
                            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">N.O.R.T.E. Delivery</h3>
                            <p className="text-gray-300 mb-8 text-lg leading-relaxed">Pedí lo que necesites, rastrealo en tiempo real y disfrutá de la logística más rápida del Norte Argentino directo desde tu celular.</p>
                            <button className="w-full sm:w-auto bg-[#f39200] hover:bg-orange-500 text-white rounded-xl py-4 px-8 font-bold flex items-center justify-center gap-3 transition-transform hover:scale-105 shadow-lg shadow-orange-500/30 text-lg">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                Descarga Directa (APK)
                            </button>
                        </div>
                    </div>

                    {/* Tarjeta App Comercio */}
                    <div className="group relative bg-gradient-to-br from-[#1c355c]/30 to-[#132540]/80 backdrop-blur-2xl border border-white/10 hover:border-white/30 rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[#f39200]/0 group-hover:bg-[#f39200]/5 transition-colors duration-500 pointer-events-none"></div>
                        <div className="relative w-48 h-32 min-h-[8rem] mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
                            <Image src="/images/norte comercio.png" alt="App N.O.R.T.E. Comercios" fill sizes="192px" className="object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Para tu Negocio</h3>
                        <p className="text-gray-400 mb-8 flex-grow">Gestioná tus pedidos, visualizá reportes en tiempo real y solicitá cadetes con un solo toque.</p>
                        <button className="w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl py-3 px-4 font-bold flex items-center justify-center gap-2 transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Descarga Directa (APK)
                        </button>
                    </div>

                    {/* Tarjeta App Cadete */}
                    <div className="group relative bg-gradient-to-br from-[#1c355c]/30 to-[#132540]/80 backdrop-blur-2xl border border-white/10 hover:border-white/30 rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col items-center text-center overflow-hidden">
                        <div className="absolute inset-0 bg-[#f39200]/0 group-hover:bg-[#f39200]/5 transition-colors duration-500 pointer-events-none"></div>
                        <div className="relative w-48 h-32 min-h-[8rem] mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]">
                            <Image src="/images/Norte Cadete.png" alt="App N.O.R.T.E. Cadetes" fill sizes="192px" className="object-contain" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Para vos (Rider)</h3>
                        <p className="text-gray-400 mb-8 flex-grow">Recibí alertas de viajes cercanos, trazá las mejores rutas y controlá tus ganancias diarias.</p>
                        <button className="w-full bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-xl py-3 px-4 font-bold flex items-center justify-center gap-2 transition-colors">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            Descarga Directa (APK)
                        </button>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <span className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-sm italic">
                        * Archivos APK de instalación directa. Próximamente en tiendas oficiales.
                    </span>
                </div>
            </div>
        </section>
    );
}