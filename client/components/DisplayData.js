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

  // useEffect hook to get school data -- updates when 'submitClicked' is changed
  useEffect(() => {
    API.getAPISchools(zip, dist)
    .then((res) => {
      let schools = res.data.results;
      setSchoolList(schools);
      setParkState(schools[0]['school.state']);
      setParksUpdated(!parksUpdated);
    })
    .catch(err => console.log('getDetails: ERROR: ', err));
  }, [submitClicked])

 // useEffect hook to get NPS data -- updates when 'parksUpdated' is changed
  useEffect(() => {
    API.getAPIParks(parkState)
    .then((res) => {
      let parks = res.data.data; 
      setParkList(parks);    
    })
    .catch(err => console.log('getDetails: ERROR: ', err));
  }, [parksUpdated])

  // changes 'submitClicked' from true to false or false to true, triggering a 'get' request to the college scorecard API
  function buttonClick(e) {
    e.preventDefault();
    setSubmitClicked(!submitClicked)
  }

  // updates 'parkState' to match the state from the button (set by college location)
  // flips 'parksUpdated' from false to true or true to falls, triggering a 'get' request to the NPS API
  function findParks(e) {
    e.preventDefault();
    let state = e.target.id;
    setParkState(state);    
    setParksUpdated(!parksUpdated)
  }

  return (
    <div>
      <div className="searchForm">
        <form>
          Find schools near 
          <input 
            type='text' 
            defaultValue='12345'
            onChange={(e) => setZip(e.target.value)}
          /> 
          zipcode (within 
          <input 
            type='text' 
            defaultValue='10'
            onChange={(e) => setDist(e.target.value)}
          /> 
          miles). 
          <button type='button' onClick={buttonClick} style={{ padding: '5px', margin: '10px' }}>Search</button>
        </form>
      </div>
      <div className='grid'>
        <div className='school'>
        <h3>Schools:</h3>
          {schoolList.map((el) => <School 
            id={el.id}
            url={el['school.school_url']}
            name={el['school.name']}
            city={el['school.city']}
            state={el['school.state']}
            findParks={findParks}
            parkState={parkState}
            />)}
        </div>
        <div className='park'>
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
    </div>
  )
}