import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gamblor – 250% Bônus no Primeiro Depósito via PIX",
  description:
    "Ganhe 250% de bônus no seu primeiro depósito via PIX! Oferta disponível para novos e atuais jogadores.",
  keywords: [
    "cassino online",
    "bônus de depósito",
    "bônus de boas-vindas",
    "PIX",
    "Gamblor",
    "jogos de azar",
    "cassino Brasil",
    "apostas online",
    "promoção PIX",
    "bônus de cassino",
    "interac cassino",
    "promptpay cassino",
  ],
  metadataBase: new URL("https://pix.gamblor.io"),
  openGraph: {
    title: "Gamblor – 250% Bônus no Depósito via PIX",
    description:
      "Aproveite o bônus de 250% no seu primeiro depósito via PIX e comece a jogar agora mesmo!",
    url: "https://pix.gamblor.io",
    siteName: "Gamblor",
    images: [
      {
        url: "https://imagedelivery.net/mOT2oLbg43au-DUXbkyY4w/3ac24f5a-3c9e-4259-f39b-bb789283e000/original",
        width: 1200,
        height: 630,
        alt: "Gamblor 250% PIX Bonus",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gamblor – 250% Bônus no Depósito via PIX",
    description: "Ganhe 250% de bônus no seu primeiro depósito via PIX!",
    images: [
      "https://imagedelivery.net/mOT2oLbg43au-DUXbkyY4w/3ac24f5a-3c9e-4259-f39b-bb789283e000/original",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
