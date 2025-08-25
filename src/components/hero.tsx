// app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full py-24 h-screen">
      <Image
        src="/images/backgrounds/BG 1.png"
        alt="Plano de fundo do herói"
        fill
        className="object-cover"
        priority={false}
        fetchPriority="auto"
        placeholder="empty"
      />

      <div className="relative flex flex-col items-center justify-center px-8 w-full h-full gap-16">
        <div className="text-center text-white">
          <p className="text-3xl md:text-4xl font-extralight">
            O futuro dos negócios
          </p>
          <p className="text-3xl md:text-6xl font-bold">começa aqui</p>
        </div>

        <Image
          src="/images/elementos/Yellow Summit lOGO.png"
          alt="Logo Yellow Summit"
          width={742}
          height={305}
          priority
          fetchPriority="high"
          placeholder="empty"
          sizes="(max-width: 768px) 90vw, 742px"
          className="w-full h-auto max-w-3xl"
        />

        <div className="text-center text-white text-2xl md:text-3xl gap-8 flex flex-col font-extralight">
          <p className="max-w-3xl"> Um encontro para transformar sua forma de comunicar, inovar e crescer no mercado! </p>
          <p>18/09/2025  |  14h às 19h  |  Centro de Inovações</p>
        </div>

        <a
          className="mx-auto md:mx-0 px-8 py-4 bg-[#eb9f1b] text-[#0c0c0b] text-1xl md:text-2xl font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300"
          href="https://www.sympla.com.br/evento/yellow-summit-2025/3084245?=&utm_source=facebook-ads&utm_medium=02%20%7C%20ALL%20%7C%20ADVANTAGE%2B%20%7C%2024-50%20%7C%20Macei%C3%B3&utm_content=0001%20%7C%20EST%20%7C%20Card%20inicial&utm_campaign=YK%20%20%7C%20VENDAS%20%7C%2001%20%7C%20Yellow%20Summit%20%7C%202025-08-22&utm_term=Instagram_Feed&utm_id=120235101190510029&fbclid=PAZXh0bgNhZW0BMABhZGlkAaspMbmq4K0Bp4XK3iYTLZe13ZooEaprJm5HQU-LqGYlityvRzswgBZts9Xh4Y8UwMmGd0gx_aem__YPyFFslKTjC5l3ZTU7YWg&referrer=instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          GARANTA SEU INGRESSO AGORA
        </a>
      </div>
    </div>
  );
}
