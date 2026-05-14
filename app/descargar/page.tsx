import Link from 'next/link';
import Image from 'next/image';

export default function DescargarHub() {
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
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
                        Elige la aplicación que necesitas para sumarte a la revolución logística del norte.
                    </p>

                    {/* Tutorial de Confianza Visual */}
                    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl mb-16 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        <h2 className="text-2xl md:text-3xl font-black mb-4 text-white drop-shadow-md">
                            Antes de descargar, <span className="text-[#f39200]">mira esto 👇</span>
                        </h2>
                        <p className="text-white/80 mb-8 text-base md:text-lg max-w-2xl mx-auto">
                            Hemos preparado una guía visual rápida para que instales nuestra aplicación con total seguridad y confianza.
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
                </div>

                {/* Grid de Tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">

                    {/* Tarjeta 1: Delivery */}
                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(243,146,0,0.3)] hover:bg-white/10 transition-all duration-300 flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="w-16 h-16 bg-gradient-to-tr from-[#f39200] to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">N.O.R.T.E. Delivery</h2>
                        <span className="inline-block px-3 py-1 bg-[#f39200]/20 text-[#f39200] text-sm font-semibold rounded-full mb-4 w-fit border border-[#f39200]/30">App Cliente</span>
                        <p className="text-lg font-medium text-white mb-2">Todo lo que necesitas, a un clic.</p>
                        <p className="text-white/70 mb-8 flex-grow text-sm leading-relaxed">
                            Pide envíos al instante, explora las tiendas locales y accede a servicios de oficios.
                        </p>
                        <a
                            href="/apks/norte-delivery.apk"
                            download
                            className="w-full py-4 rounded-xl font-bold text-white bg-[#f39200] hover:bg-[#e08600] shadow-[0_0_20px_rgba(243,146,0,0.4)] hover:shadow-[0_0_30px_rgba(243,146,0,0.6)] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                        >
                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            <span className="relative z-10">Descargar APK</span>
                        </a>
                    </div>

                    {/* Tarjeta 2: Cadete */}
                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(243,146,0,0.3)] hover:bg-white/10 transition-all duration-300 flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="w-16 h-16 bg-gradient-to-tr from-[#f39200] to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">N.O.R.T.E. Cadete</h2>
                        <span className="inline-block px-3 py-1 bg-[#f39200]/20 text-[#f39200] text-sm font-semibold rounded-full mb-4 w-fit border border-[#f39200]/30">App Rider</span>
                        <p className="text-lg font-medium text-white mb-2">Tu oficina es la ciudad.</p>
                        <p className="text-white/70 mb-8 flex-grow text-sm leading-relaxed">
                            Conéctate a la central logística. Recibe viajes optimizados por GPS, gestiona tus ganancias y accede a soporte vial S.O.S.
                        </p>
                        <a
                            href="/apks/norte-cadete.apk"
                            download
                            className="w-full py-4 rounded-xl font-bold text-white bg-[#f39200] hover:bg-[#e08600] shadow-[0_0_20px_rgba(243,146,0,0.4)] hover:shadow-[0_0_30px_rgba(243,146,0,0.6)] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                        >
                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            <span className="relative z-10">Descargar APK</span>
                        </a>
                    </div>

                    {/* Tarjeta 3: Comercio */}
                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(243,146,0,0.3)] hover:bg-white/10 transition-all duration-300 flex flex-col">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <div className="w-16 h-16 bg-gradient-to-tr from-[#f39200] to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-2">N.O.R.T.E. Comercio</h2>
                        <span className="inline-block px-3 py-1 bg-[#f39200]/20 text-[#f39200] text-sm font-semibold rounded-full mb-4 w-fit border border-[#f39200]/30">App Negocios | Servidor Externo (~109 MB)</span>
                        <p className="text-lg font-medium text-white mb-2">Potencia tus ventas al 100%.</p>
                        <p className="text-white/70 mb-8 flex-grow text-sm leading-relaxed">
                            La suite definitiva para tu local. Gestiona tu stock, recibe pedidos y despacha con nuestra flota con 0% de comisión.
                        </p>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1gIKlJMrW27iel_ZLv66VBE8K_sGNaCeQ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 rounded-xl font-bold text-white bg-[#f39200] hover:bg-[#e08600] shadow-[0_0_20px_rgba(243,146,0,0.4)] hover:shadow-[0_0_30px_rgba(243,146,0,0.6)] transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                        >
                            <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                            <span className="relative z-10">Descargar APK</span>
                        </a>
                    </div>

                </div>

                {/* Guía de Instalación Segura en 3 Pasos */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-black mb-4">
                            Guía de Instalación Segura en 3 Pasos
                        </h3>
                        <p className="text-white/70 max-w-2xl mx-auto">
                            Sigue estos sencillos pasos para instalar nuestra aplicación de forma segura en tu dispositivo Android.
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
                                    <p className="text-gray-800 font-medium text-sm leading-snug">El archivo norte-delivery.apk podría ser dañino</p>
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
    );
}