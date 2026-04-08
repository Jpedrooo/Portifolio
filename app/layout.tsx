import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "João Pedro | Portfólio",
  description: "Portfólio profissional de João Pedro Viegas, Desenvolvedor Full Stack e estudante de Ciência da Computação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={geistSans.variable}>
      <body className="antialiased bg-slate-950 text-white">
        {/* Se você quiser um Menu Global, ele entraria aqui! */}
        
        {children}
        
        {/* Se você quiser um Rodapé Global, ele entraria aqui! */}
      </body>
    </html>
  );
}