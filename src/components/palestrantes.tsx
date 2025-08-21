import Image from "next/image";

const pessoas = [
  {
    src: "/images/elementos/Pessoas (1).png",
    alt: "Diretora comercial",
  },
  {
    src: "/images/elementos/Pessoas (2).png",
    alt: "Diretor de marketing",
  },
  {
    src: "/images/elementos/Pessoas (3).png",
    alt: "CEO e Cofundador - build",
  },
];

const Beneficios = () => {
  return (
    <section className="relative w-full h-screen py-24 md:py-32 flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/BG 4.png"
          alt="Plano de fundo da seção benefícios"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="relative flex flex-col md:flex-row gap-8 px-6 md:px-12 w-full max-w-7xl items-center justify-center">
        {pessoas.map((pessoa, index) => (
          <div key={index} className="w-full md:w-1/3">
            <Image
              src={pessoa.src}
              alt={pessoa.alt}
              width={1080}
              height={1534}
              priority
              className="w-full h-auto border-2 border-[#eb9f1b] rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Beneficios;
