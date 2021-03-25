
import React, { useEffect, useState } from 'react';
import API from '../reactAPI';
import School from './School';
import Park from './Park';

export default function DisplaySchoolData() {

  const [ zip, setZip ] = useState(12345);
  const [ dist, setDist ] = useState(10)
  const [ submitClicked, setSubmitClicked ] = useState(false);
  const [ schoolList, setSchoolList ] = useState([]);
  
  const [ parksUpdated, setParksUpdated ] = useState(false);
  const [ parkState, setParkState ] = useState('NY');
  const [ parkList, setParkList ] = useState([]);

  useEffect(() => {
    API.getAPISchools(zip, dist)
    .then((res) => {
      console.log(res.data.results);
      let schools = res.data.results;
      setSchoolList(schools);
    })
    .catch(err => console.log('getDetails: ERROR: ', err));
  }, [submitClicked])
 
  useEffect(() => {
    API.getAPIParks(parkState)
    .then((res) => {
      let parks = res.data.data; 
      setParkList(parks);
      console.log('parklist', parkList);           
    })
    .catch(err => console.log('getDetails: ERROR: ', err));
  }, [parksUpdated])

  function buttonClick(e) {
    e.preventDefault();
    setSubmitClicked(!submitClicked)
  }

  function findParks(e) {
    e.preventDefault();

    let state = e.target.id;
    console.log('findparks', state)

    setParkState(state);    
    setParksUpdated(!parksUpdated)
  }

  return (
    <div className='grid'>
      <div>
        <form>
          Find schools near 
          <input 
            type='text' 
            defaultValue='12345'
            onChange={(e) => setZip(e.target.value)}
            style={{ padding: '5px', margin: '10px' }}
          /> 
          zipcode (within 
          <input 
            type='text' 
            defaultValue='10'
            onChange={(e) => setDist(e.target.value)}
            style={{ padding: '5px', margin: '10px' }}
          /> 
          miles). 
          <button type='button' onClick={buttonClick} style={{ padding: '5px', margin: '10px' }}>Search</button>
        </form>
      </div>
      <div>
        <h3>Schools:</h3>
          {schoolList.map((el) => <School 
            id={el.id}
            url={el['school.school_url']}
            name={el['school.name']}
            city={el['school.city']}
            state={el['school.state']}
            findParks={findParks}
            />)}
      </div>
      <div>
        <h3>Parks:</h3>
          {parkList.map((el) => <Park 
            id={el.id}
            url={el.url}
            name={el.name}
            descr={el.description}
            state={el.states}
          />)}
      </div>
    </div>
  )
}