import React from "react";
import './style.css'


const AboutProject = () => {

  return (
    <section className="project-section active">
      <h1 className="project-title">O projektu</h1>
      <div className="project-content">
        <p className="project-text">
          FastFingers je aplikace zaměřená na zdokonalování schopností psaní na klávesnici všemi deseti.
        </p>
        <p className="project-text">
          Většina z nás, kteří používáme počítače, jistě vyzkoušela nějakou aplikaci pro psaní všemi deseti. Ale jen málokdo vydržel celý nudný výukový proces a skutečně dosáhl pokroku v ovládání této dovednosti. My jsme se právě staly jedněmi z těch, kdo to nakonec vzdaly. Proto jsme si řekly, že když už jsme se nadchly pro IT a práce s klávesnicí se stala naší denní rutinou, měly bychom se naučit tuto dovednost a usnadnit si tak práci. To nás přivedlo k myšlence vytvořit vlastní aplikaci, která nás k tomu bude motivovat a zároveň nabídne možnost všem, kteří by si chtěli vylepšit své schopnosti psaní.
        </p>
        <p className="project-text">
          Práce na aplikaci nám umožní nadále rozšiřovat a zdokonalovat naše technické dovednosti prostřednictvím implementace her a dalších inovativních funkcionalit.
        </p>
        <h1 className="project-title">Proces vývoje aplikace</h1>
        <p className="project-text">
          Aplikace bude obsahovat pravidla, cvičení, testy a hry zaměřené na konkrétní dovednosti, které si uživatelé budou moci vybrat, nastavit vlastní tempo a úroveň obtížnosti, aby si trénink mohli přizpůsobit svým potřebám.
        </p>
        <p className="project-text">
          Při cvičení se na obrazovce zobrazí text, který by měl uživatel přepsat na klávesnici. Pro zvýšení interaktivity bude na obrazovce také zobrazen obrázek rukou, který ukáže, který prst použít pro stisknutí jednotlivých kláves. Klávesnice bude zobrazena s vyznačením aktuálně potřebného znaku a příslušného prstu na obrázku ruky. Po absolvování testu obdrží uživatel vyhodnocení svého výkonu, které zahrnuje počet chyb a rychlost psaní.
        </p>
        <h3 className="project-subtitle">Fáze vývoje:</h3>
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
                Provedly jsme analýzu existujících aplikací s podobnou funkcionalitou, abychom identifikovaly  mezery a slabé stránky.
              </li>
              <li>
                S pomocí mentorů jsme vytvořily plán a navrhly architekturu aplikace s funkcionalitami.
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
                Navrhly jsme uživatelské rozhraní pomocí nástroje Figma s důrazem na jednoduchost, intuitivnost a přehlednost pro snadné a efektivní využívání aplikace. Pro grafiku jsme využily vlastní fotografie upravené za pomoci Photoshopu.
              </li>
            </ul>
          </li>
          <li>
            Implementace:
            <ul className="custom-ul">
              <li>S podporou Reactu jsme začaly implementovat jednotlivé komponenty.</li>
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
              <li>Vytvoření detailní dokumentace k aplikaci obsahující popis funkcí, použitých technologií a postupů.</li>
            </ul>
          </li>
        </ol>
      </div>
      <div className="project-gallery">
        <div className="gallery-firstcolumn">
          <img
            src={require('./img/prototype_homepage.png')}
            alt="prototype Home Page" />
          <img
            src={require('./img/prototype_exercise.png')}
            alt="prototype Exercise" />
        </div>
        <div className="gallery-secondcolumn">
          <img
            src={require('./img/prototype_login.png')}
            alt="prototype Login" />
          <img
            src={require('./img/prototype_exercise2.png')}
            alt="prototype Exercise List" />
          <img
            src={require('./img/prototype_test.png')}
            alt="prototype Test" />
        </div>
      </div>
    </section >
  )
}

export default AboutProject;