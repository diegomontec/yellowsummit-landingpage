import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yellow Summit - 2025",
  description:
    "Na sua 2ª edição, o Yellow Summit reúne empresários e profissionais para explorar como fortalecimento de marca, comunicação integrada e estratégia digital estão transformando negócios no Brasil. É um dia de aprendizado, conexões e inovação no Centro de Inovação de Alagoas.",
  icons: {
    icon: "https://yellowkite.com.br/assets/icons/logo-kite.svg",
  },
};

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
