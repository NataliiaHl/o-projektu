import React from "react";
import './style.css'


const AboutProject = () => {

  return (
    <section className="project-section active">
      <h1 className="project-title">O projektu</h1>
      <div className="project-content">
        <h1 className="project-title">O projektu</h1>
        <p>
          FastFingers je aplikace zaměřena na zdokonalování psacích schopností na klávesnici všemi deseti prsty.
        </p>
        <p>
          Většina z nás, kteří používáme počítače, jistě vyzkoušela nějakou aplikaci na psaní všemi deseti. Ale jen málokdo vydržel celý nudný výukový proces a skutečně dosáhl pokroku v ovládání této dovednosti. My jsme se právě stali jedněmi z těch, kdo to nakonec vzdali. Proto jsme si řekli, že když už jsme nadšení pro IT a práce s klávesnicí se stala naší denní rutinou, měli bychom se naučit této dovednosti a usnadnit si tak práci. To nás přivedlo k myšlence vytvořit vlastní aplikaci, která nás bude k tomu motivovat a zároveň nabídnout možnost všem, kteří by si chtěli vylepšit své psací schopnosti. Zároveň jsme měli za cíl vytvořit aplikaci, která nám umožní dále rozšiřovat a zdokonalovat naše technické dovednosti prostřednictvím implementace her a inovativních funkcí.
        </p>
        <p>
          Velmi atraktivním prvkem pro nás je využití této aplikace pro generování textů pomocí umělé inteligence. Kdy uživatel nebude pouze opisovat statická cvičení, ale bude mít možnost vytvářet dynamické a poutavé texty, které se přizpůsobují jejich zajmu a kreativite.
        </p>
        <h1 className="project-title">Proces vyvoje aplikace</h1>
        <p>
          Aplikace bude obsahovat pravidla, cvičení, testy a hry zaměřené na konkrétní dovednosti, které si uživatelé budou moci vybrat a nastavit vlastní tempo a úroveň obtížnosti, aby si trénink mohli přizpůsobit svým potřebám.
          Při cvičení se na obrazovce zobrazí text, který uživatel bude muset přepsat na klávesnici. Pro zvýšení interaktivity bude na obrazovce také zobrazen obrázek ruky, který ukazuje, který prst použít pro stisknutí jednotlivých kláves. Klávesnice bude zobrazena s vyznačením aktuálně potřebného znaku a příslušného prstu na obrázku ruky. Po absolvování testu obdrží uživatel vyhodnocení svého výkonu, které zahrnuje počet chyb a rychlost psaní.
        </p>
        <h3>Proces vyvoje aplikace FastFingers jsme rozdělili do několika fází:</h3>
        <ol>
          <li>
            Úvod:
            <ul>
              <li>Stručný popis aplikace FastFingers a jejího účelu.</li>
              <li>Specifikace cílové skupiny uživatelů.</li>
            </ul>
          </li>
          <li>
            Analýza a plánování:
            <ul>
              <li>
                Provedli jsme analýzu existujících aplikací s podobnou funkcionalitou a identifikovali jsme mezery a slabé stránky, které bychom mohli vylepšit.
              </li>
              <li>
                S pomocí mentora jsme vytvořili plán a navrhli architekturu aplikace s funkcionalitami.
              </li>
              <li>
                S využitím nástroje Trello udržujeme přehled o celém procesu vývoje.
              </li>
            </ul>
          </li>
          <li>
            Návrh uživatelského rozhraní:
            <ul>
              <li>
                Navrhli jsme uživatelské rozhraní pomocí nástroje Figma s důrazem na jednoduchost, intuitivnost a přehlednost pro snadné a efektivní využívání aplikace.
              </li>
            </ul>
          </li>
          <li>
            Implementace:
            <ul>
              <li>S podporou Reactu jsme začali implementovat jednotlivé komponenty.</li>
            </ul>
          </li>
          <li>
            Testování a ladění:
            <ul>
              <li>Během implementace provádíme důkladné testování, kdy na základě různých scénářů ověřujeme správnou funkčnost aplikace.</li>
            </ul>
          </li>
          <li>
            Dokumentace:
            <ul>
              <li>Plánujeme vytvořit dokumentaci k aplikaci FastFingers obsahující popis funkcí, použitých technologií a postupů.</li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="project-gallery">
        <div className="gallery-firstcolumn">
          <img src="./img/prototype_homepage.png" alt="prototype Home Page" />
          <img src="./img/prototype_exercise.png" alt="prototype Exercise" />
        </div>
        <div className="gallery-secondcolumn">
          <img src="./img/prototype_login.png" alt="prototype Login" />
          <img src="./img/prototype_exercise2.png" alt="prototype Exercise List" />
          <img src="./img/prototype_test.png" alt="prototype Test" />
        </div>
      </div>
    </section >
  )
}

export default AboutProject