import React from 'react'
import { Link } from 'react-router-dom'

const Erro = () => {
    return (
        <div style={{}}>
            <h2>Ops... Página não encontrada!</h2>

            <span>Encontramos as páginas abaixo:</span> <br />

            <Link to="/">Home</Link> <br />
            <Link to="/Sobre">Sobre</Link>
        </div>
    )
}

export default Erro