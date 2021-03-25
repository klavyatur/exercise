import React from 'react';

export default function Park({ id, url, name, descr, state }) {


  return (
    <div className="park" key={id} id={id}>
      <p>Name: <a href={url} target="_blank">{name}</a><br/>
      In: {state} <br/>
      Description: {descr}</p>    
    </div>
  );
}

