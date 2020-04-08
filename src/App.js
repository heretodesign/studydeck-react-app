import React from 'react';
import './App.css'
import './normalize.css'
import CardPreview from './components/CardPreview'

function App() {
  return (
    <div>
      <header>
        <h1>Study <span className="titleHighlight">Deck</span></h1>
        <h2>Retention through repetition</h2>
      </header>
      <main>
        <h3>Your Cards</h3>
        <div className="gridContainer">
         <CardPreview definition="woof" term="What does a dog say yea?" />
         <CardPreview definition="quack" term="What does a duck say yea?" />
         <CardPreview definition="moo" term="What does a cow say yea?" />
        </div>
      </main>
    </div>
  );
}

export default App;
