import React from 'react';
import './App.css';
import data from './data'
import Accordion from './component/Accordion'

function App() {
  return (
    <div className="App">
      <h1>Playlists</h1>
        { data.map((info) => <Accordion data={info} />)}
    </div>
  );
}

export default App;
