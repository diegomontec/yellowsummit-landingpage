import Image from "next/image";

const pessoas = [
  {
    src: "/images/elementos/yellowsummit02.jpg",
    alt: "Diretora comercial",
  },
  {
    src: "/images/elementos/yellowsummit01.jpg",
    alt: "Diretor de marketing",
  },
  {
    src: "/images/elementos/yellowsummit03.jpg",
    alt: "CEO e Cofundador - build",
  },
];

const Anteriores = () => {
  return (
    <section className="relative w-full  py-24 flex flex-col items-center justify-center">
      <Image
        src="/images/backgrounds/BG 5.png"
        alt="Plano de fundo da seção sobre o evento"
        fill
        priority
        className="object-cover"
      />

      <div className="relative flex flex-col items-center justify-center px-8 md:px-12 w-full gap-16">
        <div className="text-center text-white flex flex-col gap-12 max-w-4xl">
          <p className="text-lg md:text-3xl font-normal leading-relaxed md:text-center text-left">
            Mais que um evento, o{" "}
            <span className="text-[#eb9f1b]">
              <strong>Yellow Summit</strong>
            </span>{" "}
            é uma experiência: credenciamento por reconhecimento facial,
            estrutura moderna, espaço de interação e momentos para gerar
            conexões que <strong>podem mudar o futuro do seu negócio</strong>
          </p>
        </div>
        <div className="relative flex flex-col md:flex-row gap-16 items-center justify-center">
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
