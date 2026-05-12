import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative z-20 bg-[#070e1a] pt-20 pb-10 border-t border-[#f39200]/20" id="contacto">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
                    <div>
                        <div className="relative h-16 w-48 min-h-[64px] mb-6 opacity-90">
                            <Image
                                src="/images/Logo Norte.png"
                                alt="N.O.R.T.E. Transporte Express"
                                fill
                                sizes="192px"
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Conectando Salta con tecnología, velocidad y confianza. La logística del futuro, hoy.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Enlaces Rápidos</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#servicios" className="hover:text-[#f39200] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f39200] rounded-full"></span> Servicios</Link></li>
                            <li><Link href="#nosotros" className="hover:text-[#f39200] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f39200] rounded-full"></span> Nosotros</Link></li>
                            <li><Link href="#contacto" className="hover:text-[#f39200] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#f39200] rounded-full"></span> Contacto</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contacto</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                info@norteexpress.com.ar
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                Salta, Argentina
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Apps (Próximamente)</h4>
                        <div className="mb-6">
                            <div className="relative h-10 w-32 min-h-[40px] mb-4">
                                <Image
                                    src="/images/Norte Delivery.png"
                                    alt="App de Clientes N.O.R.T.E."
                                    fill
                                    sizes="128px"
                                    className="object-contain object-left"
                                />
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                Dejanos tu email para enterarte del lanzamiento oficial de nuestras aplicaciones.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <input type="email" placeholder="Tu email..." className="bg-[#1c355c]/30 border border-white/10 rounded-xl px-4 py-3 text-white w-full focus:outline-none focus:border-[#f39200] transition-colors text-sm" />
                            <button className="bg-[#f39200] text-white px-5 py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-500/20 w-full text-sm">
                                Avisarme
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border-t border-white/5 pt-8 flex flex-col items-center gap-2 text-center text-gray-500 text-xs tracking-wider">
                    <p>&copy; {new Date().getFullYear()} N.O.R.T.E. Transporte Express. Todos los derechos reservados.</p>
                    <p className="italic opacity-60">Próximamente: Oportunidades Laborales</p>
                </div>
            </div>
        </footer>
    );
}