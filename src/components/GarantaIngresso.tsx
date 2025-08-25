import Image from "next/image";

const GarantaIngresso = () => {
    return (
      <section className="relative w-full py-42 px-8 flex flex-col items-center justify-center">
        <Image
          src="/images/backgrounds/BG 7.png"
          alt="Plano de fundo da seção sobre o evento"
          fill
          priority
          className="object-cover -z-10"
        />
        <Image
          src="/images/elementos/LUZ dobra 7.png"
          alt="luz de fundo"
          width={400}
          height={200}
          className="absolute top-3/5 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 md:w-[600px] h-auto pointer-events-none select-none"
        />

        <div className="flex flex-col max-w-3xl relative text-center justify-center items-center gap-16">
          <p className="border-[#eb9f1b] border-2 font-semibold rounded-3xl p-4 text-lg sm:text-2xl md:text-3xl text-white leading-snug">
            Garanta seu ingresso antecipado e aproveite os lotes promocionais
            com valor limitado
          </p>
          <div className="relative flex flex-col items-center justify-center">
            <Image
              src="/images/elementos/Estrelas.png"
              alt="estrelas yellow"
              width={180}
              height={12}
              className="relative w-30 sm:w-36 md:w-44 lg:w-56 h-auto"
            />
          </div>

          <Image
            src="/images/elementos/Compra segura.png"
            alt="Compra segura sympla"
            width={632}
            height={120}
            priority
            className="w-64 md:w-92 h-auto object-contain"
          />
        </div>
      </section>
    );
};

export default GarantaIngresso;
