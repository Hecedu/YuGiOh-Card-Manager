import React, { useState } from 'react';
import './Custom.scss';
import { games } from './Data/Games'
import SearchComponent from './Components/SearchComponent.js'
import GameListComponent from './Components/GameList/GameListComponent'
import AddGameComponent from './Components/AddGame/AddGameComponent'
import GameDetailComponent from './Components/GameDetail/GameDetailComponent'


function App() {

  const [filteredGames, setFilteredGames] = useState(games)
  const [allGames, setAllGames] = useState(games)
  const [SelectedGame, setSelectedGame] = useState(games[0])

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onFilterChange = (event) => {
    const filteredGames = allGames.filter(game => game.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredGames(filteredGames);
  }
  const removeGame = (game) => {
    console.log(game.id)
    const newGameList = allGames.filter(g => g.id != game.id)
    setAllGames(newGameList)
    setFilteredGames(newGameList)
    setSelectedGame('')
    handleClose()
    console.log(newGameList)
  }

  function onGameClick(game) {
    setSelectedGame(game)
    handleShow()
    console.log(game)
  }
  function addGame(newGame) {
    const newGameList = [...allGames, newGame]
    setAllGames(newGameList)
    setFilteredGames(newGameList);
  }

  return (
    <div className="App container my-4">
      <h1 className="d-flex justify-content-center">Hector's Game DB</h1>
      <SearchComponent onFilterChange={onFilterChange} />
      <GameListComponent games={filteredGames} onGameClick={onGameClick} />
      <AddGameComponent addGame={addGame} />
      <GameDetailComponent game={SelectedGame} show={show} onHide={handleClose} onDelete={removeGame} />
    </div>
  );
}

export default App;
