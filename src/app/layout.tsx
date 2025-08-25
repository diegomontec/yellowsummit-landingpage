import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  openGraph: {
    title: "Yellow Summit 2025 - Construa o futuro hoje",
    description:
      "O maior evento para quem quer transformar ideias em resultados. 🚀",
    type: "website",
    images: [
      {
        url: "/images/elementos/preview.png",
        width: 1202,
        height: 431,
        alt: "Yellow Summit 2025 - Construa o futuro hoje",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="facebook-domain-verification"
          content="q7khp9babuwjsab8yor9w2oi9mtm05"
        />

        {/* Google Tag Manager (Script principal) */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WV7N2M8');
            `,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noScript fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV7N2M8"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}