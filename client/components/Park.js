import React from 'react';

export default function Park({ id, url, name, descr, state }) {

  // by default, states are in a comma-separated list, which distorts the columns when there are is a park spanning a large number of states (e.g. the appalachian trail)
  // this adds spaces, which keeps the formatting intact, and looks better.
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

