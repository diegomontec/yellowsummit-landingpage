import Image from "next/image";

const Sobre = () => {
  return (
    <section className="relative w-full py-24 md:h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/backgrounds/BG 2.png"
        alt="Plano de fundo da seção sobre o evento"
        fill
        priority
        className="object-cover"
      />

      <div className="relative flex flex-col items-center justify-center px-8 md:px-12 w-full h-auto gap-12">
        <div className="text-center text-[#0c0c0b] flex flex-col gap-12 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-bold">Sobre o evento</h2>
          <p className="text-lg md:text-3xl font-normal leading-relaxed text-left">
           O <strong>Yellow Summit</strong> reúne empresários
            e profissionais para explorar como fortalecimento de marca,
            comunicação integrada e estratégia digital estão transformando
            negócios no Brasil. É um dia de{" "}
            <strong>aprendizado, conexões e inovação</strong> no Centro de
            Inovação de Alagoas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
