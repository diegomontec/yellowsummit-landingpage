import Image from "next/image";

const Footer = () => {
  return (
    <section className="relative w-full md:h-screen py-24 flex flex-col items-center justify-center">
      <Image
        src="/images/backgrounds/BG 8.png"
        alt="Plano de fundo da seção sobre o evento"
        fill
        priority
        className="object-cover -z-10 h-100vh "
      />

      <div className="flex flex-col max-w-4xl relative text-center justify-center items-center gap-8 md:gap-12 px-4">
        <div className="flex flex-col text-center justify-center items-center gap-4">
          <Image
            src="/images/elementos/EStrelas pretas.png"
            alt="estrelas yellow"
            height={24}
            width={200}
            className="w-40 sm:w-52 md:w-72 h-auto"
          />

          <p className="text-2xl sm:text-3xl md:text-5xl text-black font-semibold leading-tight">
            O futuro dos negócios em Alagoas passa pelo{" "}
            <strong>Yellow Summit 2025</strong>
          </p>
        </div>

        <p className="text-xl sm:text-2xl md:text-4xl text-black font-semibold">
          Você vai ficar de fora?
        </p>

        <a
          className="px-8 py-4 border-2 border-black bg-[#0c0c0b] text-[#eb9f1b] text-base sm:text-xl md:text-2xl font-bold rounded-full hover:bg-[#2c2525] cursor-pointer transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.sympla.com.br/evento/yellow-summit-2025/3084245?=&utm_source=facebook-ads&utm_medium=02%20%7C%20ALL%20%7C%20ADVANTAGE%2B%20%7C%2024-50%20%7C%20Macei%C3%B3&utm_content=0001%20%7C%20EST%20%7C%20Card%20inicial&utm_campaign=YK%20%20%7C%20VENDAS%20%7C%2001%20%7C%20Yellow%20Summit%20%7C%202025-08-22&utm_term=Instagram_Feed&utm_id=120235101190510029&fbclid=PAZXh0bgNhZW0BMABhZGlkAaspMbmq4K0Bp4XK3iYTLZe13ZooEaprJm5HQU-LqGYlityvRzswgBZts9Xh4Y8UwMmGd0gx_aem__YPyFFslKTjC5l3ZTU7YWg&referrer=instagram.com"
        >
          Compre seu ingresso agora no Sympla
        </a>
      </div>
    </section>
  );
};

export default Footer;
