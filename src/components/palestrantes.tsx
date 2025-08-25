import Image from "next/image";
import Card from "./Card";

const Beneficios = () => {
  return (
    <section className="relative w-full min-h-screen py-24 px-8 flex flex-col items-center justify-center gap-16">
      <h2 className="text-4xl md:text-6xl text-[#eb9f1b] font-bold">
        Nossos palestrantes
      </h2>
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
      <Card />
    </section>
  );
};

export default Beneficios;
