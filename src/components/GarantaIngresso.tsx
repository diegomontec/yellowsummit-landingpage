import Image from "next/image";

const GarantaIngresso = () => {
    return (
        <section className="relative w-full min-h-[70vh] md:min-h-screen flex flex-col items-center justify-center">
            <Image
                src="/images/backgrounds/BG 7.png"
                alt="Plano de fundo da seção sobre o evento"
                fill
                priority
                className="object-cover -z-10"
            />

            <div className="flex  flex-col max-w-3xl relative text-center justify-center items-center gap-8 sm:gap-10 md:gap-12 px-4">
                <p className="border-[#eb9f1b] border-2 font-semibold rounded-3xl p-4 sm:p-6 text-lg sm:text-2xl md:text-3xl text-white leading-snug">
                    Garanta seu ingresso antecipado e aproveite os lotes promocionais com
                    valor limitado
                </p>
                <div className="relative flex flex-col items-center justify-center">
                    <Image
                        src="/images/elementos/LUZ dobra 7.png"
                        alt="luz de fundo"
                        width={400}
                        height={200}
                        className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 md:w-[600px] h-auto pointer-events-none select-none"
                    />

                    <Image
                        src="/images/elementos/Estrelas.png"
                        alt="estrelas yellow"
                        width={180}
                        height={12}
                        className="relative w-28 sm:w-36 md:w-44 lg:w-56 h-auto"
                    />
                </div>


                <Image
                    src="/images/elementos/Compra segura.png"
                    alt="Compra segura sympla"
                    width={280}
                    height={40}
                    priority
                    className="w-48 sm:w-64 md:w-96 h-auto object-contain"
                />
            </div>
        </section>
    );
};

export default GarantaIngresso;
