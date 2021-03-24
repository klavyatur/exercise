import React, { useEffect, useState } from 'react';
import API from '../reactAPI';

export default function DisplayDataR() {

  const [ planet, setPlanet ] = useState('');

  useEffect(() => {
    API.getAPIResponse()
    .then((res) => {
      setPlanet(res.data.name);
    })
    .catch(err => console.log('getDetails: ERROR: ', err));
  }, [])
 

  return (
    <div>Welcome to {planet}</div>
  )
}