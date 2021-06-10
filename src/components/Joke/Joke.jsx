import React from 'react'
import "./Joke.css";

const Joke = ({joke}) => {
    return (
        <div className="block-joke">
            <p>{joke}</p>
        </div>
    )
}

export default Joke