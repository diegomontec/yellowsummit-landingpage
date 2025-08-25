import Image from "next/image";

const Sobre = () => {
  return (
    <section className="relative w-full py-24 min:h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/backgrounds/BG 2.png"
        alt="Plano de fundo da seção sobre o evento"
        fill
        priority
        className="object-cover"
      />

      <div className="relative flex flex-col items-center justify-center px-8 md:px-12 w-full h-auto gap-12">
        <div className="text-center text-[#0c0c0b] flex flex-col gap-12 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold">Sobre o evento</h2>
          <p className="text-lg md:text-2xl font-normal leading-relaxed text-left">
            Na sua 2ª edição, o <strong>Yellow Summit</strong> reúne empresários
            e profissionais para explorar como fortalecimento de marca,
            comunicação integrada e estratégia digital estão transformando
            negócios no Brasil. É um dia de{" "}
            <strong>aprendizado, conexões e inovação</strong> no Centro de
            Inovação de Alagoas.
          </p>
        </div>

        <Image
          src="/images/elementos/Botão dobra 2.png"
          alt="Botão para participação no evento Yellow Summit"
          width={1235}
          height={174}
          priority
          className="w-full max-w-3xl"
        />
      </div>
    </section>
  );
};

export default Sobre;
