import React from 'react'
import "./Header.css"

const Header = ({ logo }) => {
    return (
        <header>
            <div className="menu">
                <img src={logo} alt="logo" />
                <div className="logo-text">Chuck Norris</div>
            </div>
        </header>
    )
}

export default Header
