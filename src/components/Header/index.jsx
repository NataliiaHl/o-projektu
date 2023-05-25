import React, { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import './style.css'

const Header = () => {
    const [navOpen, setNavOpen] = useState(false)
    const toggleNav = () => {
        setNavOpen(!navOpen);
    }
    return (
        <header>
            <div className="container">
                <div className="site-logo_container">
                    <h2 className="site-logo">FastFingers</h2>
                </div>
                <div className="navigation">
                    <button className="nav-btn" onClick={toggleNav}></button>
                    <div className={`rollout-nav ${!navOpen ? 'nav-closed' : ''}`}>

                        <Link to="/">Úvod</Link>
                        <Link to="/about_project">O projektu</Link>
                        <Link to="/about_team">Náš tým</Link>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
