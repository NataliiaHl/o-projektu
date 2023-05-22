import React, { useState } from "react";
import './style.css'

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const toggleNav = () => {
        setNavOpen(!navOpen);
    }
    return (
        <header>
            <div className="container">
                <button className="nav-btn" onClick={toggleNav}></button>
                <div className={`rollout-nav ${!navOpen ? 'nav-closed' : ''}`}>
                    <a>O projektu</a>
                    <a>O Inně</a>
                    <a>O Natali</a>
                </div>
            </div>
        </header>
    )
}

export default Header
