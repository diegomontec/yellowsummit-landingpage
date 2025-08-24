import Image from "next/image";

const Sobre = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center">
      <Image
        src="/images/backgrounds/BG 6.png"
        alt="Plano de fundo da seção sobre o evento"
        fill
        priority
        className="object-cover overflow-hidden"
      />

      <div className="relative items-center text-left md:text-center justify-center px-8 md:px-18 w-full gap-16 text-[#ebaa25] font-bold flex flex-col max-w-5xl">
          <p className="text-4xl md:text-5xl ">+350 participantes em 2024</p>
          <p className="text-5xl md:text-6xl text-white">80% avaliaram o evento como excelente</p>
          <p className="text-4xl md:text-5xl">Negócios e parcerias gerados a partir do networking no evento</p>
      </div>

    </section>
  );
};

export default Sobre;
