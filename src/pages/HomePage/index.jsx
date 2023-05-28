import React from "react";
import { useState, useEffect } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import TypeWriterEffect from 'react-typewriter-effect';
import './style.css'


const HomePage = () => {
  const banner = "Program pro trénink psaní na klávesnici";

  const textState = ["istyping", "isdeleting"];
  const [typing, setTyping] = useState(textState[0]);

  const [text, setText] = useState("");

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "istyping" && text !== banner) {
        setText(banner.slice(0, text.length + 1));
      } else if (text === banner && typing === "istyping") {
        sleep(2000).then(() => {
          setTyping(textState[1]);
        });
      } else if (
        (text === banner && typing === "isdeleting") ||
        typing === "isdeleting"
      ) {
        setText(banner.slice(0, text.length - 1));
        if (text.length <= 2) {
          setTyping(textState[0]);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [text, typing]);

  return (
    <section className="homepage-section active">
      <div className="homepage">
        <h1 className="homepage-heading">
          <SyntaxHighlighter className="blinking-cursor" >
            {text}
          </SyntaxHighlighter>
        </h1>
        <TypeWriterEffect
          textStyle={{ fontFamily: 'Red Hat Display' }}
          startDelay={100}
          cursorColor="black"
          text=""
          typeSpeed={100}
          eraseSpeed={100}
        />
        <p className="homepage-subheading">
          Zlepši své psaní a získej nejen rychlost, přesnost a schopnost psát naslepo, ale zvýš svou produktivitu a šanci na trhu práce.
        </p>
      </div>
      <div className="homepage-image" >
        <img src="./img/laptop.png" alt="laptop_photo" />
      </div>
    </section>

  )
}

export default HomePage