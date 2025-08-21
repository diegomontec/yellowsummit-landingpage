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

const Anteriores = () => {
  return (
    <section className="relative w-full md:h-screen py-24 md:py-32 flex flex-col items-center justify-center">
      <Image
        src="/images/backgrounds/BG 5.png"
        alt="Plano de fundo da seção sobre o evento"
        fill
        priority
        className="object-cover"
      />

      <div className="relative flex flex-col items-center justify-center px-8 md:px-12 w-full h-auto gap-12">
        <div className="text-center text-white flex flex-col gap-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-3xl font-normal leading-relaxed text-center">
            Mais que um evento, o <strong>Yellow Summit</strong> é uma
            experiência: credenciamento por reconhecimento facial, estrutura
            moderna, espaço de interação e momentos para gerar conexões que
            <strong>podem mudar o futuro do seu negócio</strong>
          </p>
        </div>
        <div className="relative flex flex-col md:flex-row gap-8 px-6 md:px-12 w-full max-w-7xl items-center justify-center">
          {pessoas.map((pessoa, index) => (
            <div key={index} className="w-full">
              <Image
                src={pessoa.src}
                alt={pessoa.alt}
                width={1080}
                height={1080}
                priority
                className="w-full h-auto border-2 border-[#eb9f1b] rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Anteriores;
