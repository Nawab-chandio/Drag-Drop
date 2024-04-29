import React from 'react';
import Cards from './components/Cards';
import Contianer from './components/Contianer';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Drag and Drop Cards</h1>
        <Contianer>
            <Cards id="card1" title="Card 1" description="Description of Card 1" draggable={true} />
            <Cards id="card2" title="Card 2" description="Description of Card 2" draggable={true} />
            <Cards id="card3" title="Card 3" description="Description of Card 3" draggable={true} />
        </Contianer>
        <Contianer>
            <Cards id="card4" title="Card 4" description="Description of Card 4" draggable={true} />
            <Cards id="card5" title="Card 5" description="Description of Card 5" draggable={true} />
            <Cards id="card6" title="Card 6" description="Description of Card 6" draggable={true} />
        </Contianer>
    </div>
);
}

export default App;
