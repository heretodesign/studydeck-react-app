import React from 'react';
import './App.css'
import './normalize.css'
import CardPreview from './components/CardPreview'
import { getCards } from './services/cardServices'
import { CardForm } from './components/CardForm'

function App() {
  const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    getCards().then(setCards)
  }, [])
  
  function handleRemove(id) {
    setCards(existing => existing.filter(c => c.id !== id)) 
  }

  function handleAdd(card) {
    setCards(existing => [...existing, card])
  }

  return (
    <div>
      <header>
        <h1>Study <span className="titleHighlight">Deck</span></h1>
        <h2>Retention through repetition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        {/* <pre>{JSON.stringify(cards, null, 2)}</pre> */}
        <div className="gridContainer">
          <CardForm onSave={handleAdd} />
          {cards.map((card) => (
            <CardPreview 
              key={card.id} 
              {...card} 
              onRemove={handleRemove}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
