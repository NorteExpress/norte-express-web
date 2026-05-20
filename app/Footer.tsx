import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative z-20 bg-[#070e1a] pt-20 pb-10 border-t border-[#f39200]/20" id="contacto">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
                    {/* Columna 1: Marca */}
                    <div className="flex flex-col">
                        <div className="relative h-16 w-48 min-h-[64px] mb-6 opacity-100 drop-shadow-[0_0_15px_rgba(243,146,0,0.2)]">
                            <Image
                                src="/images/Logo Norte.png"
                                alt="N.O.R.T.E. Transporte Express"
                                fill
                                sizes="192px"
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Conectando Salta con tecnología, velocidad y confianza. La infraestructura logística del futuro, diseñada para potenciar tu tiempo hoy.
                        </p>
                    </div>

                    {/* Columna 2: Navegación */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#f39200] rounded-full"></span> Explorar
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#servicios" className="hover:text-[#f39200] hover:translate-x-1 inline-block transition-all duration-300">Ecosistema y Servicios</Link></li>
                            <li><Link href="#nosotros" className="hover:text-[#f39200] hover:translate-x-1 inline-block transition-all duration-300">Manifiesto Salteño</Link></li>
                            <li><Link href="/privacidad" className="hover:text-[#f39200] hover:translate-x-1 inline-block transition-all duration-300">Políticas de Privacidad</Link></li>
                            <li><Link href="/terminos-y-condiciones" className="hover:text-[#f39200] hover:translate-x-1 inline-block transition-all duration-300">Términos y Condiciones</Link></li>
                            <li><Link href="#contacto" className="hover:text-[#f39200] hover:translate-x-1 inline-block transition-all duration-300">Soporte y Contacto</Link></li>
                        </ul>
                    </div>

                    {/* Columna 3: Contacto */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#f39200] rounded-full"></span> Contacto Central
                        </h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3 group">
                                <div className="mt-0.5 w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#f39200]/50 group-hover:bg-[#f39200]/10 transition-colors shrink-0">
                                    <svg className="w-3.5 h-3.5 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="group-hover:text-white transition-colors">info@norteexpress.com.ar</span>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="mt-0.5 w-6 h-6 rounded-md bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#f39200]/50 group-hover:bg-[#f39200]/10 transition-colors shrink-0">
                                    <svg className="w-3.5 h-3.5 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span className="group-hover:text-white transition-colors">Provincia de Salta, Argentina</span>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Hub de Descargas */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#f39200] rounded-full animate-pulse"></span> App Oficial
                        </h4>
                        <p className="text-gray-400 text-xs mb-5 leading-relaxed">
                            Accedé a nuestras aplicaciones móviles para Android mediante descarga directa.
                        </p>
                        <div className="flex flex-col gap-3">
                            <Link href="/descargar" className="group flex items-center justify-between bg-gradient-to-r from-[#1c355c]/60 to-transparent border border-white/10 hover:border-[#f39200]/50 hover:from-[#f39200]/10 rounded-xl px-4 py-3 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#f39200] p-1.5 flex items-center justify-center shadow-[0_0_15px_rgba(243,146,0,0.3)] group-hover:scale-110 transition-transform">
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    </div>
                                    <span className="text-white font-bold text-sm">Hub de Descargas</span>
                                </div>
                                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#f39200] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* BANNER: Oportunidades Laborales (Destacado) */}
                <div className="mb-10 bg-gradient-to-r from-[#1c355c]/40 via-[#0f1d35] to-[#1c355c]/40 border border-white/10 hover:border-[#f39200]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group transition-colors duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f39200]/0 via-[#f39200]/5 to-[#f39200]/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                    <div className="flex items-center gap-5 relative z-10 w-full md:w-auto">
                        <div className="w-14 h-14 bg-[#f39200]/10 rounded-xl flex items-center justify-center border border-[#f39200]/30 shrink-0 group-hover:bg-[#f39200]/20 transition-colors">
                            <svg className="w-7 h-7 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg md:text-xl mb-1 tracking-tight">Oportunidades Laborales</h4>
                            <p className="text-gray-400 text-sm">Muy pronto abriremos nuestra bolsa de trabajo para formar parte del equipo corporativo N.O.R.T.E.</p>
                        </div>
                    </div>
                    <div className="relative z-10 w-full md:w-auto flex justify-end">
                        <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 text-gray-300 text-xs font-bold rounded-full uppercase tracking-widest backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                            En Desarrollo
                        </span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs tracking-wider">
                    <p>&copy; {new Date().getFullYear()} N.O.R.T.E. Transporte Express. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <Link href="/privacidad" className="hover:text-white transition-colors cursor-pointer">Políticas de Privacidad</Link>
                        <span>|</span>
                        <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors cursor-pointer">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}