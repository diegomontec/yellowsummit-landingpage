import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Yellow Summit 2025",
  description:
    "Na sua 2ª edição, o Yellow Summit reúne empresários e profissionais para explorar como fortalecimento de marca, comunicação integrada e estratégia digital estão transformando negócios no Brasil. É um dia de aprendizado, conexões e inovação no Centro de Inovação de Alagoas.",
  icons: {
    icon: "https://yellowkite.com.br/assets/icons/logo-kite.svg",
  },
  openGraph: {
    title: "Yellow Summit - 2025",
    description:
      "Um dia inteiro de aprendizado, conexões e inovação no Centro de Inovação de Alagoas.",
    url: "https://yellowsummit.com.br",
    siteName: "Yellow Summit 2025",
    images: [
      {
        url: "https://yellowkite.com.br/yellowsummit/index.html",
        width: 1200,
        height: 630,
        alt: "Yellow Summit 2025 - O maior evento de inovação e negócios do Nordeste",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
