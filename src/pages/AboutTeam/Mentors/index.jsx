import React from "react";
import './style.css'

const Mentors = () => {
    return(
        <div className='mentors__card'>
            <div className="mentors__container">
                <h2>Naše práce s mentory</h2>
                <p className="mentors_text"></p>
                <img className="mentors_photo"
                src={require('../img/mentors1.jpg')}
                alt="Photo with mentors" />
            </div>
        </div>
    )
}

export default Mentors