import React from 'react';
import './App.css'
import './normalize.css'
import CardPreview from './components/CardPreview'
import cardServices, { getCards } from './services/cardServices'

function App() {
  const [cards, setCards] = React.useState([])
  React.useEffect(() => {
    getCards().then(setCards)
  }, [])
     
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
          {cards.map(({id, definition, term}) => (
            <CardPreview 
              key={id} 
              definition={definition} 
              term={term}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
