import React, { useEffect, useState } from 'react';

export default function School({ id, url, name, city, state, findParks }) {

  if (url[0] !== 'w' && url[1] !== 'w') {
    let tempURL = 'www.' + url;
    url = tempURL;
  }

  if (url[0] !== 'h' && url[1] !== 't') {
    let tempURL = 'https://' + url;
    url = tempURL;
  }

  return (
    <div className="school" key={id} id={id}>
      <p>Name: <a href={url} target="_blank">{name}</a><br/>
      Location: {city}, {state}</p>
      <button id={state} onClick={findParks}>Find National Parks in {state}!</button>
    </div>
  );
}
