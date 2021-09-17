import React, { useEffect, useState } from 'react';
import CardGridRowComponent from './CardGridRowComponent';

export default function CardGridComponent({ cards, onCardClick }) {
    const [numberOfColumns, setNumberOfColumns] = useState(3)
    const onSelectChange = (event) => {
        setNumberOfColumns(event.target.value)
    }
    var gridCount = 0
    var cardsInRow = []

    return (
        <div className="container my-2 justify-content-center">
            <select class="form-select" aria-label="Columns Selector" onChange={onSelectChange}>
                <option selected disabled>Default</option>
                <option value={1}>Columns: 1</option>
                <option value={2}>Columns: 2</option>
                <option value={3}>Columns: 3</option>
                <option value={4}>Columns: 4</option>
            </select>
            {
                cards.map((c, i) => {
                    if (gridCount < numberOfColumns) {
                        cardsInRow = [...cardsInRow, c]
                        gridCount++
                    }
                    if (gridCount == numberOfColumns) {
                        var cardsToPrint = cardsInRow
                        cardsInRow = []
                        gridCount = 0;
                        return <CardGridRowComponent key={i} cards={cardsToPrint} onCardClick={onCardClick} />
                    }
                    if (cards.length === i + 1) {

                        var cardsToPrint = cardsInRow
                        cardsInRow = []
                        gridCount = 0;
                        return <CardGridRowComponent key={i} cards={cardsToPrint} onCardClick={onCardClick} />
                    }
                })
            }
        </div>
    );
}
