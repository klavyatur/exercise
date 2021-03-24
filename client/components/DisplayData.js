import React, { useEffect, useState } from 'react';
import API from '../reactAPI';

export default function DisplayDataR() {

    useEffect(() => {
    API.getAPIResponse()
    .then((res) => {
      console.log(res.data.results);
    })
    .catch(err => console.log('getDetails: ERROR: ', err));
  }, [])
 

  return (
    <div>Welcome to </div>
  )
}