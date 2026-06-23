import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

interface DownloadData {
    cadete_apk_download_url: string;
    comercio_apk_download_url: string;
    desktop_download_url: string;
    latest_cadete_apk_version: string;
    latest_comercio_apk_version: string;
    latest_desktop_version: string;
}

const FALLBACK_DOWNLOADS: DownloadData = {
    cadete_apk_download_url: '/apks/norte-cadete.apk',
    comercio_apk_download_url: 'https://drive.google.com/uc?export=download&id=1K0ScR-Gp_Gtg70kPWQoPEoDofYUKT6ba',
    desktop_download_url: 'https://drive.google.com/uc?export=download&id=1ql2b2JP9wa4gpwpNGxtzGf202_ei9m-0',
    latest_cadete_apk_version: '1.0.0',
    latest_comercio_apk_version: '1.0.0',
    latest_desktop_version: '1.0.0'
};

async function getDownloads(): Promise<DownloadData> {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ntbhzqhpeukwdzzhdunj.supabase.co';
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_mZ4CWzQal3-WcSR1C9Ur9A_EMeKz8_d';
    
    try {
        const response = await fetch(`${supabaseUrl}/rest/v1/rpc/get_public_downloads`, {
            method: 'POST',
            headers: {
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
            next: {
                revalidate: 0 // Fetch fresh data
            }
        });

        if (!response.ok) {
            console.error('Failed to fetch public downloads from Supabase RPC, status:', response.status);
            return FALLBACK_DOWNLOADS;
        }

        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
            const row = data[0];
            return {
                cadete_apk_download_url: row.cadete_apk_download_url || FALLBACK_DOWNLOADS.cadete_apk_download_url,
                comercio_apk_download_url: row.comercio_apk_download_url || FALLBACK_DOWNLOADS.comercio_apk_download_url,
                desktop_download_url: row.desktop_download_url || FALLBACK_DOWNLOADS.desktop_download_url,
                latest_cadete_apk_version: row.latest_cadete_apk_version || FALLBACK_DOWNLOADS.latest_cadete_apk_version,
                latest_comercio_apk_version: row.latest_comercio_apk_version || FALLBACK_DOWNLOADS.latest_comercio_apk_version,
                latest_desktop_version: row.latest_desktop_version || FALLBACK_DOWNLOADS.latest_desktop_version,
            };
        }
        
        return FALLBACK_DOWNLOADS;
    } catch (error) {
        console.error('Error fetching downloads from Supabase:', error);
        return FALLBACK_DOWNLOADS;
    }
}

