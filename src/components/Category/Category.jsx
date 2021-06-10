import React from 'react'
import "./Category.css"

const Category = ({ item, getJoke, setJoke }) => {
    return (
        <button onClick={() => { getJoke(item, setJoke) }} className="random-category">{item}</button>
    )
}

export default Category
