import React from "react";
import './style.css'


const AboutProject = () => {

  return (
    <section className="project-section active">
      <h1 className="project-title">O projektu</h1>
      <div className="project-content">
        <p>
          FastFingers - aplikace pro výuku psaní deseti prsty. Tato aplikace slouží k efektivnímu zlepšování dovedností psaní na klávesnici.
        </p>
        <p>
          Naší cílovou skupinou jsou všichni, kteří chtějí zlepšit své psaní na klávesnici a získat nejen rychlost, přesnost a schopnost psát naslepo, ale i zvýšit produktivitu a šanci na trhu práce.
        </p>
        <p>
          Aplikace bude obsahovat pravidla, cvičení a testy, které provedou uživatele procesem učení a zdokonalování psacích schopností.
          Při cvičeních se uživatelů zobrazí text, který bude musit přepsat na klávesnici. Klávesnice bude na obrazovce zobrazena spolu s obrázkem ruky, která bude ukazovat, který prst použít pro stisknutí jednotlivých kláves. Znak, který je právě potřeba napsat, bude vyznačen na klávesnici a příslušný prst na obrázku ruky.
        </p>
        <p>
          Testy ve FastFingers budou rozděleny podle úrovně obtížnosti, což umožní postupovat od jednodušších cvičení až po náročnější úlohy. Po absolvování testu uživatel obdrží podrobné vyhodnocení výkonu, které zahrnuje počet chyb a rychlost psaní.
        </p>
      </div>
      <div className="project-gallery">
        <img src="./img/prototype_homepage.png" alt="prototype HomePage" />
        <img src="./img/prototype_exercise1.png" alt="prototype exercise1" />
        <img src="./img/prototype_exercise2.png" alt="prototype exercise2" />
        <img src="./img/prototype_test.png" alt="prototype Test" />
      </div>
    </section >
  )
}

export default AboutProject