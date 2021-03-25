import React from "react";
import DisplayData from './components/DisplayData';
// import DisplayNPSData from './components/DisplayNPSData';

function App() {
  return (
    <div>
      <div className='header'>
        <p>Find colleges and universities near a given zipcode, and find out what national parks are in the same state as well!</p>
      </div>
    <DisplayData />
    </div>
  );
}

export default App;
