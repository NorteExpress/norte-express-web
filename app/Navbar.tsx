import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-[#1c355c]/20 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 shadow-xl shadow-black/10">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="relative group">
                    <div className="relative h-10 min-h-[40px] w-32 md:w-48 transition-transform duration-500 ease-out group-hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Image
                            src="/images/Logo Norte.png"
                            alt="N.O.R.T.E. Transporte Express"
                            fill
                            className="object-contain object-left"
                            sizes="(max-width: 768px) 128px, 192px"
                            priority
                        />
                    </div>
                </Link>
                <div className="hidden md:flex gap-10 items-center text-sm font-semibold tracking-wide text-gray-300">
                    <Link href="#servicios" className="hover:text-white transition-colors duration-500">Servicios</Link>
                    <Link href="#nosotros" className="hover:text-white transition-colors duration-500">Nosotros</Link>
                    <Link href="/descargar" className="hover:text-white transition-colors duration-500">Descargas</Link>
                    <Link href="/privacidad" className="hover:text-white transition-colors duration-500">Privacidad</Link>
                    <Link href="/terminos-y-condiciones" className="hover:text-white transition-colors duration-500">Términos</Link>
                    <Link href="#contacto" className="hover:text-white transition-colors duration-500">Contacto</Link>

                    <Link
                        href="/descargar"
                        className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-500 bg-[#f39200]/90 rounded-full hover:bg-[#f39200] hover:scale-105 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(243,146,0,0.5)] border border-[#f39200]/50 overflow-hidden group"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                        Pedir Envío
                    </Link>
                </div>
            </div>
        </nav>
    );
}