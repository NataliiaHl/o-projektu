import React from "react";
import './style.css'


const HomePage = () => {
  return (
    <section className="homepage-section active">
      <div className="homepage-heading">
        <h1>Program pro trénink psaní na klávesnici</h1>
        <p>
          Zlepši své psaní a získej nejen rychlost, přesnost a schopnost psát naslepo, ale diky <span>FastFingers</span> zvýšíš produktivitu a šanci na trhu práce
        </p>
      </div>
      <div className="homepage-image" >
        <img src="./img/laptop.png" alt="laptop_photo" />
      </div>
    </section>

  )
}

export default HomePage