import React, { useState } from "react";
import "./App.css";
import Box from './components/box/box.js';


function App() {
  const [index, setIndex] = useState(1);

  function moveCard(i) {
    setIndex(i);
  }

  return (
    <div className="app">
      <Box card={index === 1} moveCard={()=> moveCard(1)}></Box>
      <Box card={index === 2} moveCard={()=> moveCard(2)}></Box>
      <Box card={index === 3} moveCard={()=> moveCard(3)}></Box>
    </div>
  );
}

export default App;

