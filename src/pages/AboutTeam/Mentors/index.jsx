import React from "react";
import './style.css';

const Mentors = () => {
    return (
        <div className='mentors__card'>
            <div className="mentors__container">
                <h2>Naše práce s mentory</h2>
                <p className="mentors_text">
                    Máme velké štěstí, že máme tak výjimečné a ochotné mentory -<strong> Martin Havel </strong> a <strong>Lam Tran</strong>, kteří se aktivně zapojují do naší práce. Díky nim společně tvoříme <em>silný tým</em>. S jejich podporou se každé setkání v příjemných prostorách
                    <a className="vnitroblok" href="https://vnitroblock.cz/" target="blank"><strong> Vnitrobloku </strong></a>
                    stává neocenitelným zdrojem inspirace, ktere nám pomáhají stávat se lepšími a rozvíjet naše schopnosti.
                </p>
                <img className="mentors_photo"
                    src={require('../img/mentors1.jpg')}
                    alt="Photo with mentors" />
            </div>
        </div>
    )
};

export default Mentors;