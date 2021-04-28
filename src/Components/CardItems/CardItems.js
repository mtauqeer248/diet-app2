import React from 'react'
import './CardItems.css';
//import { CardImg, CardName, CardDesc, CardButton } from './CardData';
function CardItems({ Heading, data }) {
    return (
        <div className="card-container">
            <div className="Heading">
                {Heading}
            </div>
            <div className="card-wrapper">
                {data.map((card, index) => {
                    return(
                    <div className="card" key={index}>
                    <div className="card-info">
                        <img src={card.img} alt={card.alt} />
                        <h1 className="card-heading">{card.name}</h1>
                        <p className="card-desc">{card.desc}</p>
                        <button className="card-button">{card.button}</button>
                        </div>
                    </div>
                    )
                })}
            </div>



        </div>
    )
}

export default CardItems
