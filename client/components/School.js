import React, { useEffect, useState } from 'react';

export default function School({ id, url, name, city, state, findParks, parkState }) {

  let button = <></>;

  // there's inconsistent formatting in the school urls -- this checks if the url starts with a "ww" and if not, adds 'www.' to the beginning of the url
  if (url[0] !== 'w' && url[1] !== 'w') {
    let tempURL = 'www.' + url;
    url = tempURL;
  }

  // checks if there's an 'ht' at the beginning of a url, if not, adds 'https://' to the start of the url
  if (url[0] !== 'h' && url[1] !== 't') {
    let tempURL = 'https://' + url;
    url = tempURL;
  }

  // parks are displayed by state, while colleges are displayed as a distance from a given zipcode. 
  // by default, the state the parks will in will match the state of the first result for schools. 
  // if the state of the school is different from the parks list, a button will show to allow the user to search for parks in the same state as the school
  
  if (state !== parkState) {
    button = <button id={state} onClick={findParks}>Find National Parks in {state}!</button>
  } 

  return (
    <div className="school" key={id} id={id}>
      <p>Name: <a href={url} target="_blank">{name}</a></p>
      <p>Location: {city}, {state}</p>
      {button}
    </div>
  );
}
