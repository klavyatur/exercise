import React from "react";
import DisplayData from './components/DisplayData';

function App() {
  return (
    <div>
      <div className='header'>
        <p>Find colleges and universities near a given zipcode, and find national parks so you can get out into nature!</p>
      </div>
    <DisplayData />
    </div>
  );
}

export default App;
