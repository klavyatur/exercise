import React from 'react';

export default function Park({ id, url, name, descr, state }) {

  if (state.includes(',')) {
    let stateList = state.replace(/,/g, ', ')
    state = stateList;
  }

  return (
    <div className="park" key={id} id={id}>
      <p>Name: <a href={url} target="_blank">{name}</a><br/>
      In: {state} </p>
      <p>Description: {descr}</p>    
    </div>
  );
}

