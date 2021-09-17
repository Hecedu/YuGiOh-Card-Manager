import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import './Custom.scss';
import { cards } from './Data/Cards'
import SearchComponent from './Components/SearchComponent.js'
import CardGridComponent from './Components/CardGrid/CardGridComponent'
import AddCardComponent from './Components/AddCard/AddCardComponent'
import CardDetailComponent from './Components/CardDetail/CardDetailComponent'


function App() {
  const [filteredCards, setFilteredCards] = useState(cards)
  const [allCards, setAllCards] = useState(cards)
  const [selectedCard, setSelectedCards] = useState(cards[0])
  const [selectedTheme, setSelectedTheme] = useState('dark')

  //modal
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const handleDetailsClose = () => setShowDetailsModal(false);
  const handleDetailsShow = () => setShowDetailsModal(true);

  const [showAddCardModal, setAddCardModal] = useState(false);
  const handleAddCardClose = () => setAddCardModal(false);
  const handleAddCardShow = () => setAddCardModal(true);

  const onFilterChange = (event) => {
    const filteredCards = allCards.filter(card => card.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredCards(filteredCards);
  }
  const removeCard = (card) => {
    const newCardList = allCards.filter(c => c.id != card.id)
    setAllCards(newCardList)
    setFilteredCards(newCardList)
    setSelectedCards('')
    handleDetailsClose()
  }
  function onCardClick(card) {
    setSelectedCards(card)
    handleDetailsShow()
  }
  function onAddCardClick() {
    handleAddCardShow()
  }
  function addCard(newCard) {
    const newCardList = [...allCards, newCard]
    setAllCards(newCardList)
    setFilteredCards(newCardList);
  }
  const onSelectThemeChange = (event) => {
    setSelectedTheme(event.target.value)
  }

  return (

    <div className="App container my-4">
      <select class="form-select" aria-label="Theme selector" onChange={onSelectThemeChange}>
        <option selected disabled>Default</option>
        <option value={'light'}>Light</option>
        <option value={'dark'}>Dark</option>
      </select>
      <div className={selectedTheme}>
        <h1 className="d-flex justify-content-center py-4">Card Collection</h1>
        <SearchComponent onFilterChange={onFilterChange} />
        <CardGridComponent cards={filteredCards} onCardClick={onCardClick} />
        <AddCardComponent addCard={addCard} show={showAddCardModal} onHide={handleAddCardClose}/>
        <CardDetailComponent card={selectedCard} show={showDetailsModal} onHide={handleDetailsClose} onDelete={removeCard} />
        <Button class="btn btn-primary" onClick={onAddCardClick}>
          Add Card
        </Button>
      </div>
    </div>
  );
}

export default App;
