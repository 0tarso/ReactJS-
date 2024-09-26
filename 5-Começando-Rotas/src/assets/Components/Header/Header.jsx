import React from 'react'
import { Link } from 'react-router-dom'

import "./style.css"


const Header = () => {
    return (
        <div className='div-container'>
            <header className='header-container'>
                <h2 className='header-title'>Projeto Router</h2>

                <div className='header-links-container'>
                    <Link className='header-links' to="/">Home</Link>

                    <Link className='header-links' to="/Sobre"> Sobre</Link>
                </div>
            </header>
        </div>
    )
}

export default Header