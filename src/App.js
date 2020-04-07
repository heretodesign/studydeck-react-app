import React from 'react';
import './App.css'
import './normalize.css'
import {cardPreview} from './components/cardPreview'

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
         <cardPreview term="What does a dog say yea?" />
         <cardPreview term="What does a duck say yea?" />
         <cardPreview term="What does a cow say yea?" />
        </div>
      </main>
    </div>
  );
}

export default App;
