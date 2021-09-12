import React from 'react'
import GameListItemComponent from './GameListItemComponent';

export default function GameListComponent({games, onGameClick}) {
    return (
        <div>
            {
                games.map(c => {
                    return <div key={c.id} className="container-fluid d-flex justify-content-center text-center">
                        <GameListItemComponent game={c} onGameClick = {onGameClick}/>
                    </div>
                })
            }
        </div>
    );
}
