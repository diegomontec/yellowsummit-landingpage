import Image from "next/image";

const Beneficios = () => {
  return (
    <section className="relative w-full min:h-screen py-32 flex flex-col items-center justify-center">
      <Image
        src="/images/backgrounds/BG 3.png"
        alt="Plano de fundo da seção sobre o evento"
        fill
        priority
        className="object-cover"
      />

      <div className="relative flex flex-col items-center justify-center px-8 md:px-12 w-full h-auto">
        <Image
          src="/images/elementos/TXD Dobra 3.png"
          alt="Descrição dos benefícios do evento"
          width={1154}
          height={721}
          priority
          className="w-full max-w-4xl"
        />
      </div>
    </section>
  );
};

export default Beneficios;
