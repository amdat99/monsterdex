import React from 'react';

import './card.css'


const Card = ({monster}) => {
    return (
        <div className = 'cardContainer example'>
            <img alt='monster' src={`https://robohash.org/${monster.id}.png?set=set2&size=200x200`} />
           {monster.name} 
        </div>
    );
};

export default Card;