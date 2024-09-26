import React from 'react'
import { useParams } from 'react-router-dom'

const Produto = () => {

    const { id } = useParams()

    return (
        <div>
            <h2>Produto de id --- {id}</h2>
        </div>
    )
}

export default Produto