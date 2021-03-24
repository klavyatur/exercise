import React, { useEffect, useState } from 'react';

export default function School({ id, url, name, city, state }) {

  if (url[0] !== 'w' && url[1] !== 'w') {
    let tempURL = 'www.' + url;
    url = tempURL;
  }

  if (url[0] !== 'h' && url[1] !== 't') {
    let tempURL = 'https://' + url;
    url = tempURL;
  }

  return (
    <div className="school" key={id}>
      <p>Name: <a href={url} target="_blank">{name}</a><br/>
      Location: {city}, {state}</p>
    </div>
  );
}

// let list = schools.map((el) => {
//   return <div key={el.id}>
//   <div>Name: <a href={el['school.school_url']}>{el['school.name']}</a></div>
//   <div>Location: {el['school.city']}, {el['school.state']}</div>
// </div>
// });