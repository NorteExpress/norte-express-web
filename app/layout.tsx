import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AudioPlayer from "./AudioPlayer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "N.O.R.T.E. Transporte Express | Logística de Salta para el Mundo",
  description: "La plataforma de logística líder en el Norte Argentino. Conectamos comercios, clientes y repartidores.",
  keywords: ["logística", "transporte", "Norte Argentino", "Salta", "envíos", "repartidores", "comercios"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-norte-azul text-white antialiased`}>
        {children}
        <AudioPlayer />
        <Analytics />
      </body>
    </html>
  );
}