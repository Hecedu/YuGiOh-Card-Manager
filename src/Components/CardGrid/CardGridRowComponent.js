import React from 'react'
import CardGridItemComponent from './CardGridItemComponent'

export default function CardGridRowComponent({ cards, onCardClick }) {
    return (
        <div className="row justify-content-md-center">
            {
                cards.map(c => {
                    return <CardGridItemComponent key={c.id} card={c} onCardClick={onCardClick} />
                })
            }
        </div>
    )
}
