import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Solo importamos Inter
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // Configuramos Inter

export const metadata: Metadata = {
  title: "Gamblor Landing Page",
  description: "150% PIX Deposit Bonus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Volvemos a la forma simple de aplicar la fuente
    <html lang="pt" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}