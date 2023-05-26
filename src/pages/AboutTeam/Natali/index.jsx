import React from 'react'

const Natali = () => {
  return (
    <div className='author__card'>
      <div className='author__container'>
        <div className='author__header'>
          <h2>Nataliia Hladii</h2>
          <img className='author__photo'
            src={require('../img/Natali.jpg')}
            alt="Nataliia Hladii - profile picture" />
        </div>
        <p className='author__text'>
            Jsem Ukrajinka, ale už rok bydlím v Praze a moc se mi tu líbí. Jsem pozitivní holka, vždy otevřená novým věcem.
        </p>
        <p className='author__text'>
            Vystudovala jsem práva na univerzitě a pracovala jako právníčka dokud jsem si neuvědomila, že to není pro mě. Pak jsem si vyzkoušela grafický design. A pak se rozhodla jít do oblasti IT. Nyní pracuju v ukrajinské IT společnosti v uživatelské podpoře a chci začít svou cestu ve vývoji webu.
        </p>
        <p className='author__text'>
            Ráda se učím něco nového. Miluji umění a hudbu. Mezi mé koníčky patří jóga, knihy a vaření. Ráda také trávím čas v přírodě, cestuji a poznávám nová místa.
        </p>


        <div className='author__socials'>
          <a className='social__links' href="https://github.com/NataliiaHl" target="blank">
            <img className='socials__icon-github'
              src={require('../img/github.png')}
              alt="Icon GitHub" />
          </a>
          <a className='social__links' href="mailto:natalia14101995@gmail.com" target="blank">
            <img className='socials__icon-email'
              src={require('../img/email.png')}
              alt="Icon E-mail" />
          </a>
          <a className='social__links' href="https://www.linkedin.com/in/nataliia-hladii-87a5b6266/" target="blank">
            <img className='social__icon-linkedin'
              src={require('../img/linkedin.png')}
              alt="Icon Linkedin" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Natali;