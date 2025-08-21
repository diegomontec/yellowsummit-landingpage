// import Button from "@/app/components/button/Button";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/backgrounds/BG 1.png"
        alt="background hero"
        fill
        priority
        className="object-cover"
      />

      <div className="relative flex flex-col items-center justify-center w-full h-full gap-16">
        <p className="text-white">O futuro dos negócios COMEÇA AQUI</p>
        <Image
            src="/images/elementos/Yellow Summit lOGO.png"
            alt="Logo Yellow Summit"
            width={742}
            height={305}
            priority
            className="w-full max-w-[742px] h-auto px-12"
            />
      </div>
    </div>
  );
};

export default Hero;

{
  /* <Button
            className="mx-auto md:mx-0"
            onClick={() => { const section = document.getElementById("formulario");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Você, o chef da casa!
          </Button> */
}
