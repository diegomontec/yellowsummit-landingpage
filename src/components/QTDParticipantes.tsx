import Image from "next/image";

const Sobre = () => {
  return (
    <section className="relative w-full min:h-screen py-24 md:py-48 flex flex-col items-center justify-center">
      <Image
        src="/images/backgrounds/BG 6.png"
        alt="Plano de fundo da seção sobre o evento"
        fill
        priority
        className="object-cover overflow-hidden"
      />

      <div className="relative items-center text-center justify-center px-8 md:px-18 w-full gap-8 text-[#ebaa25] flex flex-col max-w-3xl">
          <p className="text-3xl md:text-4xl font-bold">+350 participantes em 2024</p>
          <p className="text-4xl md:text-5xl text-white font-bold">80% avaliaram o evento como excelente</p>
          <p className="text-3xl md:text-4xl font-bold">Negócios e parcerias gerados a partir do networking no evento</p>
      </div>

    </section>
  );
};

export default Sobre;
