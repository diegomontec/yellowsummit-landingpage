import Hero from "@/components/hero";
import Sobre from "@/components/sobre";
import Beneficios from "@/components/beneficios";
import Palestrantes from "@/components/palestrantes";
import Anteriores from "@/components/anteriores";
import QTDParticipantes from "@/components/QTDParticipantes";

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
        <Sobre />
        <Beneficios />
        <Palestrantes />
        <Anteriores />
        <QTDParticipantes />
      </div>
    </main>
  );
}
