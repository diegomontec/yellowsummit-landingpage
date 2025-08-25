"use client";

import Image from "next/image";

const Hero = () => {
  const handleClick = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="relative w-full py-24">
      <Image
        src="/images/backgrounds/BG 1.png"
        alt="background hero"
        fill
        priority
        className="object-cover"
      />

      <div className="relative flex flex-col items-center justify-center px-8 w-full h-full gap-16">
        <div className="text-center text-white">
          <p className="text-3xl md:text-5xl font-extralight">
            O futuro dos negócios
          </p>
          <p className="text-4xl md:text-8xl font-bold">começa aqui</p>
        </div>

        <Image
          src="/images/elementos/Yellow Summit lOGO.png"
          alt="Logo Yellow Summit"
          width={742}
          height={305}
          priority
          className="w-full h-auto max-w-3xl"
        />

        <div className="text-center text-white text-2xl md:text-4xl font-extralight">
          <p className="max-w-3xl">
            Um encontro para transformar sua forma de comunicar, inovar e
            crescer no mercado!
          </p>
        </div>

        <button
          className="mx-auto md:mx-0 px-8 py-4 bg-[#eb9f1b] text-[#0c0c0b] text-1xl md:text-2xl font-bold rounded-full hover:bg-yellow-400 cursor-pointer transition-colors duration-300"
          onClick={() => handleClick("https://www.sympla.com.br/")}
        >
          GARANTA SEU INGRESSO AGORA
        </button>
      </div>
    </div>
  );
};

export default Hero;
