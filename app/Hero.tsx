import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative z-10 pt-36 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 min-h-screen text-center lg:text-left">
            <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-lg hover:bg-white/10 transition-colors cursor-default">
                    <span className="w-2 h-2 rounded-full bg-[#f39200] animate-ping"></span>
                    <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase">La revolución logística del Norte</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-8 drop-shadow-2xl">
                    Logística de <br className="hidden md:block" />
                    <span className="relative inline-block">
                        <span className="absolute -inset-2 bg-[#f39200]/30 blur-2xl rounded-full"></span>
                        <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#f39200] via-[#ffcc80] to-white">
                            Salta
                        </span>
                    </span> <br className="hidden md:block" />
                    para el Mundo
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed drop-shadow-md">
                    Conectamos tecnología premium con el empuje del comercio local. Velocidad, seguridad y <strong className="text-white font-bold tracking-wide">excelencia</strong> en cada entrega.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start w-full sm:w-auto">
                    <Link
                        href="/descargar"
                        className="inline-flex items-center justify-center px-10 py-5 bg-[#f39200] text-white rounded-full font-extrabold text-lg transition-all duration-500 ease-out transform-gpu hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(243,146,0,0.6)] relative overflow-hidden group"
                    >
                        <span className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-1000 ease-out"></span>
                        Comenzar Ahora
                    </Link>
                    <Link href="#servicios" className="inline-flex items-center justify-center px-10 py-5 bg-white/5 backdrop-blur-lg border border-white/20 text-white rounded-full font-bold text-lg transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/40 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                        Ver Servicios
                    </Link>
                </div>
            </div>
            <Link href="/descargar" className="block flex-1 relative w-full max-w-[400px] lg:max-w-[550px] h-[400px] lg:h-[550px] min-h-[400px] lg:min-h-[550px] group mx-auto mt-16 lg:mt-0">
                <div className="absolute inset-0 bg-[#f39200]/25 blur-[120px] rounded-full group-hover:bg-[#f39200]/40 transition-all duration-1000 ease-out animate-pulse"></div>
                <div className="absolute inset-0 transition-all duration-1000 ease-out transform-gpu group-hover:scale-110 group-hover:rotate-2 group-hover:-translate-y-4">
                    <Image
                        src="/images/Norte Delivery.png"
                        alt="App N.O.R.T.E. Delivery"
                        fill
                        sizes="(max-width: 768px) 400px, 550px"
                        className="object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)]"
                        priority
                    />
                </div>
            </Link>
        </section>
    );
}