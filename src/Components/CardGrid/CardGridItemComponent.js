import React from 'react'
import '../../Custom.scss';

export default function CardGridItemComponent({ card, onCardClick }) {
    const onClickHandler = (event) => {
        event.preventDefault()
        onCardClick(card)
    }
    return (
        <div className="col-lg-3 border border-Secondary my-2" onClick={onClickHandler} >
                <div className="container-fluid text-center">
                    <h5 className="p-2">{card.name}</h5>
                    <img src={card.imageUrl} class="img-mid my-4" alt="Responsive image"></img>
                </div>
        </div>
    );
}
