import React from 'react';
import './App.css'
import './normalize.css'

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
          <div className="title">
            <h4 className="cardTerm">Term Goes Here</h4>
            <div className="cardButtons">
              <button className="tertiary" type="button">show button</button>
              <div>
                <button className="secondary" type="button">edit button</button>
                <button className="secondary danger" type="button">delete button</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
