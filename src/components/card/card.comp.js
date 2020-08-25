import React from 'react'
import './card.styles.css'

export const Card = ({ monster, avatar }) => {
    function randomInteger(min, max) {
        if(avatar === 0) return Math.floor(Math.random() * (max - min + 1)) + min;
        return avatar
    }

    return(
        <div className='card-container'>
            <img src={`https://robohash.org/${monster.id}?set=set${randomInteger(1,5)}&size=180x180`} alt="Robo"/>
            <h2> { monster.name } </h2>
            <h5> { monster.email } </h5>
        </div>
    )
}

// This code is similar to the above arrow function
// export const card = () => {
//     return (
//         <div>
//         </div>
//     )
// }