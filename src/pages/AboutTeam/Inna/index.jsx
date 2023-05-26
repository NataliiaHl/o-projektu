import React from 'react';
import './style.css'


const Inna = () => {
  return (
    <div className='author__card'>
      <div className='author__container'>
        <div className='author__header'>
          <h2>Inna Červenková</h2>
          <img className='author__photo'
            src={require('../img/inna.png')}
            alt="Inna Červenková - profile picture" />
        </div>
        <p className='author__text'>
          Jsem mix kultur, profesí a zájmů - člověk, který rád létá vysoko, ale stojí pevně nohama na zemi.
        </p>
        <p className='author__text'>
          Vystudovala jsem ekonomický obor se zaměřením na leteckou dopravu a nějakou dobu jsem se pohybovala ve vzduchu jako letuška.
          Poté, co COVID zasáhl letecký průmysl, rozhodla jsem se hledat uplatnění v jiném oboru a nakonec jsem se nadchla pro webovy vyvoj.
        </p>
        <p className='author__text'>
          Kromě IT a létání mám také ráda cestování, neustálé zdokonalování se, aktivní životní styl a přírodu.Relaxuji hrou na klavír a posloucháním saxofonové hudby.
        </p>


        <div className='author__socials'>
          <a className='social__links' href="https://github.com/ICerv" target="blank">
            <img className='socials__icon-github'
              src={require('../img/github.png')}
              alt="Icon GitHub" />
          </a>
          <a className='social__links' href="mailto:inna.cervenkova@gmail.com" target="blank">
            <img className='socials__icon-email'
              src={require('../img/email.png')}
              alt="Icon E-mail" />
          </a>
          <a className='social__links' href="https://www.linkedin.com/in/inna-%C4%8Dervenkov%C3%A1-739307275/" target="blank">
            <img className='social__icon-linkedin'
              src={require('../img/linkedin.png')}
              alt="Icon Linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Inna;