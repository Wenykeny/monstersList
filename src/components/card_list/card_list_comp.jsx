import React from 'react'
import './card_list.css'
import { Card } from '../card/card.comp'

export const CardList = (props) => {
    return (
        <div className='cardList'>
            { props.monsters.map(monster => ( 
                <Card key={ monster.id } monster={ monster } avatar={props.avatar} /> 
            ))}
            
        </div>
    )
}
