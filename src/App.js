import React from 'react';
import Crads from './components/Crads';
import Contianer from './components/Contianer';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Drag and Drop Cards</h1>
        <Contianer>
            <Crads id="card1" title="Card 1" description="Description of Card 1" draggable={true} />
            <Crads id="card2" title="Card 2" description="Description of Card 2" draggable={true} />
            <Crads id="card3" title="Card 3" description="Description of Card 3" draggable={true} />
        </Contianer>
        <Contianer>
            <Crads id="card4" title="Card 4" description="Description of Card 4" draggable={true} />
            <Crads id="card5" title="Card 5" description="Description of Card 5" draggable={true} />
            <Crads id="card6" title="Card 6" description="Description of Card 6" draggable={true} />
        </Contianer>
    </div>
);
}

export default App;
