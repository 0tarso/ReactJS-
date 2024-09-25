import React from 'react'
import "./style.css"
const ItemCard = ({ data }) => {



    return (
        <article>

            <div className="title-container">

                <h2>{data.titulo}</h2>

            </div>

            <div className='img-container'>
                <img src={data.capa} />
            </div>

            <p>{data.subtitulo}</p>

            <button>Ler Mais</button>
        </article>
    )
}

export default ItemCard