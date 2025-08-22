import Image from "next/image";
import Card from "./Card";

const pessoas = [
  { src: "/images/elementos/Pessoas (1).png", alt: "Diretora comercial" },
  { src: "/images/elementos/Pessoas (2).png", alt: "Diretor de marketing" },
  { src: "/images/elementos/Pessoas (3).png", alt: "CEO e Cofundador - build" },
];

const Beneficios = () => {
  return (
    <section className="relative w-full min-h-screen py-24 md:py-32 flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/BG 6.png"
          alt="Plano de fundo da seção benefícios"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <Card/>
    </section>
  );
};

export default Beneficios;
