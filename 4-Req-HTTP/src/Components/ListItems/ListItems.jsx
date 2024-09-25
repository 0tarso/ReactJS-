import React, { useEffect } from 'react'
import ItemCard from '../ItemCard/ItemCard'
import "./style.css"

const ListItems = ({ data }) => {

    useEffect(() => { console.log("montado") }, [])

    return (
        <div className='listItems-container'>
            {data &&
                data.map((item) => (
                    <ItemCard data={item} key={item.id} />
                ))
            }
        </div>
    )
}

export default ListItems