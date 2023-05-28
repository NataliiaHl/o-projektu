import React from "react";
import './style.css'


const AboutProject = () => {

  return (
    <section className="project-section active">
      <h1 className="project-title">O projektu</h1>
      <div className="project-content">
        <p className="project-text">
          FastFingers je aplikace zaměřena na zdokonalování psacích schopností na klávesnici všemi deseti.
        </p>
        <p className="project-text">
          Většina z nás, kteří používáme počítače, jistě vyzkoušela nějakou aplikaci na psaní všemi deseti. Ale jen málokdo vydržel celý nudný výukový proces a skutečně dosáhl pokroku v ovládání této dovednosti. My jsme se právě stali jedněmi z těch, kdo to nakonec vzdali. Proto jsme si řekli, že když už jsme nadšení pro IT a práce s klávesnicí se stala naší denní rutinou, měli bychom se naučit této dovednosti a usnadnit si tak práci. To nás přivedlo k myšlence vytvořit vlastní aplikaci, která nás bude k tomu motivovat a zároveň nabídnout možnost všem, kteří by si chtěli vylepšit své psací schopnosti.
        </p>
        <p className="project-text">
          Jedním z dalších našich cílů bylo vytvořit aplikaci, která nám umožní nadále rozšiřovat a zdokonalovat naše technické dovednosti prostřednictvím implementace her, klávesových zkratek a dalších inovativních funkcionalit.
        </p>
        <h1 className="project-title">Proces vyvoje aplikace</h1>
        <p className="project-text">
          Aplikace bude obsahovat pravidla, cvičení, testy a hry zaměřené na konkrétní dovednosti, které si uživatelé budou moci vybrat a nastavit vlastní tempo a úroveň obtížnosti, aby si trénink mohli přizpůsobit svým potřebám.
        </p>
        <p className="project-text">
          Při cvičení se na obrazovce zobrazí text, který uživatel by měl přepsat na klávesnici. Pro zvýšení interaktivity bude na obrazovce také zobrazen obrázek ruky, který ukazuje, který prst použít pro stisknutí jednotlivých kláves. Klávesnice bude zobrazena s vyznačením aktuálně potřebného znaku a příslušného prstu na obrázku ruky. Po absolvování testu obdrží uživatel vyhodnocení svého výkonu, které zahrnuje počet chyb a rychlost psaní.
        </p>
        <h3 className="project-subtitle">Fáze vyvoje:</h3>
        <ol className="custom-ol">
          <li>
            Úvod:
            <ul className="custom-ul">
              <li>Stručný popis aplikace FastFingers a jejího účelu.</li>
              <li>Specifikace cílové skupiny uživatelů.</li>
            </ul>
          </li>
          <li>
            Analýza a plánování:
            <ul className="custom-ul">
              <li>
                Provedli jsme analýzu existujících aplikací s podobnou funkcionalitou a identifikovali jsme mezery a slabé stránky, které bychom mohli vylepšit.
              </li>
              <li>
                S pomocí mentoru jsme vytvořili plán a navrhli architekturu aplikace s funkcionalitami.
              </li>
              <li>
                S využitím nástroje Trello udržujeme přehled o celém procesu vývoje.
              </li>
            </ul>
          </li>
          <li>
            Návrh uživatelského rozhraní:
            <ul className="custom-ul">
              <li>
                Navrhli jsme uživatelské rozhraní pomocí nástroje Figma s důrazem na jednoduchost, intuitivnost a přehlednost pro snadné a efektivní využívání aplikace.
              </li>
            </ul>
          </li>
          <li>
            Implementace:
            <ul className="custom-ul">
              <li>S podporou Reactu jsme začali implementovat jednotlivé komponenty.</li>
            </ul>
          </li>
          <li>
            Testování a ladění:
            <ul className="custom-ul">
              <li>Během implementace jednotlivých částí kódu provádíme důkladné testování, kdy na základě různých scénářů ověřujeme správnou funkčnost aplikace.</li>
            </ul>
          </li>
          <li>
            Dokumentace:
            <ul className="custom-ul">
              <li>Vytvoření detailní dokumentace k aplikaci FastFingers obsahující popis funkcí, použitých technologií a postupů.</li>
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