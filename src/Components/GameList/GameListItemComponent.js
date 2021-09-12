import React from 'react'

export default function GameListItemComponent({game, onGameClick}) {
    const onClickHandler = (event) => {
        event.preventDefault()
        onGameClick(game)
    }
    return (
        <div className = "row border border-Secondary my-2"  onClick = {onClickHandler}>
            <h3 className = "p-2">{game.name}</h3>
            <p>Console: {game.console}</p>
        </div>
    );
}
