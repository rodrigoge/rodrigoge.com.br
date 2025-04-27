import '../styles/global.scss';
import type { Metadata } from "next";
import { Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Rodrigo Gouveia Estevão - Software Developer",
  description: "A personal portfolio web application about my journey and experiences as a developer.",
};

const font = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"], 
  style: ["normal"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className}`}>
        {children}
      </body>
    </html>
  );
}
