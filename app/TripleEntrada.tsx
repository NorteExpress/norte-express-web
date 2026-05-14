import Link from "next/link";
import Image from "next/image";

export default function TripleEntrada() {
    const ecosystem = [
        {
            category: "Envíos y urgencias",
            title: "N.O.R.T.E. On-Demand",
            subtitle: "La ciudad entera en la palma de tu mano.",
            desc: "Retiro y entrega inmediata con trazabilidad satelital en tiempo real directo desde tu celular. Lo que necesites, donde lo necesites y en minutos. La máxima velocidad operativa al servicio de tu tiempo.",
            action: "Pedir Envío",
            span: "md:col-span-1 lg:col-span-2",
            image: "/images/N.O.R.T.E. On-Demand.png",
            icon: (
                <svg className="w-8 h-8 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            category: "La realidad elegante",
            title: "Gestión Ejecutiva y Trámites",
            subtitle: "Delegar con absoluta seguridad y precisión.",
            desc: "Soluciones de mensajería corporativa programada para oficinas, consultorios y estudios profesionales. Desde la gestión segura de documentación confidencial hasta diligencias bancarias y pago de servicios, operamos con total discreción y firmas digitalizadas.",
            action: "Solicitar Gestión",
            span: "md:col-span-1 lg:col-span-2",
            image: "/images/Gestión Ejecutiva y Trámites.png",
            icon: (
                <svg className="w-8 h-8 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            category: "Marketplace local",
            title: "Hub Emprendedor (0% Comisión)",
            subtitle: "Tu vitrina digital para escalar sin límites.",
            desc: "Democratizamos el comercio electrónico en Salta. Publica y vende tus productos en nuestra plataforma sin pagar un solo peso de comisión (0%). Te brindamos el motor tecnológico y logístico de las grandes cadenas para que tu emprendimiento despegue sin costos ocultos.",
            action: "Sumar mi Local",
            span: "md:col-span-2 lg:col-span-2",
            image: "/images/Hub Emprendedor.png",
            icon: (
                <svg className="w-8 h-8 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            category: "Directorio Pro",
            title: "Red de Profesionales Verificados",
            subtitle: "El talento experto de la provincia, a un clic.",
            desc: "Un directorio inteligente que conecta tu necesidad con los mejores especialistas. Desde asistencia técnica de urgencia (plomería, gas, electricidad) hasta asesoría de élite (abogados, contadores, escribanos). Confianza, reputación y trato directo.",
            action: "Buscar Profesional",
            span: "md:col-span-1 lg:col-span-3",
            image: "/images/Red de Profesionales Verificados.png",
            icon: (
                <svg className="w-8 h-8 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            category: "Asistencia vial express",
            title: "Unidad de Rescate S.O.S.",
            subtitle: "Respaldo inmediato para imprevistos en la calle.",
            desc: "¿Un neumático averiado? ¿Sin combustible a mitad del trayecto? Nuestra red logística acude de forma inmediata a tu ubicación GPS para brindarte asistencia vial express. Con N.O.R.T.E., nunca estás solo en las calles de Salta.",
            action: "Pedir Asistencia",
            span: "md:col-span-1 lg:col-span-3",
            image: "/images/Unidad de Rescate S.O.S.png",
            icon: (
                <svg className="w-8 h-8 text-[#f39200]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        }
    ];

    return (
        <section className="relative z-20 py-32 px-6 bg-gradient-to-b from-transparent via-[#0f1d35]/80 to-[#0f1d35]" id="servicios">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
                        Un ecosistema de soluciones para la <span className="text-[#f39200]">vida urbana</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-400 font-light max-w-4xl mx-auto italic">
                        "Más que logística: la infraestructura digital que conecta, asiste y potencia a toda la provincia."
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {ecosystem.map((item, index) => (
                        <div key={index} className={`group relative bg-[#132540]/80 backdrop-blur-3xl border border-white/10 hover:border-[#f39200]/50 rounded-[2.5rem] p-8 lg:p-10 transition-all duration-700 ease-out transform-gpu hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(243,146,0,0.3)] flex flex-col h-full ${item.span}`}>
                            <div className="absolute inset-0 bg-gradient-to-br from-[#f39200]/0 to-[#f39200]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem]"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-6 gap-4">
                                    <span className="bg-[#f39200]/10 text-[#f39200] px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border border-[#f39200]/20 mt-1">
                                        {item.category}
                                    </span>
                                    <div className="w-12 h-12 bg-gradient-to-br from-[#1c355c] to-[#0f1d35] rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#f39200]/50 transition-all duration-700 shrink-0">
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="relative w-full h-48 md:h-56 mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1c355c]/30 to-transparent flex items-center justify-center p-6 border border-white/5 group-hover:border-[#f39200]/20 transition-all duration-700">
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill 
                                        className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-700 ease-out p-4"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>

                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-[#f39200] transition-colors duration-500 tracking-tight">
                                    {item.title}
                                </h3>
                                <h4 className="text-[#f39200] font-medium text-lg lg:text-xl mb-6 leading-snug drop-shadow-sm">
                                    {item.subtitle}
                                </h4>

                                <p className="text-base lg:text-lg text-gray-400 mb-10 group-hover:text-gray-300 transition-colors duration-500 leading-relaxed flex-grow">
                                    {item.desc}
                                </p>

                                <Link
                                    href="/descargar"
                                    className="inline-flex items-center font-bold text-white group-hover:text-[#f39200] transition-colors duration-500 text-lg mt-auto w-fit"
                                >
                                    {item.action}
                                    <svg className="w-6 h-6 ml-2 group-hover:translate-x-3 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}