import Image from "next/image";

const Card = () => {
  return (
    <div className="relative text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 w-full max-w-7xl">
      {/* Card 1 */}
      <div className="border-2 rounded-2xl border-[#eb9f1b]">
        <Image
          src="/images/elementos/Viviane.png"
          alt="Viviane"
          width={600}
          height={400}
          className="rounded-t-2xl w-full h-auto"
        />
        <div className="flex flex-col justify-center text-center p-4 sm:p-6 md:p-8 gap-2 sm:gap-3">
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold">
            Viviane de Castro
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Diretora Comercial - Animale
          </p>
          <p className="text-sm sm:text-base md:text-lg text-left leading-relaxed">
            Executiva com mais de 17 anos no varejo, hoje lidera a estratégia e
            performance dos canais físico e digital da Animale (Grupo Azzas
            2154). Reconhecida pela liderança transformacional, visão
            omnichannel e experiência em CRM, é referência em inovação e
            experiência do cliente.
          </p>
        </div>
      </div>

      <div className="border-2 rounded-2xl border-[#eb9f1b]">
        <Image
          src="/images/elementos/Vitor Peçanha.png"
          alt="Vitor"
          width={600}
          height={400}
          className="rounded-t-2xl w-full h-auto"
        />
        <div className="flex flex-col justify-center text-center p-4 sm:p-6 md:p-8 gap-2 sm:gap-3">
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold">
            Vitor Peçanha
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            Diretor de Marketing - Nuvemshop
          </p>
          <p className="text-sm sm:text-base md:text-lg text-left leading-relaxed">
            Vitor Peçanha é diretor de marketing da Nuvemshop, co-fundador da
            Rock Content e fundador da PbyP School. É um dos líderes de
            marketing digital mais reconhecidos do Brasil, com mais de 600 mil
            alunos em seus cursos online, palestras nacionais e internacionais e
            autor do best-seller 'Obrigado pelo Marketing'.
          </p>
        </div>
      </div>

      <div className="border-2 rounded-2xl border-[#eb9f1b]">
        <Image
          src="/images/elementos/Paulo Camêllo.png"
          alt="Paulo Camêllo"
          width={600}
          height={400}
          className="rounded-t-2xl w-full h-auto"
        />
        <div className="flex flex-col justify-center text-center p-4 sm:p-6 md:p-8 gap-2 sm:gap-3">
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold">
            Paulo Thiago Camêllo
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            CEO & Cofundador - Build
          </p>
          <p className="text-sm sm:text-base md:text-lg text-left leading-relaxed">
            Mentor de Marketing Digital do programa Startup SC do Sebrae Santa
            Catarina. Professor de Marketing Digital da pós-graduação da Unigran
            Capital (Campo Grande) e de Marketing de Conteúdo da Sustentare
            Escola de Negócios. Idealizador do RD Summit Live Show, projeto de
            real time mkt executado durante as edições do RD Summit 2018 e 2019.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