export default async function DescargarHub() {
    const downloads = await getDownloads();

    return (
        <div className="min-h-screen bg-[#1c355c] text-white font-sans selection:bg-[#f39200] selection:text-white">
            {/* Navbar / Botón Volver */}
            <div className="p-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-[#f39200] transition-colors font-medium backdrop-blur-md bg-white/5 px-4 py-2 rounded-full border border-white/10"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver al inicio
                </Link>
            </div>
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
                        Hub de <span className="text-[#f39200]">Descargas</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                        Elegí la aplicación que necesitás para sumarte a la revolución logística del norte.
                    </p>
                </div>

                {/* ================= SECCIÓN APP CLIENTES ================= */}
                <div className="mb-20 max-w-4xl mx-auto">
                    <div className="relative group bg-gradient-to-br from-[#f39200]/15 to-[#132540]/90 backdrop-blur-xl border border-[#f39200]/30 hover:border-[#f39200]/50 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                        <div className="absolute inset-0 bg-[#f39200]/0 group-hover:bg-[#f39200]/5 transition-colors duration-500 pointer-events-none"></div>
                        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                            {/* Ilustración o Icono */}
                            <div className="relative w-40 h-40 md:w-56 md:h-56 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]">
                                <Image 
                                    src="/images/Norte Delivery.png" 
                                    alt="App N.O.R.T.E. Delivery" 
                                    fill 
                                    sizes="(max-width: 768px) 160px, 224px" 
                                    className="object-contain" 
                                    priority 
                                  />
                            </div>
                            
                            {/* Información y Play Store Coming Soon */}
                            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-grow w-full">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-[#f39200]/20 text-[#f39200] text-xs font-bold uppercase tracking-widest border border-[#f39200]/30 mb-4">Aplicación para Clientes</span>
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">N.O.R.T.E. Delivery</h2>
                                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                                    Pedí envíos al instante, explorá tiendas locales, contratá profesionales verificados y accedé a auxilio S.O.S. todo desde tu celular.
                                </p>
                                
                                {/* Play Store & App Store Container */}
                                <div className="w-full bg-[#0a1120]/90 border border-white/10 rounded-[2rem] p-6 md:p-8 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-[#f39200]/5 to-orange-500/5 opacity-50"></div>
                                    
                                    <div className="relative z-10 flex flex-col gap-5">
                                        <div className="flex items-center gap-3">
                                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                                            <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Disponible Ahora</span>
                                        </div>
                                        
                                        <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
                                            La aplicación de Clientes ya se encuentra disponible para su descarga oficial en dispositivos Android a través de Google Play Store.
                                        </p>
                                        
                                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-2">
                                            {/* Google Play Store Badge */}
                                            <a
                                                href="https://play.google.com/store/apps/details?id=com.norte.cliente"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="relative transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_10px_20px_rgba(243,146,0,0.15)] rounded-xl overflow-hidden block"
                                            >
                                                <Image
                                                    src="/images/google-play-badge.png"
                                                    alt="Disponible en Google Play"
                                                    width={160}
                                                    height={62}
                                                    className="h-12 w-auto object-contain"
                                                />
                                            </a>

                                            {/* App Store Badge */}
                                            <div className="flex items-center gap-3.5 bg-[#0c182b]/80 border border-white/10 rounded-2xl px-5 py-3 transition-all duration-300 shadow-md select-none opacity-50">
                                                <svg className="w-6 h-6 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 1.52-3.27 1.57-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.69 4.04-.02.07-.43 1.44-1.39 2.82M15.97 4.17c.66-.8 1.1-1.89.98-3.17-.95.04-2.05.6-2.71 1.38-.56.66-1.05 1.76-.9 3.01 1.05.08 2.06-.51 2.63-1.22z" />
                                                </svg>
                                                <div className="flex flex-col items-start leading-tight">
                                                    <span className="block text-[8px] uppercase tracking-widest text-gray-500 font-bold mb-0.5">Próximamente en</span>
                                                    <span className="text-xs font-black text-white/40 tracking-wide">App Store</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= SECCIÓN COLABORADORES Y NEGOCIOS ================= */}
                <div className="border-t border-white/10 pt-16 mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                            Aplicaciones de Gestión y Trabajo
                        </h2>
                        <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
                            Instalá las aplicaciones para Cadetes y Comercios de forma directa y segura mediante archivos APK y EXE.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
                        {/* Tarjeta 1: Cadete */}
                        <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(243,146,0,0.2)] hover:bg-white/10 transition-all duration-300 flex flex-col items-center sm:items-start">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            <div className="relative w-48 h-32 min-h-[8rem] mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="/images/Norte Cadete.png"
                                    alt="App N.O.R.T.E. Cadete"
                                    fill
                                    sizes="192px"
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">N.O.R.T.E. Cadete</h3>
                            <span className="inline-block px-3 py-1 bg-[#f39200]/20 text-[#f39200] text-sm font-semibold rounded-full mb-4 w-fit border border-[#f39200]/30">App Rider v{downloads.latest_cadete_apk_version}</span>
                            <p className="text-base font-semibold text-white mb-2">Tu oficina es la ciudad.</p>
                            <p className="text-white/70 mb-4 text-sm leading-relaxed">
                                Conectate a la central logística. Recibe viajes optimizados por GPS, gestiona tus ganancias y accede a soporte vial S.O.S.
                            </p>

                            {/* Aclaración de Plataforma Android */}
                            <div className="mb-6 p-3.5 rounded-xl bg-[#f39200]/10 border border-[#f39200]/20 flex items-start gap-2.5 mt-auto">
                                <svg className="w-5 h-5 text-[#f39200] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs text-orange-200/90 leading-normal">
                                    <strong>Nota de compatibilidad:</strong> La aplicación de Cadetes es compatible con cualquier dispositivo <strong>Android (versión 6.0 o superior)</strong> con servicio de GPS activo.
                                </p>
                            </div>

                            <div className="w-full mt-4">
                                <a
                                    href={downloads.cadete_apk_download_url}
                                    download
                                    className="group relative w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-[#f39200] via-[#ffa827] to-[#f39200] bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_4px_20px_rgba(243,146,0,0.35)] hover:shadow-[0_0_30px_rgba(243,146,0,0.6)] transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden border border-white/10 hover:scale-[1.03] active:scale-[0.98] transform-gpu"
                                >
                                    {/* Sliding sheen shine */}
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                                    
                                    <svg className="w-6 h-6 relative z-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left leading-tight">
                                        <span className="block text-[9px] uppercase tracking-widest text-white/80 font-bold mb-0.5">Aplicación Oficial Android</span>
                                        <span className="text-sm font-black tracking-wide">Descargar APK (Rider)</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Tarjeta 2: Comercio */}
                        <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(243,146,0,0.2)] hover:bg-white/10 transition-all duration-300 flex flex-col items-center sm:items-start">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            <div className="relative w-48 h-32 min-h-[8rem] mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)]">
                                <Image
                                    src="/images/norte comercio.png"
                                    alt="App N.O.R.T.E. Comercio"
                                    fill
                                    sizes="192px"
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">N.O.R.T.E. Comercio</h3>
                            <span className="inline-block px-3 py-1 bg-[#f39200]/20 text-[#f39200] text-sm font-semibold rounded-full mb-4 w-fit border border-[#f39200]/30">App Negocios | Android & PC</span>
                            <p className="text-base font-semibold text-white mb-2">Potenciá tus ventas al 100%.</p>
                            <p className="text-white/70 mb-4 text-sm leading-relaxed">
                                La suite definitiva para tu local. Gestioná tu stock, recibí pedidos y despachá con nuestra flota con 0% de comisión.
                            </p>
                            
                            {/* Aclaración de Plataforma Android y PC */}
                            <div className="mb-6 p-3.5 rounded-xl bg-[#f39200]/10 border border-[#f39200]/20 flex items-start gap-2.5 mt-auto">
                                <svg className="w-5 h-5 text-[#f39200] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-xs text-orange-200/90 leading-normal">
                                    <strong>Nota de compatibilidad:</strong> La aplicación de Comercios ahora cuenta con versión oficial tanto para dispositivos móviles <strong>Android</strong> como para computadoras <strong>Windows (PC)</strong>.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mt-4">
                                <a
                                    href={downloads.comercio_apk_download_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full py-4 px-4 rounded-2xl font-bold text-white bg-gradient-to-r from-[#f39200] via-[#ffa827] to-[#f39200] bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_4px_20px_rgba(243,146,0,0.35)] hover:shadow-[0_0_30px_rgba(243,146,0,0.6)] transition-all duration-500 flex items-center justify-center gap-2.5 overflow-hidden border border-white/10 hover:scale-[1.03] active:scale-[0.98] transform-gpu"
                                >
                                    {/* Sliding sheen shine */}
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                                    
                                    <svg className="w-5.5 h-5.5 relative z-10 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                    <div className="relative z-10 flex flex-col items-start leading-tight">
                                        <span className="block text-[8px] uppercase tracking-widest text-white/80 font-bold mb-0.5">Para Celular (v{downloads.latest_comercio_apk_version})</span>
                                        <span className="text-xs font-black tracking-wide">Android (APK)</span>
                                    </div>
                                </a>
                                <a
                                    href={downloads.desktop_download_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative w-full py-4 px-4 rounded-2xl font-bold text-white bg-gradient-to-br from-[#1b3152] to-[#10223b] hover:from-[#213b63] hover:to-[#142c4c] shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(243,146,0,0.35)] transition-all duration-500 flex items-center justify-center gap-2.5 overflow-hidden border border-[#f39200]/30 hover:border-[#f39200] hover:scale-[1.03] active:scale-[0.98] transform-gpu"
                                >
                                    {/* Sliding sheen shine */}
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                                    
                                    <svg className="w-5.5 h-5.5 relative z-10 text-[#f39200] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <div className="relative z-10 flex flex-col items-start leading-tight">
                                        <span className="block text-[8px] uppercase tracking-widest text-[#f39200]/80 font-bold mb-0.5">Para PC / Windows (v{downloads.latest_desktop_version})</span>
                                        <span className="text-xs font-black tracking-wide text-white">Windows (EXE)</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Tutorial de Confianza Visual */}
                    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl mb-16 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <h3 className="text-2xl md:text-3xl font-black mb-4 text-white text-center drop-shadow-md">
                            Antes de descargar, <span className="text-[#f39200]">mirá esto 👇</span>
                        </h3>
                        <p className="text-white/80 mb-8 text-base md:text-lg text-center max-w-2xl mx-auto">
                            Preparamos una guía visual rápida para que instales nuestras aplicaciones de forma segura y confiable en tu celular.
                        </p>

                        {/* Imagen Tutorial para PC */}
                        <div className="hidden md:block w-full rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/20 hover:scale-[1.01] transition-transform duration-500">
                            <Image
                                src="/images/tuto-web.png"
                                alt="Tutorial de descarga segura para PC"
                                width={1200}
                                height={600}
                                className="w-full h-auto object-cover"
                                unoptimized
                            />
                        </div>

                        {/* Imagen Tutorial para Celular */}
                        <div className="block md:hidden w-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/20">
                            <Image
                                src="/images/Tuto-celular.png"
                                alt="Tutorial de descarga segura para Celular"
                                width={800}
                                height={1200}
                                className="w-full h-auto object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Guía de Instalación Segura en 3 Pasos */}
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                        <div className="text-center mb-12">
                            <h3 className="text-3xl md:text-4xl font-black mb-4">
                                Guía de Instalación Segura en 3 Pasos
                            </h3>
                            <p className="text-white/70 max-w-2xl mx-auto font-light">
                                Sigue estos sencillos pasos para instalar las herramientas de gestión de forma segura en tu dispositivo Android.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {/* Paso 1 */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-[#f39200] text-white font-black text-xl rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(243,146,0,0.5)] mb-6">1</div>
                                <h4 className="text-xl font-bold mb-6 text-center">Descarga el Archivo</h4>

                                {/* Mockup Paso 1 */}
                                <div className="w-full max-w-[260px] bg-white rounded-2xl shadow-2xl p-4 border border-gray-200 mb-6 transform hover:scale-105 transition-transform">
                                    <div className="flex items-start gap-3 mb-4">
                                        <svg className="w-6 h-6 text-yellow-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <p className="text-gray-800 font-medium text-sm leading-snug">El archivo norte-cadete.apk podría ser dañino</p>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="text-center py-2.5 bg-[#f39200] text-white rounded-xl text-sm font-bold shadow-md cursor-pointer">
                                            Descargar de todos modos
                                        </div>
                                        <div className="text-center py-2.5 text-gray-500 text-sm font-medium cursor-pointer">
                                            Cancelar
                                        </div>
                                    </div>
                                </div>

                                <p className="text-white/70 text-center text-sm">
                                    Es un aviso automático de Google para todo archivo APK externo. Presiona <strong className="text-white">"Descargar de todos modos"</strong> con confianza.
                                </p>
                            </div>

                            {/* Paso 2 */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-[#f39200] text-white font-black text-xl rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(243,146,0,0.5)] mb-6">2</div>
                                <h4 className="text-xl font-bold mb-6 text-center">Permite la Instalación</h4>

                                {/* Mockup Paso 2 */}
                                <div className="w-full max-w-[260px] bg-gray-900 rounded-2xl shadow-2xl p-5 border border-gray-700 mb-6 transform hover:scale-105 transition-transform">
                                    <div className="flex items-center gap-3 mb-5 border-b border-gray-700 pb-4">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        <p className="text-white font-medium text-sm">Instalar apps desconocidas</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex flex-col">
                                            <p className="text-white text-sm font-medium mb-0.5">Confiabilidad</p>
                                            <p className="text-gray-400 text-xs">Permitir desde esta fuente</p>
                                        </div>
                                        {/* Switch ON */}
                                        <div className="w-11 h-6 bg-[#f39200] rounded-full relative shadow-inner cursor-pointer">
                                            <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow-md"></div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-white/70 text-center text-sm">
                                    Al abrir el archivo, Android te pedirá permiso. Ve a Ajustes y activa <strong className="text-white">"Permitir desde esta fuente"</strong>.
                                </p>
                            </div>

                            {/* Paso 3 */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 bg-[#f39200] text-white font-black text-xl rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(243,146,0,0.5)] mb-6">3</div>
                                <h4 className="text-xl font-bold mb-6 text-center">Instala la App</h4>

                                {/* Mockup Paso 3 */}
                                <div className="w-full max-w-[260px] bg-white rounded-2xl shadow-2xl p-5 border border-gray-200 mb-6 transform hover:scale-105 transition-transform">
                                    <div className="flex flex-col items-center mb-5 mt-2">
                                        <svg className="w-10 h-10 text-red-500 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <p className="text-gray-800 font-bold text-center text-sm">Play Protect</p>
                                        <p className="text-gray-500 text-xs text-center mt-1">App no reconocida.</p>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <div className="text-center py-2.5 text-[#f39200] text-sm font-bold border-2 border-[#f39200] rounded-xl cursor-pointer hover:bg-orange-50">
                                            Instalar de todas formas
                                        </div>
                                        <div className="text-center py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold cursor-pointer">
                                            Entendido
                                        </div>
                                    </div>
                                </div>

                                <p className="text-white/70 text-center text-sm">
                                    Si Play Protect lanza una alerta, selecciona <strong className="text-white">"Instalar de todas formas"</strong>. ¡Nuestras apps son 100% seguras!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}