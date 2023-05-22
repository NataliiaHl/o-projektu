import React from "react";
import './style.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const AboutProject = () => {
  return (
    <div>
      <Header />
      <main>
        <h1 className="title">O projektu</h1>
        <p>
          Naší cílovou skupinou jsou všichni, kteří chtějí zlepšit své psaní na klávesnici a získat nejen rychlost, přesnost a schopnost psát naslepo, ale i zvýšit produktivitu a šanci na trhu práce.
        </p>
        <p>
          FastFingers - aplikaci pro výuku psaní deseti prsty. Tato aplikace slouží k efektivnímu zlepšování dovedností psaní na klávesnici.
        </p>
        <p>
          Aplikace bude obsahovat pravidla, cvičení a testy, které provedou uživatele procesem učení a zdokonalování psacích schopností.
          Při cvičeních se uživatelů zobrazí text, který bude musit přepsat na klávesnici. Klávesnice bude na obrazovce zobrazena spolu s obrázkem ruky, která bude ukazovat, který prst použít pro stisknutí jednotlivých kláves. Znak, který je právě potřeba napsat, bude vyznačen na klávesnici a příslušný prst na obrázku ruky.
        </p>
        <p>
          Testy ve FastFingers budou rozděleny podle úrovně obtížnosti, což umožní postupovat od jednodušších cvičení až po náročnější úlohy. Po absolvování testu uživatel obdrží podrobné vyhodnocení výkonu, které zahrnuje počet chyb a rychlost psaní.
        </p>
      </main>
      <Footer />
    </div>
  )
}

export default AboutProject